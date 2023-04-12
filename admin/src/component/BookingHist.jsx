import React, { useEffect, useState } from 'react'
import "./bookinghist.css"
import Historycard from './Historycard'
import { useDispatch, useSelector } from 'react-redux'
import { getBookings } from './redux/features/adminSlice'
const BookingHist = () => {
    const [data, setDt]=useState(null)
    const dispatch = useDispatch()
    const {bookings} = useSelector((state)=>({...state.admin}));
    useEffect(()=>{
      dispatch(getBookings({ token:JSON.parse(localStorage.getItem("token"))
    }))
      setDt(bookings);
      setDt(JSON.parse(localStorage.getItem("bookings")))
      // eslint-disable-next-line
    },[])
    useEffect(()=>{
      setDt(bookings);
      // eslint-disable-next-line
    },[bookings])

    
  return (
    <>
    <div className="main-history">
        <h4 className="heading">Past Bookings</h4>
      {
        data && Array.from(data).map((k)=>{
          const e = k.bookings;

            return <Historycard key={e._id} name={e?.name} email={e?.email} pickup={e?.pickLoc} destination={e?.dest} date = {e?.date} time={e?.time} id={k?._id}    status={e?.status}  phone={e?.phone} />
        })
      }
        </div>  
    </>
  )
}

export default BookingHist
