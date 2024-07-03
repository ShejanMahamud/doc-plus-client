"use client"
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";

export default function Faq() {

  return (
<div className="w-[80%] mx-auto py-28" >
    <div className="flex flex-col items-start gap-5">
        <div className="px-6 py-2 rounded-full border border-[#4D4C7B] bg-transparent text-[#020043] ">
            <span>Faq</span>
        </div>
        <h1 className="text-[#020043] font-semibold text-[36px] leading-[54px] mb-10">Frequntly Asked Question</h1>
    </div>
<Accordion variant="splitted" defaultExpandedKeys={["1"]} className="text-[#020043]">
      <AccordionItem key="1" aria-label="Accordion 1" title=" What are your office hours?" className="font-medium text-[#020043] mb-3" indicator={<IoIosArrowDown className="text-[#323232]"/>}>
        <hr className="mb-3 border border-[#4D4C7B] border-opacity-20 w-full"/>
      <span className="font-normal text-[#343268] opacity-60">
      {"Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."}
      </span>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="How can I schedule an appointment?" className="font-medium text-[#020043] mb-3" indicator={<IoIosArrowDown className="text-[#323232]"/>}>
        <hr className="mb-3 border border-[#4D4C7B] border-opacity-20 w-full"/>
      <span className="font-normal text-[#343268] opacity-60">
      {"Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."}
      </span>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title=" Do you accept insurance?" className="font-medium text-[#020043] mb-3" indicator={<IoIosArrowDown className="text-[#323232]"/>}>
        <hr className="mb-3 border border-[#4D4C7B] border-opacity-20 w-full"/>
      <span className="font-normal text-[#343268] opacity-60">
      {"Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."}
      </span>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title=" What should I bring to my appointment?" className="font-medium text-[#020043] mb-3" indicator={<IoIosArrowDown className="text-[#323232]"/>}>
        <hr className="mb-3 border border-[#4D4C7B] border-opacity-20 w-full"/>
      <span className="font-normal text-[#343268] opacity-60">
      {"Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."}
      </span>
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title=" Do you offer telemedicine appointments?" className="font-medium text-[#020043] mb-3" indicator={<IoIosArrowDown className="text-[#323232]"/>}>
        <hr className="mb-3 border border-[#4D4C7B] border-opacity-20 w-full"/>
      <span className="font-normal text-[#343268] opacity-60">
      {"Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."}
      </span>
      </AccordionItem>
    </Accordion>
</div>
  );
}
