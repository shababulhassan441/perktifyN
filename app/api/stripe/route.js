import { createAdminClient } from "@/appwrite/config";
import { createNewPerktifyUser } from "@/lib/actions";
import stripe from "@/lib/stripe";

import { headers } from "next/headers";


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

      const { databases } = await createAdminClient();

      if (CustomerID) {
        console.log(`Generating Customer... `);
        await databases.createDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_CUSTOMERS,
          CustomerID,
          {
            name: CustomerName,
            email: CustomerEmail,
            company: CustomerCompanyName,
            paymentStatus: session.payment_status === "paid",
            Amount: parseInt("10000"),
          }
        );

        // Step 2: Create Auth User in Appwrite after payment
        console.log(`Creating Appwrite user for ${CustomerEmail}...`);
        const formData = new FormData();
        formData.append("userId", CustomerID);
        formData.append("name", CustomerName);
        formData.append("email", CustomerEmail);

        const userResponse = await createNewPerktifyUser(formData);

        if (userResponse.type === "success") {
          console.log(`User ${CustomerName} created successfully in Appwrite.`);
        } else {
          console.error("Failed to create Appwrite user:", userResponse.message);
        }

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
