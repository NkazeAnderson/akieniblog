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
          <div className="w-[60px] h-[60px] relative">
            <Image
              className="object-cover rounded-lg z-0"
              fill
              src={image}
              alt="Author Profile Picture"
            />
          </div>
        </div>

        <h5 className="font-bold text-xl text-truncate overflow-hidden">
          {title}
        </h5>
      </div>
    </Link>
  );
}

export default PostMiniCard;
