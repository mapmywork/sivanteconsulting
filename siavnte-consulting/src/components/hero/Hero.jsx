import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  const stats = [
    { value: 3, suffix: '', label: 'Business Verticals' },
    { value: 9, suffix: '+', label: 'Years Industry Experience' },
    { value: null, text: 'Multi', label: 'Industry Expertise' },
    { value: null, text: 'People', label: 'First Philosophy' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-secondary">
      {/* Background with Overlay Image */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        style={{ opacity: 0.6 }}
      />
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 z-1 bg-secondary/70" />

      {/* Floating Orbs */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-[100px] pointer-events-none z-1"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-accent/20 rounded-full blur-[120px] pointer-events-none z-1"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center mt-12 md:mt-0">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-200 font-medium tracking-wide uppercase">
              Established 2025 • India
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-[1.1] mb-8">
            Where Vision Meets <span className="text-gradient gradient-gold italic px-2">Leadership.</span><br />
            Where <span className="text-gradient gradient-gold italic px-2">Businesses</span> Grow.
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mb-12 leading-relaxed">
            At Siavnte Consulting Services, we don't just provide consulting—we build careers, empower businesses, create opportunities, and develop brands that create lasting impact.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mb-20 md:mb-28">
            <a href="#services" className="group relative px-8 py-4 bg-white text-secondary rounded-full font-medium text-lg overflow-hidden transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <span className="relative z-10">Explore Services</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gray-100 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </a>
            
            <a href="#contact" className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
              Talk to Us
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-white/10 pt-10"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-3xl md:text-5xl font-playfair font-bold text-white mb-2 flex items-baseline">
                {stat.value !== null ? (
                  <span>{stat.value}</span>
                ) : (
                  <span>{stat.text}</span>
                )}
                <span className="text-gold ml-1">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
