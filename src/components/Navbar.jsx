"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' }
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className='w-full px-20 py-5 flex items-center justify-between bg-transparent absolute z-50'>
      <Image src='https://gist.github.com/ShejanMahamud/0fbd464dde64fea7f5a952bdad3e977a/raw/4d922340c68d7ea9a78e175761676b876f2d9faa/logo.svg' alt='logo.png' width={125} height={33} />
      <div className='flex items-center gap-10'>
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} scroll={true} className={`${pathname === href ? 'underline decoration-[#020043] underline-offset-4 font-medium' : ''} text-[#020043]`}>
            {label}
          </Link>
        ))}
      </div>
      <button className='text-[#020043] font-medium border bg-transparent border-[#343268] px-8 py-3 rounded-lg flex items-center gap-2'>
        <span>Appointment</span>
        <Image src='https://gist.github.com/ShejanMahamud/78aab596d304582d7413f812e764b041/raw/933848b60a78fbbfee62771c8a93854ec1b988e9/arrow.svg' alt='' height={14} width={14} />
      </button>
    </nav>
  );
};

export default Navbar;
