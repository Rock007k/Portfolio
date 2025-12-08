import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

const SkillCloud = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const texts = [
            'JavaScript', 'Java', 'C++', 'SQL', 'Bash',
            'SpringBoot', 'Node.js', 'React.js', 'Express.js',
            'MySQL', 'MongoDB', 'Hibernate', 'Maven',
            'Git', 'GitHub', 'AWS', 'Linux', 'Stibo',
            'DSA', 'Problem Solving'
        ];

        const options = {
            radius: 300,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: true,
            useContainerInlineStyles: true,
            useItemInlineStyles: true,
            containerClass: 'tagcloud',
            itemClass: 'tagcloud-item',
        };

        if (container) {
            container.innerHTML = '';
            TagCloud(container, texts, options);
        }

        return () => {
            if (container) container.innerHTML = '';
        };
    }, []);

    return (
        <div className="flex items-center justify-center h-full w-full">
            <div
                ref={containerRef}
                className="text-primary font-bold text-xl cursor-pointer hover:text-secondary transition-colors duration-300"
                style={{ color: '#00d4ff' }}
            />
            <style>{`
        .tagcloud {
          display: inline-block;
          margin: 0 auto;
        }
        .tagcloud-item {
          font-size: 1.2rem;
          font-weight: 600;
          transition: all 0.3s;
        }
        .tagcloud-item:hover {
          color: #ff00d4;
          font-size: 1.5rem;
          text-shadow: 0 0 10px #ff00d4;
        }
      `}</style>
        </div>
    );
};

export default SkillCloud;
