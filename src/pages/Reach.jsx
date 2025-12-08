import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Reach = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Get In Touch
                    </h1>
                    <p className="text-gray-400 mb-8 text-lg">
                        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 text-gray-300">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <span>gautammaheshwari135790@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-300">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <span>Noida / Gurugram, India</span>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-300">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <span>+91-7509550409</span>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-panel p-8"
                >
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-dark/50 border border-glassBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-dark/50 border border-glassBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full bg-dark/50 border border-glassBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                        >
                            Send Message <Send className="ml-2 w-4 h-4" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Reach;
