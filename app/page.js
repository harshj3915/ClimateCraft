import Image from "next/image";
import INTRO from "@/components/intro";
import NavbarDark from "../components/navbar";

export default function Home() {
  return (
    <div className="relative pt-4 bg-gray-900 text-gray-50">

      <NavbarDark />
      <INTRO/>


      

      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-6rem] right-[-20%] h-80 w-80 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-50 rotate-45 transform blur-[10rem]"></div>
        <div className=" blur-[10rem] absolute bottom-[-8rem] left-[-10%] h-96 w-96 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 opacity-50 rotate-45 transform"></div>
      </div>
    </div>
  );
}
