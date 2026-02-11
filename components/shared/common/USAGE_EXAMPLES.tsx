/**
 * REUSABLE TITLE & SECTION-TITLE COMPONENTS
 * 
 * This file demonstrates how to use the Title and SectionTitle components
 */

import Title from '@/components/shared/common/title';
import SectionTitle from '@/components/shared/common/section-title';

// ============================================
// 1. TITLE COMPONENT (Small Badge/Pill)
// ============================================

// Basic Usage:
<Title text="Key Services" />

// Custom Colors:
<Title 
    text="Key Services" 
    bgColor="bg-primary/10" 
    textColor="text-primary" 
/>

// Different Styles:
<Title text="New Feature" bgColor="bg-accent/10" textColor="text-accent" />
<Title text="Premium" bgColor="bg-green-100" textColor="text-green-600" />

// With Additional Classes:
<Title 
    text="Key Services" 
    className="mb-4 shadow-sm" 
/>

// ============================================
// TITLE PROPS:
// ============================================
// - text: string (required) - The text to display
// - bgColor?: string - Background color (default: 'bg-primary/10')
// - textColor?: string - Text color (default: 'text-primary')
// - className?: string - Additional Tailwind classes


// ============================================
// 2. SECTION-TITLE COMPONENT (Large Heading)
// ============================================

// Basic Usage:
<SectionTitle>
    Everything you need to increase efficiency and achieve more with less effort
</SectionTitle>

// With Highlighted Text:
<SectionTitle highlightText="less effort" highlightColor="text-primary">
    Everything you need to increase efficiency and achieve more with less effort
</SectionTitle>

// Left Aligned:
<SectionTitle textAlign="left" highlightText="120">
    Over 120 companies are scaling with SaaS
</SectionTitle>

// Custom Font Size:
<SectionTitle 
    fontSize="text-5xl" 
    fontWeight="font-extrabold"
    highlightText="SaaS"
>
    Welcome to our SaaS Platform
</SectionTitle>

// With Custom Styling:
<SectionTitle 
    textAlign="center"
    fontSize="text-[42px]"
    fontWeight="font-bold"
    highlightText="efficiency"
    highlightColor="text-accent"
    className="max-w-4xl mx-auto mb-8"
>
    Everything you need to increase efficiency and achieve more with less effort
</SectionTitle>

// ============================================
// SECTION-TITLE PROPS:
// ============================================
// - children: React.ReactNode (required) - The heading text/content
// - highlightText?: string - Text to highlight in a different color
// - highlightColor?: string - Color for highlighted text (default: 'text-primary')
// - textAlign?: 'left' | 'center' | 'right' - Text alignment (default: 'center')
// - fontSize?: string - Font size class (default: 'text-[42px]')
// - fontWeight?: string - Font weight class (default: 'font-bold')
// - className?: string - Additional Tailwind classes


// ============================================
// COMPLETE EXAMPLE (Like in the image):
// ============================================

export default function ExampleSection() {
    return (
        <div className="py-20 text-center">
            {/* Small Badge */}
            <div className="flex justify-center mb-6">
                <Title text="Key Services" />
            </div>

            {/* Large Heading with Highlight */}
            <SectionTitle
                highlightText="less effort"
                highlightColor="text-primary"
                className="max-w-4xl mx-auto"
            >
                Everything you need to increase efficiency and achieve more with less effort
            </SectionTitle>
        </div>
    );
}
