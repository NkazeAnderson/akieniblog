import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import PostInteraction from "./PostInteraction";
import Comments from "./Comments";

function Content({
  title,
  image,
  body,
  full,
  postId,
}: {
  title: string;
  image: string;
  body: string;
  postId: number;
  full?: boolean;
}) {
  return (
    <div
      className={` bg-slate-950 rounded-3xl space-y-4 ${
        full ? "" : "hover:cursor-pointer p-4"
      }  `}
    >
      <div className="h-[400px] relative z-0">
        <Image
          className={` ${full ? " rounded-t-2xl" : "rounded-2xl"}`}
          fill
          src={image}
          alt="Post Primary Pic"
        />
      </div>
      <div className={`space-y-4 ${full ? "p-4" : ""}`}>
        {full ? <h1>{title}</h1> : <h5>{title}</h5>}
        <p>{body}</p>
      </div>

      {full ? (
        <div className="p-4">
          <PostInteraction>
            <Comments postId={postId} />
          </PostInteraction>
        </div>
      ) : (
        <div className="w-full flex items-center justify-end">
          <span className="ml-auto hover:text-green-900">
            <FaArrowRight />
          </span>
        </div>
      )}
    </div>
  );
}

function PostLargeCard({
  title,
  image,
  path,
  body,
  full,
  postId,
}: {
  title: string;
  image: string;
  path: string;
  body: string;
  postId: number;
  full?: boolean;
}) {
  return full ? (
    <Content
      title={title}
      image={image}
      body={body}
      full={full}
      postId={postId}
    />
  ) : (
    <Link href={path}>
      <Content
        title={title}
        image={image}
        body={body}
        full={full}
        postId={postId}
      />
    </Link>
  );
}

export default PostLargeCard;
