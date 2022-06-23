import React from 'react';
import { heroButton, popupAxe1, popupAxe2, popupBg, popupHead, popupSword1, popupSword2 } from '../Assets/Img';

export default function PopUp({ state, handler }) {
    return (
        <div className={`absolute top-0 left-0 bg-black/80 h-screen w-full z-10000 overflow-hidden ${!state ? 'hidden' : ''}`}>
            <img src={popupBg} className="w-[300px] h-[200px] md:w-[600px] md:h-[400px] lg:w-1/2 lg:h-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
            <img src={popupHead} className="w-16 h-12 md:w-32 md:h-24 absolute top-[36%] md:top-[32%]  lg:top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
            <img src={popupAxe1} className="h-44 w-44 md:h-64 md:w-64 absolute top-[43%] left-[60%] md:top-[32%] md:left-[55%] -translate-x-1/2 -translate-y-1/2 -z-10" alt="" />
            <img src={popupAxe2} className="h-44 w-44 md:h-64 md:w-64 absolute top-[43%] left-[40%] md:top-[32%] md:left-[45%] -translate-x-1/2 -translate-y-1/2 -z-10" alt="" />
            <img src={popupSword1} className="h-48 w-48 md:h-64 md:w-64 absolute top-[57%] left-[47%] md:top-[67%] md:left-[55%] -translate-x-1/2 -translate-y-1/2 -z-10" alt="" />
            <img src={popupSword2} className="h-48 w-48 md:h-64 md:w-64 absolute top-[57%] left-[52%] md:top-[67%] md:left-[45%] -translate-x-1/2 -translate-y-1/2 -z-10" alt="" />

            <div className="w-[calc(300px-10%)] h-[calc(200px-10%)] md:w-1/2 md:h-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-evenly md:justify-center space-y-0 md:space-y-12 lg:space-y-0 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-5xl">
                    Our presale is live
                </h1>
                <p className="text-sm md:text-base">
                    Get in early, Register for presale to earn amazing rewards
                </p>
                <img src={heroButton} className="w-44 lg:w-48 h-16 lg:h-20" alt="" />
            </div>

            <button onClick={handler} className="absolute top-1/4 left-3/4  md:top-[calc(25%-40px)] md:left-[calc(75%-40px)] -translate-x-1/2 -translate-y-1/2 text-white">
                <svg stroke="currentColor" fill="currentColor" className="h-4 w-4 md:h-8 md:w-8" stroke-width="0" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"></path><path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path>
                </svg>
            </button>

        </div>
    )
}
