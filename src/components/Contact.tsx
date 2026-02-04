"use client"
import React, { useState } from 'react';
import { MdMessage, MdEmail, MdPerson } from "react-icons/md";

function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                setErrorMessage("All fields are required.");
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                setErrorMessage("Please enter a valid email address.");
                return;
            }

            // Simulate a successful submission
            setSuccessMessage("Your message has been sent!");
            setErrorMessage("");

            // Reset fields
            setFormData({ name: '', email: '', message: '' });
            
        } catch (error) {
            setErrorMessage("An error occurred. Please try again.");
            console.error("Form submission error:", error);
        }
    };

    return (
        <div id="contact" className="container mx-auto p-8 py-20 bg-gradient-to-b from-black to-purple-900/5">
            <h2 className="text-6xl font-bold text-center mb-16">
                <span className="text-purple-300/90">
                    Get In Touch
                </span>
            </h2>
            {errorMessage && (
                <div className="mb-6 p-4 border border-red-500/50 bg-red-500/10 text-red-400 text-center max-w-lg mx-auto rounded-lg">
                    {errorMessage}
                </div>
            )}
            {successMessage && (
                <div className="mb-6 p-4 border border-green-500/50 bg-green-500/10 text-green-400 text-center max-w-lg mx-auto rounded-lg">
                    {successMessage}
                </div>
            )}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto border border-purple-500/10 bg-gradient-to-br from-black/60 to-purple-900/10 backdrop-blur-sm p-8 rounded-xl shadow-lg shadow-purple-500/5">
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-purple-200/80 flex items-center gap-2">
                        <MdPerson className="text-xl" />
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 bg-black/60 border border-purple-500/10 focus:outline-none focus:border-purple-400/30 text-white placeholder-gray-500 transition-all duration-300 rounded-lg"
                        placeholder="Your name"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-purple-200/80 flex items-center gap-2">
                        <MdEmail className="text-xl" />
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-black/60 border border-purple-500/10 focus:outline-none focus:border-purple-400/30 text-white placeholder-gray-500 transition-all duration-300 rounded-lg"
                        placeholder="your.email@example.com"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-purple-200/80 flex items-center gap-2">
                        <MdMessage className="text-xl" />
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 bg-black/60 border border-purple-500/10 focus:outline-none focus:border-purple-400/30 text-white placeholder-gray-500 transition-all duration-300 rounded-lg"
                        rows={5}
                        placeholder="Your message"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500/80 to-purple-400/80 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-500 hover:to-purple-400 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
                >
                    <MdMessage className="text-xl" />
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactMe;
