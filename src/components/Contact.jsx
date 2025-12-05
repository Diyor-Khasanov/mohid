import React from "react";
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <div className="bg-gray-100 rounded-2xl my-10 mx-4 md:mx-20 lg:mx-35 py-10 px-6">

      <div className="flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Left Text Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold">
            Subscribe To Newsletter
          </h1>

          <p className="font-normal text-lg md:text-xl text-gray-600">
            Get free guide about smart watches daily.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-white text-black px-4 py-3 rounded-lg w-full sm:w-auto"
            />
            <button className="text-white bg-blue-600 px-6 py-3 rounded-lg w-full sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={contact}
            alt="contact"
            className="w-60 sm:w-72 md:w-80 lg:w-96 object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Contact;
