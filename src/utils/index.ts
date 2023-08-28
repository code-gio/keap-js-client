import axios, { AxiosResponse } from "axios";

interface ApiConfig {
  baseURL: string;
  headers?: {
    "X-Keap-API-Key": string;
  };
}

/**
 * API key variable that will be set by the user
 */
let apiKey: string | null = null;

/**
 * Set the API Key
 * @param key - The API key for authentication
 */
const setApiKey = (key: string): void => {
  apiKey = key;
};

/**
 * Common Axios Configuration
 */
const commonConfig: ApiConfig = {
  baseURL: "https://api.infusionsoft.com/crm/rest/",
};

/**
 * Make an API call
 *
 * @param method - HTTP method
 * @param url - URL of the resource
 * @param data - Data payload for methods like POST, PUT (optional)
 * @returns A Promise that resolves to the response data or undefined if an error occurs
 * @throws Will throw an error if no API key is provided
 */
const makeApiCall = async (
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?: object
): Promise<object | undefined> => {
  if (!apiKey) {
    throw new Error("No API key was provided. Please set the API key first.");
  }

  const config: ApiConfig & { method: string; url: string; data?: object } = {
    ...commonConfig,
    headers: {
      "X-Keap-API-Key": apiKey,
    },
    method,
    url,
    data,
  };

  try {
    const response: AxiosResponse = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export { setApiKey, makeApiCall };
