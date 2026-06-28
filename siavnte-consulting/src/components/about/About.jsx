import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, TrendingUp, Globe2, Lightbulb } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      title: "Parent Organization",
      description: "Driving growth across multiple subsidiaries including Chinnu Car Rentals and Brand Mind Pvt. Ltd."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold" />,
      title: "Strategic Growth",
      description: "Data-driven methodologies and visionary leadership to scale businesses efficiently and sustainably."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-success" />,
      title: "Multi Industry Expertise",
      description: "Deep knowledge across various sectors allowing us to cross-pollinate best practices."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-purple-accent" />,
      title: "Future Focused",
      description: "Anticipating market shifts and implementing forward-thinking strategies for long-term relevance."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Noise/Texture Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-secondary leading-tight mb-8">
              More Than Consulting.<br />
              <span className="text-gray-400">We Build Businesses.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted font-light leading-relaxed">
              <p>
                Founded in 2025, Siavnte Consulting Services was born from a singular vision: to create an ecosystem where visionary leadership and strategic execution converge.
              </p>
              <p>
                We go beyond traditional advisory. As the proud parent company of Chinnu Car Rentals and Brand Mind Pvt. Ltd., we prove our methodologies not just in boardrooms, but in the real-world operational success of our own diverse portfolio.
              </p>
              <p>
                Our philosophy is simple yet profound—businesses are built by people. By aligning human potential with strategic clarity, we unlock unprecedented growth and operational excellence for our partners worldwide.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="bg-brand-bg rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-secondary mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
