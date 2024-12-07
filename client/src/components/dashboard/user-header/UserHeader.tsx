export default function UserHeader() {
    return (
        <div className=" border-b-2 py-4 border-gray-300 lg:grid grid-cols-6  sm:grid-cols-6 gap-2 sm:gap-6 hidden text-xs sm:text-sm">
            <h1 className="text-gray-600 font-semibold">#</h1>
            <h1 className="font-semibold text-gray-600">Name</h1>
            <h1 className="text-gray-600 font-semibold">Email</h1>
            <h1 className="text-gray-600 font-semibold">DOB</h1>
            <h1 className="text-gray-600 font-semibold">Phone</h1>
            <h1 className="text-gray-600 font-semibold">Address</h1>
        </div>
    )
}