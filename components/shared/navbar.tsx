"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact", href: "/contact" },
    ];

    // Lock body scroll when sidebar open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    return (
        <>
            {/* NAVBAR */}
            <nav className="w-full bg-white rounded-[50px] h-[75px] px-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex-1 text-2xl font-bold text-secondary">
                    Logo
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex flex-1 items-center gap-5 justify-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-medium font-Onest text-[22px] text-lightGray hover:text-primary transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex flex-1 justify-end">
                    <Link
                        href="/signup"
                        className="bg-primary text-white px-8 py-3 h-[55px] rounded-[25px] text-[22px] font-bold hover:bg-opacity-90"
                    >
                        Try for free
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(true)}
                    className="lg:hidden text-primary"
                >
                    <Menu size={32} />
                </button>
            </nav>

            {/* OVERLAY */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40"
                />
            )}

            {/* SIDEBAR */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-5 border-b">
                    <span className="text-xl font-bold text-secondary">Menu</span>
                    <button onClick={() => setOpen(false)} className="text-secondary hover:text-primary transition">
                        <X size={28} />
                    </button>
                </div>

                {/* Links */}
                <div className="flex flex-col p-5 gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium text-secondary hover:text-primary transition"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* CTA */}
                    <Link
                        href="/signup"
                        onClick={() => setOpen(false)}
                        className="bg-primary text-white px-6 py-3 rounded-xl text-center font-bold mt-4"
                    >
                        Try for free
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
