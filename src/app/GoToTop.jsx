"use client"
import React from 'react';
import { TbSquareArrowUpFilled } from "react-icons/tb";

const GoToTop = () => {
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <div  style={{position: 'fixed', bottom: '0', right: '2rem', zIndex: '999'}}>
            <TbSquareArrowUpFilled color='#3998B6' className='w-14 h-14' onClick={goToBtn} />
        </div>
    );
};

export default GoToTop;
