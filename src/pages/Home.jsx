import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillCloud from '../components/SkillCloud';

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">

            {/* Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 flex flex-col items-start space-y-6 z-10"
            >
                <h2 className="text-secondary font-mono text-lg">Hi, I'm Gautam Maheshwari</h2>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Developer</span> <br />
                    & Engineer
                </h1>
                <p className="text-gray-400 text-lg max-w-lg">
                    I'm a Software Developer specializing in Enterprise Data Solutions, Full Stack Development (Java/React), and building scalable applications.
                    Passionate about solving complex problems with code.
                </p>

                <div className="flex space-x-4">
                    <Link
                        to="/projects"
                        className="group relative px-6 py-3 bg-primary/10 text-primary border border-primary/50 rounded-lg overflow-hidden transition-all hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                    >
                        <span className="relative z-10 flex items-center font-semibold">
                            View Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link
                        to="/reach"
                        className="px-6 py-3 text-gray-300 hover:text-white transition-colors font-semibold border border-transparent hover:border-glassBorder rounded-lg"
                    >
                        Contact Me
                    </Link>
                </div>
            </motion.div>

            {/* Interactive Skills */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 h-[500px] flex items-center justify-center relative z-10"
            >
                <SkillCloud />
            </motion.div>
        </div>
    );
};

export default Home;

