'use client'
import Button from "../reuseable/Button"
import { registerConfig } from "./config/register.config"
import Inputs from "../reuseable/Inputs"
import useFormHandler from "../utils/useFormHandler"
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const formik = useFormHandler(registerConfig, async (formData) => {
        try {
            const response = await axios.post('http://localhost:8000/register', formData)
            toast.success(response.data.message)
        }
        catch (err) {
            const error = err as { response?: { data?: { message: string } } }
            toast.error(error.response?.data?.message)
        }
    })
    return (
        <>
            <ToastContainer />
            <form onSubmit={formik.handleSubmit} >
                <div className="space-y-1">
                    {registerConfig.map((item, key) => {
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
                <Button label="SIGN UP" />
            </form>
        </>
    )
}