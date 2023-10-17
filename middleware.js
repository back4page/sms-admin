import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req) {
  const { origin, pathname } = req.nextUrl;

  const secret = process.env.NEXTAUTH_SECRET;

  const token = await getToken({ req, secret });

  // if (pathname !== "/sign-in") {
  //   if (!token) {
  //     return NextResponse.redirect(`${origin}/sign-in`);
  //   }
  // } else {
  //   if (token) {
  //     return NextResponse.redirect(`${origin}`);
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/settings",
    "/user-data-list",
    "/users/:path*",
    "/accounts/:path*",
    "/database/:path*",
    "/sign-in",
  ],
};
