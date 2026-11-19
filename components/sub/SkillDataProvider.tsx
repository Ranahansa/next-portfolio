"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    name?: string;
    width: number;
    height: number;
    index: number;
}

const imageVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.8,
    },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        // Keep the stagger short so a row of icons never takes seconds to appear.
        transition: { delay: index * 0.08, duration: 0.4, ease: "easeOut" },
    }),
}

const SkillDataProvider = ({ src, name, width, height, index }: Props) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}>

            <Image
                src={src}
                alt={name ?? "skill image"}
                width={width}
                height={height}
            />

        </motion.div>
    )
}

export default SkillDataProvider
