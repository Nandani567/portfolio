const Skills = () => {
  const skills = ["React", "Node.js", "MongoDB", "Docker"];

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((s, i) => (
          <span key={i} className="px-4 py-2 bg-white/10 rounded-full">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;