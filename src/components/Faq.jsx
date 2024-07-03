"use client"
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Faq() {

  return (
<div className="w-[80%] mx-auto py-28" >
<Accordion variant="splitted" defaultExpandedKeys={["1"]}>
      <AccordionItem key="1" aria-label="Accordion 1" title=" What are your office hours?" className="font-semibold">
        <hr className="mb-3 border border-[#4D4C7B] border-opacity-20 w-full"/>
      <span className="font-normal text-[#343268] opacity-60">
      {"Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."}
      </span>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
      Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
      Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
      </AccordionItem>
    </Accordion>
</div>
  );
}
