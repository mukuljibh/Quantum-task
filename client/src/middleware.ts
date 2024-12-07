import { cookies } from "next/headers"
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
export default async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone()
    const { isValidSession } = await validateSession('sessionid')
    if (!isValidSession) {
        url.pathname = '/'
        return NextResponse.redirect(url)
    }
    return NextResponse.next()


}
export const config = {
    matcher: ['/dashboard'],
}

export async function validateSession(id: string) {
    const cookieStore = await cookies()
    const token = cookieStore.get(id)?.value;

    if (!token) return { flag: false };

    try {
        const decoded = await jwtVerify(token,
            new TextEncoder().encode(process.env.ACCESS_TOKEN_KEY || "")
        )

        return { isValidSession: true, decoded };
    } catch (err) {
        return { isValidSession: false, err };
    }
}