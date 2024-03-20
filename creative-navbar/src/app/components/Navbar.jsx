'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Magnetic Component
import Magnetic from './Magnetic';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [servicesHovered, setServicesHovered] = useState(false);
  
    return (
      <header className="absolute top-0 left-0 lg:flex hidden w-screen h-[75px] bg-[#F0EFEF] p-2 z-[99]">
        <nav className="flex flex-row justify-between items-center w-full h-full px-4">
          {/* Studio Logo / Name */}
          <Magnetic>
            <div className="w-fit h-fit text-2xl font-black z-[3] cursor-pointer">
              <h1>Acme Studios</h1>
            </div>
          </Magnetic>
  
          {/* Link List */}
          <div className="flex flex-row justify-center items-center w-fit h-full gap-x-4 relative">
          <div
            onMouseEnter={() => setServicesHovered(true)}
            onMouseLeave={() => setServicesHovered(false)}
          >
            <motion.div  
              initial={{ opacity: 1 }}
              animate={{ opacity: servicesHovered ? 0.5 : 1 }}
              exit={{ opacity: 1, transition: { duration: 0.3 }}}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex flex-row w-fit h-fit gap-x-1 cursor-pointer"
            >
              <div className="w-fit h-fit">
                <h1>Services</h1>
              </div>
              <motion.div 
                initial={{ rotate: 0 }}
                animate={{ rotate: servicesHovered ? 0 : "180deg" }}
                exit={{ rotate: 0, transition: { delay: 0.3, duration: 0.3 }}}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-fit h-fit translate-y-[1px]"
              >
                <Image src="/plus-black.svg" alt="Plus Icon" width={20} height={20} />
              </motion.div>
            </motion.div>
            <AnimatePresence>
              {servicesHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40, transition: { duration: 0.15, ease: 'easeInOut' } }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-[15px] lg:w-[400px] h-[300px] mt-6"
                >
                  <div className="grid grid-cols-2 grid-rows-3 gap-y-[10px] gap-x-[10px] mt-14 w-full h-full">

                    <div data-cursor-text="View" className="col-span-1 row-span-1 rounded-lg hover:scale-[97%] hover:bg-[#e87c74] bg-[#F0EFEF] transition-all duration-200 ease-in-out cursor-pointer">
                      <div className="flex flex-col justify-between rounded-lg w-full h-full p-2">
                        <h2 className="font-semibold">Web Development</h2>
                        <p className="text-xs">Casting digital magic to bring your website dreams to life.</p>
                      </div>
                    </div>

                    <div data-cursor-text="View" className="col-start-1 row-start-2 col-span-1 row-span-1 rounded-lg hover:scale-[97%] hover:bg-[#71e3d4] bg-[#F0EFEF] transition-all duration-200 ease-in-out cursor-pointer">
                      <div className="flex flex-col justify-between w-full h-full gap-y-2 p-2">
                        <h2 className="font-semibold">SEO</h2>
                        <p className="text-xs">It's more than just climbing the ranks.</p>
                      </div>
                    </div>

                    <div data-cursor-text="View" className="col-start-1 row-start-3 col-span-3 row-span-1 h-fit rounded-lg hover:scale-[97%] hover:bg-[#8671e3] bg-[#F0EFEF] transition-all duration-200 ease-in-out mr-[10px] cursor-pointer">
                      <div className="flex flex-col justify-between w-full h-fit gap-y-2 p-2">
                        <h2 className="font-semibold">Custom Design</h2>
                        <p className="text-xs max-w-[350px]">Clean designs that speak directly to your tailored audience.</p>
                      </div>
                    </div>

                    <div data-cursor-text="View" className="col-start-2 row-start-1 col-span-1 row-span-2 rounded-lg hover:scale-[97%] hover:bg-[#d16fde] bg-[#F0EFEF] transition-all duration-200 ease-in-out cursor-pointer">
                      <div className="flex flex-col justify-center w-full h-full gap-y-2 p-2">
                        <h2 className="font-semibold">MVP Development</h2>
                        <p className="text-xs max-w-[150px]">Building your startup's big idea into a sleek and scalable MVP.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pricing Link */}
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link href="" className="cursor-pointer">
                <div className="w-fit h-fit">
                  <h1>Pricing</h1>
                </div>
              </Link>
            </motion.div>

            {/* Works Link */}
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link href="">
                <div className="w-fit h-fit">
                  <h1>Works</h1>
                </div>
              </Link>
            </motion.div>

            {/* Blog Link */}
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link href="">
                <div className="w-fit h-fit">
                  <h1>Blog</h1>
                </div>
              </Link>
            </motion.div>
          </div>

        {/* Animated Button */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex flex-row items-center w-fit h-fit cursor-pointer"
        >
          <div className="flex justify-center items-center w-fit h-fit text-md bg-black text-[#F0EFEF] rounded-full py-2 px-6">
            <h1>Contact Us</h1>
          </div>
          {/* Icon Button */}
          <motion.div
            animate={{ x: isHovered ? 8 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative flex justify-center items-center w-[45px] h-[45px] p-2 rounded-full border-[1.75px] border-[#d2d2d2] z-[3] overflow-hidden"
          >
            {/* Overlay */}
            <motion.div
              initial={{ translateX: -50 }}
              animate={{ translateX: isHovered ? 0 : -50 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-0 left-0 flex justify-center items-center w-[45px] h-[45px] p-2 bg-black z-[2] overflow-hidden"
            >
              <motion.div
                initial={{ translateX: -40 }}
                animate={{ translateX: isHovered ? 0 : -40 }}
                transition={{ duration: 0.3, delay: 0.25, ease: 'easeInOut' }}
                className="w-fit h-fit"
              >
                <Image
                  src="/small-arrow-white.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="rotate-[-90deg] translate-y-[-1px]"
                />
              </motion.div>
            </motion.div>
            {/* Icon */}
            <div className="w-fit h-fit z-[1]">
              <Image
                src="/small-arrow-black.svg"
                alt=""
                width={20}
                height={20}
                className="rotate-[-90deg]"
              />
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;