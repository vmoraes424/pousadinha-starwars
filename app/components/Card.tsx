/* eslint-disable @next/next/no-img-element */
import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Card({ quarto }: any) {
  return (
    <Link href={`/quarto/${quarto.id}`} className='flex flex-col justify-center items-center w-[450px] hover:cursor-pointer'>
      <div className=''>
        <img src={quarto.foto} alt="" className='w-[450px] h-[270px] bg-white rounded-lg' />
        <div className='flex justify-between p-2'>
          <div>
            <h1>{quarto.titulo}</h1>
            <p>R$ {quarto.preco} per noite</p>
          </div>
          <div className='flex gap-1'>
            <Star />
            <p>{quarto.media ? quarto.media : "0,00"}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
