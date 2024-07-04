"use client";

import { Search } from "lucide-react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { Quarto } from "./hooks/useQuarto";
import { useEffect, useState } from "react";

export default function Home() {
  const [quartos, setQuartos] = useState<Quarto[]>([]);

  async function getQuartos() {
    const response = await fetch("http://localhost:3004/quarto", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const quartos = await response.json();
    setQuartos(quartos);
    console.log(quartos);
    return quartos;
  }

  useEffect(() => {
    getQuartos();
  }, []);

  return (
    <div className="bg-star-gray min-h-screen">
      <Navbar />
      <h1 className="font-bold text-3xl text-center my-12">
        Escolha o quarto perfeito para você.
      </h1>
      <div className="flex flex-row gap-2 bg-white w-3/4 md:w-1/2 lg:w-1/3 p-3 rounded-full items-center m-auto">
        <Search color="black" />
        <input
          type="text"
          placeholder="Pesquisar quarto"
          className="text-black focus:outline-none w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 place-items-center m-auto mt-12 gap-12 w-11/12 mb-24">
        {quartos?.map((quarto: Quarto) => (
          <Card
            key={quarto.id}
            foto={quarto.foto}
            id={quarto.id}
            preco={quarto.preco}
            titulo={quarto.titulo}
          />
        ))}
      </div>
    </div>
  );
}
