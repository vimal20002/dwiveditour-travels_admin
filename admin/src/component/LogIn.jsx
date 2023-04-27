import React from 'react'
import'./login.css'
import profileimg from './images/profile.png'
import { useHistory} from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { adminLogin } from './redux/features/adminSlice'
import { useFormik } from 'formik'
import { loginSchema } from '../formSchema/loginSchema'



const LogIn = () => {
  const init = {
    email:"",
    password:"",
  }

  const history = useHistory()
  const dispatch = useDispatch();

   const submitForm=({email,password})=>{
       const formValue={
        email:email,
        password:password
       }
       if(formValue.email && formValue.password){
       dispatch(adminLogin({formValue, history}));
       }
   }
   const {values,handleBlur,handleChange,handleSubmit,errors,touched} = useFormik({
    initialValues:init,
    validationSchema:loginSchema,
    onSubmit:(values)=>{
      submitForm(values)
    }
  })


  return (
    <div className='mnn'>
    <form onSubmit={handleSubmit}>

     <div className="loginForm">
       <img src={profileimg} alt="profileimg" />
       <div>
      <input type="email" name="email" placeholder='info@example.com' value={values.email} onChange={handleChange} onBlur={handleBlur}   id="email" />
       <p className='err'>{touched.email && errors.email?errors.email:null}</p>
       </div>
       <div>
      <input type="password" name="password" placeholder='password'  value={values.password} onChange={handleChange} onBlur={handleBlur}  id="password" />
      <p className='err'>{touched.password && errors.password?errors.password:null}</p>
       </div>
      <button type='submit' className="book-btn" >Log In</button>
     
     </div>
        </form>
    </div>
  )
}
export default LogIn
