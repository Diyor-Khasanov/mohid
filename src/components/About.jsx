import React from "react";
import About1 from "../assets/about1.png";
import About2 from "../assets/about2.png";

const About = () => {
  return (
    <div className="my-30">
      <p className="text-blue-600 text-center text-lg">
        Here are our some of the best clients.
      </p>
      <h1 className="text-center text-5xl mb-4 font-semibold">
        What People Say About Us
      </h1>

      <div className="flex justify-evenly my-10">
        <div className="flex p-6 bg-gray-100 rounded-xl max-w-[600px] gap-4">
          <img src={About1} alt="Category 1" />
          <div>
            <h1 className="text-4xl font-bold">Hamza Faizi</h1>
            <p className="my-3 text-xl text-gray-600">
              Don’t waste time, just order! This is the best website to puschase smart watches.
            </p>
          </div>
        </div>

        <div className="flex p-6 bg-gray-100 rounded-xl max-w-[600px] gap-4">
          <img src={About2} alt="Category 1" />
          <div>
            <h1 className="text-4xl font-bold">Hafiz Huzaifa</h1>
            <p className="my-3 text-xl text-gray-600">
              I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
