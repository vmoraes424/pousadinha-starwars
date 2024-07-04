"use client"

import { useState } from "react";

interface Props {
    params: any
}

export default function Comentario({ params }: Props) {
    const [coment, setComent] = useState("")

    async function comentar() {
        const res = await fetch(`http://localhost:3004/comentarios`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                comentario: coment,
                quarto_id: params?.id
            })
        });
    }
    return (
        <div className='flex absolute bottom-0 mb-12 w-3/4 gap-3'>
            <input type="text" placeholder='Escreva seu comentário'
                className='bg-white p-3 rounded text-black w-full' onChange={(e) => setComent(e.target.value)} value={coment} />
            <button className='bg-star-black text-white px-12 rounded' onClick={comentar}>Comentar</button>
        </div>
    )
}