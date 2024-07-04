"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const [usuario, setUsuario] = React.useState({ login: "", senha: "" });

  const { login } = useLogin();

  const router = useRouter();

  async function handleLogin() {
    try {
      const data = await login(usuario.login, usuario.senha);
      if (data?.token) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen bg-star-gray flex items-center justify-center">
      <div className="max-w-[450px] flex flex-col justify-center items-center mb-44">
        <img src="./logo.webp" alt="Logo" className="w-56" />
        <h1 className="font-bold text-3xl text-center mb-12">Login</h1>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            className="p-3 rounded text-black"
            placeholder="Login"
            value={usuario.login}
            onChange={(e) => setUsuario({ ...usuario, login: e.target.value })}
          />
          <input
            type="password"
            className="p-3 rounded text-black"
            placeholder="Senha"
            value={usuario.senha}
            onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
          />
          <button
            className="bg-star-blue p-3 rounded font-bold"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
