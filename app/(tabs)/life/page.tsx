import type { NextPage } from "next";
import React from "react";
import List from "@/components/list";
import SearchBar from "@/components/search-bar";
import { OurCheckbox } from "@/components/tak-checkbox";
import { Takalert } from "@/components/tak-alert";
import { TakSlider } from "@/components/tak-slider";
import { TakButton } from "@/components/tak-button";
import { TakDatePickerWithRange } from "@/components/tak-calendar";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { TakCommand } from "@/components/tak-sidebar";
import { TakDateDialog } from "@/components/tak-datedialog";
import { TakAccordion } from "@/components/tak-accordion";

export default function Life() {
  return (
    <div className="flex flex-col items-center w-full mx-auto max-w-screen-md">
      <div className="w-full max-w-screen-md px-6 py-4">
        <SearchBar />
      </div>
      <hr className="w-full border-t-0 border-gray-300" />
      <div className="w-full max-w-screen-md flex flex-col justify-start items-center gap-4">
        {/* <List />
        <List />
        <List />
        <List /> */}
      </div>
      <div className="flex flex-col gap-6 w-full items-center">
        {/* <TakCommand /> */}
        {/* <TakDatePickerWithRange />
        <TakSlider />
        <Button variant={"destructive"}>Button Label</Button> */}
        {/* <Takalert /> */}
        {/* <TakDateDialog /> */}
        <TakAccordion />
      </div>
    </div>
  );
}
