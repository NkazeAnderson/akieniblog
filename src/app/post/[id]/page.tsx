import Avatar from "@/components/Avatar";
import PostLargeCard from "@/components/PostLargeCard";
import { get } from "@/utilities/useFetch";

export default async function Post({ params }: { params: { id: number } }) {
  const post: postT = await get(`/posts/${params.id}`);
  const user: userT = await get(`/users/${post.userId}`);
  return (
    <div className=" flex h-full">
      <div className=" flex-grow h-full overflow-y-scroll p-4 space-y-6">
        <div>
          <PostLargeCard
            path="/"
            postId={post.id}
            title={post.title}
            body={post.body}
            image="/user1.jpg"
            full
          />
        </div>
      </div>
      <div className=" hidden h-full w-[350px] p-2 rounded-t-md bg-slate-950 lg:block ">
        <div className=" bg-slate-900 rounded-lg h-full overflow-y-scroll">
          <h2 className=" bg-slate-950 sticky top-0 p-4">Posted By</h2>
          <div className=" p-6 space-y-6">
            <div className="w-full flex flex-col items-center space-y-4">
              <Avatar path="/user2.jpeg" />
              <h5>{user.name}</h5>
            </div>
            <div>
              <h5>Email</h5>
              <p>{user.email}</p>
            </div>
            <div>
              <h5>Phone</h5>
              <p>{user.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
