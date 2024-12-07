import { fieldValidationProps } from "@/components/utils/formUtils"
export const registerConfig: fieldValidationProps[] = [
    {
        label: "Full Name", id: "name", type: "text", placeholder: "Enter your full name", required: true, pattern: /^([a-z0-9]*[a-z]){3}[a-z0-9]*$/, message: "Full name must be at least 3 character long"
    },
    { label: "Email", id: "email", type: "email", placeholder: "Email", required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/, message: "Enter valid email" },
    { label: "Date of birth", id: "dob", type: "text", placeholder: "Date of birth", required: true, },
    { label: "Phone", id: "phone", type: "text", placeholder: "Phone no.", required: true, pattern: /^[1-9]{1}[0-9]{9}$/, message: "Phone must be 10 digits starting with a non-zero digit" },
    { label: "Address", id: "address", type: "textarea", placeholder: "Enter your full address", required: true, },
    { label: "Password", id: "password", type: "password", placeholder: "Enter your password", required: true, noSpaces: true, message: "Spaces are not allowed" },
    { label: "Confirm Password", id: "confirmpassword", type: "password", placeholder: "Confirm your password", required: true, ref: "password", noSpaces: true, message: "password not match" },
]
