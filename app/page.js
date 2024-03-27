import Image from "next/image";
import INTRO from "@/components/intro";
import NavbarDark from "../components/navbar";

export default function Home() {
  return (
    <div className="relative pt-4 bg-gray-900 text-gray-50">

      <NavbarDark />

      <div className="container mx-auto px-4 py-[56px] z-10">
        <div className=" max-w-7xl mx-auto my-16 text-center text-white p-6 bg-gray-800 rounded-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Welcome to ClimateCraft</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12">Get real-time weather updates from around the world.</p>
          <p className="text-sm md:text-base text-gray-400">Created by: <span className="font-bold">Harsh Kothari - 22BCE3655<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Harsh Gupta - 22BCB0169</span></p>
        </div>
        
        <div className="mt-[85px] text-center text-white">
          <h3 className="text-3xl font-bold mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Real-Time Updates</h4>
              <p className="text-gray-300">Get the latest weather updates instantly.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Location-Based Forecast</h4>
              <p className="text-gray-300">Access weather forecasts for any location worldwide.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-6rem] right-[-20%] h-80 w-80 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-50 rotate-45 transform blur-[10rem]"></div>
        <div className=" blur-[10rem] absolute bottom-[-8rem] left-[-10%] h-96 w-96 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 opacity-50 rotate-45 transform"></div>
      </div>
    </div>
  );
}
