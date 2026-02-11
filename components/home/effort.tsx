import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/shared/common/section-title';
import { Check } from 'lucide-react';
import Container from '../shared/container';

const Effort = () => {
    return (
        <Container className=" bg-white">
            <div className=" ">
                <div className="relative flex flex-col lg:flex-row gap-12 items-center justify-between">
                    {/* Left Content */}
                    <div className="space-y-6 w-full lg:w-[66%]">
                        <SectionTitle
                            textAlign="left"
                            highlightText="you're away"
                            highlightColor="text-[#6366F1]"
                        >
                            Effortless automation that keeps things running while you're away
                        </SectionTitle>

                        <p className="text-secondary text-[22px] leading-[33px]">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam
                        </p>

                        {/* Checklist */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1">
                                    <Check className="w-5 h-5 text-[#6366F1]" strokeWidth={2.5} />
                                </div>
                                <p className="text-secondary text-[22px] leading-[33px]">
                                    Set automatic report schedules and reminders
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="mt-1">
                                    <Check className="w-5 h-5 text-[#6366F1]" strokeWidth={2.5} />
                                </div>
                                <p className="text-secondary text-[22px] leading-[33px]">
                                    Create tailored workflows for each team
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="mt-1">
                                    <Check className="w-5 h-5 text-[#6366F1]" strokeWidth={2.5} />
                                </div>
                                <p className="text-secondary text-[22px] leading-[33px]">
                                    Drag-and-drop automation builder, no coding needed
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Arrow - positioned between left and right */}
                    <div className="absolute right-[30%] xl:right-[31%] top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block pointer-events-none z-10">
                        <Image
                            src="/images/arrow.png"
                            alt="Decorative arrow"
                            width={120}
                            height={120}
                            className=" "
                        />
                    </div>

                    {/* 24/7 Customer Service Badge */}
                    <div className="absolute right-[24%] bottom-[20%] hidden lg:flex items-center gap-2 bg-[#E9F2FF] rounded-md px-4 py-3 shadow-lg border border-gray-100 z-20">
                        <div className="w-6 h-6 bg-[#6366F1] rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-gray-800">24/7 customer service</span>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full lg:w-[50%] h-auto">
                        <Image
                            src="/images/effort.png"
                            alt="Effortless automation dashboard"
                            width={495}
                            height={582}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Effort;
