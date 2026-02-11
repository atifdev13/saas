import React from 'react';
import Container from '../shared/container';
import SectionTitle from '../shared/common/section-title';
import { Check } from 'lucide-react';

interface PricingPlan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    buttonText: string;
}

const pricingPlans: PricingPlan[] = [
    {
        name: 'Starter Plan',
        price: '$9.99',
        period: 'weekly',
        description: 'Up To 5 User + 1.99 Per User',
        features: [
            'Live Chat',
            '5gb Hosting',
            '2 Website 3 Sub Domains',
        ],
        buttonText: 'Sign Up',
    },
    {
        name: 'Silver Plan',
        price: '$19.99',
        period: 'weekly',
        description: 'Up To 5 User + 1.99 Per User',
        features: [
            'Live Chat',
            '5gb Hosting',
            '2 Website 3 Sub Domains',
            'Email & Live Chat',
            'Backlinks',
        ],
        isPopular: true,
        buttonText: 'Sign Up',
    },
    {
        name: 'Gold',
        price: '$29.99',
        period: 'weekly',
        description: 'Up To 5 User + 1.99 Per User',
        features: [
            'Live Chat',
            '5gb Hosting',
            '2 Website 3 Sub Domains',
        ],
        buttonText: 'Sign Up',
    },
];

const Pricing = () => {
    return (
        <Container className="bg-white py-16">
            <div className="">
                {/* Header Section */}
                <div className="text-center mb-12">
                    {/* Small Badge */}
                    <div className="inline-flex items-center gap-2 bg-purple-50 text-primary px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-medium">Pricing Plans</span>
                    </div>

                    <SectionTitle
                        textAlign="center"
                        highlightText="Plan"
                        highlightColor="text-[#6366F1]"
                        className="mb-4"
                    >
                        Choose Your Plan
                    </SectionTitle>
                    <p className="text-secondary text-[22px] leading-[33px] max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12  ">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 transition-all duration-300 ${plan.isPopular
                                ? 'bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-white shadow-2xl scale-105 lg:scale-110 z-10'
                                : 'bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg'
                                }`}
                        >
                            {/* Plan Name */}
                            <h3
                                className={`text-2xl md:text-[40px] font-bold mb-6 ${plan.isPopular ? 'text-white' : 'text-gray-900'
                                    }`}
                            >
                                {plan.name}
                            </h3>

                            {/* Features List */}
                            <div className="space-y-2 mb-5">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                        <div className="mt-1">
                                            <Check
                                                className={`w-5 h-5 ${plan.isPopular ? 'text-white' : 'text-secondary'
                                                    }`}
                                                strokeWidth={2.5}
                                            />
                                        </div>
                                        <p
                                            className={`text-md md:text-[22px] ${plan.isPopular ? 'text-white' : 'text-gray-700'
                                                }`}
                                        >
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span
                                        className={`text-4xl md:text-5xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-900'
                                            }`}
                                    >
                                        {plan.price}
                                    </span>
                                    <span
                                        className={`text-xl ${plan.isPopular ? 'text-white/80' : 'text-gray-600'
                                            }`}
                                    >
                                        /{plan.period}
                                    </span>
                                </div>
                                <p
                                    className={`text-sm mt-2 ${plan.isPopular ? 'text-white/70' : 'text-gray-500'
                                        }`}
                                >
                                    {plan.description}
                                </p>
                            </div>

                            {/* Button */}
                            <button
                                className={`  py-3 px-12 rounded font-semibold text-lg transition-all duration-200 ${plan.isPopular
                                    ? 'bg-white text-[#6366F1] hover:bg-gray-50'
                                    : 'bg-transparent border-2 border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1] hover:text-white'
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Pricing;
