import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='bg-[#1A92D9] text-white'>
        <div className=' flex justify-between mx-5'>
            <Link href="/" className='font-bold text-lg my-2'>Bitlinks</Link>
            <ul className='flex gap-3 my-3 font-bold text-sm'>
                <Link href="/">Home</Link>
                <Link href="/About">About</Link>
                <Link href="/Shorten">Shorten</Link>
                <Link href="/Contact">Contact Us</Link>
                <li className='mt-0.5 text-xs'>
                    <Link className='p-0.5 mx-2 px-2 border-2  border-[#436bc2] bg-[#436bc2] rounded-lg' href="/Shorten">Try Now</Link>
                    <Link className='p-0.5 px-2 mx-2 border-2 border-[#436bc2] bg-[#436bc2] rounded-lg' href="/Github">GitHub</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
