import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";
import {toast} from "react-toastify"

export const addTour = createAsyncThunk("addtour", async({formValue, history})=>{
try {
    const res = await api.addTour(formValue);
    toast.success("Tour Added Successfiully");
    history.push("/")
    return res;
} catch (error) {
    toast.error(error)
}
})

export const getTour = createAsyncThunk("gettour", async()=>{
    try {
        const res = await api.getTour();
        return res;
    } catch (error) {
        toast.error(error)
    }
    })
    export const delTour = createAsyncThunk("deltour", async({formValue})=>{
        try {
            const res = await api.delTour(formValue);
            toast.success("Deleted Successfully")

            return res;
        } catch (error) {
            toast.error(error)
        }
        })
        export const delBooking = createAsyncThunk("delbooking", async({formValue})=>{
            try {
                const res = await api.delBooking(formValue);
                toast.success("Deleted Successfully")
                return res;
            } catch (error) {
                toast.error(error)
            }
            })
       export const updateTour = createAsyncThunk("updateTour", async({formValue, history})=>{
        try {
            const res = await api.updateTour(formValue);
            toast.success("Updated Successfully")
            history.push("/")
            return res;
        } catch (error) {
            toast.error(error)
        }
        })
 export const getBookings = createAsyncThunk("getBokings", async(formValue)=>      {
const res = await api.getBookings(formValue);
return res;
 })
 export const adminLogin = createAsyncThunk("adminlogin", async({formValue, history}, { rejectWithValue })=>{
    try {
        const res = await api.adminLogin(formValue);
        if(res?.data?.token){
            history.push("/")
            toast.success("Logged In Successfully")
            return res;
        }
        else{
            toast.error(res?.data?.message)
            return rejectWithValue(res?.data?.message)
        }
    } catch (error) {
        toast.error(error)
    }
    })
const adminSlice = createSlice({
    name:"admin",
    initialState:{
        admin:null,
        tours:null,
        bookings:null,
        loading:null,
        error:null,
    },
    extraReducers:{
        [addTour.pending]:(state,action)=>{
            state.loading= true;
        },
        [addTour.fulfilled]:(state,action)=>{
            state.loading = false;
            state.tours= action.payload?.data;

        },
        [addTour.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload?.message
            
        },
        [getTour.pending]:(state,action)=>{
            state.loading= true;
        },
        [getTour.fulfilled]:(state,action)=>{
            state.loading = false;
            state.tours= action.payload?.data;
            localStorage.setItem("tour", JSON.stringify(action.payload?.data))
        },
        [getTour.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload?.message
            
        },
        [delTour.pending]:(state,action)=>{
            state.loading= true;
        },
        [delTour.fulfilled]:(state,action)=>{
            state.loading = false;
            state.tours= action.payload?.data;
            localStorage.setItem("tour", JSON.stringify(action.payload?.data))
        },
        [delTour.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload?.message
            
        },
        [updateTour.pending]:(state,action)=>{
            state.loading= true;
        },
        [updateTour.fulfilled]:(state,action)=>{
            state.loading = false;
            state.tours= action.payload?.data;
            localStorage.setItem("tour", JSON.stringify(action.payload?.data))
        },
        [updateTour.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload?.message
            
        },
        [getBookings.pending]:(state,action)=>{
            state.loading= true;
        },
        [getBookings.fulfilled]:(state,action)=>{
            state.loading = false;
            state.bookings= action.payload?.data;
            localStorage.setItem("bookings", JSON.stringify(action.payload?.data))
        },
        [getBookings.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload?.message
        },
        [delBooking.pending]:(state,action)=>{
            state.loading= true;
        },
        [delBooking.fulfilled]:(state,action)=>{
            state.loading = false;
            state.bookings= action.payload?.data;
            localStorage.setItem("bookings", JSON.stringify(action.payload?.data))
        },
        [delBooking.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload?.message
            
        },
        [adminLogin.pending]:(state,action)=>{
            state.loading= true;
        },
        [adminLogin.fulfilled]:(state,action)=>{
            console.log(action.payload)
            state.loading = false;
            state.admin=true;
            localStorage.setItem("token", JSON.stringify(action.payload?.data?.token))
        },
        [adminLogin.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload?.message
            
        },
    }
})
export default adminSlice.reducer