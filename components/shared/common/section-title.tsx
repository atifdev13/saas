import React from 'react';

interface SectionTitleProps {
    children: React.ReactNode;
    highlightText?: string;
    highlightColor?: string;
    textAlign?: 'left' | 'center' | 'right';
    fontSize?: string;
    fontWeight?: string;
    className?: string;
}

const SectionTitle = ({
    children,
    highlightText,
    highlightColor = 'text-primary',
    textAlign = 'center',
    fontSize = 'text-3xl sm:text-[42px]',
    fontWeight = 'font-bold',
    className = ''
}: SectionTitleProps) => {

    const alignmentClass = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    }[textAlign];

    // Function to highlight specific text
    const renderTextWithHighlight = () => {
        if (!highlightText) {
            return children;
        }

        if (typeof children === 'string') {
            const parts = children.split(highlightText);
            return parts.map((part, index) => (
                <React.Fragment key={index}>
                    {part}
                    {index < parts.length - 1 && (
                        <span className={highlightColor}>{highlightText}</span>
                    )}
                </React.Fragment>
            ));
        }

        return children;
    };

    return (
        <h2
            className={`${fontSize} ${fontWeight} ${alignmentClass} leading-tight ${className}`}
            style={{ letterSpacing: '-0.01em' }}
        >
            {renderTextWithHighlight()}
        </h2>
    );
};

export default SectionTitle;
