'use client'
import Button from "../reuseable/Button"
import { loginConfig } from "./config/login.config"
import Inputs from "../reuseable/Inputs"
import useFormHandler from "../utils/useFormHandler"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { useRouter } from "next/navigation"
export default function Login() {
    const router = useRouter()
    const formik = useFormHandler(loginConfig, async (formData) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, formData, { withCredentials: true })
            toast.success(response.data.message)
            router.push('/dashboard')
        }
        catch (err) {
            const error = err as { response?: { data?: { message: string } } }
            toast.error(error?.response?.data?.message)
        }
    })
    async function handle() {
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/test`, "f", { withCredentials: true })
            console.log("success")
        }
        catch (err) {
            const error = err as { response?: { data?: { message: string } } }

            console.log(error?.response?.data?.message)
        }
    }
    return (
        <>
            <ToastContainer />
            <form onSubmit={formik.handleSubmit} >
                 <button onClick={handle}>click me</button>
                <div className="space-y-5">
                    {loginConfig.map((item, key) => {
                        return (
                            <div key={item.id}>
                                <Inputs
                                    key={key}
                                    error={formik.touched[item.id] && formik.errors[item.id] && formik.errors[item.id]}
                                    value={formik.values[item.id]}
                                    handleBlur={formik.handleBlur}
                                    handleChange={formik.handleChange}
                                    item={item} />
                            </div>
                        )
                    })}
                </div>
                <Button label="SIGN IN" />
            </form>
        </>

    )
}
