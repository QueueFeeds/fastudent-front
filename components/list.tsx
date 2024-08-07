import type { NextPage } from "next";
import Image from "next/image";
import FollowButton from "@/components/followbutton";

export default function List() {
  return (
    <div className="w-[390px] h-[74px] px-6 py-4 justify-start items-center inline-flex">
      <div className="grow shrink basis-0 h-[42px] justify-start items-center gap-2 flex">
        <Image
          src="/Ellipse 91.png"
          alt="Ellipse 91"
          width={42}
          height={42}
          className="relative rounded-[50%] object-cover"
        />
        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="text-[#101035] text-base font-normal font-['Inter'] dark:text-white">
              우아한테크블로그
            </div>
            <div className="text-[#39396e] text-xs font-light font-['Inter'] dark:text-white">
              배달의민족
            </div>
          </div>
          <div className="text-[#707085] text-sm font-light font-['Inter'] dark:text-white">
            어쩌구저쩌구 한줄 설명입니다.
          </div>
        </div>
      </div>
      <FollowButton />
    </div>
  );
}
