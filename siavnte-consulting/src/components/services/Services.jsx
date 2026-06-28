import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Briefcase, Settings, Rocket, LineChart } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Strategic Business Consulting",
      icon: <Target className="w-8 h-8" />,
      description: "Data-driven roadmaps to navigate complex market dynamics and achieve sustainable growth.",
      color: "from-blue-500 to-indigo-600",
      iconColor: "text-blue-600"
    },
    {
      title: "Recruitment & Executive Hiring",
      icon: <Users className="w-8 h-8" />,
      description: "Identifying and securing top-tier leadership talent that aligns perfectly with your culture and vision.",
      color: "from-emerald-400 to-teal-600",
      iconColor: "text-emerald-600"
    },
    {
      title: "HR Outsourcing",
      icon: <Briefcase className="w-8 h-8" />,
      description: "End-to-end human resource management to streamline operations and ensure compliance.",
      color: "from-purple-500 to-violet-600",
      iconColor: "text-purple-600"
    },
    {
      title: "Business Process Optimization",
      icon: <Settings className="w-8 h-8" />,
      description: "Re-engineering workflows for maximum efficiency, cost reduction, and operational excellence.",
      color: "from-amber-400 to-orange-500",
      iconColor: "text-orange-500"
    },
    {
      title: "Startup Consulting",
      icon: <Rocket className="w-8 h-8" />,
      description: "Guiding early-stage ventures from ideation to scale with robust business modeling.",
      color: "from-rose-400 to-red-600",
      iconColor: "text-rose-600"
    },
    {
      title: "Corporate Advisory",
      icon: <LineChart className="w-8 h-8" />,
      description: "Expert counsel for mergers, acquisitions, restructuring, and long-term financial strategy.",
      color: "from-cyan-400 to-blue-500",
      iconColor: "text-cyan-600"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Our Expertise</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6"
          >
            Comprehensive Solutions for <br/>
            <span className="italic font-normal text-gray-500">Enterprise Excellence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-10 hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Animated Gradient Border using pseudo-element */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 group-hover:from-transparent group-hover:to-transparent border border-gray-100 transition-colors duration-500 z-0"></div>
              
              <div className={`absolute inset-[-2px] rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10`}></div>
              <div className="absolute inset-0 rounded-3xl bg-white m-[1px] z-0"></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${service.iconColor}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-playfair font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-2 transition-transform cursor-pointer">
                  Explore Service <span className="ml-2 group-hover:opacity-100">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
