import { usePost } from "./usePosts";
import Link from "next/link";

interface PostProps {}

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
          <img
            className="w-24 h-24 rounded-full"
            src="https://cdn.discordapp.com/attachments/911669935363752026/1098491331262824511/Frame_364.png"
            alt="Profile Picture"
          />
          <h2 className="mt-4 text-xl font-semibold">Nordkurier</h2>
          <p className="mt-2 text-center text-gray-700">
            Flagge zeigen. Auch in unseren Artikel.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {data.map((post: any) => (
            <div
              key={post.instagramId}
              className="overflow-hidden border border-gray-300 rounded-md"
            >
              <Link href={post.articleLink}>
                <a>
                  <img className="w-full" src={post.mediaUrl} alt={post.name} />
                </a>
              </Link>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{post.name}</h2>
                <p className="text-gray-700">{post.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
