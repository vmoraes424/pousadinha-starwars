"use client"

import Comentario from '@/app/components/Comentario';
/* eslint-disable @next/next/no-img-element */
import Navbar from '@/app/components/Navbar'
import { Quarto } from '@/app/page';
import { Star } from 'lucide-react'
import React, { useState } from 'react'

export default async function page({ params }: { params: { id: string } }) {

  const res = await fetch(`http://localhost:3004/quarto/${params?.id}`)
  const quarto: Quarto = await res.json();

  return (
    <div className="bg-star-gray h-screen text-white">
      <Navbar />
      <div className='flex flex-col m-auto gap-24 w-[80%] mt-24 lg:flex-row'>
        <div className='w-full flex flex-col max-h-full lg:w-1/2'>
          <img src={quarto?.foto} alt="" className='w-full rounded-lg' />
          <div className='flex justify-between p-2'>
            <div className='flex flex-col gap-3'>
              <h1 className='font-bold text-2xl'>{quarto?.titulo}</h1>
              <p>R$ {quarto?.preco} per noite</p>
            </div>
            <div className='flex gap-1'>
              <Star />
              <p>{quarto?.media ? quarto?.media : "0,00"}</p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='h-[550px] flex justify-center bg-star-blue pt-12 rounded-lg relative'>
            <div className='flex flex-col w-full mx-12 h-[80%] overflow-scroll overflow-x-hidden'>
              <h1 className='font-bold text-2xl h-24 text-center pb-4'>Comentários</h1>
              <div className='flex flex-col gap-6'>
                {quarto?.comentarios?.map((comentario) => (
                  <p key={comentario?.id} className='bg-white text-black w-full p-2 rounded'>{comentario?.comentario}</p>
                ))}
              </div>
            </div>
            <Comentario params={params} />
          </div>
        </div>
      </div>
    </div>
  )
}
