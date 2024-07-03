import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const WhoWeAre = () => {
  return (
    <div className='w-[80%] mx-auto grid grid-cols-2 row-auto items-center gap-10 py-28'>
         <div className='w-full flex flex-col items-start gap-5'>
            {/* <HeadingText title={'Services'} des={'Empowering Health, Enriching Lives'}/> */}
            <div className="flex flex-col items-start gap-5">
    <div className="px-6 py-2 rounded-full border border-[#4D4C7B] bg-transparent text-[#020043] ">
        <span>{'Who Are You'}</span>
    </div>
    <h1 className='text-[#020043] font-semibold text-[36px]'>We Help To Get <br/> Soultions</h1>
</div>
            <p className='text-[#4D4C7B] w-[80%]'>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
            </p>
            <button className='text-[#020043] font-medium bg-[#FFC637] px-6 py-3 rounded-xl flex items-center gap-2 mt-5'>
              <span>Learn more</span>
              <MdOutlineArrowOutward className='text-2xl font-bold'/>
            </button>
        </div>
        <div className={`w-full bg-[url('https://i.ibb.co/rpF3NKD/Rectangle-24.png')] h-[450px] bg-cover bg-no-repeat bg-center rounded-3xl relative`}>
            <div className='px-6 py-10 rounded-3xl flex flex-col items-start gap-2 bg-[#343268] absolute w-[70%] -bottom-10 -left-20'>
                <h1 className='text-[26px] text-white  font-medium'>Our mission is simple</h1>
                <p className='text-white opacity-80'>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre