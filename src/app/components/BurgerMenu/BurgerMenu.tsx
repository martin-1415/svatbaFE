"use client";
import './BurgerMenu.css';

import React, { useState } from 'react';

export default function BurgerMenu() {

    const [isActive, setIsActive] = useState(false);

    const toggleClick = () => {
        setIsActive( !isActive );
    };

    return (
        <section className="w-1/2">
            <div className={` p-2 ${isActive ? 'shownNav' : ''} flex flex-col items-end`}
                 onClick={toggleClick}>

                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <div className={` height-animation absolute top-header right-0 list-image-none ${isActive ? '' : 'hidden'} bg-gray-100`}>
                <ul>
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <li className="p-2" ><a href="/"> Úvod</a></li>
                    <li className="p-2" ><a href="/ceremony"> Obřad</a></li>
                    <li className="p-2"><a href="/party"> Svatební zábava</a></li>
                    <li className="p-2"><a href="/accomodation"> Ubytování</a></li>
                    <li className="p-2"><a href="/gifts"> Svatební dary</a></li>
                </ul>
            </div>
        </section>


);
}