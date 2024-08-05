import Link from "next/link";
import "../lib/db";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">당근</h1>
        <h2 className="text-2xl">하위^_^</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full ">
        <Link href="/create-account" className="primary-btn text-lg py-2.5">
          시작하기
        </Link>
        <div>
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline underline-offset-2">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
