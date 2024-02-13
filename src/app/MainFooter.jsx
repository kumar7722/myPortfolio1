"use client"
import React from 'react'
import Image from 'next/image'
import sonuCard from '/public/sonucard.jpg'
import { TbSquareArrowUpFilled } from "react-icons/tb";
import GoToTop from './GoToTop';
import { FaDownload } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";


const MainFooter = () => {
  return (
    <>
    <div className='flex justify-center w-full  border border-t-textColor'>
      
<div className='flex'>

       
</div>

      <GoToTop/>
    </div>

    <div className='flex justify-between bg-backgroundFirst border border-t-textColor py-2'>
      <div className='w-1/3'>
      <div className="flex space-x-4 mx-auot my-auto">
        <a href="https://www.linkedin.com/in/sonu-kumar-09a30b169/" target="_blank" rel="noopener noreferrer">
  <span className="text-2xl"><SiLinkedin color='#0075B5' /></span>
</a>

<a href="https://www.facebook.com/SKUMAR7722/" target="_blank" rel="noopener noreferrer">
  <span className="text-2xl"><ImFacebook2 color='#316FF6'/></span>
</a>

<a href="https://twitter.com/SONUKUM85858046" target="_blank" rel="noopener noreferrer">
  <span className="text-2xl"><RiTwitterXLine /></span>
</a> </div>
      </div>
      <div className='w-1/3 h-10 flex justify-center'>
      <button onClick={() => window.open('https://drive.google.com/file/d/1w7_EsQ7G9z3Oy0ZClRtB57P5BlvaCXMe/view?usp=sharing', '_blank')} className="flex justify-center bg-reactColor text-white h-10 p-2 w-full rounded-md">
Resume<FaDownload color='#ffff' className='w-5 h-5 ml-1' />
</button></div>
      <div className='w-1/3'></div>
    </div>
    </>
  )
}

export default MainFooter