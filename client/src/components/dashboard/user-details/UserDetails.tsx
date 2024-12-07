import fetchUsersAction from "../action/fetchUsersAction";
export default async function UserDetails() {
    const users = await fetchUsersAction()
    return (
        <>
            {users.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="border-b py-6 border-gray-300 grid grid-cols-1 sm:grid-cols-6 gap-2 sm:gap-6 text-xs sm:text-sm"
                    >
                        <h1 className="text-gray-500">{item._id}</h1>
                        <h1 className="font-semibold text-gray-600">{item.name}</h1>
                        <h1 className="text-gray-500">{item.email}</h1>
                        <h1 className="text-gray-500">{item.dob}</h1>
                        <h1 className="text-gray-500">{item.phone}</h1>
                        <h1 className="text-gray-500">{item.address}</h1>
                    </div>
                );
            })}
        </>
    )
}