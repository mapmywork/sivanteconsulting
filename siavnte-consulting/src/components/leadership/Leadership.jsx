import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const leaders = [
    {
      name: "Joginder Singh",
      role: "Founder & CEO",
      color: "from-blue-500 to-indigo-600",
      badgeColor: "bg-blue-100 text-blue-700",
      quote: "Great companies aren't built by chance—they're built by vision, leadership, and people.",
      bio: "With over a decade of experience in corporate strategy and business development, Joginder has been the driving force behind Siavnte's rapid expansion and multi-industry success.",
      focus: "Strategic Vision & Enterprise Growth"
    },
    {
      name: "Anam Khan",
      role: "Managing Director",
      color: "from-emerald-400 to-teal-600",
      badgeColor: "bg-emerald-100 text-emerald-700",
      quote: "Leadership is about creating systems where people and businesses grow together.",
      bio: "Anam specializes in operational excellence and organizational design, ensuring that strategic goals translate seamlessly into everyday business practices.",
      focus: "Operations & Systems Design"
    },
    {
      name: "Eram Khan",
      role: "Co-Founder & Associate Director",
      color: "from-purple-500 to-violet-600",
      badgeColor: "bg-purple-100 text-purple-700",
      quote: "The right talent doesn't simply fill positions—it transforms organizations.",
      bio: "Eram leads the human capital and executive search divisions, bringing a profound understanding of organizational psychology and talent acquisition to build high-performing teams.",
      focus: "Human Capital & Executive Search"
    }
  ];

  return (
    <section id="leadership" className="py-24 md:py-32 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Leadership Team</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6"
          >
            Guided by <span className="text-gold italic">Experience.</span><br/>
            Driven by <span className="text-gold italic">Vision.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col h-full"
            >
              {/* Gradient Strip */}
              <div className={`h-2 w-full bg-gradient-to-r ${leader.color}`}></div>
              
              <div className="p-8 flex-grow flex flex-col">
                {/* Header Profile Area */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 font-inter text-2xl font-semibold">
                        {leader.name.charAt(0)}
                      </div>
                    </div>
                    <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${leader.color} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500`}></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-secondary">{leader.name}</h3>
                    <p className="text-primary font-medium">{leader.role}</p>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${leader.badgeColor}`}>
                    {leader.focus}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
                  {leader.bio}
                </p>

                {/* Quote Block */}
                <div className="relative bg-gray-50 rounded-2xl p-6 mt-auto">
                  <Quote className="absolute top-4 left-4 w-8 h-8 text-gray-200 rotate-180 z-0" />
                  <p className="relative z-10 text-secondary font-playfair italic text-lg leading-snug pl-6 border-l-2 border-gold">
                    "{leader.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
