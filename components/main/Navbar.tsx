"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavLinks = [
    { name: "About me", href: "#Footer" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#Projects" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((open) => !open);
    const closeMenu = () => setIsMenuOpen(false);

    // Close with Escape and stop the page scrolling behind the open menu.
    useEffect(() => {
        if (!isMenuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMenuOpen(false);
        };
        const onResize = () => {
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("resize", onResize);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("resize", onResize);
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
                <div className="w-full h-full flex flex-row items-center justify-between m-auto">
                    <Link
                        href="#home"
                        className="h-auto w-auto flex flex-row items-center"
                        onClick={closeMenu}
                    >
                        <Image
                            src="/NavLogo.png"
                            alt="logo"
                            width={70}
                            height={70}
                            priority
                            className="cursor-pointer hover:animate-slowspin"
                        />
                        <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                            Pathum Ranahansa
                        </span>
                    </Link>

                    <div className="md:flex hidden flex-row items-center justify-between w-[500px] h-full">
                        <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                            {NavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="cursor-pointer transition-colors duration-200 hover:text-purple-400"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-5">
                        {Socials.map((social) => (
                            <Link
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={social.name}
                                aria-label={social.name}
                            >
                                <Image
                                    className="cursor-pointer hover:animate-bounce"
                                    src={social.src}
                                    alt={social.name}
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        ))}
                        <button
                            type="button"
                            className="md:hidden block cursor-pointer text-gray-200"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/*
              Mobile menu lives outside the <nav>: backdrop-filter on the nav would
              otherwise turn it into the containing block for this fixed panel.
            */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="md:hidden fixed top-[65px] left-0 w-full h-[calc(100vh-65px)] bg-[#030014]/95 backdrop-blur-md z-40 p-4"
                    >
                        <div className="flex flex-col justify-center items-center h-full gap-8">
                            {NavLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 + i * 0.07, duration: 0.25 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 text-xl cursor-pointer transition-colors duration-200 hover:text-purple-400"
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
