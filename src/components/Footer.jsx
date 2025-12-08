import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark border-t border-glassBorder py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Gautam Maheshwari. Built with React & Tailwind.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com/Rock007k" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300">
                        <Github className="h-5 w-5" />
                    </a>
                    <a href="https://linkedin.com/in/gautam-maheshwari" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300">
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:gautammaheshwari135790@gmail.com" className="text-gray-400 hover:text-primary transition-colors duration-300">
                        <Mail className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
