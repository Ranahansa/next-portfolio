"use client";
import React from "react";
import Link from "next/link";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxTwitterLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div
            id="Footer"
            className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]"
        >
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start text-center">
                        <div className="font-bold text-[16px]">Community</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-colors duration-200 hover:text-purple-400">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-colors duration-200 hover:text-purple-400">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-colors duration-200 hover:text-purple-400">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </p>
                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start text-center">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-colors duration-200 hover:text-purple-400">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-colors duration-200 hover:text-purple-400">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </p>
                        <Link href="https://www.linkedin.com/in/pathumranah-nasa/">
                            <p className="flex flex-row items-center my-[15px] cursor-pointer transition-colors duration-200 hover:text-purple-400">
                                <RxLinkedinLogo />
                                <span className="text-[15px] ml-[6px]">Linkedin</span>
                            </p>
                        </Link>
                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start text-center">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-colors duration-200 hover:text-purple-400">
                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-colors duration-200 hover:text-purple-400">
                            <span className="text-[15px] ml-[6px]">Learning about me</span>
                        </p>
                        <Link
                            href="mailto:pathumranahansa7777@gmail.com"
                            className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors duration-200"
                        >
                            <span className="text-[15px] ml-[6px] break-all">
                                pathumranahansa7777@gmail.com
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center pt-12 px-4">
                    &copy; Ranahansa 2024 Inc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
