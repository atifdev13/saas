import React from 'react';
import SectionTitle from '@/components/shared/common/section-title';
import Container from '../shared/container';
import Image from 'next/image';

const Apart = () => {
    return (
        <Container className="bg-white">
            <div className=" py-16">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <SectionTitle
                        textAlign="center"
                        highlightText="Apart"
                        highlightColor="text-[#6366F1]"
                        className="mb-4"
                    >
                        What Sets Us Apart
                    </SectionTitle>
                    <p className="text-secondary text-[22px] leading-[33px] max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam
                    </p>
                </div>

                {/* Cards Grid with Overlapping Center Image */}
                <div className="relative flex flex-col lg:flex-row gap-6">
                    <div className='flex rounded-3xl   overflow-hidden'>
                        {/* Left Card - Text Only */}
                        <div className="bg-[#6366F1] text-white  p-8 lg:px-10 py-20 flex flex-col justify-center min-h-[400px]">
                            <h3 className="text-2xl md:text-3xl lg:text-[42px] font-bold leading-[1.2] mb-4">
                                Real-time Updates and Full Transparency
                            </h3>
                            <p className="text-base my-5 md:text-lg lg:text-[22px]  leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam
                            </p>
                        </div>
                        {/* Center Image - Overlaps both cards on large screens */}
                        <div className="  relative z-10">
                            <div className="h-full  overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/apart.jpg"
                                    alt="Business analytics"
                                    width={400}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>


                    {/* Right Card - Text Only */}
                    <div className="bg-[#6366F1] text-white rounded-3xl p-8 lg:px-10 py-20 flex flex-col justify-center min-h-[400px]">
                        <h3 className="text-2xl md:text-3xl lg:text-[42px] font-bold leading-[1.2] mb-4">
                            Real-time Updates and Full Transparency
                        </h3>
                        <p className="text-base my-5 md:text-lg lg:text-[22px]  leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Apart;
