import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__left">
           <img src="https://preview.colorlib.com/theme/course/images/logo.png"/>
           <span>Course</span>
        </div>

        <div className="navbar__middle">
        <Link className='link' to={'/'}>Home</Link>
        <Link className='link' to={'/About'}>About</Link>
        <Link className='link' to={'/Courses'}>Courses</Link>
        <Link className='link' to={'/Elements'} >Elements</Link>
        <Link className='link' to={'/News'}>News</Link>  
        <Link className='link' to={'/Contact'}>Contact</Link>  
        <Link className='link' to={'/Add'}>Add</Link>  
        
        </div>

       <div className="navbar__middlee">
        <div className="navbar__middle">
        <img  className="image" src="https://preview.colorlib.com/theme/course/images/phone-call.svg"/>
        <span>+43 4566 7788 2457</span>
        </div>

        </div>
    
    </div>
  )
}

export default Navbar