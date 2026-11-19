"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {

    const downloadResume = () => {
        const resumePath = "/resume/se.pdf";
        const downloadLink = document.createElement("a");
        downloadLink.href = resumePath;
        downloadLink.download = "Pathum_Ranahansa-resume.pdf";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };


    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 px-6 sm:px-10 md:px-20 mt-36 md:mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center items-center md:text-start md:items-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">Fullstack Developer </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            The Best{" "}
                        </span>
                        Project Experience
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-base sm:text-lg text-gray-400 my-5 max-w-[500px]"
                >
                    I&apos;m a Full Stack Software Engineer with Experience in Website,
                    Mobile and Software Development. Check out My Projects and Skills.
                </motion.p>

                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg w-full max-w-[200px] transition-transform duration-200 hover:scale-105 active:scale-95"
                    onClick={downloadResume}
                >
                    Download Resume
                </motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className="h-full w-full flex justify-center items-center"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                    priority
                    className="w-full max-w-[400px] md:max-w-[650px] h-auto"
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent