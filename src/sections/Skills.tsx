const Skills = () => {
  const frontend = ["React", "JavaScript", "HTML", "CSS"];
  const backend = [ "FastAPI", "MongoDB", "REST APIs"];
  const data = [
    "Python",
    "Pandas",
    "NumPy",
    "SQL",
    "Streamlit",
    "Data Analysis",
    "Data Visualization",
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Skills
      </h2>

      {/* Frontend */}
      <div className="mb-6 text-center">
        <h3 className="text-gray-300 mb-3">Frontend</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {frontend.map((s, i) => (
            <span key={i} className="px-4 py-2 bg-white/10 rounded-full">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="mb-6 text-center">
        <h3 className="text-gray-300 mb-3">Backend</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {backend.map((s, i) => (
            <span key={i} className="px-4 py-2 bg-white/10 rounded-full">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Data Analytics */}
      <div className="text-center">
        <h3 className="text-gray-300 mb-3">Data Analytics</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((s, i) => (
            <span key={i} className="px-4 py-2 bg-white/10 rounded-full">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;