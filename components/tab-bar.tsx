"use client";

import {
  HomeIcon as SolidHomeIcon,
  NewspaperIcon as SolidNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as SolidChatIcon,
  VideoCameraIcon as SolidVideoCameraIcon,
  UserIcon as SolidUserIcon,
} from "@heroicons/react/24/solid";
import {
  HomeIcon as OutlineHomeIcon,
  NewspaperIcon as OutlineNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as OutlineChatIcon,
  VideoCameraIcon as OutlineVideoCameraIcon,
  UserIcon as OutlineUserIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home_bar, Home_bar_gray } from "@/components/Icon";
// akgnl awoihgoasgho;
export default function TabBar() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 w-full mx-auto max-w-screen-md grid grid-cols-5 border-neutral-600 border-t px-5 py-3 *:text-white">
      <Link
        href="/products"
        className="flex flex-col items-center gap-px hover:scale-110"
      >
        {pathname === "/products" ? (
          <SolidHomeIcon className="w-7 h-7 text-black dark:text-white" />
        ) : (
          <OutlineHomeIcon className="w-7 h-7 text-black dark:text-white" />
        )}
        <span className="text-black dark:text-white">튜데이 </span>
      </Link>
      <Link
        href="/life"
        className="flex flex-col items-center gap-px hover:scale-110"
      >
        {pathname === "/life" ? (
          <SolidNewspaperIcon className="w-7 h-7 text-black dark:text-white" />
        ) : (
          <OutlineNewspaperIcon className="w-7 h-7 text-black dark:text-white" />
        )}
        <span className="text-black dark:text-white">아티클</span>
      </Link>
      <Link
        href="/chat"
        className="flex flex-col items-center gap-px hover:scale-110"
      >
        {pathname === "/chat" ? (
          <SolidChatIcon className="w-7 h-7 text-black dark:text-white" />
        ) : (
          <OutlineChatIcon className="w-7 h-7 text-black dark:text-white" />
        )}
        <span className="text-black dark:text-white">브레인</span>
      </Link>
      <Link
        href="/live"
        className="flex flex-col items-center gap-px hover:scale-110"
      >
        {pathname === "/live" ? (
          <SolidVideoCameraIcon className="w-7 h-7 text-black dark:text-white" />
        ) : (
          <OutlineVideoCameraIcon className="w-7 h-7 text-black dark:text-white" />
        )}
        <span className="text-black dark:text-white">커뮤니티</span>
      </Link>
      <Link
        href="/profile"
        className="flex flex-col items-center gap-px hover:scale-110"
      >
        {pathname === "/profile" ? (
          <SolidUserIcon className="w-7 h-7 text-black dark:text-white" />
        ) : (
          <OutlineUserIcon className="w-7 h-7 text-black dark:text-white" />
        )}
        <span className="text-black dark:text-white">마이</span>
      </Link>
    </div>
  );
}
