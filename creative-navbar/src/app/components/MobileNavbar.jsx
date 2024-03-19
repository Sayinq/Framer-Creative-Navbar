'use client'
import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

const MobileNavbar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <header className="absolute top-0 left-0 lg:hidden flex w-screen h-[75px] bg-[#F0EFEF] p-2 z-[99]">
            <nav className="w-full h-full px-2">
                <Hamburger toggled={isOpen} toggle={setOpen} color="#000000" />
            </nav>
        </header>
    )
}

export default MobileNavbar