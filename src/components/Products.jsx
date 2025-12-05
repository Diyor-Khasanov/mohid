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

  if (loading) return <p className="px-20">Loading watches…</p>;
  if (error) return <p className="px-20px">Error: {error.message}</p>;

  return (
    <div className="flex justify-around px-20 gap-5 max-h-[300px]">
      {watches.map((w, idx) => (
        <div
          key={idx}
          className="border border-gray-300 rounded p-4 text-center"
        >
          <img
            src={w.img}
            alt={w.name}
            className="w-full h-9/12 object-cover"
          />
          <h3 className="font-semibold text-xl">{w.name}</h3>
          <p className="flex gap-2 items-center text-center justify-center">
            <FaStar /> {w.stars}
          </p>
          <p className="flex items-center justify-center gap-4">
            <s className="text-gray-500">${w.oldPrice}</s> <strong className="text-xl">${w.newPrice}</strong>
          </p>
        </div>
      ))}
    </div>
  );
}
