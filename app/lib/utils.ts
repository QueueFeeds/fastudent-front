import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
  //clsx 사용: clsx는 다양한 입력값(string, object, array)을 받아 유효한 CSS 클래스 문자열을 만들어 줌
  // 예를 들어, 조건부로 클래스를 적용할 때 유용
}
