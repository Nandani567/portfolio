
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterTemplate = () => {
    return (
        <footer className="footer flex flex-col sm:flex-row items-center sm:items-start bg-[#0D1B2A] text-[#778DA9] py-6 px-6 mt-auto">

            {/* Left / Top: copyright */}
            <aside className="text-center sm:text-left mb-4 sm:mb-0 sm:flex-1">
                <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
            </aside>

            {/* Right / Bottom: icons */}
            <nav className="flex gap-6 justify-center sm:justify-end sm:flex-1">
                <a
                    href="https://github.com/Nandani567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#778DA9] hover:text-[#FF6B6B] transition-colors duration-200"
                >
                    <FaGithub size={28} />
                </a>

                <a
                    href="https://www.linkedin.com/in/nandani-bansal-741920249/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#778DA9] hover:text-[#FF6B6B] transition-colors duration-200"
                >
                    <FaLinkedin size={28} />
                </a>

                <a
                    href="mailto:bansalnandani620@gmail.com"
                    className="text-[#778DA9] hover:text-[#FF6B6B] transition-colors duration-200"
                >
                    <FaEnvelope size={28} />
                </a>
            </nav>

        </footer>
    );
};

export default FooterTemplate;

