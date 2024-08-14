import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogPostProps {
  blogId: number;
  blogName: string;
  blogImage: string;
  blogDescription: string;
  companyId: number;
  company: string;
  type: string;
  is_following: boolean;
}

const BlogPost = ({
  blogId,
  blogName,
  blogImage,
  blogDescription,
  companyId,
  company,
  type,
  is_following,
}: BlogPostProps) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex-1 w-full flex flex-col items-start justify-start text-left text-fastu-black overflow-y-auto">
      <div className="self-stretch flex flex-col items-start justify-start py-4 px-6">
        <div
          className="w-full flex flex-row items-center justify-start gap-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleClick(`/blog/${blogId}`)}
        >
          <img
            className="w-4 h-4 rounded-full object-cover"
            alt={`${blogName} logo`}
            src={blogImage}
          />
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="tracking-[-0.02em] font-medium">{blogName}</div>
              <div className="tracking-[-0.02em] font-medium text-fastu-gray2">
                <span>{`업로드 `}</span>
                <span className="text-chocolate">{type}</span>
                <span> 경과</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-start justify-start gap-3 text-base text-black mt-4 hover:bg-gray-200 cursor-pointer">
          <div className="flex-1 flex flex-col items-start justify-start gap-1.5">
            <div className="tracking-[-0.02em]">{blogDescription}</div>
            <div className="text-sm tracking-[-0.02em] text-fastu-gray2">
              {company}의 데이터 직군이 매일 쓰는 서비스의 만족도를 1점
              끌어올리기 위해 10개월간 집요하게 파고든 과정을 소개할게요
            </div>
          </div>
          <img
            className="w-[72px] h-[72px] object-cover"
            alt={`${blogName} thumbnail`}
            src={blogImage}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
