import React from 'react';
import Container from '../shared/container';

const Deliver = () => {
    const stats = [
        { value: '3x', label: 'Faster Delivery' },
        { value: '500%', label: 'Faster Delivery' },
        { value: '120%', label: 'Faster Delivery' },
        { value: '24hr', label: 'Faster Delivery' },
    ];

    return (
        <div className="relative">
            {/* Upward Curve at Top */}
            <div className="relative w-full">
                <svg
                    viewBox="0 0 1440 160"
                    className="w-full h-[160px]"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,40 Q720,200 1440,40 L1440,0 L0,0 Z"
                        className="fill-white"
                    />
                </svg>
            </div>

            {/* Gradient Background Section */}
            <div className="bg-gradient-to-r from-primary/80 via-primary to-accent/90 py-20">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center text-white">
                                <div className="text-4xl md:text-5xl lg:text-[80px] font-semibold mb-2">
                                    {stat.value}
                                </div>
                                <p className="text-sm md:text-base lg:text-lg opacity-90">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Deliver;
