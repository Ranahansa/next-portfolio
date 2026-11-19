"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
    return (
        // The parent triggers the variants of every child once it scrolls into view.
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className='w-full h-auto flex flex-col items-center justify-center px-4'
        >

            <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'>

                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-[13px]">
                    Think better with Next js 14
                </h1>
            </motion.div>

            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-2xl sm:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'>
                Making apps with modern technologies
            </motion.div>

            <motion.div
                variants={slideInFromRight(0.5)}
                className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'>
                Technologies and Tools I currently use.
            </motion.div>

        </motion.div>
    )
}

export default SkillText
