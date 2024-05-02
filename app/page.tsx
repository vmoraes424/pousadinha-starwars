import { Search } from "lucide-react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export interface Quarto {
  id: number;
  titulo: string;
  preco: number;
  foto: string;
  media: number;
  comentarios: Comentario[];
}

export interface Comentario {
  comentario: string;
  id: string;
}

export default async function Home() {

  const res = await fetch("http://localhost:3004/quarto")
  const data = await res.json()

  return (
    <div className="bg-star-gray min-h-screen text-white">
      <Navbar />
      <h1 className="font-bold text-3xl text-center my-12">Olá! Escolha o quarto perfeito para você.</h1>
      <div className="flex flex-row gap-2 bg-white w-3/4 md:w-1/2 lg:w-1/3 p-3 rounded-full items-center m-auto">
        <Search color="black" />
        <input type="text" placeholder="Pesquisar quarto" className="text-black focus:outline-none w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 place-items-center m-auto mt-12 gap-12 w-11/12 mb-24">
        {data.map((quarto: Quarto) => (
          <Card quarto={quarto} />
        ))}
      </div>
    </div>
  );
}
