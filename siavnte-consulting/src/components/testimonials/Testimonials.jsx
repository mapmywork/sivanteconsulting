import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Rajiv Mehta",
      role: "CEO",
      company: "NexaTech Solutions",
      content: "Siavnte Consulting completely transformed our operational framework. Their strategic insights and hands-on approach resulted in a 40% increase in efficiency within six months. True partners in growth."
    },
    {
      name: "Priya Sharma",
      role: "HR Director",
      company: "GlobalBPO India",
      content: "The executive search team at Siavnte is unparalleled. They didn't just find candidates; they found leaders who perfectly aligned with our culture and long-term vision. Highly recommended."
    },
    {
      name: "Ankit Verma",
      role: "Founder",
      company: "StartFast Ventures",
      content: "As a scaling startup, we needed more than just advice—we needed an execution plan. Siavnte provided a robust business model that secured our Series A funding effortlessly."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Heading */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-gold"></div>
                <span className="text-sm font-bold tracking-[0.2em] text-gold uppercase">Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
                Trusted by <br/>
                <span className="text-gray-400 italic">Industry Leaders.</span>
              </h2>
              <p className="text-gray-400 text-lg font-light mb-10 max-w-md">
                Don't just take our word for it. Hear from the businesses and leaders we've helped scale and transform.
              </p>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Slider */}
          <div className="lg:col-span-7 relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="glass-card-dark rounded-3xl p-10 md:p-12 h-full flex flex-col justify-center border border-white/10 relative">
                  <Quote className="absolute top-10 right-10 w-24 h-24 text-white/5" />
                  
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl font-playfair italic leading-relaxed mb-10 relative z-10 text-gray-200">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center text-white font-semibold">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-gold w-6' : 'bg-white/20 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
