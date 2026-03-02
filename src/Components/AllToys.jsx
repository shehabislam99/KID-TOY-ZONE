import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import GlobalLoader from "./GlobalLoader";


const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/toys_data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load toy data");
        return res.json();
      })
      .then((data) => {
        const popular = data.slice(0, 12);
        setToys(popular);
      })
     
  }, []);

  return (
    <section className="my-16 px-4 md:px-12">
      <GlobalLoader/>
      <h2
        className="text-3xl md:text-5xl font-extrabold text-center text-blue-600 mb-10"
        data-aos="fade-down"
      >
        Popular Toys
      </h2>
      {toys.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {toys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      ) : (
        <GlobalLoader></GlobalLoader>
      )}
    </section>
  );
};

export default AllToys;
