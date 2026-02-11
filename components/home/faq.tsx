'use client';

import React, { useState } from 'react';
import Container from '../shared/container';
import SectionTitle from '../shared/common/section-title';
import { ChevronDown, ChevronUpIcon, Minus } from 'lucide-react';
import Image from 'next/image';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: 'How Does The Free Trial Work?',
        answer: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Nunc Mattis In Quis Lacus Bibendum Sed Aliquam. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Nunc Mattis In Quis Lacus Bibendum Sed Aliquam.',
    },
    {
        question: 'How Do I Get My Refund?',
        answer: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Nunc Mattis In Quis Lacus Bibendum Sed Aliquam. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.',
    },
    {
        question: 'How Does It Work?',
        answer: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Nunc Mattis In Quis Lacus Bibendum Sed Aliquam. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.',
    },
    {
        question: 'Can We Share Accounts?',
        answer: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Nunc Mattis In Quis Lacus Bibendum Sed Aliquam. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.',
    },
    {
        question: 'What Is The Privacy Policy?',
        answer: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Nunc Mattis In Quis Lacus Bibendum Sed Aliquam. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Container className="bg-white py-16 relative">
            {/* Decorative Stars */}
            <div className="absolute top-60 right-52 hidden lg:block">
                <Image
                    src="/images/b-ai.png"
                    alt="Decorative star"
                    width={60}
                    height={60}
                    className="w-10 h-10 "
                />
            </div>
            <div className="absolute bottom-6 left-48 hidden lg:block">
                <Image
                    src="/images/y-ai.png"
                    alt="Decorative star"
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20"
                />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                    {/* Small Badge */}
                    <div className="inline-flex items-center gap-2 bg-purple-50 text-primary px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-medium">FAQs</span>
                    </div>

                    <SectionTitle
                        textAlign="center"
                        highlightText="answers"
                        highlightColor="text-[#6366F1]"
                        className="mb-4"
                    >
                        Got questions? We've got answers
                    </SectionTitle>
                </div>

                {/* FAQ Accordions */}
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl transition-all duration-300 ${openIndex === index
                                ? 'bg-gradient-to-r from-primary to-[#8B5CF6] text-white shadow-lg'
                                : 'bg-[#8B5CF6] text-white hover:shadow-md border border-accent rounded-2xl'
                                }`}
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left "
                            >
                                <span className="text-lg md:text-xl font-semibold pr-4">
                                    {faq.question}
                                </span>

                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <ChevronUpIcon className="w-6 h-6 text-accent" strokeWidth={2.5} />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-white" strokeWidth={2.5} />
                                    )}
                                </div>
                            </button>

                            {/* Answer Content */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default FAQ;
