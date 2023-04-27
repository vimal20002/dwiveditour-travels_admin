import React, { useEffect } from 'react'
import ReviewCard from './ReviewCard'
import { useDispatch, useSelector } from 'react-redux'
import { getQuerry } from './redux/features/adminSlice'
import lod from "./images/lod.gif"

const Reviews = () => {
    const {loading,querry} = useSelector((state)=>({...state.admin}))
    const dispatch =useDispatch()
    useEffect(()=>{
        const formValue ={
            token:JSON.parse(localStorage.getItem("token"))
        }
        dispatch(getQuerry(formValue))
        // eslint-disable-next-line
    },[])
    useEffect(()=>{
    },[querry])
  return (<div className='mnn'>
        {  loading? <img src={lod} className='ldd' alt='loder'/>:
    <div className='main-history'>

                <h2 >Querries</h2>

    {
        querry&&querry?.map((f)=>{
            const e = f.querry;
           return <ReviewCard key={f?._id} name={e?.email} feed={e?.querry} id={f?._id} />
        })
    }
    </div>
}
    </div>
  )
}

export default Reviews