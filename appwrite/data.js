import { createAdminClient, createLoyalityRewardClient } from "@/appwrite/config";
import { ID, Query } from "node-appwrite";

export async function fetchData() {
  try {
    const { databases } = await createAdminClient();

    const [
      hero,
      intro,
      whyhead,
      chooseCards,
      // footer,
      keyfeaturesHead,
      keyfeaturesCards,
      stickyLinks,
      blogsPage,
      blogCards,
      recentBlogs,
      faqAccordians,
      pricingCards,
      Legals,
    ] = await Promise.all([
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_HERO
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_INTRODUCTION
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_WHYCHOOSEUS
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_WHYCHOOSEUS_CARDS
      ),
      // databases.listDocuments(
      //   process.env.NEXT_PUBLIC_DATABASE_ID,
      //   process.env.NEXT_PUBLIC_COLLECTION_ID_WAITLIST_CONTENT
      // ),
      // databases.listDocuments(
      //   process.env.NEXT_PUBLIC_DATABASE_ID,
      //   process.env.NEXT_PUBLIC_COLLECTION_ID_FOOTER
      // ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_KEYFEATURES
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_KEYFEATURES_CARDS
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_STICKY_LINKS
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_BLOGSPAGE
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_BLOGCARDS,
        [
          Query.orderDesc("$createdAt"), // Sort by creation date (descending)
        ]
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_BLOGCARDS,
        [
          Query.orderDesc("$createdAt"), // Sort by creation date (descending)
          Query.limit(5), // Limit to 2 results
        ]
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_FAQ,
        [
          Query.orderAsc("$createdAt"), // Sort by creation date (descending)
        ]
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_PRICING_CARDS
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_LEGALS
      ),
    ]);

    const HeroContent = hero.documents[0] || {};
    const IntroductionData = intro.documents[0] || {};
    const WhyHead = whyhead.documents[0] || {};
    const whyCards = chooseCards.documents || {};
    // const footerData = footer.documents[0] || {};
    const keyfeaturesHeadData = keyfeaturesHead.documents[0] || {};
    const keyfeaturesCardsData = keyfeaturesCards.documents || {};
    const stickyLinksUrl = stickyLinks.documents[0] || {};
    const blogPageData = blogsPage.documents[0] || {};
    const blogCardsData = blogCards.documents || {};
    const RecentBlogs = recentBlogs.documents || [];
    const faqData = faqAccordians.documents || [];
    const PricingCards = pricingCards.documents || [];
    const LegalsData = Legals.documents || [];
    return {
      HeroContent,
      IntroductionData,
      WhyHead,
      whyCards,
      // footerData,
      keyfeaturesHeadData,
      keyfeaturesCardsData,
      stickyLinksUrl,
      blogPageData,
      blogCardsData,
      RecentBlogs,
      faqData,
      PricingCards,
      LegalsData,
    };
  } catch (error) {
    console.error("error in fetching data from appwrite:", error);
  }
}

export async function fetchheaderFooter() {
  try {
    const { databases } = await createAdminClient();

    const [footer] = await Promise.all([
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_FOOTER
      ),
      // databases.listDocuments(
      //   process.env.NEXT_PUBLIC_DATABASE_ID,
      //   process.env.NEXT_PUBLIC_COLLECTION_ID_HEADER
      // ),
    ]);

    // const headerData = header.documents[0] || {};
    const footerData = footer.documents[0] || {};
    // const headerData = header.documents[0] || {};

    return {
      footerData,
      // headerData,
    };
  } catch (error) {
    console.error("fetchCardData:", error);
  }
}

export async function welcomeEmailTemplate() {
  try {
    const { databases } = await createAdminClient();
    const [emailTempate] = await Promise.all([
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_WELCOME_EMAIL_TEMPLATE
      ),
    ]);

    const emailTemplateData = emailTempate.documents[0] || {};

    return {
      emailTemplateData,
    };
  } catch (error) {
    console.error("error in fetching emailtempalte Data:", error);
  }
}

export async function fetchCustomer(customerID) {
  try {
    const { databases } = await createLoyalityRewardClient();

    const response = await databases.getDocument(
      process.env.NEXT_PUBLIC_LOYALITY_REWARD_SUBSCRIPTIONS_DATABASE_ID,
      process.env.NEXT_PUBLIC_LOYALITY_REWARD_SUBSCRIBERS_COLLECTION_ID,
      customerID
    );
    return response;
  } catch (error) {
    console.error("ERROR in customerdetail", error);
    return null;
  }
}
