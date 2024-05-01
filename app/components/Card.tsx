/* eslint-disable @next/next/no-img-element */
import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface CardProps {
  id: number;
  titulo: string;
  preco: number;
  foto: string;
}

export default function Card({id, titulo, preco, foto}: CardProps) {
  return (
    <Link href={`/quarto/${id}`} className='flex flex-col justify-center items-center w-[450px] hover:cursor-pointer'>
      <div className=''>
        <img src={foto} alt="" className='w-[450px] h-[270px] bg-white rounded-lg' />
        <div className='flex justify-between p-2'>
          <div>
            <h1>{titulo}</h1>
            <p>R$ {preco} per noite</p>
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
