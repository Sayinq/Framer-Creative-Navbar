'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Component
import DropdownModal from './DropdownModal';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownEnter = () => {
    setIsDropdownOpen(true);
  }

  const handleDropdownLeave = () => {
    setIsHovered(false);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="absolute top-0 left-0 lg:flex hidden w-screen h-[75px] bg-[#F0EFEF] p-2 z-[99]">
      <nav className="flex flex-row justify-between items-center w-full h-full px-4">
        {/* Studio Logo / Name */}
        <div className="w-fit h-fit text-2xl font-black z-[3]">
          <h1>Acme Studios</h1>
        </div>

        {/* Link List */}
        <div className="flex flex-row w-fit h-fit gap-x-4 relative" ref={dropdownRef}>
          <div
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
            className="flex flex-row w-fit h-fit gap-x-1 cursor-pointer"
          >
            <div className="w-fit h-fit">
              <h1>Services</h1>
            </div>
            <div className="w-fit h-fit translate-y-[1px]">
              <Image src="/plus-black.svg" alt="Plus Icon" width={20} height={20} />
            </div>
          </div>
          <DropdownModal isOpen={isDropdownOpen} onClose={() => setIsDropdownOpen(false)} />
          <Link href="" className="cursor-pointer">
            <div className="w-fit h-fit">
              <h1>Pricing</h1>
            </div>
          </Link>
          <Link href="">
            <div className="w-fit h-fit">
              <h1>Works</h1>
            </div>
          </Link>
          <Link href="">
            <div className="w-fit h-fit">
              <h1>Blog</h1>
            </div>
          </Link>
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