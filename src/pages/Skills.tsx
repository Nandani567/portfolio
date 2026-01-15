
import { FaCode, FaDatabase, FaTools } from "react-icons/fa";
import SkillCard from "../ components/SkillCard.tsx";


const SkillsSection = () => {
    const categories = [
        {
            title: "Frontend",
            icon: <FaCode />,
            skills: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
        },
        {
            title: "Backend",
            icon: <FaDatabase />,
            skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
        },
        {
            title: "Tools",
            icon: <FaTools />,
            skills: ["Git", "Docker", "VS Code", "Postman"],
        },
    ];

    return (
        <section id="skills" className="bg-[#0D1B2A] py-16 px-6 md:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
                Technical Skills
            </h2>

            {/* Desktop carousel (flex row, tight spacing) */}
            <div className="hidden md:flex justify-center gap-6">
                {categories.map((cat, i) => (
                    <SkillCard key={i} {...cat} />
                ))}
            </div>

            {/* Mobile carousel */}
            <div className="md:hidden carousel w-full">
                {categories.map((cat, i) => (
                    <div key={i} id={`slide${i}`} className="carousel-item w-full flex justify-center">
                        <SkillCard {...cat} />
                    </div>
                ))}

                {/* Carousel indicators */}
                <div className="flex justify-center w-full py-4 gap-2">
                    {categories.map((_, i) => (
                        <a
                            key={i}
                            href={`#slide${i}`}
                            className="btn btn-xs bg-[#FF6B9B] border-none"
                        ></a>
                    ))}
                </div>

            </div>



        </section>


    );
};

export default SkillsSection;
