'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import SectionTitle from '@/components/shared/common/section-title';
import Container from '../shared/container';

// Dashboard screenshots for carousel
const DASHBOARDS = [
    { id: 1, src: '/images/sleek.png', alt: 'Dashboard View 1' },
    { id: 2, src: '/images/sleek.png', alt: 'Dashboard View 2' },
    { id: 3, src: '/images/sleek.png', alt: 'Dashboard View 3' },
];

// Duplicate dashboards for seamless loop
const duplicatedDashboards = [...DASHBOARDS, ...DASHBOARDS, ...DASHBOARDS];

export default function SleekAndEffort() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        dragFree: false,
        skipSnaps: false,
        align: 'start',
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const speedRef = useRef(2500); // Speed in milliseconds

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        const index = emblaApi.selectedScrollSnap() % DASHBOARDS.length;
        setSelectedIndex(index);
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

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
        <Container className="bg-white py-24">
            <div className="">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <SectionTitle
                        textAlign="center"
                        highlightText="Effortlessly powerful"
                        highlightColor="text-[#6366F1]"
                        className="mb-4 mt-16"
                    >
                        Sleek and Intuitive. Effortlessly powerful
                    </SectionTitle>
                    <p className="text-secondary text-[22px] leading-[33px] max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam
                    </p>
                </div>

                {/* Carousel Section */}
                <div className="relative">
                    <div
                        className="overflow-hidden cursor-grab active:cursor-grabbing"
                        ref={emblaRef}
                    >
                        <div className="flex gap-6">
                            {duplicatedDashboards.map((dashboard, index) => (
                                <div
                                    key={`${dashboard.id}-${index}`}
                                    className="flex-[0_0_90%] md:flex-[0_0_60%] lg:flex-[0_0_45%] xl:flex-[0_0_35%]"
                                >
                                    <div className="relative rounded-2xl overflow-hidden   transition-shadow duration-300">
                                        <Image
                                            src={dashboard.src}
                                            alt={dashboard.alt}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover"
                                            priority={index < 2}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Dots Indicator - Interactive */}
                    <div className="flex justify-center gap-2 mt-8">
                        {DASHBOARDS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                                    ? 'bg-[#6366F1] w-8'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}
