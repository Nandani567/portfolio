import ProjectCard from "../components/ProjectCard";

const projects = [
 

  {
  title: "Spectar Scan",
  description:
    "Real-time phishing and malicious website detection using ML models and threat intelligence APIs, delivered via a Chrome extension.",
  tech: [
    "Chrome Extension (MV3)",
    "FastAPI",
    "XGBoost",
    "Random Forest",
    "VirusTotal",
    "Google Safe Browsing",
    "WHOIS",
  ],
  github: "https://github.com/Nandani567/SpectarScan",
}
,
  {
    title: "Medical Reminder App",
    description:
      "Medication tracking system with reminders, scheduling, and refill alerts.",
    tech: ["React Native", "MongoDB", "Node.js"],
    github: "https://github.com/Nandani567/MediCode",
  },
  {
    title: "SyncSyllabus",
    description:
      "Analyzes academic syllabus against industry standards using ML.",
    tech: ["Python", "Machine Learning", "Streamlit"],
    github: "https://github.com/Nandani567/SyncSyllabus",
  },
 
];

const Projects = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-4">
        Projects
      </h2>

      <p className="text-center text-gray-400 dark:text-gray-400 text-gray-600 mb-12">
        Real work. Not just tutorials.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;