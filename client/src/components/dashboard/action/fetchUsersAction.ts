'use server'
import axios from "axios";
import { cookies } from "next/headers";
type apiResponse = {
    _id: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    dob: string,
}

type userProps = {
    user: apiResponse[]
}
export default async function fetchUsersAction() {
    const cookiestore = await cookies()
    const cookie = cookiestore.get('sessionid')
    try {

        const res = await axios.get<userProps>(`${process.env.NEXT_PUBLIC_SERVER_URL}/fetch-user`, {
            withCredentials: true,
            headers: {
                Cookie: `${cookie?.name}=${cookie?.value}` || '',
            },
        })
        return res.data.user
    }
    catch (err) {
        const error = err as { response?: { data?: { message: string } } }
        console.log(error.response?.data?.message)
        return []
    }
}
