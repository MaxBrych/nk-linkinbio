import { useState } from "react";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

import axios from "axios";
import { client } from "../../lib/sanity.client";

function StudioNavbar(props: any) {
  const [importing, setImporting] = useState(false);

  const handleImport = async () => {
    setImporting(true);
    await fetchInstagramPosts();
    setImporting(false);
  };

  const fetchInstagramPosts = async () => {
    const existingPosts = await client.fetch(`
      *[_type == "instagramPost"] {
        id
      }
    `);

    const { data } = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=${process.env.INSTAGRAM_KEY}`
    );

    const newPosts = data.data.filter(
      (post: any) => !existingPosts.some((p: any) => p.id === post.id)
    );

    const documents = newPosts.map((post: any) => ({
      _type: "instagramPost",
      id: post.id,
      caption: post.caption,
      mediaType: post.media_type,
      mediaUrl: post.media_url,
      permalink: post.permalink,
      thumbnailUrl: post.thumbnail_url,
    }));

    await client.create(documents);
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
