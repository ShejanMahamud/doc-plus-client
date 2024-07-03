"use client"
import React, { useState, useRef, useEffect } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
      contentRef.current.style.opacity = 1;
      contentRef.current.style.padding = "1rem";
    } else {
      contentRef.current.style.maxHeight = "0px";
      contentRef.current.style.opacity = 0;
      contentRef.current.style.padding = "0 1rem";
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-300 rounded-md mb-4">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 cursor-pointer" onClick={toggleAccordion}>
        <div className="font-semibold px-5">{title}</div>
        <div className="text-xl">{isOpen ? '-' : '+'}</div>
      </div>
      <div
        ref={contentRef}
        className="max-h-0 overflow-hidden transition-[max-height,opacity,padding] duration-1000 ease-in-out"
      >
        <div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
