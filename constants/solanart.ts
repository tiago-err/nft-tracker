/**
 * Solanart's API base URL
 */
export const BASE_URL = "https://qzlsklfacc.medianetwork.cloud";

/**
 * Solanart's API URL to retrieve a list of collections
 */
export const COLLECTIONS_URL = `${BASE_URL}/get_collections`;

/**
 * A function to get the API URL to retrieve a collection's information
 * @param collection the collection url provided by Solanart when using the CONNECTIONS_URL endpoint
 * @returns the URL for the endpoint to get a collection's information
 */
export const COLLECTION_URL = (collection: string) => `${BASE_URL}/get_collection_url?url=${collection}`;

/**
 * A function to get the API URL to retrieve a collection's NFT
 * @param collection the collection url provided by Solanart when using the CONNECTIONS_URL endpoint
 * @returns the URL for the endpoint to get a collection's current NFT for sale
 */
export const COLLECTION_NFT_SALE = (collection: string) => `${BASE_URL}/nft_for_sale?collection=${collection}`;
