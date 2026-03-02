import React, { useEffect, useState } from 'react';
import image from "../assets/images.jpeg"

const GlobalLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-green-600 to-violet-600 fixed inset-0 z-50">
      <img
        src={image}
        alt="loading"
        className="rounded-full w-20 h-20 animate-spin"
        style={{
          animationDuration: "2s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      />
    </div>
  );
};

export default GlobalLoader;