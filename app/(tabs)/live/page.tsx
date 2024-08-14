"use client";
import type { NextPage } from "next";
import FollowButton from "@/components/followbutton";
import BlogPost from "@/components/BlogPost";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation"; // next/router 대신 next/navigation 사용

export default function Brain() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };

  return (
    <div className="w-full mx-auto max-w-screen-md relative bg-white dark:bg-neutral-700 overflow-hidden justify-center text-center text-[15px] text-black font-inter">
      <div className="bottom-[0px] left-[calc(50%_-_195px)] bg-white w-full mx-auto  max-w-screen-md  flex flex-col items-center justify-center">
        <div className="w-full mx-auto max-w-screen-md top-[44px] left-[0px] border-fastu-gray5 border-b-[0px] h-14 flex flex-row items-center justify-start p-3 text-left text-[24px]">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-3">
            <ChevronLeft onClick={handleClick} className="hover:scale-150" />
            <div className="relative tracking-[-0.1px] leading-[120%] font-medium">
              우아한테크블로그
            </div>
          </div>
          <div className="w-auto rounded-[99px] border-fastu-gray3 overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-3 text-center text-sm text-fastu-gray2">
            <FollowButton />
          </div>
        </div>
        <hr className="w-full border-t-0 border-gray-300" />
        <BlogPost
          blogId={0}
          blogName={""}
          blogImage={""}
          blogDescription={""}
          companyId={0}
          company={""}
          type={""}
          is_following={false}
        />
      </div>
    </div>
  );
}
