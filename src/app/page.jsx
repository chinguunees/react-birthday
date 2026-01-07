"use client";

import { useState } from "react";

const birthdaysArr = [
  {
    id: 1,
    name: "Bertie Yates",
    age: 29,
    img: "https://www.course-api.com/images/people/person-1.jpeg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: 35,
    img: "https://www.course-api.com/images/people/person-2.jpeg",
  },
  {
    id: 3,
    name: "Larry Little",
    age: 19,
    img: "https://www.course-api.com/images/people/person-3.jpeg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    age: 25,
    img: "https://www.course-api.com/images/people/person-4.jpeg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    age: 47,
    img: "https://www.course-api.com/images/people/person-5.jpeg",
  },
];

export default function Home() {
  const [birthdays, setBirthdays] = useState(birthdaysArr);

  const clearAll = () => {
    setBirthdays([]);
  };

  const resetAll = () => {
    setBirthdays(birthdaysArr);
  };

  return (
    <div className="flex flex-col w-250 h-dvh bg-white text-black items-start ml-50 gap-4 mt-10 h-500 rounded-4xl">
      <h1 className="text-2xl ml-50 font-bold mt-20">
        {birthdays.length} Birthdays Today
      </h1>
      {birthdays.map((birthday) => {
        return (
          <div
            className="flex justify-center gap-2 items-center text-xs ml-50"
            key={birthday.id}
          >
            <img
              className="w-20 rounded-full h-20 object-cover"
              src={birthday.img}
              alt="1"
            />
            <div className="flex flex-col items-start">
              <p className="font-bold">{birthday.name}</p>
              <p className="font-light">{birthday.age} Years</p>
            </div>
          </div>
        );
      })}

      {birthdays.length === 0 ? (
        <button
          className="bg-pink-400 rounded-3xl w-100 ml-50 font-light text-xs text-white"
          onClick={resetAll}
        >
          Reset
        </button>
      ) : (
        <button
          className="bg-pink-400 rounded-3xl w-100 ml-50 font-light text-xs text-white"
          onClick={clearAll}
        >
          Clear All
        </button>
      )}
    </div>
  );
}
