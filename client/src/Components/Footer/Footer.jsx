import React from 'react'
import { BsPinterest } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
        <div className='footer__container'>
        <div className='left'>
        Copyright ©2023 All rights reserved | This template is made with <AiFillHeart/> <span>by Colorlib</span> 
        </div>
        <div className='right'>

                    <span>
                    <BsPinterest/>
                    </span>
                <span>
                <AiFillLinkedin/>
                </span>
                <span>
                <AiFillInstagram/>
                </span>
                <span><BsFacebook/></span>
                
                <span><AiFillTwitterCircle/>
</span>
        </div>
        </div>
        
    </footer>
  )
}

export default Footer