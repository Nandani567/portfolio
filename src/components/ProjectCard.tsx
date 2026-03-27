import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
}

const ProjectCard = ({
  title,
  description,
  tech,
  github,
  live,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl transition"
    >

      <h3 className="text-xl font-bold mb-2 text-white">
        {title}
      </h3>

      <p className="text-gray-400 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">
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