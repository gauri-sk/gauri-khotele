import { motion } from "framer-motion";
import { GraduationCap, Award, Languages, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const skills = [
    "Product Strategy",
    "Search Optimization", 
    "Data Analytics",
    "A/B Testing",
    "Agile/Scrum",
    "Team Leadership"
  ];

  const education = [
    {
      degree: "Master of Business Administration",
      school: "VGSoM, IIT Kharagpur",
      period: "Jun 2024 - May 2026",
      cgpa: "CGPA: 7.44/10"
    },
    {
      degree: "B.E in Computer Engineering",
      school: "Smt. Kashibai Navale College of Engineering",
      period: "Jul 2019 - Jul 2023",
      cgpa: "CGPA: 8.74/10"
    }
  ];

  const certifications = [
    { name: "Certified Scrum Product Owner (CSPO)", year: "2025" },
    { name: "Agile Project Management", year: "2024" },
    { name: "Microsoft Power BI for Business Intelligence", year: "2024" }
  ];

  const languages = [
    { name: "English", level: "Professional Proficiency" },
    { name: "Hindi", level: "Native Proficiency" }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient" data-testid="text-about-title">
              About Me
            </h2>
            <p className="text-lg text-muted-gray leading-relaxed mb-8" data-testid="text-about-intro">
              I'm a passionate Product Manager and Consultant with a unique blend of technical expertise and business acumen. Currently pursuing my MBA from VGSoM, IIT Kharagpur, I bring hands-on experience in transforming product discovery systems and driving significant business growth.
            </p>
            <p className="text-lg text-muted-gray leading-relaxed mb-8" data-testid="text-about-journey">
              My journey spans from engineering to product management, with proven success in leading cross-functional teams, implementing data-driven solutions, and delivering measurable impact on multi-crore platforms. I thrive at the intersection of technology and user experience.
            </p>
            
            {/* Skills/Expertise */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-accent-cyan flex items-center" data-testid="text-skills-title">
                <CheckCircle className="mr-3 w-5 h-5" />
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-accent-cyan w-4 h-4" />
                    <span data-testid={`text-skill-${index}`}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="glass-morphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent-cyan flex items-center" data-testid="text-education-title">
                <GraduationCap className="mr-3 w-5 h-5" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-accent-cyan/30 pl-4">
                    <h4 className="font-semibold" data-testid={`text-degree-${index}`}>{edu.degree}</h4>
                    <p className="text-accent-cyan text-sm" data-testid={`text-school-${index}`}>{edu.school}</p>
                    <p className="text-muted-gray text-sm" data-testid={`text-period-${index}`}>{edu.period} | {edu.cgpa}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-morphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent-cyan flex items-center" data-testid="text-certifications-title">
                <Award className="mr-3 w-5 h-5" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span data-testid={`text-cert-name-${index}`}>{cert.name}</span>
                    <span className="text-accent-cyan text-sm" data-testid={`text-cert-year-${index}`}>{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-morphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent-cyan flex items-center" data-testid="text-languages-title">
                <Languages className="mr-3 w-5 h-5" />
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span data-testid={`text-lang-name-${index}`}>{lang.name}</span>
                    <span className="text-accent-cyan text-sm" data-testid={`text-lang-level-${index}`}>{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}