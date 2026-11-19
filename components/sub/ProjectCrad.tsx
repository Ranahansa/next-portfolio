"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/motion'

interface Props {
    src: string;
    title: string;
    description: string;
    href?: string;
    index?: number;
}

const ProjectCrad = ({ src, title, description, href, index = 0 }: Props) => {
    const card = (
        <div className='h-full relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#030014]/60 transition-all duration-300 hover:-translate-y-2 hover:border-[#7042f88b] hover:shadow-[#7042f8]/20 hover:shadow-xl'>
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full h-auto object-contain"
            />

            <div className='relative p-4'>
                <h1 className='text-2xl font-semibold text-white'>{title}</h1>
                <p className='mt-2 text-gray-300'>
                    {description}
                </p>
            </div>
        </div>
    );

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp(index * 0.15)}
            className="w-full"
        >
            {href ? (
                <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                >
                    {card}
                </Link>
            ) : (
                card
            )}
        </motion.div>
    )
}

export default ProjectCrad
