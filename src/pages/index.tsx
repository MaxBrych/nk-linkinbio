import create from "@sanity/client";
import { GetStaticProps } from "next";
import { InstagramPost } from "../../d.types";
import Posts from "@/components/Posts";
import StudioNavbar from "@/components/StudioNavbar";

type Props = {
  posts: InstagramPost[];
};

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Posts />
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      posts: data.data,
    },
  };
};
