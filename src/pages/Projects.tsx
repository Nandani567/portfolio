//
// import ProjectCard from "../ components/ProjectCard.tsx";
//
// const ProjectsPage = () => {
//     const projects = [
//         {
//             title: "Medical Reminder & Refill App",
//             description:
//                 "A mobile app that helps users manage medications, reminders, and refills reliably.",
//             tech: ["React Native", "Firebase", "JavaScript"],
//             liveLink: "https://your-live-link.com",
//             githubLink: "https://github.com/your-repo",
//         },
//         {
//             title: "Fake News Detection System",
//             description:
//                 "A web application that classifies news as fake or real using machine learning models.",
//             tech: ["React", "Express", "Python", "ML"],
//             githubLink: "https://github.com/your-repo",
//         },
//         {
//             title: "SyncSyllabus",
//             description:
//                 "An ML-based analysis tool to check whether university syllabi align with industry needs.",
//             tech: ["Python", "Machine Learning", "Data Analysis"],
//             githubLink: "https://github.com/your-repo",
//         },
//     ];
//
//     return (
//         <main className="min-h-screen bg-[#0D1B2A] px-6 md:px-16 py-20">
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
//                 Projects
//             </h1>
//
//             {/* Desktop Carousel */}
//             <div className="hidden md:block">
//                 <div className="carousel carousel-center w-full space-x-6 p-4">
//                     {projects.map((project, i) => (
//                         <div key={i} className="carousel-item">
//                             <ProjectCard {...project} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//             {/* Mobile Carousel */}
//             <div className="md:hidden carousel w-full">
//                 {projects.map((project, i) => (
//                     <div
//                         key={i}
//                         id={`project-${i}`}
//                         className="carousel-item w-full flex justify-center"
//                     >
//                         <ProjectCard {...project} />
//                     </div>
//                 ))}
//
//                 {/* Indicators */}
//                 <div className="flex justify-center gap-2 mt-4">
//                     {projects.map((_, i) => (
//                         <a
//                             key={i}
//                             href={`#project-${i}`}
//                             className="btn btn-xs bg-[#FF6B6B] border-none"
//                         />
//                     ))}
//                 </div>
//             </div>
//         </main>
//     );
// };
//
// export default ProjectsPage;

//
// import ProjectCard from "../ components/ProjectCard.tsx";
// import Fakenews from "../assets/image1.jpeg";
// import Medico from "../assets/medico.jpeg"
// const ProjectsPage = () => {
//     const projects = [
//         {
//             title: "Medical Reminder & Refill App",
//             image:Medico,
//             description: "A mobile app that helps users manage medications, reminders, and refills reliably.",
//             tech: ["React Native", "Mongodb", "JavaScript","python"],
//             // liveLink: "https://your-live-link.com",
//
//             githubLink: "https://github.com/Nandani567/MediCode",
//         },
//         {
//             title: "Fake News Detection System",
//             image:FakeNews,
//             description: "A web application that classifies news as fake or real using machine learning models.",
//             tech: ["React  ", "Express", "Python", "ML"],
//             githubLink: "https://github.com/Nandani567/FakeNewsPredictor",
//         },
//         {
//             title: "SyncSyllabus",
//             description: "An ML-based analysis tool to check whether university syllabi align with industry needs.",
//             tech: ["Python", "Machine Learning", "Data Analysis","Streamlite"],
//             githubLink: "https://github.com/Nandani567/SyncSyllabus",
//         },
//     ];
//
//     return (
//         <main className="min-h-screen bg-[#0D1B2A] py-20">
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
//                 Projects
//             </h1>
//
//             {/* Unified Swipable Carousel */}
//             <div className="relative group">
//                 <div className="flex overflow-x-auto gap-8 px-[10%] md:px-[35%] pb-12 snap-x snap-mandatory scrollbar-hide">
//                     {projects.map((project, i) => (
//                         <div
//                             key={i}
//                             id={`project-${i}`}
//                             className="snap-center shrink-0"
//                         >
//                             <ProjectCard {...project} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//             {/* Custom Indicators (dots) */}
//             <div className="flex justify-center gap-3 mt-4">
//                 {projects.map((_, i) => (
//                     <a
//                         key={i}
//                         href={`#project-${i}`}
//                         className="w-3 h-3 rounded-full bg-gray-600 hover:bg-[#FF6B6B] transition-colors duration-300"
//                     />
//                 ))}
//             </div>
//
//             {/* CSS to hide scrollbar for a clean look */}
//             <style>{`
//                 .scrollbar-hide::-webkit-scrollbar { display: none; }
//                 .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
//             `}</style>
//         </main>
//     );
// };
//
// export default ProjectsPage;



import ProjectCard from "../ components/ProjectCard.tsx";
import Fakenews from "../assets/image1.jpeg";
import Medico from "../assets/img.png";
import Sync from "../assets/img_1.png"

const ProjectsPage = () => {
    const projects = [
        {
            title: "Medical Reminder & Refill App",
            image: Medico,
            description: "A mobile app that helps users manage medications, reminders, and refills reliably.",
            tech: ["React Native", "MongoDB", "JavaScript", "Python"],
            githubLink: "https://github.com/Nandani567/MediCode",
        },
        {
            title: "Fake News Detection System",
            image: Fakenews,
            description: "A web application that classifies news as fake or real using machine learning models.",
            tech: ["React", "Express", "Python", "ML"],
            githubLink: "https://github.com/Nandani567/FakeNewsPredictor",
        },
        {
            title: "SyncSyllabus",
            image: Sync, // Added a fallback image so the card isn't empty
            description: "An ML-based analysis tool to check whether university syllabi align with industry needs.",
            tech: ["Python", "Machine Learning", "Data Analysis", "Streamlit"], // Fixed spelling
            githubLink: "https://github.com/Nandani567/SyncSyllabus",
        },
    ];

    return (
        <main className="min-h-screen bg-[#0D1B2A] py-20" id="projects">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Projects
            </h1>

            {/* Unified Swipable Carousel */}
            <div className="relative group">
                {/* Fixed the padding slightly for better centering on various screens */}
                <div className="flex overflow-x-auto gap-8 px-8 md:px-[30%] pb-12 snap-x snap-mandatory scrollbar-hide">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            id={`project-${i}`}
                            className="snap-center shrink-0"
                        >
                            {/* Ensure ProjectCard is set up to receive the 'image' prop */}
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Indicators (dots) */}
            <div className="flex justify-center gap-3 mt-4">
                {projects.map((_, i) => (
                    <a
                        key={i}
                        href={`#project-${i}`}
                        className="w-3 h-3 rounded-full bg-gray-600 hover:bg-[#FF6B6B] transition-colors duration-300"
                    />
                ))}
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </main>
    );
};

export default ProjectsPage;