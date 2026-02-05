import React from 'react';

const TechStack = () => {
    const techs = [
        "REACT", "NEXT.JS", "PYTHON", "AWS", "TYPESCRIPT", "FIGMA", "DOCKER", "RUST"
    ];

    return (
        <div className="mt-32 max-w-[1280px] mx-auto w-full px-6">
            <div className="flex flex-col items-center mb-10">
                <h3 className="text-2xl font-bold tracking-tight px-4 text-center text-heading">
                    Powering Innovation with Modern Tech
                </h3>
            </div>
            <div className="relative w-full overflow-hidden py-8">
                {/* Glass Track */}
                <div className="absolute inset-0 bg-white/30 dark:bg-white/5 backdrop-blur-sm rounded-xl"></div>
                {/* Marquee Container */}
                <div className="marquee-track relative flex items-center overflow-hidden">
                    <div className="flex animate-scroll whitespace-nowrap py-4">
                        {/* Logos Set 1 */}
                        <div className="flex items-center gap-20 px-10">
                            {techs.map((tech, index) => (
                                <span key={`tech-1-${index}`} className="text-2xl font-bold text-heading/60 flex items-center gap-3">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {/* Logos Set 2 (for loop) */}
                        <div className="flex items-center gap-20 px-10">
                            {techs.map((tech, index) => (
                                <span key={`tech-2-${index}`} className="text-2xl font-bold text-heading/60 flex items-center gap-3">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;
