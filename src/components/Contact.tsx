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
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage("All fields are required.");
            return;
        }

        // Simulate a successful submission
        setSuccessMessage("Your message has been sent!");
        setErrorMessage("");

        // Reset fields
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div id="contact" className="container mx-auto p-8 bg-gradient-to-r from-blue-900/10 to-transparent rounded-xl">
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
            </h2>
            {errorMessage && (
                <div className="mb-6 p-4 bg-red-100/10 border border-red-400 rounded-lg text-red-400 text-center">
                    {errorMessage}
                </div>
            )}
            {successMessage && (
                <div className="mb-6 p-4 bg-green-100/10 border border-green-400 rounded-lg text-green-400 text-center">
                    {successMessage}
                </div>
            )}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto backdrop-blur-sm bg-white/5 p-8 rounded-xl border border-blue-200/20 shadow-lg hover:shadow-blue-400/20 transition-all duration-300">
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-semibold text-blue-400 flex items-center gap-2">
                        <MdPerson className="text-xl" />
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 bg-white/10 border border-blue-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder-gray-400 transition-all duration-300"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-semibold text-blue-400 flex items-center gap-2">
                        <MdEmail className="text-xl" />
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-white/10 border border-blue-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder-gray-400 transition-all duration-300"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-semibold text-blue-400 flex items-center gap-2">
                        <MdMessage className="text-xl" />
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 bg-white/10 border border-blue-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder-gray-400 transition-all duration-300"
                        rows={5}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    <MdMessage className="text-xl" />
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactMe;
