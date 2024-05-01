"use client"

import React, { createContext, useContext, useState } from "react";

interface LoginContextType {
  login: (login: string, senha: string) => Promise<any>;
  navigate: (url: string) => Promise<any>;
  token: string;
}

const LoginContext = createContext<LoginContextType>({
  login: async () => {},
  navigate: async () => {},
  token: "",
});

export const useLogin = () => {
  return useContext(LoginContext);
};

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const URL = "http://localhost:3004";
  const [token, setToken] = useState("");

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
      setToken(data.token);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  async function navigate(url: string) {
    const res = await fetch(URL + url, {
      headers: {
        Authorization: `Bearer ${token ? token : ""}`,
      },
    });
    return res.json();
  }

  const contextValue: LoginContextType = {
    login,
    navigate,
    token,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};
