import { NextResponse, NextRequest } from 'next/server'
import { getCookie } from "cookies-next";

export async function middleware(req: NextRequest, ev: any) {
    // const { pathname, origin } = req.nextUrl
    // { nextUrl: { pathname: any, origin: any } }

    // console.log(pathname)

    const protectedPath = ['/organizer/make-event', '/check-ticket']
    const authPath = ['/organizer/login', '/organizer/register']

    const cookie = req.cookies.get('auth')

    const checkAuth = (cookie: any) => {
        if (cookie !== undefined)
            return true

        return false
    }
    // console.log(cookie)
    if (req.nextUrl.pathname.startsWith('/organizer/make-event')) {
        if (checkAuth(cookie))
            return NextResponse.next()
        else
            return NextResponse.redirect(new URL('/organizer/login', req.url))
    }
    if (req.nextUrl.pathname === '/organizer/login') {
        if (checkAuth(cookie))
            return NextResponse.redirect(new URL('/organizer/make-event', req.url))
        else
            return NextResponse.next()
    }
    if (req.nextUrl.pathname === '/organizer/register') {
        if (checkAuth(cookie))
            return NextResponse.redirect(new URL('/organizer/make-event', req.url))
        else
            return NextResponse.next()
    }
    if (req.nextUrl.pathname === '/check-ticket') {
        if (checkAuth(cookie))
            return NextResponse.next()
        else
            return NextResponse.redirect(new URL('/organizer/login', req.url))
    }
}


    // return NextResponse.rewrite(`${origin}`)
// }