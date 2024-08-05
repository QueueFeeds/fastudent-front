// life/page.tsx
import type { NextPage } from "next";
import React from "react";
import Image from "next/image";

const IPhone1314: NextPage = () => {
  return (
    <div>
      <div className="w-full h-11 justify-center items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch pl-[19.89px] pr-[14.50px] pt-3.5 pb-3 bg-white justify-end items-center gap-[234.61px] inline-flex">
          <div className="text-black">9:41</div>
          <div className="w-[67px] h-[11.50px] relative">
            <div className="w-[24.50px] h-[11.50px] left-[42.50px] top-0 absolute">
              <Image
                className="absolute"
                src="/Battery.png"
                alt="Battery icon"
                width={24.5}
                height={11.5}
              />
              <div className="#212121" />
            </div>
            <Image
              className="absolute"
              src="/Combined Shape.png"
              alt="Combined shape icon"
              width={17.1}
              height={10.7}
              style={{ left: "0", top: "0.44px" }}
            />
            <Image
              className="absolute"
              src="/Wi-Fi.png"
              alt="Wi-Fi icon"
              width={15.4}
              height={11.06}
              style={{ left: "22.1px", top: "0.24px" }}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="self-stretch px-3 py-2 rounded justify-start items-center gap-3 inline-flex">
          <div className="w-6 h-6 relative">
            <Image
              src="/icon-search_glass-24_2.png"
              alt="Search Icon"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-gray-500">검색어를 입력하세요.</div>
        </div>
      </div>
      <div className="w-[390px] h-80 py-3 flex-col justify-start items-start inline-flex">
        <div className="self-stretch px-6 py-4 justify-start items-center inline-flex">
          <div className="grow shrink basis-0 h-[42px] justify-start items-center gap-2 flex">
            <Image
              className="rounded-full"
              src="/Ellipse 91.png"
              alt="Profile picture"
              width={42}
              height={42}
            />
            <div className="flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-[#101035] text-base font-normal font-['Inter']">
                  우아한테크블로그
                </div>
                <div className="text-[#707085] text-xs font-light font-['Inter']">
                  배달의민족
                </div>
              </div>
              <div className="text-[#707085] text-sm font-light font-['Inter']">
                어쩌구저쩌구 한줄 설명입니다.
              </div>
            </div>
          </div>
          <div className="h-8 px-3 py-1 rounded-[99px] border border-[#a0a0b0] justify-center items-center gap-2 flex">
            <div className="h-4 flex-col justify-center items-center inline-flex">
              <Image
                className="rounded-full"
                src="/Icon Right Wrapper.png"
                alt="Profile picture"
                width={10}
                height={10}
              />
            </div>
            <div className="w-[38px] text-center text-[#707085] text-sm font-normal font-['Inter'] leading-normal">
              취소
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 py-4 justify-start items-center inline-flex">
          <div className="grow shrink basis-0 h-[42px] justify-start items-center gap-2 flex">
            <Image
              className="rounded-full"
              src="/Ellipse 91.png"
              alt="Profile picture"
              width={42}
              height={42}
            />
            <div className="flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-[#101035] text-base font-normal font-['Inter']">
                  우아한테크블로그
                </div>
                <div className="text-[#707085] text-xs font-light font-['Inter']">
                  배달의민족
                </div>
              </div>
              <div className="text-[#707085] text-sm font-light font-['Inter']">
                어쩌구저쩌구 한줄 설명입니다.
              </div>
            </div>
          </div>
          <div className="h-8 px-3 py-1 bg-[#ffdd44] rounded-[99px] justify-center items-center gap-2 flex">
            <div className="h-4 flex-col justify-center items-center inline-flex">
              <Image
                className="rounded-full"
                src="/Icon Left Wrapper.png"
                alt="Icon Left Wrapper"
                width={10}
                height={10}
              />
            </div>
            <div className="w-max-[38px] text-center text-[#101035] text-sm font-normal font-['Inter'] leading-normal">
              팔로우
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Life: NextPage = () => {
  return <IPhone1314 />;
};

export default Life;
