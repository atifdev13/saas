import React from 'react';
import Container from '../shared/container';
import ContactForm from '../shared/common/contact-form';
import Image from 'next/image';

const GetInTouch = () => {
    return (
        <Container className=" py-16 mt-10 bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
                {/* Left Side - Contact Info */}
                <div className="space-y-8">
                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Get in touch
                    </h2>

                    {/* Contact Details */}
                    <div className="  flex flex-wrap items-center   gap-3">
                        {/* Phone */}
                        <div className="flex items-center gap-4  ">
                            <div className="w-12 h-12   rounded-lg flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/images/phone.png"
                                    alt="Phone"
                                    width={44}
                                    height={44}
                                    className="w-12 h-12"
                                />
                            </div>
                            <span className="text-lg text-gray-700 border-b-2 border-gray-300 py-2">+ 381 9875 6231</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4  " >
                            <div className="w-12 h-12   rounded-lg flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/images/msg.png"
                                    alt="Email"
                                    width={44}
                                    height={44}
                                    className="w-12 h-12"
                                />
                            </div>
                            <span className="text-lg text-gray-700 border-b-2 border-gray-300 py-2">mail@saas.com</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-[22px] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
                    </p>
                </div>

                {/* Right Side - Contact Form */}
                <div className='flex items-end justify-end '>
                    <ContactForm />
                </div>
            </div>
        </Container>
    );
};

export default GetInTouch;
