
//
// interface ProjectCardProps {
//     title: string;
//     description: string;
//     tech: string[];
//     liveLink?: string;
//     githubLink: string;
// }
//
// const ProjectCard = ({ title, description, tech, liveLink, githubLink }: ProjectCardProps) => {
//     return (
//         <div className="group relative bg-[#112240] rounded-2xl p-8 text-white
//                         transition-all duration-500 ease-out
//                         border border-white/5 hover:border-[#FF6B6B]/50
//                         w-80 h-[400px] flex flex-col items-center text-center shadow-2xl">
//
//             {/* Subtle Gradient Glow inside the card */}
//             <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
//
//             <h3 className="text-2xl font-bold mb-4 group-hover:text-[#FF6B6B] transition-colors duration-300">
//                 {title}
//             </h3>
//
//             <p className="text-[#A8B2D1] mb-6 text-sm leading-relaxed overflow-hidden">
//                 {description}
//             </p>
//
//             {/* Tech Badges Centered */}
//             <div className="flex flex-wrap justify-center gap-2 mb-8 mt-auto">
//                 {tech.map((t, i) => (
//                     <span
//                         key={i}
//                         className="text-[10px] uppercase tracking-tighter border border-gray-600 text-gray-400 px-2 py-1 rounded group-hover:border-[#FF6B6B]/40 group-hover:text-[#FF6B6B] transition-all"
//                     >
//                         {t}
//                     </span>
//                 ))}
//             </div>
//
//             {/* Links Centered */}
//             <div className="flex gap-4 w-full">
//                 {liveLink && (
//                     <a href={liveLink} target="_blank" rel="noopener noreferrer"
//                        className="flex-1 bg-[#FF6B6B] text-white py-2 rounded-lg font-bold text-xs hover:scale-105 transition-transform">
//                         LIVE DEMO
//                     </a>
//                 )}
//                 <a href={githubLink} target="_blank" rel="noopener noreferrer"
//                    className="flex-1 border border-gray-600 text-gray-300 py-2 rounded-lg font-bold text-xs hover:bg-white/5 transition-all">
//                     SOURCE
//                 </a>
//             </div>
//         </div>
//     );
// };
//
// export default ProjectCard;


interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    image?: string; // Added image prop
    liveLink?: string;
    githubLink: string;
}

const ProjectCard = ({ title, description, tech, image, liveLink, githubLink }: ProjectCardProps) => {
    return (
        <div className="group relative bg-[#112240] rounded-2xl overflow-hidden text-white
                        transition-all duration-500 ease-out
                        border border-white/5 hover:border-[#FF6B6B]/50
                        w-80 h-[500px] flex flex-col shadow-2xl">

            {/* 1. Image Container with Hover Zoom */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-800">
                <img
                    src={image || "https://via.placeholder.com/400x200?text=Project+Preview"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient to make text transition smoother */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-60"></div>
            </div>

            {/* 2. Content Area (Padded separately) */}
            <div className="relative p-6 flex flex-col flex-grow items-center text-center">

                {/* Subtle Gradient Glow inside the card */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B6B] transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-[#A8B2D1] mb-4 text-xs leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Tech Badges Centered */}
                <div className="flex flex-wrap justify-center gap-2 mb-6 mt-auto">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-[9px] uppercase tracking-tighter border border-gray-600 text-gray-400 px-2 py-0.5 rounded group-hover:border-[#FF6B6B]/40 group-hover:text-[#FF6B6B] transition-all"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Links Centered */}
                <div className="flex gap-4 w-full relative z-10">
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noopener noreferrer"
                           className="flex-1 bg-[#FF6B6B] text-white py-2.5 rounded-lg font-bold text-[10px] hover:scale-105 transition-transform text-center uppercase tracking-wider">
                            Live Demo
                        </a>
                    )}
                    <a href={githubLink} target="_blank" rel="noopener noreferrer"
                       className="flex-1 border border-gray-600 text-gray-300 py-2.5 rounded-lg font-bold text-[10px] hover:bg-white/5 transition-all text-center uppercase tracking-wider">
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
