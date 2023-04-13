import React from 'react'
import './cardelement.css'
import { useDispatch } from 'react-redux'
import {  delTour } from './redux/features/adminSlice';
import { Link } from 'react-router-dom';

const CardElement = ({title,imgUrl,price, id}) => {
  const dispatch = useDispatch();
  const handleDel = ()=>{
    const formValue = {
      _id:id,
      token:JSON.parse(localStorage.getItem("token"))
    }
    console.log(formValue)
    dispatch(delTour({formValue}));
  
  }
  return (<>
    <div className='card-body'>
     
     <img src={imgUrl} alt="image1" />
    
    
            <h2 className='card-title'>{title}</h2>
            <div className="payment-sec">
              <div className="pricing-sec">
              <h2>Price</h2>
              <h3> ₹{price}</h3> 
              </div>
       <Link to = {`update/${id}`}>
              <div className="book-now">
       Edit
       </div>
       </Link> 
              <div className="book-now" onClick={handleDel}>
                 Delete
              </div>
            </div>
        </div>
      </>
  )
}

export default CardElement
