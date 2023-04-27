import React from 'react'
import "./historycard.css"
import tel from "./images/tele.png"
import del from "./images/delete.png"
import { useDispatch } from 'react-redux'
import { delBooking } from './redux/features/adminSlice'

const Historycard = ({name,email,pickup,destination,time,date, phone, status, id}) => {
  const dispatch = useDispatch();
 const  handleDel = ()=>{
  const formValue = {
    _id:id,
    token:JSON.parse(localStorage.getItem("token"))
  }
  dispatch(delBooking({formValue}))
 }
  return (
    <div className='mnn'>
      <div className="main-history-card">
        <div className="name"><h4>Name :</h4>{name}</div>
        <div className="email"><h4>Email :</h4> {email}</div>
        <div className="pickloc"><h4>Pickup :</h4> {pickup}</div>
        <div className="dest"><h4>Destination :</h4>{destination}</div>
        <div className="dest"><h4>Date :</h4>{date}</div>
        <div className="time"><h4>Time :</h4> {time}</div>
        <div className="time"><h4>Status :</h4> {status ? "Paid":"Unpaid"}</div>
      </div>
        <div className="btnn">
          <a href={`tel:${phone}`}>

        <img src={tel} alt="tele" className='tel' />
          </a>
        <img src={del} alt="tele" className='tel' onClick={handleDel} />

        </div>
    </div>
  )
}

export default Historycard
