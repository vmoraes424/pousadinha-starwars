/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-star-black h-[100px]'>
      <Link href={"/"} className='w-24 bg-red-400'>
        <img src="./logo.webp" alt="Logo" className='w-24 h-24 ml-24' />
      </Link>
    </div>
  )
}
