import Image from "next/image";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Navbar />
      <MobileNavbar />
      <section className="flex justify-center items-center w-full h-full text-3xl font-black text-[#d2d2d2]">
        <h2>Resuable Navbar</h2>
      </section>
    </main>
  );
}
