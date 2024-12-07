import { Suspense } from "react"
import UserDetails from "./user-details/UserDetails"
import UserHeader from "./user-header/UserHeader"
import LogoutButton from "./logout-button/LogoutButton"
export default function Dashboard() {
    return (
        <div className="p-4 sm:px-24 space-y-2">
            <h1 className="lg:text-6xl text-4xl text-center text-gray-700 font-bold">Dashboard</h1>
            <h1 className="lg:text-4xl text-2xl text-center text-gray-500 font-semibold"> Register user fetch from Database</h1>
            <LogoutButton />
            <div className="py-10">
                <UserHeader />
                <Suspense fallback={"loading ... "}>
                    <UserDetails />
                </Suspense>
            </div>
        </div>
    )
}