'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Spin as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import Image from 'next/image'

const MobileNavbar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <header className="absolute top-0 left-0 lg:hidden flex w-screen h-[60px] bg-[#F0EFEF] border-b-[1.5px] border-[#d2d2d2] p-2">
            <nav className="flex items-center w-full h-full px-2">
                <div className="w-fit h-fit text-2xl font-black z-[3]">
                    <span>Acme Studios</span>
                </div>
                {/* Hamburger Button */}
                <div className="absolute top-[5px] right-[10px] w-fit h-fit z-[3]">
                    <Hamburger toggled={isOpen} toggle={setOpen} color="#000000" />
                </div>
            </nav>

            {/* Animated Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '100vh' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute top-0 left-0 w-screen bg-black text-[#F0EFEF] overflow-hidden"
                    >
                        <div className="flex flex-col w-full h-full px-4 overflow-hidden">
                            <div className="w-fit h-fit mt-[20vh] text-5xl font-black uppercase">
                                <ul className="flex flex-col w-full h-auto gap-y-4">
                                    <Link href="">
                                        <li>
                                            <h1>Porfolio</h1>
                                        </li>
                                    </Link>
                                    <Link href="">
                                        <li>
                                            <h1>Pricing</h1>
                                        </li>
                                    </Link>
                                    <Link href="">
                                        <li className="flex flex-row w-fit h-fit items-center gap-x-2">
                                            <div clasName="w-fit h-fit">
                                                <h1>Services</h1>
                                            </div>
                                            <div className="w-fit h-fit">
                                                <Image
                                                    src="/plus.svg"
                                                    alt="Add Icon"
                                                    width={35}
                                                    height={35}
                                                />
                                            </div>
                                        </li>
                                    </Link>
                                    <Link href="">
                                        <li>
                                            <h1>Blog</h1>
                                        </li>
                                    </Link>
                                </ul>
                            </div> 
                            <div className="flex flex-row items-center w-fit h-fit rounded-full border-[0.5px] border-white/30 uppercase py-3 px-4 gap-x-2 mt-[2rem] cursor-pointer">
                                <div className="w-fit h-fit tracking-[-0.085rem]">
                                    <span>Get in touch</span>
                                </div>
                                <div className="w-fit h-fit rotate-[-90deg] -translate-y-[1px]">
                                    <Image
                                        src="/arrow.svg"
                                        alt="Arrow Pointer"
                                        width={15}
                                        height={15}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-4 mt-[25vh]">
                                <div className="w-fit h-fit text-md tracking-[-0.085rem] uppercase">
                                    <span>emailus@email.com</span>
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
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default MobileNavbar