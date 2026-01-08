"use client";
import "tailwindcss";
import { useState } from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
});

const toursArr = [
  {
    id: 1,
    name: "Best of Paris in 7 Days Tour",
    price: "$1,995",
    img: "https://www.course-api.com/images/tours/tour-1.jpeg",
    shortDesc:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
    longDesc:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 2,
    name: "Best of Ireland in 14 Days Tour",
    price: "$3,895",
    img: "https://www.course-api.com/images/tours/tour-2.jpeg",
    shortDesc:
      "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D...",
    longDesc:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 3,
    name: "Best of Salzburg & Vienna in 8 Days Tour",
    price: "$2,695",
    img: "https://www.course-api.com/images/tours/tour-3.jpeg",
    shortDesc:
      "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring th...",
    longDesc:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 4,
    name: "Best of Rome in 7 Days Tour",
    price: "$2,095",
    img: "https://www.course-api.com/images/tours/tour-4.jpeg",
    shortDesc:
      "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient ...",
    longDesc:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 5,
    name: "Best of Poland in 10 Days Tour",
    price: "$2,595",
    img: "https://www.course-api.com/images/tours/tour-5.jpeg",
    shortDesc:
      "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y...",
    longDesc:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
];

export default function Home() {
  const [tours, setTours] = useState(
    toursArr.map((tour) => ({ ...tour, showMore: false }))
  );

  const toggleDesc = (id) => {
    setTours((prevTours) =>
      prevTours.map((tour) =>
        tour.id === id ? { ...tour, showMore: !tour.showMore } : tour
      )
    );
  };

  const clearAll = () => {
    setTours([]);
  };

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  const resetAll = () => {
    setTours(toursArr);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center font-Manrope">
      <div>
        <p className="font-bold mt-5 text-2xl">Our Tours</p>
      </div>
      <div className="grid grid-cols-3 gap-8 items-start">
        {tours.map((tour) => {
          return (
            <div
              className="flex flex-col bg-white w-75 h-auto rounded-2xl justify-start items-center gap-2 shadow-[2px_-1px_6px_2px_rgba(0,_0,_0,_0.1)] mb-5 overflow-hidden transition-[max-height] duration-300 ease-in-out"
              key={tour.id}
            >
              <p className="flex absolute ml-55 bg-green-500 w-20 items-center justify-center rounded-tr-xl rounded-bl-xl font-bold text-white">
                {tour.price}
              </p>
              <img
                className="w-75 h-50 object-cover rounded-tl-2xl rounded-tr-2xl"
                src={tour.img}
                alt=""
              />
              <p className="text-black my-2 mx-15 h-auto text-center font-bold">
                {tour.name}
              </p>
              <p className="text-gray-500 mx-8">
                {tour.showMore ? tour.longDesc : tour.shortDesc}
              </p>
              <button
                className="text-green-500 transition-colors duration-200 ease-in-out hover:text-green-800"
                onClick={() => toggleDesc(tour.id)}
              >
                Read More
              </button>
              <button
                className="text-green-600 border-1 w-60 mb-5 rounded-2xl transition-colors duration-200 ease-in-out hover:bg-green-600 hover:text-white"
                onClick={() => removeTour(tour.id)}
              >
                Not Interested
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
