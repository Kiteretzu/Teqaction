'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="bg-gradient-to-t from-black via-gray-950 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Section - Hero Content */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block">Our Company</span>
                <span className="block text-gray-300">helps you to grow</span>
                <span className="block text-gray-300">your business fast.</span>
              </h1>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
             
              <Button label="Connect With Us" link="" paddingX='px-5' paddingY='py-4' color="secondary"/>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Platform Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Platform</h3>
              <ul className="space-y-4">
                {['About', 'Features', 'Pricing & Plans', 'Contact'].map((item, index) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className={`text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 block transform ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                      }`}
                      
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Resources</h3>
              <ul className="space-y-4">
                {['Account', 'Tools', 'Newsletter', 'FAQ'].map((item, index) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className={`text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 block transform ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                      }`}
                      
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legals Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Legals</h3>
              <ul className="space-y-4">
                {['Guides', 'Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item, index) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className={`text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 block transform ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                      }`}
                     
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className={`mt-16 pt-8 border-t border-gray-800 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              Follow us on:
            </div>
            
            <div className="flex space-x-6">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' }
              ].map(({ Icon, label }, index) => (
                <a
                  key={label}
                  href="#"
                  className={`text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 transform ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                  
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;