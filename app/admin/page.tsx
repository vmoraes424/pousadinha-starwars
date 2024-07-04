/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";

export default function page() {
  const [form, setForm] = useState({
    titulo: "",
    preco: "",
    foto: "",
  });

  const router = useRouter();

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await fetch("http://localhost:3004/quarto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          titulo: form.titulo,
          preco: form.preco,
          foto: form.foto,
        }),
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-star-gray h-screen">
      <Navbar />
      <form
        className="flex flex-col w-1/2 m-auto gap-4"
        onSubmit={handleCreate}
      >
        <h1 className="font-bold text-3xl text-center my-12">
          Criar um quarto
        </h1>
        <div className="flex flex-col gap-3">
          <label htmlFor="titlo" className="text-xl">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            required
            value={form.titulo}
            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
            placeholder="Título do quarto"
            className="p-3 text-black rounded"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="titlo">Preço</label>
          <input
            type="number"
            id="preco"
            required
            value={form.preco}
            onChange={(e) => setForm({ ...form, preco: e.target.value })}
            placeholder="Preço"
            className="p-3 text-black rounded"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="titlo">Foto</label>
          <input
            type="text"
            required
            id="foto"
            value={form.foto}
            onChange={(e) => setForm({ ...form, foto: e.target.value })}
            placeholder="Link da foto"
            className="p-3 text-black rounded"
          />
        </div>
        <button className="bg-star-blue p-3 rounded font-bold mt-6">
          Criar
        </button>
      </form>
    </div>
  );
}
