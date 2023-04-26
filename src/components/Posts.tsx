import { usePost } from "./usePosts";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { useCallback, useState } from "react";
import Dropdown from "./Dropdown";

export default function Post() {
  const { data, isLoading, isError } = usePost();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (isLoading) {
    return <div>Läd...</div>;
  }

  if (isError) {
    return <div>Fehler: {isError.message}</div>;
  }

  return (
    <div className="flex items-center justify-center w-full transition-all duration-150">
      <div className="max-w-screen-md pt-4">
        <div className="flex flex-col items-center my-4">
          <Image
            src={
              "https://cdn.discordapp.com/attachments/911669935363752026/1098491331262824511/Frame_364.png"
            }
            alt="nordkurier logo"
            className="rounded-full"
            width={64}
            height={64}
          />
          <h2 className="mt-2 text-base font-bold text-black">Nordkurier</h2>
          <p className="mb-3 text-sm text-center text-gray-700 ">
            Hier gibt es Neuigkeiten aus dem Nordosten
          </p>

          <Dropdown setOpen={setDropdownOpen} />
        </div>
        <div className="relative z-10 grid grid-cols-3 gap-[2px] md:gap-2">
          {data.map((post: any) => (
            <div key={post.instagramId} className="relative overflow-hidden">
              <Link href={post.articleLink || "#"}>
                <div className="relative w-full pb-full">
                  <img
                    className="object-cover w-full h-full"
                    src={post.mediaUrl}
                    alt={post.name}
                  />
                </div>
              </Link>
              <div className="absolute text-white bg-gray-700 bg-opacity-50 rounded-full top-1 right-1 md:top-2 md:right-2">
                <FiExternalLink
                  className="w-5 h-5 p-1 md:w-6 md:h-6"
                  size={24}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
