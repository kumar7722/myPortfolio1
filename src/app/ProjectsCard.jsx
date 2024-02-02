import React from 'react'
import Image from 'next/image'
import mentorpalImage from '../../public/mentorpalHomeImage.jpg'
import cityluxe from '../../public/cityluxe.jpg'
import { TbWorldWww } from "react-icons/tb";
import wwwImage from '../../public/www.png'
import { TiSocialLinkedinCircular } from "react-icons/ti";



const ProjectsCard = () => {
  return (
    <>
        
{/* first card */}
<div class="mr-2 w-64 h-auto bg-[#edf2f8] max-w-sm border border-black hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg shadow">
    <a href="https://mentorpal.ai">
        <Image class="p-8 rounded-t-lg" 
          width={300}
          height={300} src={mentorpalImage} alt="product image" />
    </a>
    <div class="px-2 pb-5">
        
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Mentorpal</h5>
        
        <div class="items-center mt-2.5 mb-3 flex-wrap">
           <span className='text-textColor border-1 border-textColor rounded-md p-0.5'>Javascript</span>
           <span className='text-textColor border-1 border-textColor rounded-md p-0.5 mx-2'>ReactJS</span>
           <span className='text-textColor border-1 border-textColor rounded-md p-0.5'>Redux</span>
           
        </div>
        <div class="items-center mb-3 flex-wrap">
        <span className='text-textColor border-1 border-textColor rounded-md p-0.5 mr-1'>Bootstrap</span>
           <span className='text-textColor border-1 border-textColor rounded-md p-0.5 ml-1'>AntD</span>
    </div>
    <p>This is a mentorship platform, built with ReactJS, Redux, Bootstrap, AntD etc.</p>
           <div className='flex justify-center mt-2'><a href="#">
                  <Image
                    class="rounded-t-lg mr-2"
                    width={100}
                    height={100}
                    src={wwwImage}
                    style={{ width: "25px", height: "25px" }}
                    alt="product image"
                  />
                </a>
    <a href="#" className='text-4xl ml-2 -mt-1'><TiSocialLinkedinCircular color="#0075B5" /></a></div>

        </div>
</div>
{/* second card */}

<div class="ml-2 w-64 h-auto bg-backgroundFirst max-w-sm border border-black hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <Image class="p-8 rounded-t-lg" 
          width={300}
          height={300} src={cityluxe} alt="product image" />
    </a>
    <div class="px-2 pb-5">
        
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">CityLuxe</h5>
        
        <div class="items-center mt-2.5 mb-3 flex-wrap">
           <span className='text-textColor border-1 border-textColor rounded-md p-0.5'>Javascript</span>
           <span className='text-textColor border-1 border-textColor rounded-md p-0.5 mx-2'>ReactJS</span>
           <span className='text-textColor border-1 border-textColor rounded-md p-0.5'>Redux</span>
           
        </div>
        <div class="items-center mb-3 flex-wrap">
        <span className='text-textColor border-1 border-textColor rounded-md p-0.5 mr-1'>Bootstrap</span>
           <span className='text-textColor border-1 border-textColor rounded-md p-0.5 ml-1'>MaterialUI</span>
    </div>
    <p>This is a property selling platform built with ReactJS, Redux, MaterialUI.</p>
           <div className='flex justify-center mt-3'><a href="https://cityluxedxb.com">
                  <Image
                    class="rounded-t-lg mr-2"
                    width={100}
                    height={100}
                    src={wwwImage}
                    style={{ width: "25px", height: "25px" }}
                    alt="product image"
                  />
                </a>
    <a href="#" className='text-4xl ml-2 -mt-1'><TiSocialLinkedinCircular color="#0075B5" /></a></div>

        </div>
</div>
    </>
  )
}

export default ProjectsCard