// api/updateInstagramPosts.ts

import { NextApiRequest, NextApiResponse } from "next";
import { clientWithWriteToken as client } from "../../../lib/sanity.client";

const INSTAGRAM_KEY = process.env.NEXT_PUBLIC_INSTAGRAM_KEY;

export default async function updateInstagramPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed. Use GET." });
    return;
  }

  const existingPosts = await client.fetch(`
    *[ _type == "instagramPost" ] {
      _id,
      instagramId
    }
  `);

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,media_url,timestamp&access_token=${INSTAGRAM_KEY}`;
    const resInstagram = await fetch(url);
    const data = await resInstagram.json();
    if (!data || !data.data) {
      console.error(
        "Error: Instagram API returned an unexpected response",
        data
      );
      return;
    }

    const transaction = client.transaction();

    for (const post of data.data) {
      const existingPost = existingPosts.find(
        (p: any) => p.instagramId === post.id
      );

      if (existingPost) {
        transaction.patch(existingPost._id).set({
          mediaUrl: post.media_url,
          timestamp: post.timestamp,
        });
      } else {
        const newPost = {
          _type: "instagramPost",
          instagramId: post.id,
          mediaUrl: post.media_url,
          timestamp: post.timestamp,
          articleLink: "https://www.nordkurier.de/",
        };

        transaction.create(newPost);
      }
    }

    await transaction.commit();
    res.status(200).json({ message: "Instagram posts updated successfully." });
  } catch (error) {
    console.error("Error fetching Instagram posts", error);
    res.status(500).json({ message: "Internal server error." });
  }
}
