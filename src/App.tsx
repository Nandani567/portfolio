//
// import { Routes, Route } from "react-router-dom";
//
// import FooterTemplate from "./ components/Footer";
// import HomeTemplate from "./pages/Home";
// import ProjectsPage from "./pages/Projects";
// import ContactPage from "./pages/ContactPage";
// import Navbar from "./ components/Navbar";
// import SkillsSection from "./pages/Skills.tsx";
//
// const App = () => {
//     return (
//         <div className="flex flex-col min-h-screen bg-[#0D1B2A]">
//             <Navbar />
//
//             <main className="flex-grow">
//                 <Routes>
//                     <Route path="/" element={<HomeTemplate />} />
//                     {/*<Route path="/" element={<SkillsSection />} />*/}
//                     <Route path="/projects" element={<ProjectsPage />} />
//                     <Route path="/contact" element={<ContactPage />} />
//                 </Routes>
//                 <SkillsSection />
//             </main>
//
//             <FooterTemplate />
//         </div>
//     );
// };
//
// export default App;


import FooterTemplate from "./ components/Footer";
import HomeTemplate from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/ContactPage";
import Navbar from "./ components/Navbar";
import SkillsSection from "./pages/Skills.tsx";

const App = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#0D1B2A]">
            {/* Navbar stays at the top */}
            <Navbar />

            <main className="flex-grow">
                {/* 1. Hero / Home Section */}
                <section id="home">
                    <HomeTemplate />
                </section>

                {/* 2. Projects Section */}
                <section id="projects">
                    <ProjectsPage />
                </section>

                {/* 3. Skills Section */}
                <section id="skills">
                    <SkillsSection />
                </section>

                {/* 4. Contact Section */}
                <section id="contact">
                    <ContactPage />
                </section>
            </main>

            <FooterTemplate />
        </div>
    );
};

export default App;
