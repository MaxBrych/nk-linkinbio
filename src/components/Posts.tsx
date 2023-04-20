import { usePost } from "./usePosts";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function Post() {
  const { data, isLoading, isError } = usePost();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div className="flex items-center justify-center w-full px-4 md:px-0">
      <div className="max-w-screen-md">
        <div className="flex flex-col items-center my-8">
          <Image
            src={
              "https://cdn.discordapp.com/attachments/911669935363752026/1098491331262824511/Frame_364.png"
            }
            alt="nordkurier logo"
            className="rounded-full"
            width={96}
            height={96}
          />
          <h2 className="mt-4 font-sans text-xl font-semibold text-black">
            Nordkurier
          </h2>
          <p className="mt-2 font-sans text-center text-gray-700">
            Flagge zeigen. Auch in unseren Artikel.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-1 md:gap-2">
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
              <div className="absolute bg-gray-700 bg-opacity-50 rounded-full top-1 right-1 md:top-2 md:right-2">
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
