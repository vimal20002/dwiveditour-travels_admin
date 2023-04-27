import React, { useEffect, useState } from 'react'
import "./bookinghist.css"
import Historycard from './Historycard'
import { useDispatch, useSelector } from 'react-redux'
import { getBookings } from './redux/features/adminSlice'
import lod from "./images/lod.gif"
import sch from "./images/search.png"
const options = [{id: 0, label: "Email"}, {id: 1, label: "Name"}, {id: 2, label: "Phone"}, {id: 3, label: "Pickup Location"}, {id: 4, label: "Destination"}, {id: 5, label: "Payement Status"}];
const BookingHist = () => {
    const dispatch = useDispatch()
    const [data,setData]=useState(null)
    const [qr, setQr]=useState("")
    const [type, setType]=useState("")
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(options);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);

    const {bookings} = useSelector((state)=>({...state.admin}));
    const {loading} = useSelector((state)=>({...state.admin}))
    
    const toggleDropdown = () => setOpen(!isOpen);
    
    const handleItemClick = (id) => {
      selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
      console.log(options.filter((e)=>{
        return e.id==id;
      }))
      setType(options.filter((e)=>{
        return e.id==id;
      })[0].label)
    }
    
    useEffect(()=>{
      dispatch(getBookings({ token:JSON.parse(localStorage.getItem("token"))
    }))
      
      // eslint-disable-next-line
    },[])
    useEffect(()=>{
      setData(bookings)
      
      // eslint-disable-next-line
    },[bookings])
    useEffect(()=>{
      console.log(data)
    },[data])
    useEffect(()=>{
console.log(type)
    },[type])
    const handleSearch=(e)=>{
      setQr(e.target.value)
      console.log(qr)
      if(type==="Email"){

      const obj1 = bookings?.filter((el)=>{
        return el?.email?.toLowerCase().startsWith(e.target.value.toLowerCase())===true;
      })
      setData(obj1)
    }
      if(type==="Phone"){
        console.log(e.target.value)
      const obj2 = bookings?.filter((el)=>{
        return el?.phone?.startsWith(e.target.value)===true;
      })
      setData(obj2)
    }
    if(type==="Name"){

      const obj3 = bookings?.filter((el)=>{
        return el?.name?.toLowerCase().startsWith(e.target.value.toLowerCase())===true;
      })
      setData(obj3)
    }
    if(type==="Pickup Location"){

      const obj4 = bookings?.filter((el)=>{
        return el?.pickLoc?.toLowerCase().startsWith(e.target.value.toLowerCase())===true;
      })
      setData(obj4)
    }
    if(type==="Destination"){

      const obj5 = bookings?.filter((el)=>{
        return el?.dest?.toLowerCase().startsWith(e.target.value.toLowerCase())===true;
      })
      setData(obj5)
    }
    if(type==="Date"){
      const obj6 = bookings?.filter((el)=>{
        return el?.date?.toLowerCase().startsWith(e.target.value.toLowerCase())===true;
      })
      setData(obj6)
    }
    if(type==="Time"){

      const obj7 = bookings?.filter((el)=>{
        const tm = e.target.value;
        const valgen=el?.time;
        if(tm[0]===valgen[0] &&tm[1]===valgen[1] ){
          return true;
        }
      })
      setData(obj7)
    }
    if(type==="Payement Status"){

      const obj8 = bookings?.filter((el)=>{
        const vl=el?.paid?"paid":"unpaid";
        console.log(vl)
        return vl.toLowerCase().startsWith(e.target.value.toLowerCase());
      })
      setData(obj8)
    }
    }
    const handleIt=(e,tp)=>{
      setType(tp)
      handleSearch(e)
    }
    
  return (
    <>
    <div className="main-history">
      {
          loading? <img src={lod} className='ldd' alt='loader'/>:

      <>
      <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : "Choose fiter"}
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items?.map(item => (
          <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
            <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
      <div className="top">
       <div className="search-box sh">
            <input type="text" placeholder='Search in Booking' value={qr} onChange={(e)=>{
              handleSearch(e)
            }}/>
            <img src={sch} alt="" />
          </div>

 
    
    <div className="dts">
      <input type="date" placeholder='Choose Date' value={date}  onChange={(e)=>{setDate(e.target.value); handleIt(e,"Date")}} />
    </div>
    <div className="ts">
      <input type="time" placeholder='Chhose Time' value={time}  onChange={(e)=>{setTime(e.target.value); handleIt(e,"Time")}}/>
    </div>
    </div>
  
        <div className="crds">
        <h4 className="heading">Past Bookings</h4>
      {
        data&&data?.map((e)=>{
          
            return <Historycard key={e?._id} name={e?.name} email={e?.email} pickup={e?.pickLoc} destination={e?.dest} date = {e?.date} time={e?.time} id={e?._id}    status={e?.paid}  phone={e?.phone} />
        })
      }
      </div>
      </>
      }
        </div>  
    </>
  )
}

export default BookingHist
