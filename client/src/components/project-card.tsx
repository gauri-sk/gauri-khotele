import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ProjectCardProps {
  icon: ReactNode;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  company: string;
  index: number;
  isLarge?: boolean;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export default function ProjectCard({ 
  icon, 
  category, 
  title, 
  description, 
  technologies, 
  company, 
  index,
  isLarge = false,
  stats
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut", 
        delay: index * 0.1 
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`glass-morphism glass-hover rounded-2xl p-6 md:p-8 relative group ${
        isLarge ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
      data-testid={`card-project-${index}`}
    >
      <div className={isLarge ? 'grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start md:items-center' : ''}>
        <div className={isLarge ? 'col-span-1 md:col-span-2' : ''}>
          <div className="absolute top-6 right-6">
            <div className="text-accent-cyan text-2xl opacity-60">
              {icon}
            </div>
          </div>
          
          <div className="mb-6">
            <span className="text-accent-cyan text-sm font-semibold tracking-wide uppercase" data-testid={`text-category-${index}`}>
              {category}
            </span>
            <h3 className="text-xl md:text-2xl font-bold mt-2 mb-4" data-testid={`text-title-${index}`}>
              {title}
            </h3>
            <p className="text-muted-gray leading-relaxed" data-testid={`text-description-${index}`}>
              {description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="bg-accent-cyan/20 text-accent-cyan px-3 py-1 rounded-full text-sm"
                data-testid={`tag-tech-${index}-${techIndex}`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {!isLarge && (
            <div className="text-accent-cyan font-semibold">
              <span className="group-hover:text-off-white transition-colors" data-testid={`text-company-${index}`}>
                {company} →
              </span>
            </div>
          )}
        </div>

        {isLarge && stats && (
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 md:space-y-4 md:gap-0">
            {stats.map((stat, statIndex) => (
              <div key={statIndex} className="text-center p-4 md:p-6 glass-morphism rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-accent-cyan mb-2" data-testid={`stat-value-${statIndex}`}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-gray" data-testid={`stat-label-${statIndex}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}