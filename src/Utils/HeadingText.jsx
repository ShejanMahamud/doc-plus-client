import React from 'react'

const HeadingText = ({ title, des,className }) => {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="px-6 py-2 rounded-full border border-[#4D4C7B] bg-transparent text-[#020043]">
        <span>{title}</span>
      </div>
      <h1 className={`text-[#020043] font-semibold text-[36px] ${className}`}>{des}</h1>
    </div>
  )
}

export default HeadingText
