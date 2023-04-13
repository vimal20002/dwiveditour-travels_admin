import React from 'react'
import del from "./images/delete.png"
import { useDispatch } from 'react-redux'
import { delreview } from './redux/features/adminSlice'
const ReviewCard = ({name,feed, id,setDt,data}) => {
    const dispatch  = useDispatch()
    const handleDel =()=>{
        const formValue = {
            _id:id,
            token:JSON.parse(localStorage.getItem("token"))
        }
        setDt(data.filter((e)=>{
            return e._id!==id;
        }))
        dispatch(delreview({formValue}))
    }
  return (
    <div className='mnn'>
          <div className="main-history-card">
<h5>{name}</h5>
<p>{feed}
</p>
<div className="btnn">
<img src={del} alt="tele" className='tel' onClick={handleDel} />
</div>
</div>
    </div>
  )
}

export default ReviewCard