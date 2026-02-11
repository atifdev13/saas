import React from 'react';

interface TitleProps {
    text: string;
    bgColor?: string;
    textColor?: string;
    className?: string;
}

const Title = ({
    text,
    bgColor = 'bg-primary/10',
    textColor = 'text-primary',
    className = ''
}: TitleProps) => {
    return (
        <div className={`inline-block ${bgColor} ${textColor} px-6 py-2 rounded-full text-[16px] font-semibold ${className}`}>
            {text}
        </div>
    );
};

export default Title;
