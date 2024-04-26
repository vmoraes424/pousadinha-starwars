/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function page() {
  return (
    <div className='h-screen bg-star-gray flex items-center justify-center'>
      <div className='max-w-[450px] flex flex-col justify-center items-center mb-44'>
        <img src="./logo.webp" alt="Logo" className='w-56' />
        <h1 className='font-bold text-3xl text-center mb-12'>Login</h1>
        <div className='flex flex-col gap-3'>
          <input type="text" className='p-3 rounded text-black' placeholder='Login'/>
          <input type="password" className='p-3 rounded text-black' placeholder='Senha'/>
          <button className='bg-star-blue p-3 rounded font-bold'>Login</button>
        </div>
      </div>
    </div>
  )
}
