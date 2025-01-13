"use client";
import './BurgerMenu.css';

import React, { useState } from 'react';

export default function BurgerMenu() {

    const [isActive, setIsActive] = useState(false);

    const toggleClick = () => {
        setIsActive( !isActive );
    };

    return (
        <div className={`absolut top-2 right-1 ${isActive ? 'shownNav' : ''}`}
             onClick={toggleClick}>

            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>

);
}