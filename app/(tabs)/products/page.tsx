"use client";

import type { NextPage } from "next";
import Logo from "@/public/Group 23.svg";
import BlogPost from "@/components/BlogPost";
import { Activity } from "lucide-react";

const IPhone1314: NextPage = () => {
  return (
    <div className="fixed inset-0 flex flex-col mx-auto max-w-screen-md justify-start text-xs text-gray-100 font-inter">
      <div className="bg-white border-fastu-gray5 w-full h-14 flex items-center justify-start">
        <div className="flex-1 flex items-center justify-start py-3 px-6">
          <Logo />
        </div>
      </div>
      <div className="flex flex-col">
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </div>
  );
};

export default IPhone1314;
