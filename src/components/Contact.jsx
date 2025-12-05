import React from "react";
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <div className="flex justify-around text-gray-400 items-center bg-gray-100 py-4 mx-35 rounded-2xl my-5">
      <div className="max-w-[600px] flex flex-col gap-5">
        <h1 className="text-black text-5xl font-bold">
          Subscribe To Newsletter
        </h1>
        <p className="font-normal text-xl">
          Get free guide about smart watches daily. 
        </p>
        <form className="flex gap-2 text-lg font-normal">
          <input
            type="email"
            placeholder="Enter email address"
            className="bg-white text-black px-4 py-2 rounded-lg"
          />
          <button className="text-white bg-blue-600 px-6 py-2 rounded">
            Subscribe
          </button>
        </form>
      </div>

      <div>
        <img src={contact} alt="home background" />
      </div>
    </div>
  );
};

export default Contact;
