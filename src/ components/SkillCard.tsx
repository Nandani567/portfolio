


interface SkillCardProps {
    title: string;
    icon: React.ReactNode;
    skills: string[];
}

const SkillCard = ({ title, icon, skills }: SkillCardProps) => {
    return (
        <div className="group relative card bg-[#112240] text-white p-8 rounded-xl shadow-xl
                        transition-all duration-300 ease-out
                        hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                        border border-gray-800 hover:border-[#FF6B6B]/50
                        w-80 flex flex-col items-center cursor-default">

            {/* Animated Glow Background for Icon */}
            <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#FF6B6B] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative text-5xl text-[#FF6B6B] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {icon}
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 transition-colors duration-300 group-hover:text-[#FF6B6B]">
                {title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, i) => (
                    <span
                        key={i}
                        className="text-xs font-medium text-white bg-[#1d3557] border border-[#FF6B6B]/20
                                   px-3 py-1.5 rounded-full transition-all duration-300
                                   hover:bg-[#FF6B6B] hover:scale-105"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;