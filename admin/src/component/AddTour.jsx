import React, { useEffect, useState } from 'react'
import './addtour.css'
import addd from "./images/addim.png";
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {toast} from "react-toastify"
import { addTour, updateTour } from './redux/features/adminSlice';

const AddTour = () => {
    const dt = localStorage.getItem("tour");
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTt] = useState(null)
    const [price, setPr] = useState(null)
    const [fl, setFile] = useState(null)
    const [fn, setFn] = useState(null)
    const id = params?.id;
    useEffect(()=>{
        const tourss = JSON.parse(dt)
        if(id){

       const ld=  tourss?.filter((e)=>{
            return e._id === id;
        })
        console.log(ld[0])
        setFile(ld[0].imgUrl)
        setTt(ld[0]?.title);
        document.getElementById("ad").style.border="2px blue solid";
        setPr(ld[0]?.price)
    }
    // eslint-disable-next-line
    },[id])
    useEffect(()=>{
// eslint-disable-next-line
    },[title])
    const handleClick=()=>{
        if(title&&price&&fl)
        {
            const formValue={
                title:title,
                price:price,
                imgUrl:fl,
                _id:id,
                token:JSON.parse(localStorage.getItem("token"))
            }
           
            if(id)
            {
                dispatch(updateTour({formValue, history}))
            }
            else
            {
                dispatch(addTour({formValue,history}));
            }
        }
        else{
            toast.error("Fill All Details")
        }
    }
    const imgTourl = ()=>{
        document.getElementById("ad").style.border="2px blue solid";
        const file = document.querySelector('input[type=file]')['files'][0];
        setFn(file.name)
        const reader = new FileReader();
        reader.onload=()=>{
            const res = reader.result;
            // console.log(res)
            setFile(res)
        }
        reader.readAsDataURL(file)
    }
  return (
    <>
    <div className="mn">

    <div className="main">
        <input type="text" name="title" placeholder='Enter Title of Tour' value={title} onChange={(e)=>{
            setTt(e.target.value)
        }}/>
        <input type="text" name="price" placeholder='Price' value={price} onChange={(e)=>{
            setPr(e.target.value)
        }} />
        <div className="ad" id='ad'>
            <img src={addd} alt="" />
            <h6>{fn}</h6>
        </div>
        <input type="file" name="imgg"  className="fl" id='fl'  onChange={()=>{imgTourl()}}/>
        <div className="bttnn" onClick={handleClick}>Add</div>
    </div>
    </div>
    </>
  )
}

export default AddTour