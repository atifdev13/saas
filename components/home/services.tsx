import React from 'react'
import SectionTitle from '../shared/common/section-title'
import Title from '../shared/common/title'
import ServiceCard from '../shared/common/service-card'
import Container from '../shared/container'
import { BarChart3, Shield, Zap, Globe } from 'lucide-react'

// Service data array
const servicesData = [
    {
        id: 1,
        icon: <BarChart3 size={45} strokeWidth={1.5} />,
        title: 'Real-time Analytics',
        description: 'Get insights as they happen. Monitor user activity, sales, and conversions in real-time.',
        iconBgColor: 'bg-blue-50',
        iconColor: 'text-blue-500'
    },
    {
        id: 2,
        icon: <Shield size={45} strokeWidth={1.5} />,
        title: 'Bank-grade Security',
        description: 'Get insights as they happen. Monitor user activity, sales, and conversions in real-time.',
        iconBgColor: 'bg-purple-50',
        iconColor: 'text-purple-500'
    },
    {
        id: 3,
        icon: <Zap size={45} strokeWidth={1.5} />,
        title: 'Lightning Fast',
        description: 'Get insights as they happen. Monitor user activity, sales, and conversions in real-time.',
        iconBgColor: 'bg-yellow-50',
        iconColor: 'text-yellow-500'
    },
    {
        id: 4,
        icon: <Globe size={45} strokeWidth={1.5} />,
        title: 'Global Scale',
        description: 'Get insights as they happen. Monitor user activity, sales, and conversions in real-time.',
        iconBgColor: 'bg-pink-50',
        iconColor: 'text-pink-500'
    }
];

const Services = () => {
    return (
        <div className='bg-white pb-12'>
            <Container>
                <div className="text-center mb-16">
                    {/* Small Badge */}
                    <div className="flex justify-center mb-6">
                        <Title text="Key Services" />
                    </div>

                    {/* Large Heading */}
                    <SectionTitle
                        highlightText="less effort"
                        highlightColor="text-primary"
                        className="max-w-4xl mx-auto"
                    >
                        Everything you need to increase efficiency and achieve more with less effort
                    </SectionTitle>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto gap-6 lg:gap-16">
                    {servicesData.map((service) => (
                        <ServiceCard
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            iconBgColor={service.iconBgColor}
                            iconColor={service.iconColor}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Services