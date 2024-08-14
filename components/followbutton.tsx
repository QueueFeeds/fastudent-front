// components/FollowButton.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div
      className={`h-8 px-3 py-1 rounded-[99px] justify-center items-center gap-2 flex cursor-pointer hover:scale-105 ${
        isFollowing
          ? "bg-white outline outline-[1px] outline-offset-0 outline-[#707085]"
          : "bg-[#ffdd44]"
      }`}
      onClick={handleClick}
    >
      <div className="h-4 flex-col justify-center items-center inline-flex">
        <Image
          src={
            isFollowing ? "/Icon Right Wrapper.png" : "/Icon Left Wrapper.png"
          }
          alt={isFollowing ? "Icon Right Wrapper" : "Icon Left Wrapper"}
          width={16}
          height={16}
          className="rounded-full"
        />
      </div>
      <div
        className={`text-center text-sm font-normal font-['Inter'] leading-normal ${
          isFollowing ? "text-[#707085]" : "text-[#101035]"
        }`}
      >
        {isFollowing ? "취소" : "팔로우"}
      </div>
    </div>
  );
}
