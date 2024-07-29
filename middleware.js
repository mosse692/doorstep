import { NextResponse } from 'next/server';
import { decrypt } from '@/app/lib/sessions';
import { cookies } from 'next/headers';

// 1. Specify protected and public routes
const protectedRoutes = ['/', '/commercial/to-sale', '/commercial/to-rent', '/all-agents', '/blog', '/for-rent', '/for-sale', '/new-development', '/valuate'];
const publicRoutes = ['/login', '/signup'];

export default async function middleware(req) {
    // console.log(req)
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  // 4. Redirect
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/auth/login', req.nextUrl));
  }

  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith('/')
  ) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  return NextResponse.next();
}