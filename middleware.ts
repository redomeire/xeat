import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req: { nextUrl: { pathname: any, origin: any } }, ev: any) {
    const { pathname, origin } = req.nextUrl

    // console.log(pathname)

    const protectedPath = ['/organizer/make-event', '/check-ticket']
    const authPath = ['/organizer/login', '/organizer/register']

    if (typeof window !== 'undefined') {
        if (window.localStorage.getItem('Authorization') !== '') {
            if (protectedPath.includes(pathname)) {
                return NextResponse.next()
            }
        } else {
            return NextResponse.rewrite('/organizer/login')
        }
    }

    // return NextResponse.rewrite(`${origin}`)
}