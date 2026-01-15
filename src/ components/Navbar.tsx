//
// import { Link } from "react-router-dom";
//
// const Navbar = () => {
//     return (
//         <div className="navbar bg-black text-white px-6">
//             <div className="flex-1 text-xl font-bold">
//                 DevPortfolio
//             </div>
//
//             <div className="flex gap-6">
//
//
//                 <Link to="/projects" className="hover:text-[#FF6B6B]">
//                     Projects
//                 </Link>
//
//                 <Link to="/Skills" className="hover:text-[#FF6B6B]">
//                     Skills
//                 </Link>
//
//                 <Link to="/contact" className="hover:text-[#FF6B6B]">
//                     Contact
//                 </Link>
//             </div>
//         </div>
//     );
// };
//
// export default Navbar;


const Navbar = () => {
    return (
        <nav className="navbar bg-black text-white px-6 py-4 sticky top-0 z-50">
            {/* Logo: Clicking this scrolls to the very top */}
            <div className="flex-1">
                <a
                    href="#"
                    className="text-xl font-bold hover:text-[#FF6B6B] transition-colors"
                >
                    DevPortfolio
                </a>
            </div>

            <div className="flex gap-6">
                {/* Anchor links pointing to IDs on your main page */}
                <a href="#projects" className="hover:text-[#FF6B6B] transition-colors font-medium">
                    Projects
                </a>

                <a href="#skills" className="hover:text-[#FF6B6B] transition-colors font-medium">
                    Skills
                </a>

                <a href="#contact" className="hover:text-[#FF6B6B] transition-colors font-medium">
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
