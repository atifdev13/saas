'use client';

import React, { useState } from 'react';
import Container from '../shared/container';
import SectionTitle from '../shared/common/section-title';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface Solution {
    id: number;
    title: string;
    image: string;
    description: string;
    videoUrl?: string;
}

const solutions: Solution[] = [
    {
        id: 1,
        title: 'Law Firm',
        image: '/images/ai1.jpg',
        description: 'Streamline client intake, appointment scheduling, and case consultations with intelligent AI conversations.',
        videoUrl: '#',
    },
    {
        id: 2,
        title: 'Spa & Salon',
        image: '/images/ai2.jpg',
        description: 'Streamline client intake, appointment scheduling, and case consultations with intelligent AI conversations.',
        videoUrl: '#',
    },
    {
        id: 3,
        title: 'Clinic',
        image: '/images/ai3.jpg',
        description: 'Streamline client intake, appointment scheduling, and case consultations with intelligent AI conversations.',
        videoUrl: '#',
    },
];

const AISolution = () => {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const handleCardClick = (id: number) => {
        setSelectedCard(selectedCard === id ? null : id);
    };

    return (
        <Container className="bg-white py-16">
            <div className="">
                {/* Header Section */}
                <div className="text-center mb-12">
                    {/* Small Badge */}
                    <div className="inline-flex items-center gap-2 bg-purple-50 text-primary px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-medium">AI-Powered Solutions</span>
                    </div>

                    <SectionTitle
                        textAlign="center"
                        highlightText="Solutions"
                        highlightColor="text-[#6366F1]"
                        className="mb-4"
                    >
                        Top Industries Benefiting from Our AI-Powered Solutions
                    </SectionTitle>
                    <p className="text-secondary text-[22px] leading-[33px] max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((solution) => (
                        <div
                            key={solution.id}
                            onClick={() => handleCardClick(solution.id)}
                            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${selectedCard === solution.id
                                ? 'md:col-span-2 lg:col-span-2'
                                : ''
                                }`}
                        >
                            {/* Card Content */}
                            <div className="relative h-[300px] md:h-[350px]">
                                {/* Background Image */}
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    fill
                                    className="object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end items-end">
                                    {selectedCard === solution.id ? (
                                        // Expanded View
                                        <div className=" flex justify-end py-12 px-8 h-full items-end bg-primary/80 w-1/2">
                                            {/* Left Side - Text Content */}
                                            <div className="space-y-4">
                                                <div className="inline-block   rounded-lg   py-2">
                                                    <h3 className="text-2xl font-bold text-white">
                                                        {solution.title}
                                                    </h3>
                                                </div>
                                                <p className="text-white text-base leading-relaxed">
                                                    {solution.description}
                                                </p>


                                                <div className=' bg-gray-100/40 flex gap-1  rounded-2xl p-1 items-center'>
                                                    <div className='  p-2 w-fit bg-gray-200 rounded-2xl'><Play className="w-8 h-8 text-primary  ml-1" fill="currentColor" /></div>

                                                    <div className=" h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                                        <div className="h-full w-1/3 bg-white rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Side - Video Player */}

                                        </div>
                                    ) : (
                                        // Collapsed View
                                        <div className='w-full p-8'>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                                {solution.title}
                                            </h3>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default AISolution;
