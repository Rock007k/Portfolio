import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Learning Management System",
        subtitle: "Student CURD",
        description: "Developed a robust web-based application to manage CRUD operations for a dynamic inventory management system using Java Spring Boot. Applied Hibernate ORM for efficient database mapping.",
        tags: ["Java", "Spring Boot", "Hibernate", "MySQL", "RESTful APIs", "React"],
        github: "#",
        demo: "#",
        color: "from-blue-400 to-cyan-300"
    },
    {
        title: "Catch-Out Flipkart Grid 4.0",
        subtitle: "Information Security, Code Vulnerability",
        description: "Hackathon project. Open Source Vulnerability detector to safe your systems and test them to make it more secure and maintaining privacy invasion. Rating and report given collaborating working for projects repositories.",
        tags: ["NVD", "Java", "SpringBoot", "HTML", "CSS", "JS"],
        github: "#",
        demo: "#",
        color: "from-orange-400 to-yellow-300"
    },
    {
        title: "Albot – Crypto Trading Bot",
        subtitle: "Machine Learning, Blockchain",
        description: "Research oriented, predictive bot for bringing automation to trading and make it simpler for people and also effectively bringing down processing time exponentially comparison to manual infrastructure.",
        tags: ["Python", "Mathematics Algorithms", "UI"],
        github: "#",
        demo: "#",
        color: "from-purple-400 to-pink-300"
    },
    {
        title: "Challenging Careers",
        subtitle: "Web Development, Cloud",
        description: "Hackathon: Theme- kill the cliche. Built a web platform for a social cause as part of a Hackathon aimed at supporting child education. Developed the application using HTML, JavaScript, and Node.js with a Firebase Backend.",
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "AWS", "Firebase"],
        github: "#",
        demo: "#",
        color: "from-green-400 to-emerald-300"
    }
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-panel overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
    >
        <div className={`h-2 bg-gradient-to-r ${project.color}`} />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-primary mb-3">{project.subtitle}</p>
            <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-gray-300 border border-white/10">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex space-x-4 mt-auto">
                <a href={project.github} className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                    <Github className="w-4 h-4 mr-2" /> Code
                </a>
                <a href={project.demo} className="flex items-center text-sm text-primary hover:text-secondary transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                </a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Featured Projects
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A collection of projects showcasing my work in Full Stack Development, Security, and Machine Learning.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
