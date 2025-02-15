"use client";

import {IItemProps} from "@/app/components/Timeline/IItemProps";
import {SexEnum} from "@/app/components/Timeline/SexEnum";
import {useState} from "react";

export default function TimelineItem({date,text,imgUrl,sex}:IItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    let bgcolor:string = 'bg-gray-200';
    let iconColor:string = 'bg-gray-200';

    if(sex == SexEnum.x){
        bgcolor='bg-indigo-100';
        iconColor='bg-indigo-100';
    }

    return (

    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        {/* Icon  -->*/}
        <div
            className={` ${iconColor} flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300  text-slate-500  shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 className="w-3.5 h-3.5">
                <path
                    d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"/>
            </svg>
        </div>
        {/* Card  -->*/}
        <div className={ `${bgcolor} w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 shadow`}>
            <div className="font-caveat font-medium text-indigo-500">{date}</div>
            <div className="text-slate-500">{text}</div>
            {imgUrl &&
                <img src={'/gallery/timeline/'.concat(imgUrl)} alt='mini foto'
                     className="cursor-pointer mt-2 rounded-md shadow-md transition-transform hover:scale-105"
                     onClick={() => setIsOpen(true)}
                /> }
        </div>


        {/* Fullscreen Modal */}
        {isOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                onClick={() => setIsOpen(false)}
            >
                <div className="relative">
                    <button
                        className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-300"
                        onClick={() => setIsOpen(false)}
                    >
                        ✖
                    </button>
                    <img
                        src={`/gallery/timeline/${imgUrl}`}
                        alt="Expanded view"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
                    />
                </div>
            </div>
        )}

    </div>
    )
}