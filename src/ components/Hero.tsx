//
// import ImageTemplate from "./Image";
//
// const HeroTemplate = () => {
//     return (
//         <section className="min-h-screen bg-[#0D1B2A] text-white flex items-center">
//             <div className="max-w-7xl mx-auto w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//
//                 {/* Left: Text */}
//                 <div className="flex flex-col justify-center">
//                     <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//                         Hi, I’m <span className="text-[#FF6B6B]">Nandani</span>
//                     </h1>
//
//                     <h2 className="text-4xl md:text-5xl font-semibold mt-2 text-white">
//                         Fullstack Developer
//                     </h2>
//
//                     <p className="mt-6 text-lg md:text-xl text-[#778DA9] max-w-xl leading-relaxed">
//                         I build reliable, scalable web applications with a strong focus on clean architecture,
//                         performance, and real-world usability.
//                     </p>
//
//                     <div className="mt-8 flex gap-4">
//                         <a
//                             href="#projects"
//                             className="px-6 py-3 bg-[#FF6B6B] rounded-md font-semibold hover:bg-[#FF8787] transition"
//                         >
//                             View Projects
//                         </a>
//
//                         <a
//                             href="#contact"
//                             className="px-6 py-3 border border-[#FF6B6B] text-[#FF6B6B] rounded-md font-semibold hover:bg-[#FF6B6B] hover:text-white transition"
//                         >
//                             Contact
//                         </a>
//                     </div>
//                 </div>
//
//                 {/* Right: Image */}
//                 <div className="flex justify-center md:justify-end">
//                     <ImageTemplate />
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default HeroTemplate;

import ImageTemplate from "./Image";
import { Link } from "react-router-dom";
const HeroTemplate = () => {
    return (
        <section className="min-h-screen bg-[#0D1B2A] text-white">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-16
                      grid grid-cols-1 md:grid-cols-2 gap-16
                      items-start pt-24 md:pt-32">

                {/* Left: Text */}
                <div className="flex flex-col">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Hi, I’m <span className="text-[#FF6B6B]">Nandani</span>
                    </h1>

                    <h2 className="text-4xl md:text-5xl font-semibold mt-2">
                        Fullstack Developer
                    </h2>

                    <p className="mt-6 text-lg md:text-xl text-[#778DA9] max-w-xl leading-relaxed">
                        I build reliable, scalable web applications with a strong focus on clean architecture,
                        performance, and real-world usability.
                    </p>

                    <div className="mt-8 flex gap-4">


                        <Link
                            to="/projects"
                            className="px-6 py-3 bg-[#FF6B6B] rounded-md font-semibold hover:bg-[#FF8787] transition"
                        >
                            View Projects
                        </Link>

                        <Link
                            to="/contact"
                            className="px-6 py-3 bg-[#FF6B6B] rounded-md font-semibold hover:bg-[#FF8787] transition"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex justify-center md:justify-end pt-8 md:pt-0">
                    <ImageTemplate />
                </div>
            </div>
        </section>
    );
};

export default HeroTemplate;
