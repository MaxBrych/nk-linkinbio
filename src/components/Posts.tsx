import { usePost } from "./usePosts";
import { InstagramPost } from "../../d.types";
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
    <div className="flex items-center justify-center w-full">
      {data.map((post: any) => (
        <div key={post.name} className="grid max-w-4xl grid-cols-2 px-16">
          <h2>{post.name}</h2>
          <p>{post.username}</p>
          <Link href={post.articleLink}>
            <img className="w-full" src={post.mediaUrl} alt={post.name} />
          </Link>
        </div>
      ))}
    </div>
  );
}
