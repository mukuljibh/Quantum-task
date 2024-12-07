import { fieldValidationProps } from "@/components/utils/formUtils"
export const loginConfig: fieldValidationProps[] = [
    { label: "Email", id: "email", type: "text", placeholder: "Enter your email", required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/, message: "Enter valid email" },
    { label: "Password", id: "password", type: "password", placeholder: "Enter your password", noSpaces: true, message: "Spaces are not allowed in passwords" },
]
