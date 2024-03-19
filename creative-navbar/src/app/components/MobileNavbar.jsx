'use client'
import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion'
import { Spin as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import Image from 'next/image'

const MobileNavbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isDropdown, setDropdown] = useState(false);
    
    return (
        <header className="absolute top-0 left-0 lg:hidden flex w-screen h-[60px] bg-[#F0EFEF] border-b-[1.5px] border-[#d2d2d2] p-2">
            <nav className="flex items-center w-full h-full px-2">
                <div className="w-fit h-fit text-2xl font-black z-[3]">
                    <motion.h1
                        initial={{ color: "#000000" }}
                        animate={{ color: isOpen ? "#F0EFEF" : "#000000" }}
                        exit={{
                            color: "#000000",
                            transition: { delay: isOpen ? 1.25 : 0.1, duration: isOpen ? 0.3 : 0.1, ease: "easeInOut" },
                        }}
                        transition={{ delay: isOpen ? 0.1 : 1.4, duration: 0.3, ease: "easeInOut" }}
                        >
                            Acme Studios
                    </motion.h1>
                </div>
                {/* Hamburger Button */}
                <motion.div
                    initial={{ color: "#000000" }}
                    animate={{ color: isOpen ? "#F0EFEF" : "#000000" }}
                    exit={{
                        color: "#000000",
                        transition: { delay: isOpen ? 1.25 : 0.1, duration: isOpen ? 0.3 : 0.1, ease: "easeInOut" },
                    }}
                    transition={{ delay: isOpen ? 0.1 : 1.4, duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-[5px] right-[10px] w-fit h-fit z-[3]"
                >
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </motion.div>
            </nav>

            {/* Animated Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '100vh' }}
                        exit={{ height: 0, transition: { delay: 1.25, duration: 0.3, ease: 'easeInOut' } }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute top-0 left-0 w-screen bg-black text-[#F0EFEF] overflow-hidden"
                    >
                        <div className="flex flex-col w-full h-full px-4 overflow-hidden">
                            <div className="w-fit h-fit mt-[20vh] tracking-[-0.085rem] font-black uppercase">
                                <ul className="flex flex-col w-full h-auto gap-y-4">
                                    <Link href="">
                                        <li className="w-fit h-fit overflow-hidden">
                                            <motion.h1
                                                initial={{ translateY: 40 }}
                                                animate={{ translateY: isOpen ? 0 : 40 }}
                                                exit={{ opacity: 0, transition: { delay: 0, duration: 0.3 } }}
                                                transition={{ duration: 0.3, delay: isOpen ? 0.3 : 0, ease: 'easeInOut' }}
                                                className="text-4xl"
                                            >
                                                Portfolio
                                            </motion.h1>
                                        </li>
                                    </Link>
                                    <Link href="">
                                        <li className="w-fit h-fit overflow-hidden">
                                            <motion.h1
                                                initial={{ translateY: 40 }}
                                                animate={{ translateY: isOpen ? 0 : 40 }}
                                                exit={{ opacity: 0, transition: { delay: 0.15, duration: 0.3 } }}
                                                transition={{ duration: 0.3, delay: isOpen ? 0.45 : 0, ease: 'easeInOut' }}
                                                className="text-4xl"
                                            >
                                                Pricing
                                            </motion.h1>
                                        </li>
                                    </Link>
                                    
                                    {/* Dropdown Services */}
                                    <div href="" className="w-full h-fit overflow-hidden">
                                        <motion.li 
                                            initial={{ translateY: 40 }}
                                            animate={{ translateY: isOpen ? 0 : 40 }}
                                            exit={{ opacity: 0, transition: { delay: 0.3, duration: 0.3 } }}
                                            transition={{ duration: 0.3, delay: isOpen ? 0.6 : 0, ease: 'easeInOut' }}
                                            className="flex flex-row w-fit h-fit items-center gap-x-2 overflow-hidden text-4xl cursor-pointer"
                                            onClick={() => setDropdown(!isDropdown)} 
                                        >
                                            <div className="w-fit h-fit">
                                                <h1>Services</h1>
                                            </div>
                                            <motion.div 
                                                initial={{ rotate: 0 }}
                                                animate={{ rotate: isDropdown ? 0 : "180deg" }}
                                                exit={{ rotate: 0, transition: { delay: 0.3, duration: 0.3 }}}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="w-fit h-fit translate-y-[40px]"
                                            >
                                                <Image
                                                    src="/plus.svg"
                                                    alt="Add Icon"
                                                    width={35}
                                                    height={35}
                                                />
                                            </motion.div>
                                        </motion.li>
                                        <AnimatePresence>
                                            {isDropdown && (
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    animate={{ height: isDropdown ? 170 : 0 }}
                                                    exit={{ height: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    className="w-full h-fit overflow-hidden"
                                                >
                                                    <div className="flex flex-col w-full h-fit gap-y-4 mt-2">
                                                        {/* Development */}
                                                        <div className="flex justify-center items-center w-full h-[40px] rounded-full hover:border-0 border-[0.5px] border-white/30 hover:bg-[#F0EFEF] hover:text-black hover:tracking-normal transition-all duration-300 ease-in-out uppercase gap-x-2 cursor-pointer overflow-hidden">
                                                            <h1>Development</h1>
                                                        </div>

                                                        {/* Optimization */}
                                                        <div className="flex justify-center items-center w-full h-[40px] rounded-full hover:border-0 border-[0.5px] border-white/30 hover:bg-[#F0EFEF] hover:text-black hover:tracking-normal transition-all duration-300 ease-in-out uppercase gap-x-2 cursor-pointer overflow-hidden">
                                                            <h1>Optimization</h1>
                                                        </div>

                                                        {/* Custom Design */}
                                                        <div className="flex justify-center items-center w-full h-[40px] rounded-full hover:border-0 border-[0.5px] border-white/30 hover:bg-[#F0EFEF] hover:text-black hover:tracking-normal transition-all duration-300 ease-in-out uppercase gap-x-2 cursor-pointer overflow-hidden">
                                                            <h1>Custom Design</h1>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <Link href="">
                                        <li className="w-fit h-fit overflow-hidden">
                                            <motion.h1
                                                initial={{ translateY: 40 }}
                                                animate={{ translateY: isOpen ? 0 : 40 }}
                                                exit={{ opacity: 0, transition: { delay: 0.45, duration: 0.3 } }}
                                                transition={{ duration: 0.3, delay: isOpen ? 0.75 : 0, ease: 'easeInOut' }}
                                                className="text-4xl"
                                            >
                                                Blog
                                            </motion.h1>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isOpen ? 1 : 0 }}
                                exit={{ opacity: 0, transition: {delay: 0.7, duration: 0.3 }}}
                                transition={{ duration: 0.3, delay: isOpen ? 1 : 0, ease: 'easeInOut' }}
                                className="max-w-[220px] w-full h-auto overflow-hidden">
                                <div className="flex justify-center items-center w-full h-[40px] rounded-full border-[0.5px] border-white/30 uppercase gap-x-2 mt-[2rem] cursor-pointer overflow-hidden">
                                    <div className="flex flex-row justify-center items-center w-fit h-fit px-4 gap-x-2">
                                        <div className="w-fit h-fit tracking-[-0.085rem]">
                                            <h1>Get in touch</h1>
                                        </div>
                                        <div className="w-fit h-fit rotate-[-90deg]">
                                            <Image
                                                src="/arrow.svg"
                                                alt="Arrow Pointer"
                                                width={15}
                                                height={15}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ translateX: -250, opacity: 0 }}
                                animate={{ translateX: isOpen ? 0 : -250, opacity: isOpen ? 1 : 0 }}
                                exit={{ translateX : -250, opacity: 0, transition: { delay: 0.9 , duration: 0.5 }}}
                                transition={{ duration: 0.5, delay: isOpen ? 1.15 : 0, ease: 'easeInOut' }}
                                className="fixed bottom-[20px] left-[20px] flex flex-col gap-y-4 overflow-hidden"
                            >
                                <div className="w-fit h-fit text-md tracking-[-0.085rem] uppercase">
                                    <h1>emailus@email.com</h1>
                                </div>
                                <div className="flex flex-row w-fit h-fit gap-x-4">
                                    <div className="flex justify-center items-center border-[0.5px] border-white/30 w-[40px] h-[40px] rounded-full p-2">
                                        <Image
                                            src="/logo-twitter.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <div className="flex justify-center items-center border-[0.5px] border-white/30 w-[40px] h-[40px] rounded-full p-2">
                                        <Image
                                            src="/logo-linkedin.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <div className="flex justify-center items-center border-[0.5px] border-white/30 w-[40px] h-[40px] rounded-full p-2">
                                        <Image
                                            src="/logo-git.svg"
                                            alt=""
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default MobileNavbar