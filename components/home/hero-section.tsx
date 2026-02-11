"use client";

import React from 'react'
import Navbar from '../shared/navbar'
import Container from '../shared/container'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from '../shared/common/button';

const HeroSection = () => {
    return (
        <div className='bg-gradient-to-r from-primary/80 via-[#9d7fc9] to-accent/90  min-h-screen'>
            <Container>
                <Navbar />

                {/* Hero Content */}
                <div className='grid lg:grid-cols-2 gap-12 items-center py-16   lg:py-20'>

                    {/* Left Content Box */}
                    <div className='text-white space-y-6'>
                        <h1 className='text-3xl sm:text-[58px] leading-tight font-bold'>
                            Turn every call into{' '}
                            <span className='text-[#FFB84D]'>Productivity</span>{' '}
                            with Our Cutting-Edge SaaS Platform
                        </h1>

                        <p className='text-[22px] '>
                            Streamline operations, boost efficiency, and elevate team collaboration. Our SaaS platform adapts to your needs
                        </p>

                        {/* CTA Buttons */}
                        <div className='flex flex-wrap justify-center sm:justify-start gap-4 pt-4'>

                            <Button label='Get Started' icon={<ArrowRight size={20} />} className='border-none' />
                            <Button label='Pricing Plans' className='border-accent' />

                        </div>
                    </div>

                    {/* Right Image Box */}
                    <div className='relative flex items-center justify-center mt-8 lg:mt-0'>

                        {/* Star - Top Right */}
                        <Image
                            src="/images/star.png"
                            alt="Star decoration"
                            width={64}
                            height={64}
                            className='absolute -top-18 right-1 lg:right-20 '
                        />

                        {/* Star - Bottom Left */}
                        <Image
                            src="/images/star.png"
                            alt="Star decoration"
                            width={148}
                            height={148}
                            className='absolute -bottom-16 left-8 lg:left-16 rotate-12 h-12 w-12 '

                        />



                        {/* Circle - Bottom Right */}
                        <Image
                            src="/images/circle.png"
                            alt="Circle decoration"
                            width={625}
                            height={626}
                            className='absolute bottom-[-40px] -top-30 lg:right-[-20px]  '
                        />



                        {/* Laptop Image */}
                        <div className='relative z-10'>
                            <Image
                                src="/images/laptop.png"
                                alt="SaaS Dashboard on Laptop"
                                width={537}
                                height={337}
                                className='  drop-shadow-2xl'
                                priority
                            />
                        </div>
                    </div>

                </div>
            </Container>


            {/* Reverse Downward Curve */}
            <div className="relative w-full">
                <svg
                    viewBox="0 0 1440 160"
                    className="w-full h-[160px]"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,120 Q720,-40 1440,120 L1440,160 L0,160 Z"
                        fill="white"
                    />
                </svg>
            </div>

        </div>
    )
}

export default HeroSection