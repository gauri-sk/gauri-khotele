import { motion } from "framer-motion";

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
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {/* Large floating orbs with enhanced effects */}
        <div className="floating-animation absolute top-10 md:top-20 right-10 md:right-20 w-48 md:w-64 h-48 md:h-64 rounded-full bg-accent-cyan/10 blur-3xl pulse-glow"></div>
        <div className="floating-animation absolute bottom-10 md:bottom-20 left-10 md:left-20 w-72 md:w-96 h-72 md:h-96 rounded-full bg-accent-cyan/5 blur-3xl" style={{animationDelay: '-3s'}}></div>
        
        {/* Additional floating orbs for depth */}
        <div className="floating-animation absolute top-1/2 left-1/3 w-32 md:w-48 h-32 md:h-48 rounded-full bg-accent-cyan/3 blur-2xl" style={{animationDelay: '-5s'}}></div>
        <div className="floating-animation absolute top-3/4 right-1/3 w-24 md:w-32 h-24 md:h-32 rounded-full bg-accent-cyan/4 blur-2xl" style={{animationDelay: '-7s'}}></div>
        
        {/* Geometric patterns with rotation */}
        <div className="absolute top-1/4 left-1/4 w-20 md:w-32 h-20 md:h-32 border border-accent-cyan/20 rotate-45 pulse-glow rotate-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 md:w-24 h-16 md:h-24 border border-accent-cyan/15 rotate-12 drift" style={{animationDelay: '-2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-12 md:w-20 h-12 md:h-20 border border-accent-cyan/10 -rotate-12 rotate-slow" style={{animationDelay: '-4s'}}></div>
        
        {/* Hexagonal patterns */}
        <div className="absolute top-1/5 right-1/5 w-16 md:w-24 h-16 md:h-24 border border-accent-cyan/12" 
             style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '-6s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 md:w-18 h-12 md:h-18 border border-accent-cyan/8 rotate-slow" 
             style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '-8s'}}></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] md:opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Enhanced floating particles */}
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-accent-cyan/40 rounded-full animate-bounce drift" style={{animationDelay: '-1s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-accent-cyan/30 rounded-full animate-bounce" style={{animationDelay: '-4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-accent-cyan/25 rounded-full animate-bounce pulse-glow" style={{animationDelay: '-6s'}}></div>
        <div className="absolute top-1/6 left-2/3 w-2 h-2 bg-accent-cyan/20 rounded-full animate-bounce" style={{animationDelay: '-8s'}}></div>
        <div className="absolute bottom-1/3 right-1/6 w-1.5 h-1.5 bg-accent-cyan/35 rounded-full animate-bounce drift" style={{animationDelay: '-10s'}}></div>
        
        {/* Layered gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-cyan/8 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent-cyan/6 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-gradient-to-r from-accent-cyan/4 via-transparent to-transparent"></div>
        
        {/* Radial gradients for more depth */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-accent-cyan/8 via-accent-cyan/3 to-transparent rounded-full blur-xl opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-accent-cyan/6 via-accent-cyan/2 to-transparent rounded-full blur-2xl opacity-40"></div>
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
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 md:mb-20"
        >
          <button
            onClick={scrollToProjects}
            className="bg-accent-cyan hover:bg-accent-cyan/80 text-deep-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-cyan/25 text-sm md:text-base"
            data-testid="button-view-work"
          >
            View My Work
          </button>
          <button
            onClick={scrollToContact}
            className="glass-morphism glass-hover px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-center text-sm md:text-base"
            data-testid="button-get-in-touch"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}