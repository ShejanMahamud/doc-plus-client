import Image from 'next/image'
import React from 'react'
import {Avatar, AvatarGroup} from "@nextui-org/react";

const Stats = () => {
  return (
    <div className='pb-28 w-[80%] p-10 mx-auto flex flex-col items-center relative'>
        <h1 className='text-[#020043] font-semibold text-[48px] text-center absolute bottom-0 top-0 z-50'>
        Comprehensive Care <br/> for Every Patient
        </h1>
        <div className='w-full grid grid-cols-5 row-auto items-end gap-5'>
            <div className='w-full p-5 h-[320px] flex flex-col rounded-3xl items-center justify-end gap-10 border border-[#02004333] border-opacity-20 bg-[#FBFBFB]'>
                <div className='flex flex-col items-start w-full gap-2'>
                <h1 className='text-3xl text-[40px] text-[#020043] font-semibold'>90%</h1>
                <p className='text-[#020043] text-sm opacity-80'>Patient satisfaction rate, reflecting our commitment.</p>
                </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="131" height="131" viewBox="0 0 131 131" fill="none">
  <path d="M67.8961 0C66.3962 0 65.1802 1.21602 65.1802 2.71593V62.4645C65.1802 63.9644 66.3962 65.1805 67.8961 65.1805H127.645C129.145 65.1805 130.361 63.9644 130.361 62.4645C130.321 27.9824 102.378 0.0389554 67.8961 0Z" fill="#FFC107"/>
  <path d="M97.2 115.114L59.7486 66.9674V8.14757C59.7486 6.64766 58.5326 5.43164 57.0327 5.43164C25.5832 5.43164 0 33.4538 0 67.8959C0.0389554 102.378 27.9824 130.322 62.4643 130.36C74.9842 131.333 87.3639 127.191 96.7763 118.878C97.9137 117.945 98.1016 116.276 97.2 115.114Z" fill="#2196F3"/>
  <path d="M127.644 70.6118H73.3277C71.8278 70.6121 70.612 71.8283 70.6125 73.3283C70.6125 73.9487 70.8252 74.5504 71.215 75.0331L106.521 118.742C106.995 119.329 107.691 119.693 108.444 119.747H108.634C109.321 119.747 109.983 119.487 110.486 119.019C123.138 107.187 130.331 90.6494 130.361 73.3275C130.36 71.8278 129.145 70.6118 127.644 70.6118Z" fill="#4CAF50"/>
</svg>
            </div>
            <div className='bg-[#FFFFF5] p-5 h-[200px] flex flex-col rounded-3xl items-center justify-start gap-10 border border-[#02004333] border-opacity-20 relative w-full'>
            <div className='flex flex-col items-start w-full gap-2'>
                <h1 className='text-3xl text-[40px] text-[#020043] font-semibold'>500+</h1>
                <p className='text-[#020043] text-sm opacity-80'>Board-certified doctors</p>
                </div>
                <Image className='absolute bottom-5 right-5' src={'https://gist.github.com/ShejanMahamud/9dae0045b320265846b189eecdf2b615/raw/98cf74466ff7d3354b236fb2619552b1131d6365/certificate.svg'} alt='certificate.svg' width={77} height={77}/>
            </div>

            <div className='bg-[#FBFBFB] p-5 h-[170px] flex flex-col rounded-3xl items-center justify-start gap-6 border border-[#02004333] border-opacity-20 relative w-full'>
            <div className='flex flex-col items-start w-full gap-2'>
                <div className='flex items-center gap-2'>
                <h1 className='text-3xl text-[40px] text-[#020043] font-semibold'>4.8 </h1>
                <Image alt='' src={'https://gist.github.com/ShejanMahamud/57c578eca4e441100b8a743ea63d805e/raw/e3d7effa3b89eb90f06fb215a8d1ba9c42c263da/star.svg'} width={32} height={32}/>
                </div>
                <p className='text-[#020043] text-sm opacity-80'>Over 20,000 Patient</p>
                </div>
                <AvatarGroup>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
    </AvatarGroup>
            </div>

            <div className='bg-[#FFFFF5] p-5 h-[200px] flex flex-col rounded-3xl items-center justify-start gap-10 border border-[#02004333] border-opacity-20 relative w-full'>
            <div className='flex flex-col items-start w-full gap-2'>
                <h1 className='text-3xl text-[40px] text-[#020043] font-semibold'>$5000</h1>
                <p className='text-[#020043] text-sm opacity-80'>Money spend
                for poor patient</p>
                </div>
                <Image className='absolute bottom-5 right-5' src={'https://gist.github.com/ShejanMahamud/6faaf979ba7f0eb807c74b6a78e42476/raw/16f028f6f3b897ce328efd187530637b5804a7ae/coins.svg'} alt='certificate.svg' width={91} height={72}/>
            </div>

            <div className='w-full p-5 h-[320px] flex flex-col rounded-3xl items-center justify-end gap-10 border border-[#02004333] border-opacity-20 bg-[#FBFBFB] w-full'>
                <div className='flex flex-col items-start w-full gap-2'>
                <h1 className='text-3xl text-[40px] text-[#020043] font-semibold'>90%</h1>
                <p className='text-[#020043] text-sm opacity-80'>Free lession video 
                for patient</p>
                </div>
                <Image src={'https://gist.github.com/ShejanMahamud/9bbeb66cba002bbb13d642e0c6e1aee9/raw/103d5a289d4663e8d37372318bdad6529a4b71f3/call.svg'} alt='' height={128} width={133}/>
            </div>
        </div>
    </div>
  )
}

export default Stats