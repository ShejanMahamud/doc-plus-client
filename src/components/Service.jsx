import HeadingText from '@/components/HeadingText'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Service = () => {
  return (
    <div className='w-[80%] mx-auto grid lg:grid-cols-2 grid-cols-1 row-auto items-center gap-x-8 gap-y-16 lg:py-28 py-14 mt-6'>
        <div className='w-full flex flex-col items-start gap-5'>
            {/* <HeadingText title={'Services'} des={'Empowering Health, Enriching Lives'}/> */}
            <div className="flex flex-col items-start gap-5">
    <div className="px-6 py-2 rounded-full border border-[#4D4C7B] bg-transparent text-[#020043] ">
        <span>{'Services'}</span>
    </div>
    <h1 className='text-[#020043] font-semibold lg:text-[36px] text-[28px]'>Empowering Health,<br/> Enriching Lives</h1>
</div>
            <p className='text-[#4D4C7B] w-[80%]'>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
            <button className='text-[#020043] font-medium bg-[#FFC637] px-6 py-3 rounded-xl flex items-center gap-2'>
              <span>Appointment</span>
              <MdOutlineArrowOutward className='text-2xl font-bold'/>
            </button>
        </div>
        {
            services.map((service,index)=> (
<div key={index} className="w-full bg-cover bg-no-repeat rounded-3xl h-[400px] relative" style={{ backgroundImage: `url(${service?.bgImage})` }}>
            <div className='bg-[#020043] lg:h-[150px] h-[200px] bg-opacity-60 rounded-3xl p-5 absolute lg:w-[60%] w-[80%] flex items-end gap-2 left-4 bottom-4'>
                <div className='flex flex-col gap-2 text-white'>
                    <h1 className='font-semibold text-xl'>{service?.title}</h1>
                    <p className='text-xs'>{service?.description}</p>
                </div>
                <button className='bg-[#FFC637] p-3 rounded-full text-white'>
                <MdOutlineArrowOutward className='text-2xl font-bold'/>
                </button>
            </div>  
        </div>
            ))
        }
    </div>
  )
}

export default Service

const services = [
    {
      title: 'Advanced Technology',
      description: 'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision',
      bgImage: 'https://i.ibb.co/M1TC3H9/Rectangle-27-2.png',
    },
    {
      title: 'Online Doctor Meet',
      description: 'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision',
      bgImage: 'https://i.ibb.co/TLq0LtJ/Rectangle-27-1.png',
    },
    {
      title: 'Consultancy your health',
      description: 'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision',
      bgImage: 'https://i.ibb.co/HtcBGXC/Rectangle-27.png',
    },
  ];