import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-playfair font-bold text-xl">
                S
              </div>
              <div className="font-playfair font-semibold text-lg text-white">
                <span className="block leading-tight">Siavnte</span>
                <span className="block text-xs font-inter tracking-wider text-gray-400">CONSULTING</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Where Vision Meets Leadership. Where Businesses Grow.
            </p>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
              Parent Company of<br/>Chinnu Car Rentals & Brand Mind Pvt. Ltd.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#leadership" className="text-gray-400 hover:text-white transition-colors text-sm">Leadership</a></li>
              <li><a href="#values" className="text-gray-400 hover:text-white transition-colors text-sm">Core Values</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">Testimonials</a></li>
            </ul>
          </div>

          {/* Services & Ecosystem */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-6">Ecosystem</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Consulting Services</a></li>
              <li><a href="#ecosystem" className="text-gray-400 hover:text-white transition-colors text-sm">Siavnte Consulting</a></li>
              <li><a href="#ecosystem" className="text-gray-400 hover:text-white transition-colors text-sm">Chinnu Car Rentals</a></li>
              <li><a href="#ecosystem" className="text-gray-400 hover:text-white transition-colors text-sm">Brand Mind Pvt. Ltd.</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span>India Headquarters</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@siavnte.com" className="hover:text-white transition-colors">info@siavnte.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+910000000000" className="hover:text-white transition-colors">+91 000 000 0000</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Siavnte Consulting Services. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
