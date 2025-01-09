"use client";
import React, {useEffect, useState} from 'react';

export default function Countdown() {

    const calculateTimeLeft = () => {
        const difference: number =  new Date('2025-08-09 09:00').getTime() - new Date().getTime();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return null;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, []);

    return (
        <div className="flex justify-center">
                {timeLeft!.days}d {timeLeft!.hours}h {timeLeft!.minutes}m {timeLeft!.seconds}s
        </div>

    );
}