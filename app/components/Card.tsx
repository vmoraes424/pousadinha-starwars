/* eslint-disable @next/next/no-img-element */
import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Card() {
  return (
    <Link href={"/quarto/1"} className='flex flex-col justify-center items-center w-[450px] hover:cursor-pointer'>
      <div className=''>
        <img src="./quarto.jpg" alt="" className='w-[450px] h-[270px] bg-white rounded-lg' />
        <div className='flex justify-between p-2'>
          <div>
            <h1>Mandalore</h1>
            <p>R$ 400 per noite</p>
          </div>
          <div className='flex gap-1'>
            <Star />
            <p>4,9</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
