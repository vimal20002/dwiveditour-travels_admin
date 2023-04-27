import React, { useEffect, useState } from 'react'
import './addtour.css'
import addd from "./images/addim.png";
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {toast} from "react-toastify"
import { addTour, getTour, updateTour } from './redux/features/adminSlice';
import {useFormik} from "formik"
import { addTourSchema } from '../formSchema/addTour';
const AddTour = () => {
    const [dt,setDt]=useState()
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [init,setInit] = useState({
        title:"",
        price:"",
        imgg:null,
    })
    const [fl, setFile] = useState(null)
    const [fn, setFn] = useState(null)
    const id = params?.id;
    useEffect(()=>{
        dispatch(getTour())
    },[])
    const {tours} = useSelector((state)=>({...state.admin}))
    useEffect(()=>{
        setDt(tours)
        if(id){

            const ld=  dt?.filter((e)=>{
                 return e._id === id;
             })
             console.log(ld)
             const obj = ld&&ld[0];
             setFile(obj?.imgUrl)
             setValues({title:obj?.title,price:obj?.price,imgg:obj?.imgUrl})
             document.getElementById("ad").style.border="2px blue solid";
         }
         // eslint-disable-next-line
    },[tours,id])
    //formik
    const {values,handleBlur,handleChange,handleSubmit,errors,touched,setValues} = useFormik({
        initialValues:init,
        validationSchema:addTourSchema,
        onSubmit:(values)=>{
            console.log(values)
            handleClick(values.title,values.price)
        }
    })
   
    console.log(values)
    useEffect(()=>{
// eslint-disable-next-line
    },[init])
    const handleClick=(title,price)=>{
        console.log(title,price,fl)
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
            console.log(res)
            setFile(res)
            setValues({...values,imgg:res})
        }
        reader.readAsDataURL(file)
    }
    
   
  return (
    <>
    <div className="mn">

        <form onSubmit={handleSubmit}>
    <div className="main">
        <h3>Add Tour</h3>
            <div>

        <input type="text" name="title" placeholder='Enter Title of Tour' value={values.title}  onChange={handleChange}
                      onBlur={handleBlur}/>
                      <p className='err'>{errors.title&&touched.title?errors.title:null}</p>
                      </div>
                      <div>

        <input type="text" name="price" placeholder='Price' value={values.price}  onChange={handleChange}
                      onBlur={handleBlur} />
                    <p className='err'>{errors.price&&touched.price?errors.price:null}</p>
                      </div>
        <div className="ad" id='ad'>
            <img src={addd} alt="" />
            <h6>{fn}</h6>
        <p className='err'>{errors.imgg&&touched.imgg?errors.imgg:null}</p>
        </div>

        <input type="file" name="imgg"  className="fl" id='fl' value={undefined}  onChange={()=>{imgTourl()}}/>

        <button className="bttnn" type='submit' >Add</button>
    </div>
        </form>
    </div>
    </>
  )
}

export default AddTour