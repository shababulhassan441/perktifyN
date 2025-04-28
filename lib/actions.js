"use server";

import { createLoyalityRewardClient } from "@/appwrite/config";
import { ID, Query } from "node-appwrite";
import { Resend } from "resend";
import { generateReferralCode } from "./utils";
import { redirect } from "next/navigation";
import { fetchData, welcomeEmailTemplate } from "@/appwrite/data";
import { stripe } from "./stripe";
import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";

export async function sendmail(email, name, password) {
  console.log("sendmail is running from here...")
  const resend = new Resend("re_CMTPfwL3_6L7GpSnu7bke9EgJgu5KffQQ");
  const data = await welcomeEmailTemplate();
  const { heading, congratsText, para, linkText, reachOut, regard1, regard2 } =
    data.emailTemplateData;
  resend.emails.send({
    from: "customer@shabab.site",
    to: email,
    subject: `Welcome to Perktify`,
    html: `
      <h1>${heading || ""}</h1>
      <p>${congratsText || ""}</p>
      <p>${para || ""}</p>
      <ul>
        <li><strong>Email:</strong>${email}</li>
        <li><strong>Name:</strong>${name}</li>
        <li><strong>Password:</strong>${password}</li>
      </ul>
      <p><a href="https://app.perktify.com/login" target="_blank">${linkText}</a></p>
      <p>${reachOut || ""}</p>
      <p>${regard1 || ""}</p>
      <p>${regard2 || ""}</p>
    `,
  });
}

export async function BuyPerktify(formData) {
  const data = Object.fromEntries(formData);
  const { name, email, company, pricingPackageId } = data;
  const Packagesdata = await fetchData();
  const PricingPackages = Packagesdata.PricingCards;
  const packageDetails = PricingPackages.find(
    (pkg) => pkg.$id === pricingPackageId
  );
  console.log("running stripe...");
  let session;
  const customerID = ID.unique();
  try {
    session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount_decimal: packageDetails?.price * 100,
            product_data: {
              name: packageDetails?.title,
              description: packageDetails?.subtitle,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        CustomerID: customerID,
        CustomerName: name,
        CustomerEmail: email,
        CustomerCompanyName: company,
        ProductPrice: packageDetails?.price,
      },
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/stripe/payment/${customerID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
    });
  } catch (error) {
    console.log(error);
    return { message: error?.message };
  }

  revalidatePath("/", "layout");
  return redirect(session.url);
}

export async function createNewPerktifyUser(formData) {
  const data = Object.fromEntries(formData);
  const {
    userId,
    name,
    email,
    company,
    dbId,
    campaigns,
    leads,
    queries,
    rewards,
    tiers,
    transactions,
    userPoints,
    Users,
  } = data;

  const password = generateReferralCode(name) + company;

  try {
    const { users } = await createLoyalityRewardClient();

    // Create a new auth user in Appwrite
    const newUser = await users.create(userId, email, null, password, name);

    await users.updateEmailVerification(newUser.$id, true); // force verify

    // update MFA of the user
    await users.updateMfa(
      newUser.$id, // userId
      true
    );
    // Set user preferences using updatePrefs
    const userPrefs = {
      company,
      dbId,
      campaigns,
      leads,
      queries,
      rewards,
      tiers,
      transactions,
      userPoints,
      Users,
    };

    // Update the user's preferences
    await users.updatePrefs(newUser.$id, userPrefs);
    console.log("User preferences updated:");

    await users.updateLabels(newUser.$id, ["admin"]);
    console.log("password for the", newUser.name, "is this ", newUser.password);
    await sendmail(email, name, password);

    return {
      message: newUser.$id,
      type: "success",
      regType: "perktify",
    };
  } catch (error) {
    return { message: `${error?.message}`, type: "error" };
  }
}
