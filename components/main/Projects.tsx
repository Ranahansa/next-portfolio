import React from 'react'
import ProjectCrad from '../sub/ProjectCrad'


const Projects = () => {
    return (
        <div
            id="Projects"
            className="flex flex-col items-center justify-center py-20"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-10">
                <ProjectCrad
                    src="/4.png"
                    title="Modern AI chatbot Next.js "
                    description="Project 1 description"
                    href="https://github.com/Ranahansa/next_ai-chat-bot"
                    index={0}
                />

                <ProjectCrad
                    src="/CardImage.png"
                    title="Interactive Website Cards"
                    description="Project 1 description"
                    index={1}
                />

                <ProjectCrad
                    src="/SpaceWebsite.png"
                    title="Space Themed Website"
                    description="Project 1 description"
                    index={2}
                />
            </div>
        </div>
    );
}

export default Projects
