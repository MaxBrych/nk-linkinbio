import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const sanityWriteToken = process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const clientWithWriteToken = createClient({
  projectId,
  dataset,
  apiVersion,
  token: sanityWriteToken,
  useCdn: false,
});
