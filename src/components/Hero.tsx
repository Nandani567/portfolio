import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT */}
      <div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-pink-500">Nandani</span>
        </h1>

        <h2 className="text-3xl mt-3 text-gray-300">
          Frontend Developer & Data Analyst
        </h2>

        <p className="mt-6 text-gray-400 max-w-lg">
          I build scalable applications and transform data into meaningful insights through analytics, visualization, and clean engineering.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            Contact
          </a>
        </div>
      </div>

      {/* RIGHT (LIGHTWEIGHT VISUAL) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[300px] md:h-[350px] flex items-center justify-center"
      >
        {/* soft gradient blob */}
        <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>

        {/* subtle text */}
        <div className="relative text-center text-gray-400 text-sm space-y-2">
          <p>Frontend Developer</p>
           <p>Data Driven Mindset</p>
          <p>Clean & Scalable Systems</p>
        </div>
      </motion.div>

    </div>
  );
};

export default Hero;