import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TakAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="text-black dark:text-white w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>{/* 컨텐츠 */}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>{/* 컨텐츠 */}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>{/* 컨텐츠 */}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
