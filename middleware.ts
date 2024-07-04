import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const admin = cookies().get("admin")?.value;
  const requestHeaders = new Headers(request.headers);

  const { pathname } = request.nextUrl;

  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  } else {
    requestHeaders.delete("Authorization");
  }

  if (!token && pathname !== "/login" && pathname !== "/register") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (token && admin && pathname.startsWith("/admin")) {
    try {
      if (admin == "true") {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/nao-autorizado", request.url)); // Redireciona se não for admin
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url)); // Redireciona se o token for inválido
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register", "/admin"],
};
