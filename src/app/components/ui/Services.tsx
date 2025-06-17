import React, { useState, useEffect } from 'react';
import { Server, Smartphone, Globe, Terminal, Cloud } from 'lucide-react';
import Button from './Button';

interface Service {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  description: string;
  features: string[];
}

interface ServicesProps {
  isVisible?: boolean;
}

const Services: React.FC<ServicesProps> = ({ isVisible = false }) => {
  const [activeService, setActiveService] = useState<string>('backend');
  const [progress, setProgress] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(false);
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false);
  
  const services: Record<string, Service> = {
    backend: {
      id: 'backend',
      title: 'Backend Development',
      icon: Server,
      color: 'from-gray-600 to-gray-700',
      description: 'Robust server-side solutions with Node.js and Express.js',
      features: [
        'RESTful API Development',
        'Database Integration',
        'Authentication Systems',
        'Real-time Applications',
        'Microservices Architecture'
      ]
    },
    mobile: {
      id: 'mobile',
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-gray-700 to-gray-800',
      description: 'Cross-platform mobile apps with Flutter and React Native',
      features: [
        'iOS & Android Apps',
        'Cross-platform Development',
        'Native Performance',
        'Push Notifications',
        'App Store Deployment'
      ]
    },
    web: {
      id: 'web',
      title: 'Web Development',
      icon: Globe,
      color: 'from-gray-500 to-gray-600',
      description: 'Modern web applications with React and responsive design',
      features: [
        'React Applications',
        'Responsive Design',
        'Progressive Web Apps',
        'Single Page Applications',
        'Modern UI/UX'
      ]
    },
    express: {
      id: 'express',
      title: 'Express.js',
      icon: Terminal,
      color: 'from-gray-600 to-gray-700',
      description: 'Fast and minimalist web framework for Node.js',
      features: [
        'Middleware Integration',
        'Routing Solutions',
        'Template Engines',
        'Error Handling',
        'Security Features'
      ]
    },
    devops: {
      id: 'devops',
      title: 'DevOps',
      icon: Cloud,
      color: 'from-gray-700 to-gray-800',
      description: 'CI/CD pipelines, containerization, and cloud deployment',
      features: [
        'Docker Containerization',
        'CI/CD Pipelines',
        'Cloud Deployment',
        'Infrastructure Automation',
        'Monitoring & Logging'
      ]
    }
  };

  const navItems: Service[] = Object.values(services);
  const currentService: Service = services[activeService];
  const currentIndex: number = navItems.findIndex(service => service.id === activeService);

  useEffect(() => {
    if (isVisible) {
      setIsNavbarVisible(true);
      setTimeout(() => setIsContentVisible(true), 500); // Increased delay
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isAutoPlaying || !isContentVisible) return;

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          const nextIndex = (currentIndex + 1) % navItems.length;
          setActiveService(navItems[nextIndex].id);
          return 0;
        }
        return prev + 1.5; // Slower progress
      });
    }, 150); // Slower interval

    return () => clearInterval(progressInterval);
  }, [currentIndex, navItems, isAutoPlaying, isContentVisible]);

  const handleServiceClick = (serviceId: string): void => {
    setActiveService(serviceId);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="min-h-screen text-white mt-3 overflow-hidden">
      {/* Navigation Bar - Slower slide from left */}
      <nav 
        className={`backdrop-blur-xl top-0 transition-all duration-700 ease-out ${
          isNavbarVisible 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2 gap-2">
              {navItems.map((service, index) => {
                const IconComponent = service.icon;
                const isActive = activeService === service.id;
                const isCurrentlyProgressing = isActive && isAutoPlaying;
                
                return (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className={`relative flex items-center space-x-3 px-10 py-5 rounded-2xl transition-all duration-700 ease-out transform overflow-hidden ${
                      isActive
                        ? 'bg-gray-700 text-white  shadow-2xl'
                        : 'hover:bg-gray-800 text-gray-400 hover:text-white hover:scale-102'
                    }`}
                    style={{
                      
                      transform: isNavbarVisible 
                        ? `translateX(0) ${isActive ? 'scale(1.05)' : 'scale(1)'}` 
                        : `translateX(-50px)`,
                      opacity: isNavbarVisible ? 1 : 0
                    }}
                  >
                    {/* Progress Bar Background */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gray-800 rounded-2xl" />
                    )}
                    
                    {/* Progress Bar Fill */}
                    {isCurrentlyProgressing && (
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-gray-800 to-[#000712] rounded-2xl transition-all duration-100 ease-linear origin-left"
                        style={{ 
                          transform: `scaleX(${progress / 100})`,
                          transformOrigin: 'left'
                        }}
                      />
                    )}
                    
                    {/* Button Content */}
                    <div className="relative z-10 flex items-center space-x-3">
                      <IconComponent size={20} className="transition-transform duration-500" />
                      <span className="font-medium hidden sm:inline transition-all duration-500">
                        {service.title}
                      </span>
                    </div>
                    
                    {/* Active State Overlay */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-600/20 to-gray-700/20 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Content Area - Slower slide from right */}
      <div className="max-w-7xl mx-auto px-6 py-12 ">
        <div 
          className={`relative overflow-hidden border-1 border-zinc-600  rounded-4xl transition-all duration-700 ease-out ${
            isContentVisible 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-full opacity-0'
          }`}
        >
          <div key={activeService} className="transition-opacity duration-700">
            <div className="bg-gray-900/95 backdrop-blur-xl rounded-3xl p-12">
              <div className="flex items-center space-x-8 mb-12">
                <div 
                  className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${currentService.color} flex items-center justify-center shadow-xl transition-all duration-500`}
                >
                  <currentService.icon size={48} className="text-white" />
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-white mb-4">
                    {currentService.title}
                  </h2>
                  <p className="text-xl text-gray-300">
                    {currentService.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentService.features.map((feature) => (
                  <div
                    key={feature}
                    className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-gray-600/50  transition-all duration-500 shadow-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${currentService.color} shadow-lg`} />
                      <h3 className="text-lg font-semibold text-white">
                        {feature}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <Button 
                  label={`Get Started with ${currentService.title}`} 
                  position='center' 
                  link="/contact" 
                  paddingX="px-6" 
                  paddingY="py-4" 
                  color="custom" 
                  customColor="bg-gray-600" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-gray-400 hover:text-white transition-colors duration-500 text-sm"
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
            <div className="flex space-x-2">
              {navItems.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex ? 'bg-white' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;