import React, { useState } from 'react'
import'./login.css'
import profileimg from './images/profile.png'
import { useHistory} from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { adminLogin } from './redux/features/adminSlice'




const LogIn = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

   const submitForm=()=>{
       const formValue={
        email:email,
        password:password
       }
       console.log(formValue);
       if(formValue.email && formValue.password){
       dispatch(adminLogin({formValue, history}));
       }
   }


  return (
    <div className='mnn'>
    
     <div className="loginForm">
       <img src={profileimg} alt="profileimg" />
      <input type="email" name="email" placeholder='info@example.com' value={email} onChange={(e)=>{setEmail(e.target.value)}} autoFocus  id="email" />
      <input type="password" name="password" placeholder='password' autoFocus value={password} onChange={(e)=>{setPassword(e.target.value)}}  id="password" />
      <div className="book-btn" onClick={()=>{submitForm()}}
      

      >
        
        Log In</div>
     
     </div>
    </div>
  )
}
export default LogIn
