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
    <div className="flex justify-center items-center">
      {timeLeft.every((value) => value === 0) ? (
        <span>Už jsou svoji!</span>
      ) : (
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col items-center w-32 h-24 mx-2 text-white bg-fuchsia-900 shadow-md rounded-xl p-4 m-1">
            <div className="text-3xl font-bold">
              {formatTime(timeLeft[0])}
            </div>
            <div className="text-sm">Dnů</div>
          </div>
          <div className="flex flex-col items-center w-32 h-24 mx-2 text-white bg-fuchsia-900 shadow-md rounded-xl p-4 m-1">
            <div className="text-3xl font-bold">
              {formatTime(timeLeft[1])}
            </div>
            <div className="text-sm">Hodin</div>
          </div>
          <div className="flex flex-col items-center w-32 h-24 mx-2 text-white bg-fuchsia-900 shadow-md rounded-xl p-4 m-1">
            <div className="text-3xl font-bold">
              {formatTime(timeLeft[2])}
            </div>
            <div className="text-sm">Minut</div>
          </div>
          <div className="flex flex-col items-center w-32 h-24 mx-2 text-white bg-fuchsia-900 shadow-md rounded-xl p-4 m-1">
            <div className="text-3xl font-bold">
              {formatTime(timeLeft[3])}
            </div>
            <div className="text-sm">Sekund</div>
          </div>
        </div>
      )}
    </div>
  );
};


