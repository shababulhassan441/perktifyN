import { ID } from "node-appwrite";

export function generateReferralCode(firstName) {
    const initials = firstName.slice(0, 4).toUpperCase(); // Get up to 4 initials from the first name
    const randomNumber = ID.unique(); // Generate a random 16-character string
    const digits = randomNumber.replace(/\D/g, '').slice(0, 4); // Extract up to 4 digits from the random string
  
    // Ensure the referral code is exactly 8 characters long
    const paddedDigits = digits.padEnd(4, '0'); // Pad with zeros if less than 4 digits
    return (initials + paddedDigits).slice(0, 8); // Combine and trim to 8 characters
  }