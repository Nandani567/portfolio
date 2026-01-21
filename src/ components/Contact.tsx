import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import ResumePDF from "../assets/nandanibansal_resume (1).pdf"
const ContactTemplate = () => {
    return (
        <section
            id="contact"
            className="bg-[#0D1B2A] text-white py-20 px-6 md:px-16 w-full"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Let’s Connect
                </h2>

                <p className="text-[#778DA9] mb-12">
                    If you’re looking for someone who actually builds and ships, let’s talk.
                </p>

                {/* Contact Cards */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                    <a
                        href="mailto:bansalnandani620@gmail.com?subject=Portfolio%20Inquiry"
                        className="flex items-center justify-center gap-3 px-6 py-4 bg-[#112240] rounded-lg hover:bg-[#1b2f4a] transition"
                    >
                        <FaEnvelope />
                        <span>Email Me</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nandani-bansal-741920249/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-4 bg-[#112240] rounded-lg hover:bg-[#1b2f4a] transition"
                    >
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/Nandani567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-4 bg-[#112240] rounded-lg hover:bg-[#1b2f4a] transition"
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </a>
                </div>

                {/* Resume Download */}
                {/*<a*/}
                {/*    href="../assets/Nandani_Bansal_Resume.pdf"*/}
                {/*    download*/}
                {/*    className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B6B] text-black font-semibold rounded-md hover:bg-[#FF8787] transition"*/}
                {/*>*/}
                {/*    <FaDownload />*/}
                {/*    Download Resume*/}
                {/*</a>*/}

                {/*<a*/}
                {/*    href="../assets/nandanibansal_resume (1).pdf"*/}
                {/*    download="Nandani_Bansal_Resume.pdf"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*    className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B6B] text-black font-semibold rounded-md hover:bg-[#FF8787] transition"*/}
                {/*>*/}
                {/*    <FaDownload />*/}
                {/*    Download Resume*/}
                {/*</a>*/}
                <a
                    href={ResumePDF}
                    download="Nandani_Bansal_Resume.pdf"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B6B] text-black font-semibold rounded-md hover:bg-[#FF8787] transition"
                >
                    <FaDownload />
                    Download Resume
                </a>

            </div>
        </section>
    );
};

export default ContactTemplate;
