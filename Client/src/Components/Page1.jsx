import React from 'react';
import Navbar from './Navbar';
import image from "../assets/image.jpeg";

function Page1() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#0e1c2f] to-[#0f172a] text-white px-4 sm:px-8 md:px-[12vw] flex flex-col items-center">


            <div className="w-full">
                <Navbar />
            </div>


            <div className="flex flex-col items-center justify-center w-full py-10 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold italic leading-snug">
                    Where YouTube videos MEET
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic leading-snug bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent mt-2">
                    Passive Income
                </h1>
            </div>


            <div className="w-full text-center px-2 sm:px-4 md:px-0">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-poppins leading-relaxed">
                    We help people with zero business background or tech experience create & upload faceless <br className="hidden md:block" />
                    YouTube videos that make money*
                </p>
            </div>


            <div
                className="w-[90%] sm:w-[45%] md:w-[75%] mt-6 sm:mt-10 sm:mb-10 h-[45vh] sm:h-[55vh] md:h-[65vh] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] bg-contain bg-no-repeat bg-center"

                style={{
                    backgroundImage: `url(${image})`,
                }}
            >

            </div>
        </div>
    );
}

export default Page1;
