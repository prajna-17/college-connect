import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Skip all static files and api routes
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml|pdf)$).*)",
  ],
};