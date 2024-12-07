import Login from "@/components/login-page/Login";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-center mt-20 mb-20 ">
      <div className="space-y-12 ">
        <h1 className="lg:text-3xl text-xl text-center font-bold">SIGN IN </h1>
        <div className="flex lg:gap-72 gap-32 justify-center font-medium border-b-2 lg:pl-16 lg:pr-16 px-4 pb-5">
          <Link href="/">ALREADY REGISTERED?</Link>
          <Link href="/register">NEW TO HOKMAKEUP?</Link>
        </div>
        <div className="flex justify-center">
          <div className="space-y-8 ">
            <Login />
          </div>
        </div>
      </div>
    </div >
  );
}
