"use client";

import React, { useState, useEffect } from "react";

export default function CountdownTimer(){
  const targetDate = "2025-08-09 12:30"; // works in UTC +1 hour needed for czech

  const calculateTimeLeft = () => {
  const difference: number = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) {
      return [0, 0, 0, 0];
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return [days, hours, minutes, seconds];
  };

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const [timeLeft, setTimeLeft] = useState([0,0,0,-1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center p-6">
      {timeLeft.every((value) => value === 0) ? (
        <span>Už jsou svoji!</span>
      ) : (
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col items-center w-32 h-24 m-2 text-white bg-fuchsia-900 shadow-md rounded-xl p-4 sm:w-52 sm:h-40 ">
            <div className="text-3xl font-bold sm:text-7xl">
              {formatTime(timeLeft[0])}
            </div>
            <div className="m-2 text-sm sm:text-base">Dnů</div>
          </div>
          <div className="flex flex-col items-center w-32 h-24 m-2 text-white bg-fuchsia-900 shadow-md rounded-xl p-4 sm:w-52 sm:h-40">
            <div className="text-3xl font-bold sm:text-7xl">
              {formatTime(timeLeft[1])}
            </div>
            <div className="m-2 text-sm sm:text-base">Hodin</div>
          </div>
          <div className="flex flex-col items-center w-32 h-24 m-2 text-white bg-fuchsia-900 shadow-md rounded-xl p-4 sm:w-52 sm:h-40">
            <div className="text-3xl font-bold sm:text-7xl">
              {formatTime(timeLeft[2])}
            </div>
            <div className="m-2 text-sm sm:text-base">Minut</div>
          </div>
          <div className="flex flex-col items-center w-32 h-24 m-2 text-white bg-fuchsia-900 shadow-md rounded-xl p-4 sm:w-52 sm:h-40">
            <div className="text-3xl font-bold sm:text-7xl">
              {formatTime(timeLeft[3])}
            </div>
            <div className="m-2 text-sm sm:text-base">Sekund</div>
          </div>
        </div>
      )}
    </div>
  );
};


