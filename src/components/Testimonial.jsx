"use client"
import React from 'react';
import HeadingText from '@/components/HeadingText';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    title: 'Expertise and Compassion Combined',
    text: `I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.`,
    name: 'Sarah D',
    position: 'IT Professional',
    image: 'https://i.ibb.co/hXD41hL/724f72eb2c73d3e7560e01a5f0093700-Expires-1721001600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-dsh.jpg',
    rating: 5
  },
  {
    title: 'Life-Saving Care, Life-Changing Experience',
    text: `My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.`,
    name: 'Michael R',
    position: 'Business Executive',
    image: 'https://i.ibb.co/xjkjPjG/f2cf44bfa3af771f6396363d4ae67aab-Expires-1721001600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-mj.jpg',
    rating: 4
  },
  {
    title: 'A Partner in Health and Wellness',
    text: `As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and`,
    name: 'David S',
    position: 'Lawyer',
    image: 'https://i.ibb.co/Qcsd5cY/d08cbe61699dcdccad10d7e4dd0904b0-Expires-1721001600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-h-Z.jpg',
    rating: 3
  },
  {
    title: 'A Partner in Health and Wellness',
    text: `As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and`,
    name: 'David S',
    position: 'Lawyer',
    image: 'https://i.ibb.co/Qcsd5cY/d08cbe61699dcdccad10d7e4dd0904b0-Expires-1721001600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-h-Z.jpg',
    rating: 3
  }
];

const Testimonial = () => {
  return (
    <div className='w-[80%] mx-auto lg:pt-28 pt-14'>
      <HeadingText title={'Testimonial'} des={'What they say about this'} className={'mb-10'} />
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper" breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}>
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className='bg-white p-5 rounded-2xl flex flex-col items-start justify-center gap-5 shadow-sm h-[280px]'>
              <h1 className='text-[19px] text-[#020043] font-semibold'>{review.title}</h1>
              <p className='text-[#4D4C7B] text-[12px]'>{review.text}</p>
              <div className='flex items-center gap-5'>
                <Image src={review.image} alt={review.name} width={40} height={40} className='rounded-full object-cover h-12 w-12' />
                <div className='flex flex-col items-start gap-2'>
                  <h1 className='text-[#020043] font-semibold text-sm'>{review.name}, <span className='text-[#4D4C7B] font-medium'>{review.position}</span></h1>
                  <div className='flex items-center gap-2'>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Image key={i} src={'https://gist.github.com/ShejanMahamud/2d0cfe33ed354f80bf37fc1d266a2484/raw/2d58cebd12f711c760a01cb64b42b00839ffe51f/star.svg'} alt='' width={16} height={16} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonial;
