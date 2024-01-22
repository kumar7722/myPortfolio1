import React from 'react'
import Image from 'next/image'
import sonuCard from '/public/sonucard.jpg'
import { TbSquareArrowUpFilled } from "react-icons/tb";


const MainFooter = () => {
  return (
    <>
    <div className='flex justify-between w-full bg-backgroundFirst border border-t-textColor'>
      <div>social Contact </div>
      <div>
      {/* <Image
          width={200}
          height={100}
          className="mx-auto"
          alt="My card"
          src={sonuCard}
        /> */}
      </div>
      <div><TbSquareArrowUpFilled color='#3998B6' className='w-16 h-16'  /></div>
    </div>
    </>
  )
}

export default MainFooter