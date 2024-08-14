import type { NextPage } from "next";
import React from "react";
import List from "@/components/list";
import SearchBar from "@/components/search-bar";

export default function Life() {
  return (
    <div className="flex flex-col items-center w-full mx-auto max-w-screen-md">
      <div className="w-full max-w-screen-md px-6 py-4">
        <SearchBar />
      </div>
      <hr className="w-full border-t-0 border-gray-300" />
      <div className="w-full max-w-screen-md flex flex-col justify-start items-center gap-4">
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
}
