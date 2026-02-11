import React from 'react';
import Container from '../shared/container';
import Button from '../shared/common/button';
import Image from 'next/image';
import { Phone, Mic, Volume2, PhoneOff } from 'lucide-react';

const Calling = () => {
    return (
        <Container className="bg-white py-16">
            <div className="  mx-auto">
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-[#4A4E9D] to-[#6366F1] rounded-3xl p-8 md:p-12 overflow-hidden">
                    {/* Background Decorative Elements */}
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-center text-center text-white">
                        {/* Phone Icon with Wave Animation */}
                        <div className="relative mb-6">
                            <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center relative">
                                {/* Animated Wave Background */}
                                <div className="absolute inset-0 rounded-full overflow-hidden">
                                    <Image
                                        src="/images/wave.gif"
                                        alt="Wave animation"
                                        fill
                                        className="object-cover opacity-40"
                                    />
                                </div>
                                <Phone className="w-10 h-10 text-pink-600 relative z-10" strokeWidth={2} />
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                            AI Calling Agent
                        </h2>

                        {/* Subtitle */}
                        <p className="text-sm md:text-base text-white/80 mb-6">
                            Handling customer inquiry
                        </p>

                        {/* Timer */}
                        <div className="text-4xl md:text-4xl font-bold mb-4">
                            01:44
                        </div>

                        {/* Audio Wave Visualization */}
                        <div className="flex items-center justify-center gap-1 mb-8">
                            {[...Array(9)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-1 bg-white rounded-full animate-pulse"
                                    style={{
                                        height: `${Math.random() * 20 + 10}px`,
                                        animationDelay: `${i * 0.1}s`,
                                        animationDuration: '1s'
                                    }}
                                ></div>
                            ))}
                        </div>

                        {/* Control Buttons */}
                        <div className="flex items-center justify-center gap-4 mb-12">
                            <button className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200">
                                <Mic className="w-6 h-6 text-white" strokeWidth={2} />
                            </button>
                            <button className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200">
                                <Volume2 className="w-6 h-6 text-white" strokeWidth={2} />
                            </button>
                            <button className="w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-200">
                                <PhoneOff className="w-6 h-6 text-white" strokeWidth={2} />
                            </button>
                        </div>

                        {/* Divider Line */}
                        <div className="w-full h-px bg-white/20 mb-8"></div>

                        {/* Bottom Section */}
                        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-left">
                                <h3 className="text-xl md:text-2xl font-bold mb-1">
                                    Experience AI Calling in Action
                                </h3>
                                <p className="text-xl text-white/70">
                                    See how our AI handles real customer conversations
                                </p>
                            </div>

                            <Button
                                label="Try a live call"
                                icon={<Phone className="w-6 h-6" />}
                                className="bg-white text-primary hover:bg-gray-50 border border-accent shrink-0 text-[26px] h-[70px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Calling;
