"use client";

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Icon";
import BlogPost from "@/components/BlogPost";

const IPhone1314: NextPage = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // API에서 데이터를 가져오는 함수
    const fetchBlogData = async () => {
      try {
        const response = await fetch("../v1/feed/fastudent/blogs/1234");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBlogData(data); // API에서 가져온 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData(); // 컴포넌트가 마운트될 때 데이터 가져오기
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 설정

  return (
    <div className="fixed inset-0 flex flex-col mx-auto max-w-screen-md justify-start text-xs text-gray-100 font-inter">
      <div className="bg-white border-fastu-gray5 w-full h-14 flex items-center justify-start">
        <div className="flex-1 flex items-center justify-start py-3 px-6">
          <Logo />
        </div>
      </div>
      <div className="flex flex-col">
        {blogData.length > 0 ? (
          blogData.map((blog: any) => <BlogPost key={blog.blogId} {...blog} />)
        ) : (
          <p className="dark:text-white text-center text-lg animate-pulse">
            Loading...
          </p> // 데이터가 로딩 중일 때 표시
        )}
      </div>
    </div>
  );
};

export default IPhone1314;
