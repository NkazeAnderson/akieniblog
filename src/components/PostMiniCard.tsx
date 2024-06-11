import Image from "next/image";
import Link from "next/link";
import React from "react";

function PostMiniCard({
  title,
  image,
  path,
}: {
  title: string;
  image: string;
  path: string;
}) {
  return (
    <Link href={path}>
      <div className="flex space-x-4 ">
        <div className="">
          <Image
            className=" object-cover "
            width={100}
            height={100}
            src={image}
            alt="Author Profile Picture"
          />
        </div>

        <h5 className="font-bold text-xl text-truncate overflow-hidden">
          {title}
        </h5>
      </div>
    </Link>
  );
}

export default PostMiniCard;
