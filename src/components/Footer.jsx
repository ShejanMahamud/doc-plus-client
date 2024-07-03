import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";

const footerLinks1 = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/success', label: 'Success Page' },
  { href: '/terms', label: 'Terms And Conditions' }
];

const footerLinks2 = [
  { href: '/services', label: 'Services' },
  { href: '/scheduling', label: 'Scheduling' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/patient_portal', label: 'Patient Portal' }
];

const Footer = () => {
  return (
    <div className='bg-[#020043] px-28 w-full grid grid-cols-4 gap-10 py-20'>
      <div className='flex flex-col items-start gap-5 text-[#FFFFF5]'>
        <Image src='https://gist.github.com/ShejanMahamud/9e5723014b301f670f3bfdb52bd7bafe/raw/f6cf3c6458eb8c47abc339fd7a8dfbc7a608427c/logo.svg' alt='logo.png' width={125} height={33} />
        <p className='opacity-80'>123 Main Street Anytown, USA <br /> Postal Code: 12345</p>
        <p className='opacity-80'>Support: support@oyolloo.com <br /> (Available: 10:00am to 07:00pm)</p>
      </div>
      <div className='flex w-full items-center flex-col'>
      <div className='flex flex-col items-start gap-5'>
        {footerLinks1.map(({ href, label }) => (
          <Link key={href} href={href} className='text-[#FFFFF5] font-semibold'>{label}</Link>
        ))}
      </div>
      </div>
      <div className='flex w-full items-center flex-col'>
      <div className='flex flex-col items-start gap-5'>
        {footerLinks2.map(({ href, label }) => (
          <Link key={href} href={href} className='text-[#FFFFF5] font-semibold'>{label}</Link>
        ))}
      </div>
      </div>
      <div className='flex w-full items-center flex-col'>
      <div className='flex flex-col items-start gap-5'>
        <span className='font-semibold text-[#FFFFF5]'>Follow Us</span>
        <div className='flex items-center gap-5 text-2xl'>
          <FaFacebook className='text-[#FFFFF5]' />
          <FaInstagram className='text-[#FFFFF5]' />
          <Image src='https://gist.github.com/ShejanMahamud/304f59a83fdd3528ed3e94e62b69e708/raw/cbaefeb41a633b72252f01fd226e6b6fe3e68f11/linkedin.svg' alt='linkedin.svg' width={24} height={24} />
        </div>
        <span className='text-sm text-[#FFFFF5]'>@docplus 2024</span>
      </div>
      </div>
    </div>
  );
}

export default Footer;