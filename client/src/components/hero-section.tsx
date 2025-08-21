import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="floating-animation absolute top-20 right-20 w-64 h-64 rounded-full bg-accent-cyan/5 blur-3xl"></div>
        <div className="floating-animation absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent-cyan/3 blur-3xl" style={{animationDelay: '-3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="text-hero-title">
            <span className="text-off-white">Hi, I'm</span>
            <span className="text-gradient block mt-2">Gauri Khotele</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-xl md:text-2xl text-muted-gray mb-6 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Product Manager & Consultant specializing in product discovery, search optimization, and strategic product development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-lg text-muted-gray mb-12 max-w-2xl mx-auto" data-testid="text-hero-description">
            MBA from IIT Kharagpur • Driving ₹200 Crore+ platform growth • Expert in product discovery systems and user experience optimization
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToProjects}
            className="bg-accent-cyan hover:bg-accent-cyan/80 text-deep-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-cyan/25"
            data-testid="button-view-work"
          >
            View My Work
          </button>
          <button
            onClick={scrollToContact}
            className="glass-morphism glass-hover px-8 py-4 rounded-xl font-semibold text-center"
            data-testid="button-get-in-touch"
          >
            Get In Touch
          </button>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ChevronDown className="text-accent-cyan text-xl" data-testid="icon-scroll-down" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
