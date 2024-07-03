"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' }
];

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const pathname = usePathname();
  return (
    <nav className='w-full lg:px-20 px-5 py-5 flex items-center justify-between bg-transparent absolute z-50'>
      <Image src='https://gist.github.com/ShejanMahamud/0fbd464dde64fea7f5a952bdad3e977a/raw/4d922340c68d7ea9a78e175761676b876f2d9faa/logo.svg' alt='logo.png' width={125} height={33} />
      <div className='lg:flex items-center gap-10 hidden'>
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} scroll={true} className={`${pathname === href ? 'underline decoration-[#020043] underline-offset-4 font-medium' : ''} text-[#020043]`}>
            {label}
          </Link>
        ))}
      </div>
      <div className={`flex flex-col items-center gap-10 lg:hidden absolute bg-white shadow-lg px-10 py-5 top-20 right-10 rounded-lg ${open ? 'flex' : 'hidden'}`}>
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} scroll={true} className={`${pathname === href ? 'underline decoration-[#020043] underline-offset-4 font-medium' : ''} text-[#020043]`}>
            {label}
          </Link>
          
        ))}
              <button className='text-[#020043] font-medium border bg-transparent border-[#343268] lg:px-8 px-4 lg:py-3 py-2 lg:text-base text-sm rounded-lg flex items-center gap-2'>
        <span>Appointment</span>
        <Image src='https://gist.github.com/ShejanMahamud/78aab596d304582d7413f812e764b041/raw/933848b60a78fbbfee62771c8a93854ec1b988e9/arrow.svg' alt='' height={14} width={14} />
      </button>
      </div>
      <button className='text-[#020043] font-medium border bg-transparent border-[#343268] lg:px-8 px-4 lg:py-3 py-2 lg:text-base text-sm rounded-lg lg:flex hidden items-center gap-2'>
        <span>Appointment</span>
        <Image src='https://gist.github.com/ShejanMahamud/78aab596d304582d7413f812e764b041/raw/933848b60a78fbbfee62771c8a93854ec1b988e9/arrow.svg' alt='' height={14} width={14} />
      </button>
      <button onClick={()=>setOpen(!open)} className='text-[#020043] text-2xl lg:hidden inline-block'>
      <IoMenuOutline />
      </button>
    </nav>
  );
};

export default Navbar;
