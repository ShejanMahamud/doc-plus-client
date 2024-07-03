import React from 'react'

const Banner = () => {
  return (
    <div className='relative lg:h-screen w-full pb-5 pt-32 bg-[#fbfbfb]'>
      <div className="absolute top-0 left-0 w-1/2 lg:h-full bg-[url('https://i.ibb.co/0BdkXVG/Group-9174.png')] bg-no-repeat bg-left bg-cover backdrop-blur-lg blur-[3px] opacity-60"></div>
      <div className="absolute top-0 right-0 w-1/2 lg:h-full bg-[url('https://i.ibb.co/PztvTL2/Group-9173.png')] bg-no-repeat bg-right bg-cover backdrop-blur-lg blur-[3px] opacity-60" ></div>
      <div className="w-[80%] mx-auto bg-banner bg-no-repeat bg-center bg-cover h-[450px] rounded-3xl relative p-10 shadow-2xl">

      </div>
    </div>
  )
}

export default Banner