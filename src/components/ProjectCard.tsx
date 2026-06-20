

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  type?: "Full Stack" | "Data Analytics" | "Data Engineering";
}

const ProjectCard = ({
  title,
  description,
  tech,
  github,
  live,
  type,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col justify-between h-full"
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>

          {type && (
            <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10">
              {type}
            </span>
          )}
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-4 mt-auto">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 text-sm hover:text-pink-300 transition"
          >
            Live →
          </a>
        )}

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 text-sm hover:text-pink-300 transition"
        >
          View Code →
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;