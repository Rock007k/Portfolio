import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';

const Section = ({ title, icon: Icon, children, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className="mb-12"
    >
        <div className="flex items-center mb-6">
            <Icon className="text-primary h-8 w-8 mr-4" />
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        <div className="space-y-6">
            {children}
        </div>
    </motion.div>
);

const Card = ({ title, subtitle, date, description, listItems }) => (
    <div className="glass-panel p-6 hover:border-primary/50 transition-colors duration-300">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-primary">{subtitle}</p>
            </div>
            <span className="text-gray-400 text-sm mt-2 md:mt-0">{date}</span>
        </div>
        {description && <p className="text-gray-300 leading-relaxed mb-4">{description}</p>}
        {listItems && (
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )}
    </div>
);

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
                My Journey
            </motion.h1>

            <Section title="Experience" icon={Briefcase} delay={0.2}>
                <Card
                    title="Software Developer"
                    subtitle="Duco Consultancy"
                    date="Jan 2025 - Present"
                    listItems={[
                        "Service Line: Enterprise Data Solution (Full-time).",
                        "Strong Knowledge: Javascript, WebUI, API, Mastered Data Management, STIBO-MDM, STIBO-PDX.",
                        "Business Rule Implementation: Implementing and optimizing business rules in STIBO MDM to meet complex client data management requirements.",
                        "Client-Facing Development: Engaged with 3+ enterprise clients, delivering over 15 change requests with 100% on-time delivery.",
                        "Professional Development: Gained hands-on experience with Master Data Management (MDM) and Product Data Exchange (PDX)."
                    ]}
                />
                <Card
                    title="Trainee - Java Full Stack Developer"
                    subtitle="Tata Strive"
                    date="Jul 2024 - Dec 2024"
                    listItems={[
                        "Strong Knowledge: Java core, Data Structures, OOP, JDBC, ORM-Hibernate, Spring Boot.",
                        "Backend and Frontend(UI): Completed over 10 backend projects to master Spring Boot fundamentals and develop scalable RESTful APIs.",
                        "Achievements: Earned 4+ certifications in backend and frontend technologies."
                    ]}
                />
            </Section>

            <Section title="Education" icon={GraduationCap} delay={0.4}>
                <Card
                    title="Integrated Master of Technology - Computer Science"
                    subtitle="Jaypee Institute of Information Technology, Noida"
                    date="July 2019 - July 2024"
                    description="GPA: 7.6. Courses: Operating Systems, Data Structures, Analysis Of Algorithms, Machine Learning, Networking, Databases, Frontend Development."
                />
            </Section>

            <Section title="Certifications & Awards" icon={Award} delay={0.5}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="glass-panel p-4">
                        <h4 className="font-bold text-white">Certified Java Full Stack Developer</h4>
                        <p className="text-gray-400 text-sm">Tata Strive - Nov 2024</p>
                    </div>
                    <div className="glass-panel p-4">
                        <h4 className="font-bold text-white">Data Structures and Algorithms (DSA)</h4>
                        <p className="text-gray-400 text-sm">Coding Ninjas - July 2023</p>
                    </div>
                    <div className="glass-panel p-4">
                        <h4 className="font-bold text-white">Technical Support Fundamentals</h4>
                        <p className="text-gray-400 text-sm">Google (Coursera) - Jan 2023</p>
                    </div>
                    <div className="glass-panel p-4">
                        <h4 className="font-bold text-white">Second Runner's Up</h4>
                        <p className="text-gray-400 text-sm">CodeJam V2 Engineering Project Hackathon - 2021</p>
                    </div>
                </div>
            </Section>

            <Section title="Soft Skills & Hobbies" icon={Code} delay={0.6}>
                <div className="glass-panel p-6">
                    <p className="text-gray-300 leading-relaxed mb-4">
                        <strong className="text-white">Soft Skills:</strong> Leadership, Event Management, Time Management.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        <strong className="text-white">Hobbies:</strong> Finance, Gaming, Dancing, Chess, Video Editing, Animation, Photography, Problem Solving, Cryptocurrency.
                    </p>
                </div>
            </Section>
        </div>
    );
};

export default About;
