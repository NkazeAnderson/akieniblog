import { get } from "@/utilities/useFetch";
import React from "react";
import IconButton from "./IconButton";
import Avatar from "./Avatar";

function Comment({
  image,
  author,
  message,
}: {
  image: string;
  author: string;
  message: string;
}) {
  return (
    <div className="flex space-x-4 py-4">
      <div>
        <Avatar path={image} />
      </div>

      <div>
        <p className="font-bold">{author}</p>
        <p className="">{message}</p>
      </div>
    </div>
  );
}

async function Comments({ postId }: { postId: number }) {
  const comments: commentT[] = await get(`/post/${postId}/comments`);
  return (
    <div>
      <div className=" bg-slate-900 p-4">
        <h2>Comments</h2>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            message={comment.body}
            author={comment.name}
            image="/user1.jpg"
          />
        ))}
        <form action="">
          <div className="flex space-x-2">
            <input className="h-full p-5 text-black flex-grow" type="text" />
            <button type="submit">
              <IconButton type="submit" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comments;
