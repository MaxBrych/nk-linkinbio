import create from "@sanity/client";
import { GetStaticProps } from "next";
import { InstagramPost } from "../../d.types";
import Posts from "@/components/Posts";
import StudioNavbar from "@/components/StudioNavbar";
import { Nunito } from "@next/font/google";

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
