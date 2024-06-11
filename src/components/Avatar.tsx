import Image from "next/image";
import React from "react";

function Avatar({ path }: { path: string }) {
  return (
    <div className="size-[60px] relative">
      <Image
        className="rounded-full"
        fill
        objectFit="cover"
        src={path}
        alt="avatar"
      />
    </div>
  );
}

export default Avatar;
