"use client";

import * as React from "react";
import { addDays, differenceInDays, format } from "date-fns";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function TakDateDialog() {
  // 현재 날짜를 초기값으로 설정
  let day = new Date();
  // date 상태를 정의하고 초기값을 현재 날짜로 설정
  const [date, setDate] = React.useState<Date | undefined>(day);

  // 날짜 선택 시 호출되는 함수
  const handleSelect = (selectedDate: Date | undefined) => {
    // 선택된 날짜로 상태를 업데이트
    setDate(selectedDate);
  };

  // 이전 날짜로 이동하는 함수
  const handlePreviousDay = () => {
    if (date) {
      // 현재 날짜에서 하루를 빼서 상태를 업데이트
      setDate(addDays(date, -1));
    }
  };

  // 다음 날짜로 이동하는 함수
  const handleNextDay = () => {
    if (date) {
      // 현재 날짜에서 하루를 더해서 상태를 업데이트
      setDate(addDays(date, 1));
    }
  };
  const renderDateLabel = () => {
    if (!date) return <span>Pick a date</span>;
    const diff = differenceInDays(day, date);
    if (diff === 0) return "오늘";
    if (diff === 1) return "어제";
    return format(date, "yyyy.MM.dd");
  };

  return (
    <div className="flex items-center">
      <div
        className="rounded-md p-3 hover:bg-popover"
        onClick={handlePreviousDay}
      >
        <ChevronLeft className="text-black h-4 w-4" />
      </div>
      <Popover>
        <PopoverTrigger asChild className="text-black">
          <Button
            variant={"foreground"}
            className={cn(
              "others-medium-button justify-center border-none",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="text-black mr-2 h-4 w-4" />
            {renderDateLabel()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="text-black w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <div
        className="text-black rounded-md p-3 hover:bg-popover"
        onClick={handleNextDay}
      >
        <ChevronRight className=" h-4 w-4" />
      </div>
    </div>
  );
}
