import React from "react";
import homeBg from "../assets/home-bg.png";

const Home = () => {
  return (
    <div className="bg-black flex justify-around text-gray-400 items-center h-[94vh]">
      <div className="max-w-[600px] flex flex-col gap-5">
        <h1 className="text-white text-7xl font-bold">
          Discover Most Suitable Watches
        </h1>
        <p className="font-normal text-xl">
          Find the best, reliable, and cheap smart watches here. We focus on
          product quality. Here you can find smart watches of almost all brands.
          So why you are waiting? Just order now!
        </p>
        <form className="flex gap-2 text-lg font-semibold">
          <input type="text" placeholder="Find the best brands" className="bg-white text-black px-4 py-2 rounded-lg" />
          <button className="text-white bg-blue-600 px-6 py-2 rounded">Search</button>
        </form>
      </div>

      <div>
        <img src={homeBg} alt="home background" />
      </div>
    </div>
  );
};

export default Home;
