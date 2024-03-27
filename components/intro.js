import React from "react";

export default function INTRO() {
    return (
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
    );
}
