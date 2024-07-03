import Image from 'next/image'
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const CTA = () => {
  return (
    <div className='relative h-screen w-full py-28 bg-[#fbfbfb]'>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[url('https://i.ibb.co/0BdkXVG/Group-9174.png')] bg-no-repeat bg-left bg-cover blur-[3px] opacity-60"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://i.ibb.co/PztvTL2/Group-9173.png')] bg-no-repeat bg-right bg-cover blur-[3px] opacity-60"></div>
      <div className="w-[80%] mx-auto bg-cta bg-no-repeat bg-center bg-cover h-[450px] rounded-3xl relative p-10">
        <Image src='https://gist.github.com/ShejanMahamud/9e5723014b301f670f3bfdb52bd7bafe/raw/f6cf3c6458eb8c47abc339fd7a8dfbc7a608427c/logo.svg' alt='logo.png' width={125} height={33} className='absolute top-10 right-10'/>
        <div className='flex flex-col items-start gap-5 justify-center w-full h-full'>
          <h1 className='text-[#fffff5] leading-[60px] text-[40px] font-semibold'>
            Get Your <br/>
            First Appointment<br/>
            at 50% Off!
          </h1>
          <div className='flex items-center gap-5'>
            <button className='text-[#020043] font-medium bg-[#FFC637] px-6 py-3 rounded-xl flex items-center gap-2'>
              <span>Appointment</span>
              <MdOutlineArrowOutward className='text-2xl font-bold'/>
            </button>
            <button className='text-white font-medium border border-[#fffff5] px-6 py-3 rounded-xl flex items-center gap-2'>
              <span>Learn More</span>
              <MdOutlineArrowOutward className='text-2xl font-bold'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
