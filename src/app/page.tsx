import PostLargeCard from "@/components/PostLargeCard";
import PostMiniCard from "@/components/PostMiniCard";
import { get } from "@/utilities/useFetch";

export default async function Home() {
  const posts: postT[] = await get("/posts");

  return (
    <div className=" flex h-full ">
      <div className=" flex-grow h-full overflow-y-scroll p-4 space-y-6">
        {posts.map((post) => (
          <div key={post.id}>
            <PostLargeCard
              path={`/post/${post.id}`}
              title={post.title}
              body={post.body}
              image="/user1.jpg"
              postId={post.id}
            />
          </div>
        ))}
      </div>
      <div className=" hidden h-full w-[350px] p-2 rounded-t-md bg-slate-950 lg:block ">
        <div className=" bg-slate-900 rounded-lg h-full overflow-y-scroll">
          <h2 className=" bg-slate-950 sticky top-0 p-4">
            New Post From Followers
          </h2>
          <div className=" p-6 space-y-6">
            <div>
              <PostMiniCard
                title="Thank you for using our services. We offer you nothingddddddddd but the
        best."
                image="/user1.jpg"
                path="/"
              />
            </div>
            <div>
              <PostMiniCard
                title="Thank you for using our services. We offer you nothingddddddddd but the
        best."
                image="/user1.jpg"
                path="/"
              />
            </div>
            <div>
              <PostMiniCard
                title="Thank you for using our services. We offer you nothingddddddddd but the
        best."
                image="/user1.jpg"
                path="/"
              />
            </div>
            <div>
              <PostMiniCard
                title="Thank you for using our services. We offer you nothingddddddddd but the
        best."
                image="/user1.jpg"
                path="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
