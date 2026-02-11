import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
    name: string;
    avatar: string;
    rating: number;
    feedback: string;
    className?: string;
}

const TestimonialCard = ({
    name,
    avatar,
    rating,
    feedback,
    className = ''
}: TestimonialCardProps) => {
    return (
        <div className={`bg-white rounded-2xl p-8 px-18 shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
            <div className="flex flex-col items-center text-center">
                {/* Avatar at Top */}
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mb-6 -mt-14   shadow-xl">
                    <Image
                        src={avatar}
                        alt={name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Quote Icon and Stars Row */}
                <div className="flex items-center justify-center gap-6 mb-4 w-full">
                    {/* Quote Icon - Left */}
                    <div className="flex gap-2 flex-shrink-0">
                        <Image
                            src="/images/quote.png"
                            alt="Quote"
                            width={60}
                            height={60}
                            className="w-10 h-15  "
                        /><Image
                            src="/images/quote.png"
                            alt="Quote"
                            width={60}
                            height={60}
                            className="w-10 h-15  "
                        />
                    </div>

                    {/* Stars and Name - Center */}
                    <div className="flex flex-col items-center">
                        {/* Stars Rating */}
                        <div className="mb-2">
                            <Image
                                src="/images/stars.png"
                                alt="5 stars"
                                width={100}
                                height={34}
                                className="h-5"
                            />
                        </div>

                        {/* Name */}
                        <h4 className="text-[24px] font-bold text-gray-900">{name}</h4>
                    </div>

                    {/* Empty space for symmetry */}
                    <div className="flex-shrink-0 w-14 md:w-16"></div>
                </div>

                {/* Feedback Text */}
                <p className="text-gray-600 text-[20px] leading-relaxed mt-4">
                    {feedback}
                </p>
            </div>
        </div>
    );
};

export default TestimonialCard;
