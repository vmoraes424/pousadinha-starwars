"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import React from "react";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="bg-star-black h-[100px]">
      <div className="flex justify-between mx-24">
        <Link href={"/"} className="w-24">
          <img src="./logo.webp" alt="Logo" className="w-24 h-24" />
        </Link>
        <div className="flex justify-center items-center gap-5">
          <h2
            className="text-white cursor-pointer"
            onClick={() => {
              router.push("/admin");
            }}
          >
            Admin
          </h2>
          <h2
            className="text-white cursor-pointer bg-star-blue p-2 rounded"
            onClick={() => {
              destroyCookie(null, "token");
              destroyCookie(null, "admin");
              router.push("/login");
            }}
          >
            Deslogar
          </h2>
        </div>
      </div>
    </div>
  );
}
