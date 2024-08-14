"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/app/lib/utils";

// Accordion 컴포넌트를 AccordionPrimitive.Root로 설정
const Accordion = AccordionPrimitive.Root;

// AccordionItem 컴포넌트 정의
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  // AccordionPrimitive.Item을 사용하여 아이템을 정의하고 ref와 props를 전달
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)} // cn 함수로 클래스 이름을 병합
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

// AccordionTrigger 컴포넌트 정의
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  // AccordionPrimitive.Header로 트리거의 헤더를 정의
  <AccordionPrimitive.Header className="flex">
    {/* AccordionPrimitive.Trigger를 사용하여 트리거를 정의하고 ref와 props를 전달 */}
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className // cn 함수로 클래스 이름을 병합
      )}
      {...props}
    >
      {children} {/* 트리거의 자식 요소 */}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// AccordionContent 컴포넌트 정의
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  // AccordionPrimitive.Content를 사용하여 콘텐츠를 정의하고 ref와 props를 전달
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>{" "}
    {/* 콘텐츠의 자식 요소 */}
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// 컴포넌트들을 export
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
