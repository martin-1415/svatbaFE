"use client";

import {IItemTogetherProps} from "@/app/components/TimelineTogether/IItemTogetherProps";
import {useState} from "react";

export default function TimelineItem({date,text,imgUrl}:IItemTogetherProps) {
    const [isOpen, setIsOpen] = useState(false);


    return (

    <div className="">

        {/* Card  -->*/}
        <div className={ `bg-indigo-100 w-[calc(100%-4rem)]  md:w-[calc(35%-2.5rem)]  p-4 rounded border border-slate-200 shadow mx-auto`}>
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
                        className="absolute -top-4 right-2 bg-white text-black rounded-full px-3 py-1 shadow-md hover:bg-gray-300"
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