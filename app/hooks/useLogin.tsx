"use client";

import React, { createContext, useContext, useState } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";

interface LoginContextType {
  login: (login: string, senha: string) => Promise<any>;
}

const LoginContext = createContext<LoginContextType>({
  login: async () => {},
});

export const useLogin = () => {
  return useContext(LoginContext);
};

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const login = async (login: string, senha: string) => {
    try {
      const res = await fetch("http://localhost:3004/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: login,
          senha: senha,
        }),
      });

      const data = await res.json();
      setCookie(null, "token", data?.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setCookie(null, "admin", data?.admin, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      localStorage.setItem("token", data?.token);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue: LoginContextType = {
    login,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};
