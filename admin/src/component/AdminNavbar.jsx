import React, { useEffect, useState } from 'react'
import logo from './images/logo.png'
import userimg from './images/user.png'
import "./navbar.css"
import menu from './images/menu.png'
import  {Link, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from './redux/features/adminSlice'


function AdminNavbar() {
  const [toolBar, setToolBar]  = useState(0);
  const [menuBar,setMenuBar]=useState(0);


 const {admin} = useSelector((state)=>({...state.admin}));
const dispatch  =useDispatch()
const history = useHistory()
useEffect(()=>{
  if(admin){
    console.log(admin)
 
  }
  // eslint-disable-next-line
},[admin])

 
    var userOp = document.getElementById('user-op');
    var leftOp = document.getElementById('left-options');
    document.onclick = function(e){
      if(userOp||leftOp){
      if(Array.from(e.target.classList).find((element)=>{
        return element==='options'
      }) !== 'options' ){
        //element clicked wasn't the div; hide the div
        setToolBar(0);
       if(admin){
        userOp.style.display = 'none';
       }
      
      }
      if(Array.from(e.target.classList).find((element)=>{
        return element==='l-options'
      }) !== 'l-options' ){
        //element clicked wasn't the div; hide the div
        setMenuBar(0);
        leftOp.style.display = 'none';
      }}
    };

 
  

  const showOption = (e)=>{
    if(admin){
    if(toolBar % 2===0)
    document.getElementById('user-op').style.display = "flex"
    else
    {
      document.getElementById('user-op').style.display = "none"
    }
    setToolBar(toolBar + 1);
  }
  }

  const showMenuOption = (e)=>{
    if(menuBar % 2===0)
    document.getElementById('left-options').style.display = "flex"
    else
    {
      document.getElementById('left-options').style.display = "none"
    }
    setMenuBar(menuBar + 1);

  }



const logOut=()=>{
dispatch(logout({history}))
}








  return (
    <>
    <div className="main-nav">
      <img src={menu} alt="menu" className='menu-icon l-options'  onClick={()=>{showMenuOption()}} />
      <Link to="/">
      <img src={logo} alt="dwivedi" className="logo"/>
      </Link>
      <div className="nav-options" id='nav-options'>
      <div className="btn nav-home"><Link to="/"><h5>Home</h5></Link></div>
      <div className="btn nav-home"><Link to="/bookings"><h5>Bookings</h5></Link></div>
      <div className="btn nav-bookings"><Link to="/addtour"><h5>Add Tour</h5></Link></div>
      <div className="btn nav-bookings"><Link to="/review"><h5>Review</h5></Link></div>
   
      </div>
     
    
    <div className="right-op" >
    <div className="user">
        <img src={userimg} alt="user" className="user-img options"  onClick={()=>{showOption()}} />
       </div>
       {admin || localStorage.getItem("token")?<div className="user-name" >
        <h5 onClick={()=>{showOption()}} className="options">Admin</h5>
       </div>:<h5 className='loginOp'><Link to ="/login"> Log In </Link></h5>}
    </div>
    </div>
    <div className="left-options l-options" id='left-options'>
    <div className="btn nav-home l-options"><Link to="/"><h5 className='l-options'>Home</h5></Link></div>
      <div className="btn nav-home l-options"><Link to="/bookings"><h5 className='l-options'>Bookings</h5></Link></div>
      <div className="btn nav-bookings l-options"><Link to="/addtour"><h5 className='l-options'>Add Tour</h5></Link></div>
      <div className="btn nav-bookings l-options"><Link to="/review"><h5 className='l-options'>Review</h5></Link></div>

      </div>
    {admin && <div className="user-op options" id='user-op'>
      <ul className='options'>
        <li className='options' onClick={()=>{logOut()}}>Log Out</li>
      </ul>
    </div>}
    </>
  )
}

export default AdminNavbar


