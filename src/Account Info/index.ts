import { makeApiCall } from "../utils";

/**
 * ContactAddress Interface
 *
 * @property {string} country_code - The country code
 * @property {string} field - The type of address (e.g., "BILLING")
 * @property {string} line1 - The first line of the address
 * @property {string} line2 - The second line of the address
 * @property {string} locality - The locality/city of the address
 * @property {string} postal_code - The postal code
 * @property {string} region - The region/state of the address
 * @property {string} zip_code - The zip code
 * @property {string} zip_four - The extended 4-digit zip code
 */
interface ContactAddress {
  country_code: string;
  field: string;
  line1: string;
  line2: string;
  locality: string;
  postal_code: string;
  region: string;
  zip_code: string;
  zip_four: string;
}

/**
 * AccountProfile Interface
 *
 * @property {ContactAddress} address - The contact address
 * @property {string[]} business_goals - The goals of the business (e.g., "Grow Business")
 * @property {string} business_primary_color - The primary color for the business
 * @property {string} business_secondary_color - The secondary color for the business
 * @property {string} business_type - The type of business
 * @property {string} currency_code - The currency code (e.g., "USD")
 * @property {string} email - The email address
 * @property {string} language_tag - The language tag (e.g., "en-US")
 * @property {string} logo_url - The URL for the business logo
 * @property {string} name - The name of the account or business
 * @property {string} phone - The primary phone number
 * @property {string} phone_ext - The phone extension, if applicable
 * @property {string} time_zone - The time zone
 * @property {string} website - The website URL
 */
interface AccountProfile {
  address: ContactAddress;
  business_goals: string[];
  business_primary_color: string;
  business_secondary_color: string;
  business_type: string;
  currency_code: string;
  email: string;
  language_tag: string;
  logo_url: string;
  name: string;
  phone: string;
  phone_ext: string;
  time_zone: string;
  website: string;
}

/**
 * Retrieve Account Profile
 *
 * Retrieves profile/company info for an account.
 *
 * @returns A Promise that resolves to the AccountProfile object, or undefined if an error occurs
 * @throws Will throw an error if no API key is provided
 */
export async function retrieveAccountProfile(): Promise<
  AccountProfile | undefined
> {
  return makeApiCall("get", "v1/account/profile") as Promise<
    AccountProfile | undefined
  >;
}

export async function updateAccountProfile(
  accountInfo: AccountProfile
): Promise<AccountProfile | undefined> {
  return makeApiCall("put", "v1/account/profile", accountInfo) as Promise<
    AccountProfile | undefined
  >;
}
