import {
  createAdminClient,
  createLoyalityRewardClient,
} from "@/appwrite/config";
import { createNewPerktifyUser } from "@/lib/actions";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { ID } from "node-appwrite";

export async function POST(req) {
  const body = await req.text();

  const signature = headers().get("Stripe-Signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return new Response("webhook error; Signature Donot Matched", {
      status: 400,
    });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;

      const CustomerID = session.metadata?.CustomerID;
      const CustomerName = session.metadata?.CustomerName;
      const CustomerEmail = session.metadata?.CustomerEmail;
      const CustomerCompanyName = session.metadata?.CustomerCompanyName;
      const CustomerPackagePrice = session.metadata?.ProductPrice;

      const dbId = CustomerID;
      const campaigns = ID.unique();
      const leads = ID.unique();
      const queries = ID.unique();
      const rewards = ID.unique();
      const tiers = ID.unique();
      const transactions = ID.unique();
      const userPoints = ID.unique();
      const users = ID.unique();

      const { databases } = await createLoyalityRewardClient();
      console.log("Databases initialized:");
      if (CustomerID) {
    
       
          const formData = new FormData();
          formData.append("userId", CustomerID);
          formData.append("name", CustomerName);
          formData.append("email", CustomerEmail);
          formData.append("company", CustomerCompanyName);
          formData.append("dbId", dbId);
          formData.append("campaigns", campaigns);
          formData.append("leads", leads);
          formData.append("queries", queries);
          formData.append("rewards", rewards);
          formData.append("tiers", tiers);
          formData.append("transactions", transactions);
          formData.append("userPoints", userPoints);
          formData.append("Users", users);
  
             // Step : Create Auth User in Appwrite after payment
             console.log(`Creating Appwrite user for ${CustomerEmail}...`);
          const userResponse = await createNewPerktifyUser(formData);
  
          if (userResponse.type === "success") {
            console.log(`User ${CustomerName} created successfully in Appwrite.`);
          } else {
            console.error(
              "Failed to create Appwrite user:",
              userResponse.message
            );
          }

        //create data for subscriber
        console.log(`Generating Subscribers... `);
        await databases.createDocument(
          process.env.NEXT_PUBLIC_LOYALITY_REWARD_SUBSCRIPTIONS_DATABASE_ID,
          process.env.NEXT_PUBLIC_LOYALITY_REWARD_SUBSCRIBERS_COLLECTION_ID,
          CustomerID,
          {
            name: CustomerName,
            email: CustomerEmail,
            company: CustomerCompanyName,
            paymentStatus: session.payment_status === "paid",
            Amount: parseInt(CustomerPackagePrice),
            db_id: dbId,
            campaigns: campaigns,
            leads: leads,
            queries: queries,
            rewards: rewards,
            tiers: tiers,
            transactions: transactions,
            userPoints: userPoints,
            Users: users,
          }
        );
        console.log(`Subscribers genrated ... `);

      } else {
        console.log("CustomerID missing ");
      }

      break;
    }
    default: {
      console.log("unhandled event", event.type);
    }
  }

  return new Response(null, { status: 200 });
}
