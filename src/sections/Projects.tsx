import ProjectCard from "../components/ProjectCard";

type ProjectType = "Full Stack" | "Data Analytics" | "Data Engineering";

const projects: {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  type: ProjectType;
}[] = [
  {
    title: "SpecterScan – Phishing Detection System",
    description:
      "Real-time phishing detection browser extension that analyzes websites using threat intelligence APIs and ML-based risk scoring. Built with a FastAPI backend and Chrome Extension (Manifest V3) for instant security alerts.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Chrome Extension (MV3)",
      "FastAPI",
      "Machine Learning (XGBoost, Random Forest)",
      "VirusTotal API",
      "Google Safe Browsing API",
      "WHOIS Lookup",
    ],
    github: "https://github.com/Nandani567/SpectarScan",
    type: "Full Stack",
  },

  {
    title: "UPI Transaction Analytics Dashboard",
    description:
      "Data analytics system to study UPI transaction patterns across platforms. Performed exploratory data analysis to identify growth trends, user behavior, and market share insights using interactive dashboards.",
    tech: ["Python", "Pandas", "Streamlit", "Data Visualization", "EDA"],
    github: "https://github.com/Nandani567/upi-dashboard",
    live: "https://upi-dashboard-rdjd9vobadrv3smdzn2ofi.streamlit.app/",
    type: "Data Analytics",
  },

  {
    title: "CryptAnalytics - Real-Time Crypto Pipeline",
    description:
      "Real-time data pipeline that streams cryptocurrency trade data from Binance, processes live JSON events, stores structured records in a database, and visualizes market activity through a live dashboard.",
    tech: ["FastAPI", "WebSockets", "Python", "SQL", "Binance API", "Streamlit"],
    github: "https://github.com/Nandani567/cryptAnalytics-pipeline",
    type: "Data Engineering",
  },
];

const Projects = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        Projects
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Full Stack Systems, Data Analytics, and Real-Time Engineering
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