'use client';

import React, { useState } from 'react';

interface ContactFormProps {
    className?: string;
}

const ContactForm = ({ className = '' }: ContactFormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        agreeToPolicy: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    return (
        <div className="relative w-full">
            {/* Pinkish Shadow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-purple-200/30 to-pink-300/40 rounded-2xl blur-2xl transform scale-105"></div>

            {/* Form with Gradient Border */}
            <div className="relative bg-gradient-to-r from-primary via-accent to-primary p-[2px] rounded-2xl w-full">
                <form onSubmit={handleSubmit} className={`bg-white rounded-2xl w-full p-10 shadow-2xl ${className}`}>
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                required
                            />
                        </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type your message here..."
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                            required
                        />
                    </div>

                    {/* Privacy Policy Checkbox */}
                    <div className="mb-6">
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="agreeToPolicy"
                                checked={formData.agreeToPolicy}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                                required
                            />
                            <span className="text-sm text-gray-600">
                                I agree to the{' '}
                                <a href="#" className="text-primary hover:underline font-medium">
                                    privacy policy
                                </a>
                            </span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
