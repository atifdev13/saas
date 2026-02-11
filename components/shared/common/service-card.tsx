import React from 'react';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    iconBgColor?: string;
    iconColor?: string;
    borderGradient?: boolean;
    className?: string;
}

const ServiceCard = ({
    icon,
    title,
    description,
    iconBgColor = 'bg-primary/10',
    iconColor = 'text-primary',
    borderGradient = true,
    className = ''
}: ServiceCardProps) => {
    return (
        <div className={`group ${className}`}>
            {/* Gradient Border Wrapper */}
            <div className="p-[2px] rounded-3xl bg-gradient-to-r from-primary/80 via-[#9d7fc9] to-accent/90 hover:shadow-xl transition-all duration-300">
                {/* Inner Card */}
                <div className="relative p-3 sm:p-8 rounded-3xl bg-white h-full group-hover:-translate-y-1 transition-transform duration-300">
                    {/* Icon */}
                    <div className={`
                        w-[60px] h-[60px] ${iconBgColor} ${iconColor} 
                        rounded-2xl flex items-center justify-center mb-6
                        group-hover:scale-110 transition-transform duration-300
                    `}>
                        {icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-[28px] font-bold text-secondary mb-3 leading-tight">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-lightGray  sm:text-[22px] leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
