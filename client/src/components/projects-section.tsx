import { motion } from "framer-motion";
import { Search, Settings, BarChart3, Users } from "lucide-react";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  const projects = [
    {
      icon: <Search />,
      category: "Product Discovery",
      title: "Search & Recommendations Revamp",
      description: "Led end-to-end revamp of product discovery systems for ₹200 Crore/month grocery platform. Enhanced relevance and reduced zero-result queries by 40% using semantic search with vector embeddings.",
      technologies: ["Elasticsearch", "Vector Embeddings", "A/B Testing"],
      company: "Jumbotail Technologies"
    },
    {
      icon: <Settings />,
      category: "Service Validation",
      title: "JioTranslate Launch",
      description: "Contributed to successful product launch through defect resolution and competitive benchmarking. Reduced post-deployment changes by 32% through strategic requirements gathering.",
      technologies: ["Azure DevOps", "QA Strategy", "Product Testing"],
      company: "Jio Platform Ltd"
    },
    {
      icon: <BarChart3 />,
      category: "Project Management",
      title: "Process Optimization",
      description: "Analyzed process flows and identified bottlenecks to ensure timely project completion. Managed project timelines, scope adjustments, and stakeholder communication effectively.",
      technologies: ["Process Analysis", "Risk Management", "Stakeholder Mgmt"],
      company: "Sunny InfraProjects"
    }
  ];

  const leadershipProject = {
    icon: <Users />,
    category: "Leadership & Strategy",
    title: "Multi-Faceted Leadership Experience",
    description: "Demonstrated exceptional leadership across diverse domains - from coordinating placements at IIT Kharagpur to establishing international partnerships through AIESEC, organizing large-scale events, and leading national-level sports teams to championship victories.",
    technologies: [],
    company: "",
    stats: [
      { value: "30+", label: "Students Guided" },
      { value: "5000+", label: "Event Attendees" },
      { value: "Gold", label: "National Medal" }
    ]
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-gray max-w-2xl mx-auto" data-testid="text-projects-subtitle">
            Transforming product experiences through data-driven insights and strategic innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
          
          <ProjectCard
            {...leadershipProject}
            index={3}
            isLarge={true}
          />
        </div>
      </div>
    </section>
  );
}