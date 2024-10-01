import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface CarouselProps {
    children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? children.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === children.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full max-w-sm mx-auto overflow-hidden -z-[2]">
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-20 pointer-events-auto"
            >
                <FaArrowLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-20 pointer-events-auto"
            >
                <FaArrowRight />
            </button>
            <div
                className="flex transition-transform ease-in-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {children.map((child, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        {child}
                    </div>
                ))}
            </div>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {children.map((_, index) => (
                    <span
                        key={index}
                        className={twMerge(
                            "h-2 w-2 rounded-full bg-gray-300",
                            currentIndex === index ? "bg-blue-500" : ""
                        )}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
