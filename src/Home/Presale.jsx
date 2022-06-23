import React from 'react'
import { axe1, axe2, axe3, ellipse1, ellipse2, heroButton, rock1, rock2, rock3, rock4, sword3 } from '../Assets/Img'

export default function Presale() {
    return (
        <section className="relative h-screen bg-gray-800 overflow-hidden">
            <img src={axe1} className="h-44 w-44 md:h-64 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2" alt="" />
            <img src={axe2} className="h-44 w-44 md:h-64 md:w-64 absolute top-[70%] md:top-1/2 left-[12%] -translate-x-1/2 -translate-y-1/2" alt="" />
            <img src={axe3} className="h-44 w-44 md:h-64 md:w-64 absolute top-[70%] md:top-1/2 left-[88%] -translate-x-1/2 -translate-y-1/2" alt="" />
            <img src={sword3} className="h-44 w-44 md:h-64 md:w-64 absolute top-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
            <img src={rock1} className="hidden md:contents h-6 w-6 md:h-10 md:w-10 absolute top-1/4 right-[20%] -translate-y-1/2" alt="" />
            <img src={rock2} className="hidden md:contents h-6 w-6 md:h-10 md:w-10 absolute top-1/4 left-[20%] -translate-y-1/2" alt="" />
            <img src={rock3} className="h-12 w-12 md:h-16 md:w-16 absolute top-[85%] left-[20%] -translate-y-1/2" alt="" />
            <img src={rock4} className="h-6 w-6 md:h-10 md:w-10 absolute top-[60%] md:top-3/4 right-[20%] -translate-y-1/2" alt="" />
            <img src={ellipse1} className="h-[90%] w-2/12 absolute top-1/2 right-0 -translate-y-1/2 " alt="glowing ellipse" />
            <img src={ellipse2} className="h-[90%] w-2/12 absolute top-1/2 left-0 -translate-y-1/2 " alt="glowing ellipse" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-8">
                <h2 className="text-center text-lg md:text-3xl text-white">
                    No Guts! No Glory!<br/>
                    Claim your place in the fields of glory <br />
                    Join the Metamortals
                </h2>
                <img src={heroButton} className="w-40 h-14 md:w-48 md:h-20 mx-auto" alt="" /> 
            </div>
        </section>
    )
}
