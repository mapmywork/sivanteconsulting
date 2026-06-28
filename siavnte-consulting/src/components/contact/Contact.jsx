import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Large CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-secondary rounded-3xl p-10 md:p-20 text-center mb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 mix-blend-multiply"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
              Let's Build Something <span className="text-gold italic">Extraordinary</span> Together.
            </h2>
            <p className="text-xl text-gray-200 font-light mb-10 max-w-2xl mx-auto">
              Partner with Siavnte Consulting Services to unlock your organization's true potential.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-playfair font-bold text-secondary mb-8">Get in Touch</h3>
              
              <div className="space-y-4">
                {/* Email Card */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary mb-1">Email Us</h4>
                    <p className="text-muted text-sm mb-2">For general and consulting inquiries.</p>
                    <a href="mailto:info@siavnte.com" className="text-primary font-medium hover:underline">info@siavnte.com</a>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary mb-1">WhatsApp & Phone</h4>
                    <p className="text-muted text-sm mb-2">Mon-Fri from 9am to 6pm.</p>
                    <a href="tel:+910000000000" className="text-primary font-medium hover:underline">+91 000 000 0000</a>
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary mb-1">Business Address</h4>
                    <p className="text-muted text-sm leading-relaxed">
                      Siavnte Consulting Services<br/>
                      India Headquarters<br/>
                      (Detailed address goes here)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50"
            >
              <h3 className="text-2xl font-playfair font-bold text-secondary mb-8">Send a Message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="+91 000 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="How can we help your business grow?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-xl font-medium text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
                >
                  Submit Inquiry
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 h-[400px] w-full rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center relative shadow-sm"
        >
          {/* This would be an iframe or Google Maps component in production */}
          <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop")' }}></div>
          <div className="relative z-10 flex flex-col items-center gap-4 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
            <MapPin size={40} className="text-primary" />
            <div className="text-center">
              <h4 className="font-bold text-secondary text-lg">Siavnte Global HQ</h4>
              <p className="text-muted text-sm">Interactive Map Location</p>
            </div>
            <button className="px-6 py-2 bg-secondary text-white rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors">
              Get Directions
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
