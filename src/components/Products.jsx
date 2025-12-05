import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function Product() {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const resp = await fetch(
          "https://6932b707e5a9e342d2708f58.mockapi.io/api/watches"
        );
        if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
        const data = await resp.json();
        setWatches(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  if (loading) return <p className="px-6 md:px-20">Loading watches…</p>;
  if (error) return <p className="px-6 md:px-20">Error: {error.message}</p>;

  return (
    <div className="my-16 px-6 md:px-20">
      <p className="text-blue-600 text-center text-lg">
        Find Your Favourite Smart Watch
      </p>

      <h1 className="text-center text-4xl md:text-5xl mb-4 font-semibold">
        Our Latest Products
      </h1>

      {/* Responsive Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          gap-6
          mt-10
        "
      >
        {watches.map((w, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded-lg p-4 text-center shadow-sm hover:shadow-lg transition"
          >
            <img
              src={w.img}
              alt={w.name}
              className="w-full h-52 object-cover rounded"
            />

            <h3 className="font-semibold text-xl mt-3">{w.name}</h3>

            <p className="flex gap-2 items-center justify-center text-yellow-500 mt-1">
              <FaStar /> {w.stars}
            </p>

            <p className="flex items-center justify-center gap-4 mt-2">
              <s className="text-gray-500">${w.oldPrice}</s>
              <strong className="text-xl">${w.newPrice}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
