'use client';

import { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const LOGOS = [
    { id: 1, src: '/images/stripe.png', alt: 'Stripe' },
    { id: 2, src: '/images/pay.png', alt: 'PayPal' },
    { id: 3, src: '/images/stripe.png', alt: 'Stripe' },
    { id: 4, src: '/images/pay.png', alt: 'PayPal' },
    { id: 5, src: '/images/stripe.png', alt: 'Stripe' },
    { id: 6, src: '/images/pay.png', alt: 'PayPal' },
];

// Duplicate logos for seamless loop
const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS];

export default function ScalingCompanies() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        dragFree: true,
        skipSnaps: true,
    });

    const speedRef = useRef(600); // Adjust this value: 1000 = fast, 2000 = medium, 3000 = slow (milliseconds between slides)

    useEffect(() => {
        if (!emblaApi) return;

        let timeoutId: NodeJS.Timeout;

        const autoScroll = () => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0);
            }
            timeoutId = setTimeout(autoScroll, speedRef.current);
        };

        timeoutId = setTimeout(autoScroll, speedRef.current);

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [emblaApi]);

    return (
        <div className="w-full bg-white py-10 overflow-hidden">
            <div className="mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl w-full lg:w-[40%] leading-tight text-center lg:text-left font-bold">
                        Over <span className="text-primary font-bold">120</span> companies
                        <br />
                        are scaling with <span className="text-primary inline-flex items-center gap-2">
                            <Image
                                src="/images/logo.png"
                                alt="SaaS Logo"
                                width={80}
                                height={80}
                                className="w-16 h-16 object-cover"
                            />
                        </span>
                    </h2>

                    {/* Carousel */}
                    <div
                        className="w-full lg:w-[55%] overflow-hidden cursor-grab active:cursor-grabbing"
                        ref={emblaRef}
                    >
                        <div className="flex">
                            {duplicatedLogos.map((logo, index) => (
                                <div
                                    key={`${logo.id}-${index}`}
                                    className="flex-[0_0_180px] mx-2 flex items-center justify-center"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={140}
                                        height={60}
                                        className="object-contain transition-all duration-300  "
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
