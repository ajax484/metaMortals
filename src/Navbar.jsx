import React from 'react';
import { useState } from 'react';
import { mmLogo } from './Assets/Img';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full md:px-4 z-10 md:pt-6 pb-2">
      <div className="font-morrisRoman text-2xl text-white flex flex-col md:flex-row md:justify-center items-center relative">
        <ul className={`absolute top-0 left-0 order-2 flex flex-col justify-center space-y-12 items-center w-full bg-gray-900/80 md:bg-transparent h-screen md:space-y-0 md:contents ${!open ? 'hidden' : ''} text-center`}>
          <div className="md:flex space-y-12 md:space-y-0 md:space-x-6 lg:space-x-12 md:order-1 md:mr-6 lg:mr-12">
            <li className="hover:scale-125 hover:text-orange-300 transition-all cursor-pointer">
              Home
            </li>
            <li className="hover:scale-125 hover:text-orange-300 transition-all cursor-pointer">
              About
            </li>
            <li className="hover:scale-125 hover:text-orange-300 transition-all cursor-pointer">
              Tokenomics
            </li>
          </div>

          <div className="md:flex space-y-12 md:space-y-0 md:space-x-6 lg:space-x-12 md:order-3">
            <li className="hover:scale-125 hover:text-orange-300 transition-all cursor-pointer">
              Roadmap
            </li>
            <li className="hover:scale-125 hover:text-orange-300 transition-all cursor-pointer">
              Whitepaper
            </li>
            <li className="hover:scale-125 hover:text-orange-300 transition-all cursor-pointer">
              FAQ
            </li>
          </div>
        </ul>

        <div className="order-1 md:order-2 flex justify-between items-center w-full md:w-fit md:mr-6 lg:mr-12 pt-3 md:pt-0 px-4 md:px-0">
          <img src={mmLogo} className="h-16 w-24 mx-auto md:mx-0" alt="logo" />
          <button className="md:hidden z-10" onClick={() => setOpen(prevState => !prevState)}>
            {
              !open ?
                <svg stroke="currentColor" fill="currentColor" className="h-8 w-8" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                </svg>
                :
                <svg stroke="currentColor" fill="currentColor" className="h-8 w-8" stroke-width="0" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"></path><path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path>
                </svg>
            }
          </button>
        </div>
      </div>

    </header>
  )
}
