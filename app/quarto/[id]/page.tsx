/* eslint-disable @next/next/no-img-element */
import Navbar from '@/app/components/Navbar'
import { Star } from 'lucide-react'
import React from 'react'

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className="bg-star-gray h-screen">
      <Navbar />
      <div className='flex flex-col m-auto gap-24 w-[80%] mt-24 lg:flex-row'>
        <div className='w-full flex flex-col max-h-full lg:w-1/2'>
          <img src="./quarto.jpg" alt="" className='w-full rounded-lg' />
          <div className='flex justify-between p-2'>
            <div className='flex flex-col gap-3'>
              <h1 className='font-bold text-2xl'>Mandalore</h1>
              <p>R$ 400 per noite</p>
            </div>
            <div className='flex gap-1'>
              <Star />
              <p>4,9</p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='h-[550px] flex justify-center bg-star-blue pt-12 rounded-lg'>
            <h1 className='font-bold text-2xl'>Comentários</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
