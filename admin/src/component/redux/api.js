import axios from "axios"
const API = axios.create({baseURL:"http://localhost:8000"});
export const addTour = (formValue)=>{
return API.post("/addtour",formValue);
}
export const getTour = ()=>{
    return API.get("/gettour");
}
export const getBookings = (formValue)=>{
    return API.post("/getbookings",formValue);
}
export const delTour = (formValue)=>{
    return API.post("/deltour", formValue);
}
export const updateTour = (formValue)=>{
    return API.patch("/updatetour", formValue);
}
export const delBooking = (formValue)=>{
    return API.post("/delbooking", formValue);
}
export const adminLogin= (formValue)=>{
    return API.post("/adminlogin", formValue);
}
export const getQuerry= (formValue)=>{
    return API.post("/getquerry", formValue);
}
export const delreview= (formValue)=>{
    return API.post("/delreview", formValue);
}