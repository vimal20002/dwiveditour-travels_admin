import * as Yup from "yup"
export const addTourSchema = Yup.object({
    title:Yup.string().min(3).max(25).required("Please enter a title"),
    price:Yup.string().min(2).max(100).required("Please provide an ammount"),
    imgg:Yup.string().required("Provide an image")
})