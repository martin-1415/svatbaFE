"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = "2025-08-09 09:00";

  const calculateTimeLeft = () => {
    const difference: number =
      new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) {
      return [0, 0, 0, 0];
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return [days, hours, minutes, seconds];
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center">
      {timeLeft.every((value) => value === 0) ? (
        <span>Time's up!</span>
      ) : (
        <>
          <div className="flex flex-col items-center w-32 h-24 mx-2 text-white bg-amber-600 shadow-md rounded-xl p-4">
            <span className="text-3xl font-bold">
              {formatTime(timeLeft[0])}
            </span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center w-32 h-24 mx-2 text-white bg-amber-600 shadow-md rounded-xl p-4">
            <span className="text-3xl font-bold">
              {formatTime(timeLeft[1])}
            </span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center w-32 h-24 mx-2 text-white bg-amber-600 shadow-md rounded-xl p-4">
            <span className="text-3xl font-bold">
              {formatTime(timeLeft[2])}
            </span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center w-32 h-24 mx-2 text-white bg-amber-600 shadow-md rounded-xl p-4">
            <span className="text-3xl font-bold">
              {formatTime(timeLeft[3])}
            </span>
            <span className="text-sm">Seconds</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
