import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'
import { useDispatch } from 'react-redux'
import { getQuerry } from './redux/features/adminSlice'

const Reviews = () => {
    const [data,setDt]=useState([])
    const dt = JSON.parse(localStorage.getItem("querry"));
    const dispatch =useDispatch()
    useEffect(()=>{
        const formValue ={
            token:JSON.parse(localStorage.getItem("token"))
        }
        dispatch(getQuerry(formValue))
        setDt(dt)
        // eslint-disable-next-line
    },[])
    useEffect(()=>{
        console.log(data)
    },[data])
  return (<div className='mnn'>
    <div className='main-history'>
                <h2 >Querries</h2>

                <ReviewCard name="vim" feed="vdbdbj" id="bgch" data={data} setDt ={setDt} />
    {
        data?.map((f)=>{
            const e = f.querry;
            console.log(e)
           return <ReviewCard name={e?.email} feed={e?.querry} id={f?._id} data={data} setDt ={setDt}/>
        })
    }
    </div>
    </div>
  )
}

export default Reviews