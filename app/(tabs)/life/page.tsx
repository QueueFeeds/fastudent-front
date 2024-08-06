// life/page.tsx
import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import List from "@/components/list";
import SearchBar from "@/components/search-bar";

export default function Life() {
  return (
    <div>
      <div className="w-full h-11 justify-center items-center inline-flex"></div>
      <SearchBar />
      <div className="w-[390px] h-80 py-3 flex-col justify-start items-start inline-flex">
        <List />
        <List />
      </div>
    </div>
  );
}
