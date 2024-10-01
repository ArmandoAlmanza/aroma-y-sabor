import React from "react";

interface CardProps {
    title: string;
    description: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
    return (
        <div className="p-4 bg-white rounded shadow-xl border border-gray-300">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
