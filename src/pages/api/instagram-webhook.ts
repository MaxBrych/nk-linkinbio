import type { NextApiRequest, NextApiResponse } from "next";
import create from "@sanity/client";
import { InstagramPost } from "../../../d.types";

const client = create({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const post: InstagramPost = req.body;

    // Create a new document in Sanity Studio
    const newPost = {
      _type: "instagramPost",
      _id: post.id,
      mediaType: post.mediaType,
      mediaUrl: post.mediaUrl,
      username: post.username,
      timestamp: post.timestamp,
    };

    // Create the document in Sanity Studio
    const result = await client.create(newPost);

    res
      .status(200)
      .json({ message: "New Instagram post created in Sanity Studio." });
  } else {
    res.status(404).json({ message: "Not found." });
  }
}
