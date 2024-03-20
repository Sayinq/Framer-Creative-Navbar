'use client'

import { useRef, useEffect } from 'react';
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import MouseFollower from "mouse-follower";
import gsap from 'gsap';

MouseFollower.registerGSAP(gsap);

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const cursor = new MouseFollower({
        el: null,
        container: containerRef.current,
        className: 'mf-cursor',
        speed: 0.5,
        ease: 'linear',
      });
    }
  }, []);

  return (
    <main className="w-screen h-screen relative" ref={containerRef}>
      <Navbar />
      <MobileNavbar />
      <section
        id="background"
        className="flex justify-center items-center w-full h-full text-3xl font-black text-[#d2d2d2]"
      >
        <h2>Reusable Navbar</h2>
      </section>
    </main>
  );
}
