import React from "react";
import Image from "next/image";

interface IconProps {
  className?: string;
}

export function Logo() {
  return (
    <div className="logo">
      <Image src="/Group23.svg" alt="Logo" width={126} height={26} />
    </div>
  );
}

export function Home_bar() {
  return (
    <div className="Home_bar">
      <Image src="/Group23.svg" alt="Home_bar" width={38} height={13} />
    </div>
  );
}

export function Home_bar_gray() {
  return (
    <div className="Home_bar_gray">
      <Image src="/Group24.svg" alt="Home_bar_gray" width={38} height={13} />
    </div>
  );
}
