import React from "react";
import About1 from "../assets/about1.png";
import About2 from "../assets/about2.png";

const About = () => {
  return (
    <div className="my-20 px-4">
      <p className="text-blue-600 text-center text-lg">
        Here are our some of the best clients.
      </p>
      <h1 className="text-center text-4xl md:text-5xl mb-4 font-semibold">
        What People Say About Us
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-8 my-10">

        {/* Card 1 */}
        <div className="flex p-6 bg-gray-100 rounded-xl w-full md:w-1/2 max-w-[600px] gap-4 items-start">
          <img
            src={About1}
            alt="Category 1"
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">Hamza Faizi</h1>
            <p className="my-3 text-base md:text-xl text-gray-600">
              Don’t waste time, just order! This is the best website to purchase smart watches.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex p-6 bg-gray-100 rounded-xl w-full md:w-1/2 max-w-[600px] gap-4 items-start">
          <img
            src={About2}
            alt="Category 2"
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">Hafiz Huzaifa</h1>
            <p className="my-3 text-base md:text-xl text-gray-600">
              I’ve been purchasing smart watches from Mohid for a long time. All the products are good quality.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
