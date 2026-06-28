import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Car, Palette } from 'lucide-react';

const Ecosystem = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      company: "Siavnte Consulting Services",
      tagline: "Parent Organization",
      color: "bg-blue-600",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
      icon: <Building className="w-8 h-8" />
    },
    {
      company: "Chinnu Car Rentals",
      tagline: "Premium Mobility Solutions",
      color: "bg-emerald-600",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      icon: <Car className="w-8 h-8" />
    },
    {
      company: "Brand Mind Pvt. Ltd.",
      tagline: "Branding Beyond Creativity",
      color: "bg-purple-600",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
      icon: <Palette className="w-8 h-8" />
    }
  ];

  return (
    <section id="ecosystem" className="py-24 md:py-32 bg-secondary text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-accent/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-6"
          >
            The Siavnte <span className="text-gold italic font-normal">Ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-400 font-light"
          >
            A synergistic portfolio of companies driving excellence across consulting, mobility, and creative branding.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Lines for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-white/10 z-0">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="h-full w-full bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
                className="group relative"
              >
                {/* Connecting Line for Mobile */}
                {index !== cards.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 bottom-[-2rem] w-[2px] h-8 bg-white/10 -translate-x-1/2">
                    <motion.div 
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      className={`w-full h-full ${card.color} origin-top`}
                    />
                  </div>
                )}

                <div className="glass-card-dark rounded-3xl p-8 hover:-translate-y-4 transition-transform duration-500 h-full">
                  <div className={`w-16 h-16 rounded-2xl ${card.lightColor} ${card.textColor} flex items-center justify-center mb-8 mx-auto lg:mx-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {card.icon}
                  </div>
                  
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-playfair font-bold mb-3 group-hover:text-white transition-colors">
                      {card.company}
                    </h3>
                    <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${card.lightColor} ${card.textColor} mb-6`}>
                      {card.tagline}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
