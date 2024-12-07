'use client'

import logoutAction from "../action/logoutAction"
import { useRouter } from "next/navigation"
export default function LogoutButton() {
    const router = useRouter()
    return (
        <button onClick={() => {
            logoutAction()
            router.refresh()
        }} className="border p-2 hover:bg-black hover:text-white bg-gray-400 font-semibold">Logout</button>
    )
}