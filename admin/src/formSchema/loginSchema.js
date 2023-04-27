import * as Yup from "yup"
export const loginSchema =  Yup.object({
    email:Yup.string().email().required("Please enter an email"),
    password:Yup.string().min(6).required("Enter your password"),
})