export default function Button({ label }: { label: string }) {
    return (
        <div className="space-y-5">
            <button type="submit" className=" h-11 w-80 text-white bg-amber-950 hover:bg-black  cursor-pointer">{label}</button>
        </div>
    )
}