// components/HeroSection.js
"use client"
import React from 'react';
import { useEffect, useRef } from 'react';
import { SiLinkedin } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import Image from 'next/image';
import HeroImage from '../../public/heroImage.png'
import Typed from 'typed.js';




const HeroSection = () => {
  const textRef = useRef();
  useEffect(() => {
    const options = {
      strings: ['Front-end Developer', 'ReactJS Developer', 'NextJS Developer'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    // Initialize the typed.js instance
    const typed = new Typed(textRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="flex flex-col lg:flex-row items-center pb-20 bg-white" id='about'>
      {/* Column 1 - 60% width on large screens */}
      <div className="lg:w-3/5 w-full lg:order-1 sm:order-2 px-28 pt-7">
      <p className='text-2xl font-bold text-reactColor'>Hi, I am</p>
        <h1 className="text-6xl lg:text-6xl font-bold mb-4 text-textColor"> Sonu Kumar</h1>
        <h2 className='text-4xl text-reactColor font-bold'>And I'm <span ref={textRef} className="text-4xl text-textColor font-bold"></span></h2>
        <div className="text-lg text-center mt-4">
    </div>
        <p className="text-lg lg:text-xl text-secondText mb-4">
        I like to code things from scratch, and enjoy bringing ideas to life in the browser and I love what I do.</p>
      
        <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/sonu-kumar-09a30b169/" target="_blank" rel="noopener noreferrer">
  <span className="text-2xl"><SiLinkedin color='#0075B5' /></span>
</a>

<a href="https://www.facebook.com/SKUMAR7722/" target="_blank" rel="noopener noreferrer">
  <span className="text-2xl"><ImFacebook2 color='#316FF6'/></span>
</a>

<a href="https://twitter.com/SONUKUM85858046" target="_blank" rel="noopener noreferrer">
  <span className="text-2xl"><RiTwitterXLine /></span>
</a>


        </div>
      </div>

      {/* Column 2 - 40% width on large screens */}
      <div className="lg:w-2/5 w-full lg:order-2 sm:order-1 pt-4">
        {/* Image */}
        <Image
          width={500}
          height={300}
          className=''
          alt="Sonu Kumar Image"
          src={HeroImage}
        />
      </div>
    </div>
  );
};

export default HeroSection;
