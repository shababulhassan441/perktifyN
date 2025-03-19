"use server";

import { createAdminClient } from "@/appwrite/config";
import { ID, Query } from "node-appwrite";
import { Resend } from "resend";
import { generateReferralCode } from "./utils";
import { redirect } from "next/navigation";
import { welcomeEmailTemplate } from "@/appwrite/data";

import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";
import stripe from "./stripe";

export async function sendmail(email, name, password) {
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
      <p><a href="https://storekwil-dashboard.netlify.app/" target="_blank">${linkText}</a></p>
      <p>${reachOut || ""}</p>
      <p>${regard1 || ""}</p>
      <p>${regard2 || ""}</p>
    `,
  });
}

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 587, // Use 465 for SSL, or 587 for TLS
  secure: false, // Set to true if using port 465
  auth: {
    user: "auth@mailing.perktify.com", // Your email
    pass: "67bb2c31f0ce5c2d883028d1", // Your email password or app password
  },
});

export async function sendMail2(email, name, password) {
  console.log("sending...")
  const data = await welcomeEmailTemplate();
  const { heading, congratsText, para, linkText, reachOut, regard1, regard2 } =
    data.emailTemplateData;
  const htmlContent = `
      <h1>${heading || ""}</h1>
      <p>${congratsText || ""}</p>
      <p>${para || ""}</p>
      <ul>
        <li><strong>Email:</strong>${email}</li>
        <li><strong>Name:</strong>${name}</li>
        <li><strong>Password:</strong>${password}</li>
      </ul>
      <p><a href="https://storekwil-dashboard.netlify.app/" target="_blank">${linkText}</a></p>
      <p>${reachOut || ""}</p>
      <p>${regard1 || ""}</p>
      <p>${regard2 || ""}</p>
    `;

  try {
    await transporter.sendMail({
      from: `"Perktify" <auth@mailing.perktify.com>`, // Your verified domain email
      to: "mrdesigner265@gmail.com",
      subject: `Welcome to Perktify`,
      html: htmlContent,
    });
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function BuyPerktify(formData) {
  const data = Object.fromEntries(formData);
  const { name, email, company } = data;
  console.log("running stripe...");
  let session;
  const customerID = ID.unique();
  try {
    session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount_decimal: 10000,
            product_data: {
              name: "perktify Portal",
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
  const { userId, name, email } = data;

  const password = generateReferralCode(name) + "_test";

  try {
    const { users } = await createAdminClient();

    // Create a new auth user in Appwrite
    const newUser = await users.create(userId, email, null, password, name);

    // Set user preferences/labels (optional)

    await users.updatePrefs(newUser.$id, { role: "user" });

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




