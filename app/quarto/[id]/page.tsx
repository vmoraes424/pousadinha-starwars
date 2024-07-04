/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";

import Navbar from "@/app/components/Navbar";
import { Quarto } from "@/app/hooks/useQuarto";
import { Star } from "lucide-react";
import React, { useEffect } from "react";

export default function page({ params }: { params: { id: string } }) {
  const [quarto, setQuarto] = React.useState<Quarto | null>(null);

  async function getQuarto() {
    const res = await fetch(`http://localhost:3004/quarto/${params.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const quarto: Quarto = await res.json();
    setQuarto(quarto);
    return quarto;
  }

  useEffect(() => {
    getQuarto();
  }, []);

  return (
    <div className="bg-star-gray h-screen text-white">
      <Navbar />
      <div className="flex flex-col m-auto gap-24 w-[80%] mt-24 lg:flex-row">
        <div className="w-full flex flex-col max-h-full lg:w-1/2">
          <img src={quarto?.foto} alt="" className="w-full rounded-lg" />
          <div className="flex justify-between p-2">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-2xl">{quarto?.titulo}</h1>
              <p>R$ {quarto?.preco} per noite</p>
            </div>
            <div className="flex gap-1">
              <Star />
              <p>{quarto?.media ? quarto?.media : "0,00"}</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="h-[550px] flex justify-center bg-star-blue pt-12 rounded-lg relative">
            <h1 className="font-bold text-2xl">Comentários</h1>
            <div className="flex absolute bottom-0 mb-12 w-3/4 gap-3">
              <input
                type="text"
                placeholder="Escreva seu comentário"
                className="bg-white p-3 rounded text-black w-full"
              />
              <button className="bg-star-black text-white px-12 rounded">
                Comentar
              </button>
            </div>
            <Comentario params={params} />
          </div>
        </div>
      </div>
    </div>
  );
}
