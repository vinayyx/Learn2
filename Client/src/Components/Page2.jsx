import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page2() {
    const navigate = useNavigate();

    const handdlesumbit = () => {
        navigate("/courselink");
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4 sm:px-6 md:px-[12vw] flex flex-col items-center">

            {/* Headings */}
            <div className="mt-[4vw] text-center font-Poppins font-bold">
                <h1 className="text-2xl sm:text-3xl md:text-4xl">Join the program that has helped</h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl">thousands of people get started</h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl">with YouTube Automation</h1>
            </div>

            {/* Subheading */}
            <div className="mt-4 text-center text-sm sm:text-base md:text-xl text-gray-300">
                <h1>Our unique method makes earning money on YouTube accessible to</h1>
                <h1>almost anyone, regardless of background or skills!</h1>
            </div>

            {/* Cards Section */}
            <div className="w-full flex flex-wrap gap-6 md:gap-10 justify-center mt-10 items-start p-2 sm:p-4">
                {[1, 2, 3, 4].map((_, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[48%] bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-6 sm:p-8 flex flex-col gap-4"
                    >
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                            {index === 1 ? "YouTube Automation Video Course" : "Don't know what to upload on Youtube"}
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-gray-300">
                            {index === 1
                                ? "The course is the foundation of our program. We are making constant updates to make sure it covers everything you need to know about YouTube Automation!"
                                : "Practical insights into identifying your niche, understanding your audience, and creating a content strategy that works"}
                        </p>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <button
                className="mt-10 mb-10 px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 bg-[#6366f1] hover:bg-[#818cf8] text-white font-semibold rounded-2xl text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:scale-105"
                onClick={handdlesumbit}
            >
                Get Started Now
            </button>
        </div>
    );
}

export default Page2;
