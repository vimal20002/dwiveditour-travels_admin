import React, { useEffect, useState } from 'react'
import CardElement from './CardElement'
import "./catalogue.css"
import { useDispatch, useSelector } from 'react-redux'
import { getTour } from './redux/features/adminSlice'
import sch from "./images/search.png"
import lod from "./images/lod.gif"
const AdminBooking = () => {
  const [qr, setQr]=useState("")
  const [data, setData]=useState("")


     const {loading,tours} = useSelector((state)=>({...state.admin}))
     const dispatch = useDispatch();
     useEffect(()=>{
      dispatch(getTour())
      // eslint-disable-next-line
     },[])
     useEffect(()=>{
      setData(tours)
      // eslint-disable-next-line
     },[tours])
     useEffect(()=>{
      // eslint-disable-next-line
     },[data])
     const handleSearch = (e)=>{
      setQr(e.target.value)
      console.log(qr)
      const obj = tours.filter((el)=>{
        return el.title.toLowerCase().startsWith(e.target.value.toLowerCase())===true;
      })
      console.log(obj)
      setData(obj)
     }
  return (<div className='mnn'>
{
  loading? <img src={lod} className='ldd' alt='loader'/>:

         <div className="ct">
          <div className="search-box">
            <input type="text" placeholder='Search in Catalog' value={qr} onChange={(e)=>{
              handleSearch(e)
            }}/>
            <img src={sch} alt="" />
          </div>
          <h3>Your Catalog</h3>
    <div className="catalogue">
          
    {data && data.map((e)=>{
      return <CardElement key={e._id} title={e.title} imgUrl={e.imgUrl} price={e.price} id = {e._id} />
    })}
   </div>
    </div>
}
   </div>
  )
}

export default AdminBooking