import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <h1 className="my-6 text-4xl font-bold text-center text-black">Hi</h1>
    </main>
  );
}
