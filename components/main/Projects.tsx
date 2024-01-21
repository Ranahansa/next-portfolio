import React from 'react'
import ProjectCrad from '../sub/ProjectCrad'

const Projects = () => {
    return (
        <div id ='Projects' className='flex flex-col items-center justify-center py-20'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>

                    <ProjectCrad 
                    src="/4.png" 
                    title="Modern AI chatbot Next.js " 
                    description="Project 1 description"/>

                    <ProjectCrad 
                    src="/CardImage.png" 
                    title="Interactive Website Cards" 
                    description="Project 1 description"/>

                    <ProjectCrad 
                    src="/SpaceWebsite.png" 
                    title="Space Themed Website" 
                    description="Project 1 description"/>

            </div>
        </div>
    )
}

export default Projects