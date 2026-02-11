'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from './container';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribe email:', email);
        setEmail('');
    };

    return (
        <footer className="bg-[#150D27] text-white">
            {/* Main Footer Content */}
            <Container className="  px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-16 px-3">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/logo.png"
                                alt="SaaS Logo"
                                width={80}
                                height={80}
                                className="w-20 h-20"
                            />
                        </div>
                        <p className="text-white text-[16px] leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis nibh. Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-[20px] font-semibold mb-4">Resources</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-white text-[16px] hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-white text-[16px] hover:text-primary transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-white text-[16px] hover:text-primary transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white text-[16px] hover:text-primary transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-[20px] font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li className="text-white text-[16px]">
                                Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
                            </li>
                            <li className="text-white text-[16px]">
                                mail@saas.com
                            </li>
                            <li className="text-white text-[16px]">
                                + 381 9875 6231
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h4 className="text-[20px] font-semibold mb-4">Sign Up</h4>
                        <form onSubmit={handleSubscribe} className="  flex rounded-lg border overflow-hidden">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="mail@gmail.com"
                                className="w-full px-4 py-2.5 w-[200px] bg-white/10 border border-gray-600 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-[14px]"
                                required
                            />
                            <button
                                type="submit"
                                className="  bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-3  transition-all duration-200 text-[14px]"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </Container>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 max-w-6xl mx-auto pb-10">
                <div className=" px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white text-sm">
                            © 2025 SaaS • All Rights Reserved
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="text-white text-sm hover:text-primary transition-colors">
                                Privacy & Policy
                            </Link>
                            <Link href="/terms" className="text-white text-sm hover:text-primary transition-colors">
                                Terms & Condition
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
