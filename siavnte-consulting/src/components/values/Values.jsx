import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Target, Lightbulb, Award, Users, HeartHandshake } from 'lucide-react';

const Values = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      title: "Integrity",
      icon: <ShieldCheck className="w-6 h-6" />,
      description: "Unwavering commitment to honest, transparent, and ethical business practices in every engagement."
    },
    {
      title: "Leadership",
      icon: <Target className="w-6 h-6" />,
      description: "Setting industry standards through visionary thinking and bold, strategic decision-making."
    },
    {
      title: "Innovation",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Continuously evolving our methodologies to stay ahead of market trends and technological shifts."
    },
    {
      title: "Excellence",
      icon: <Award className="w-6 h-6" />,
      description: "Delivering world-class quality and uncompromising standards in everything we do."
    },
    {
      title: "Collaboration",
      icon: <Users className="w-6 h-6" />,
      description: "Building powerful synergies through teamwork, open communication, and shared goals."
    },
    {
      title: "Commitment",
      icon: <HeartHandshake className="w-6 h-6" />,
      description: "A deep-rooted dedication to the long-term success and growth of our clients and partners."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="values" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Core Values</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6"
          >
            The Principles That <span className="text-gold italic font-normal">Define Us</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-brand-bg rounded-2xl p-8 border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-secondary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
