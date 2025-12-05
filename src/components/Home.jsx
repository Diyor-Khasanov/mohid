import React from "react";
import homeBg from "../assets/home-bg.png";

const Home = () => {
  return (
    <div className="bg-black text-gray-400 flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-12 lg:px-20 py-16 md:h-[94vh]">

      {/* LEFT TEXT SECTION */}
      <div className="w-full md:w-1/2 max-w-[600px] flex flex-col gap-5 text-center md:text-left mt-10 md:mt-0">
        
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Discover Most Suitable Watches
        </h1>

        <p className="font-normal text-base sm:text-lg md:text-xl text-gray-300">
          Find the best, reliable, and cheap smart watches here. We focus on
          product quality. Here you can find smart watches of almost all brands.
          So why you are waiting? Just order now!
        </p>

        <form className="flex flex-col sm:flex-row gap-3 text-lg font-normal">
          <input
            type="text"
            placeholder="Find the best brands"
            className="bg-white text-black px-4 py-3 rounded-lg w-full sm:w-auto"
          />
          <button className="text-white bg-blue-600 px-6 py-3 rounded-lg w-full sm:w-auto">
            Search
          </button>
        </form>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={homeBg}
          alt="home background"
          className="w-64 sm:w-80 md:w-[380px] lg:w-[450px] object-contain"
        />
      </div>

    </div>
  );
};

export default Home;
