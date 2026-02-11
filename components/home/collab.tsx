import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/shared/common/section-title';
import Container from '../shared/container';
import { Check } from 'lucide-react';

const Collab = () => {
    return (
        <Container className="py-8">
            <div className="">
                <div className="relative flex flex-col lg:flex-row gap-12 items-center justify-between">
                    {/* Left Image */}
                    <div className="relative w-full lg:w-[45%] h-auto">
                        <div className="relative rounded-2xl  ">
                            <Image
                                src="/images/collab.jpg"
                                alt="Real-time collaboration"
                                width={400}
                                height={300}
                                className="w-full h-auto object-cover"
                                priority
                            />

                            {/* 24/7 Customer Service Badge */}
                            <div className="absolute -bottom-2 sm:bottom-0  sm:-right-10 flex items-center gap-2 bg-pink-200 rounded-md px-4 py-4 shadow-lg">
                                <div className="w-6 h-6 bg-pink-700 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                </div>
                                <span className="text-sm font-medium text-gray-800">24/7 Customer service</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-6 w-full lg:w-[45%]">
                        <SectionTitle
                            textAlign="left"
                            highlightText="Collaboration"
                            highlightColor="text-[#6366F1]"
                        >
                            Real-time Collaboration
                        </SectionTitle>

                        <p className="text-secondary text-[22px] leading-[33px]">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam
                        </p>

                        {/* Stats */}
                        <div className="flex justify-center gap-10 md:gap-20 pt-4">
                            <div className="text-center">
                                <div className="text-[#6366F1] text-6xl font-bold mb-2">3x</div>
                                <p className="text-gray-500 text-lg">Faster Delivery</p>
                            </div>
                            <div className="text-center">
                                <div className="text-[#6366F1] text-6xl font-bold mb-2">100+</div>
                                <p className="text-gray-500 text-lg">Integrations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Collab;
