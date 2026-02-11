import React from 'react';
import Container from '../shared/container';
import SectionTitle from '../shared/common/section-title';
import TestimonialCard from '../shared/common/testimonial-card';
import StatCard from '../shared/common/stat-card';

const testimonials = [
    {
        name: 'John De marli',
        avatar: '/images/john.png',
        rating: 5,
        feedback: 'Lorem ipsum dolor sit amet consectetur. Imperdiet convallis',
    },
    {
        name: 'John De marli',
        avatar: '/images/john.png',
        rating: 5,
        feedback: 'Lorem ipsum dolor sit amet consectetur. Imperdiet convallis',
    },
    {
        name: 'John De marli',
        avatar: '/images/john.png',
        rating: 5,
        feedback: 'Lorem ipsum dolor sit amet consectetur. Imperdiet convallis',
    },
    {
        name: 'John De marli',
        avatar: '/images/john.png',
        rating: 5,
        feedback: 'Lorem ipsum dolor sit amet consectetur. Imperdiet convallis',
    },
];

const Feedback = () => {
    return (
        <Container className="bg-white py-16">
            <div className="">
                {/* Header Section */}
                <div className="text-center mb-12">
                    {/* Small Badge */}
                    <div className="inline-flex items-center gap-2 bg-purple-50 text-primary px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-medium">Testimonials</span>
                    </div>

                    <SectionTitle
                        textAlign="center"
                        highlightText="Feedback"
                        highlightColor="text-[#6366F1]"
                        className="mb-4"
                    >
                        Customer Feedback
                    </SectionTitle>
                    <p className="text-secondary text-[22px] leading-[33px] max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
                    </p>
                </div>

                {/* Testimonials Grid with Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2   gap-12">
                    {/* First Row - 2 Testimonials */}
                    <TestimonialCard {...testimonials[0]} />
                    <TestimonialCard {...testimonials[1]} />

                    {/* First Stat Card - Dark */}
                    <StatCard
                        value="120%"
                        label="Faster Delivery"
                        gradient="bg-gradient-to-br from-gray-700 to-gray-900"
                        className=" border-4 border-accent"
                    />

                    {/* Third Testimonial */}
                    <TestimonialCard {...testimonials[2]} />
                    {/* Fourth Testimonial */}
                    <TestimonialCard {...testimonials[3]} />
                    {/* Second Stat Card - Gradient Purple to Orange */}
                    <StatCard
                        value="120%"
                        label="Faster Delivery"
                        gradient="bg-gradient-to-r from-[#6366F1] via-[#9d7fc9] to-[#FF6B6B]"
                        className=" "
                    />


                </div>
            </div>
        </Container>
    );
};

export default Feedback;
