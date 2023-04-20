import { useState } from "react";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

import { clientWithWriteToken as client } from "../../lib/sanity.client";

const INSTAGRAM_KEY = process.env.NEXT_PUBLIC_INSTAGRAM_KEY;

function StudioNavbar(props: any) {
  const [importing, setImporting] = useState(false);

  const handleImport = async () => {
    setImporting(true);
    await fetchInstagramPosts();
    setImporting(false);
  };

  const fetchInstagramPosts = async () => {
    const existingPosts = await client.fetch(`
      *[ _type == "instagramPost" ] {
        instagramId
      }
    `);
    try {
      const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=${INSTAGRAM_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      const newPosts = data.data.filter(
        (post: any) =>
          !existingPosts.some((p: any) => p.instagramId === post.id)
      );
      const documents = newPosts.map((post: any) => ({
        _type: "instagramPost",
        instagramId: post.id,
        mediaType: post.media_type,
        mediaUrl: post.media_url,
        username: post.username,
        timestamp: post.timestamp,
        articleLink: "https://www.nordkurier.de/", // set a default value
      }));
      console.log(documents);

      // Create a transaction for creating all the new documents
      const transaction = client.transaction();
      documents.forEach((doc: any) => {
        transaction.create(doc);
      });

      // Commit the transaction
      await transaction.commit();
    } catch (error) {
      console.error("Error fetching Instagram posts", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between p-5 text-white bg-black">
        <Link href="/" className="flex items-center">
          <FaChevronLeft className="w-5 h-5 mr-2 hover:bg-slate-900 hover:rounded-full " />
          Zur Website
        </Link>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
          onClick={handleImport}
          disabled={importing}
        >
          {importing ? "Importing..." : "Import Instagram Posts"}
        </button>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
