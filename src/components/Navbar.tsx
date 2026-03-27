import { useEffect, useState } from "react";

const sections = ["home", "projects", "skills", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = "home";
      let minDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        // distance from center of viewport
        const distance = Math.abs(rect.top - window.innerHeight / 3);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      });

      setActive(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-red-500 
                          flex items-center justify-center font-bold text-white">
            N
          </div>

          <span className="font-semibold text-lg tracking-wide text-white group-hover:text-pink-400 transition">
            Nandani
          </span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`
                capitalize relative transition
                ${active === item
                  ? "text-pink-400"
                  : "text-gray-300 hover:text-white"}
              `}
            >
              {item}

              {active === item && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-pink-400 rounded-full"></span>
              )}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;