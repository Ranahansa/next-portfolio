import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const skillGroups = [Skill_data, Frontend_skill, Backend_skill, Full_stack, Other_skill]

const Skills = () => {
    return (
        <section
            id="skills"
            className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 md:pb-80 py-20 px-4'
        >

            <SkillText />

            {skillGroups.map((group, groupIndex) => (
                <div
                    key={groupIndex}
                    className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'
                >
                    {group.map((skill, index) => (
                        <SkillDataProvider
                            key={`${groupIndex}-${index}`}
                            src={skill.Image}
                            name={skill.skill_name}
                            width={skill.width}
                            height={skill.height}
                            index={index}
                        />
                    ))}
                </div>
            ))}

            <div className='w-full h-full absolute inset-0 pointer-events-none'>
                <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>

                    <video
                        className="w-full h-full object-cover"
                        preload="none"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />

                </div>
            </div>

        </section>
    )
}

export default Skills
