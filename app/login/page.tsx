"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Login() {
  const [usuario, setUsuario] = React.useState({ login: '', senha: '' });
  const router = useRouter();

  async function login() {
    try {
      const response = await fetch("http://localhost:3004/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: usuario.login,
          senha: usuario.senha
        }) 
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer login");
      }

      // Se a resposta for bem-sucedida, redireciona para outra página, por exemplo
      router.push('/');
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <div className='h-screen bg-star-gray flex items-center justify-center text-white'>
      <div className='max-w-[450px] flex flex-col justify-center items-center mb-44'>
        <img src="./logo.webp" alt="Logo" className='w-56' />
        <h1 className='font-bold text-3xl text-center mb-12'>Login</h1>
        <div className='flex flex-col gap-3'>
          <input type="text" className='p-3 rounded text-black' placeholder='Login'
            value={usuario.login} onChange={(e) => setUsuario({ ...usuario, login: e.target.value })} />
          <input type="password" className='p-3 rounded text-black' placeholder='Senha'
            value={usuario.senha} onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })} />
          <button className='bg-star-blue p-3 rounded font-bold' onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
}
