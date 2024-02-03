import React from 'react'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <>
         <div className='bg-white py-10' id='projects'>
<p className='text-center text-3xl font-bold'>PROJECTS</p>
<div className='text-center flex items-center justify-center mt-8'>
<ProjectsCard/>
</div>
</div>
    </>
  )
}

export default Projects