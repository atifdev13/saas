import React from 'react';

interface StatCardProps {
    value: string;
    label: string;
    gradient?: string;
    className?: string;
}

const StatCard = ({
    value,
    label,
    gradient = 'bg-gradient-to-br from-gray-700 to-gray-900',
    className = ''
}: StatCardProps) => {
    return (
        <div className={`${gradient} flex flex-col justify-center items-center rounded-3xl p-8 md:p-12 text-center text-white shadow-xl ${className}`}>
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
                {value}
            </div>
            <p className="text-lg md:text-xl opacity-90">{label}</p>
        </div>
    );
};

export default StatCard;
