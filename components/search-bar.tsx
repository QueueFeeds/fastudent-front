"use client";

import type { NextPage } from "next";
import Image from "next/image";
import FormInput from "./FormInput";

export default function SearchBar() {
  return (
    <div className="px-[24px] py-[8px]">
      <div className="self-stretch px-3 py-2 rounded justify-start items-center gap-3 inline-flex">
        <div className="w-6 h-6 relative">
          <Image
            src="/icon-search_glass-24_2.png"
            alt="Search Icon"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <FormInput
          name="search"
          type="search"
          placeholder="검색어를 입력하세요"
          className="bg-transparent w-full h-10 focus:outline-none focus:ring-0 placeholder:text-neutral-400 text-black dark:text-white"
        />
      </div>
    </div>
  );
}
