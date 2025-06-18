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
      color: 'from-slate-800 to-slate-900',
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
      color: 'from-slate-900 to-black',
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
      color: 'from-slate-700 to-slate-800',
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
      color: 'from-slate-800 to-slate-900',
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
      color: 'from-slate-900 to-black',
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
      setTimeout(() => setIsContentVisible(true), 500);
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
        return prev + 1.5;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, [currentIndex, navItems, isAutoPlaying, isContentVisible]);

  const handleServiceClick = (serviceId: string): void => {
    setActiveService(serviceId);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="min-h-screen bg-black   text-white mt-3 overflow-hidden">
      {/* Navigation Bar - Enhanced glass effect */}
      <nav 
        className={`backdrop-blur-2xl bg-black/20  border-b border-white/5 top-0 transition-all duration-700 ease-out ${
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
                    className={`relative flex items-center space-x-3 px-10 py-5 rounded-2xl transition-all duration-700 ease-out transform overflow-hidden backdrop-blur-xl border ${
                      isActive
                        ? 'bg-slate-900/40 text-white shadow-2xl border-white/20'
                        : 'hover:bg-slate-800/30 text-slate-400 hover:text-white hover:scale-102 border-white/5 hover:border-white/10'
                    }`}
                    style={{
                      transform: isNavbarVisible 
                        ? `translateX(0) ${isActive ? 'scale(1.05)' : 'scale(1)'}` 
                        : `translateX(-50px)`,
                      opacity: isNavbarVisible ? 1 : 0
                    }}
                  >
                    {/* Progress Bar Fill */}
                    {isCurrentlyProgressing && (
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-black/80 rounded-2xl transition-all duration-100 ease-linear origin-left backdrop-blur-sm"
                        style={{ 
                          transform: `scaleX(${progress / 100  + 0.05})`,
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
                    
                    {/* Active State Overlay - Enhanced glass effect */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm animate-pulse border border-white/10" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Content Area - Enhanced dark glass design */}
      <div className="max-w-7xl mx-auto px-6 bg-gradient-to-t from-black to-gray-950/80  py-12">
        <div 
          className={`relative overflow-hidden border border-white/10 rounded-4xl transition-all duration-700 ease-out backdrop-blur-2xl bg-black/20 ${
            isContentVisible 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-full opacity-0'
          }`}
        >
          <div key={activeService} className="transition-opacity duration-700">
            <div className="bg-slate-900/20 backdrop-blur-3xl rounded-3xl p-12 border border-white/5">
              <div className="flex items-center space-x-8 mb-12">
                <div 
                  className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${currentService.color} flex items-center justify-center shadow-2xl transition-all duration-500 backdrop-blur-sm border border-white/10`}
                >
                  <currentService.icon size={48} className="text-white" />
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    {currentService.title}
                  </h2>
                  <p className="text-xl text-slate-300">
                    {currentService.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentService.features.map((feature) => (
                  <div
                    key={feature}
                    className="bg-slate-800/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-slate-700/20 transition-all duration-500 shadow-xl hover:shadow-2xl"
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
                  customColor="bg-slate-800/40 hover:bg-slate-700/60" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-slate-400 hover:text-white transition-colors duration-500 text-sm backdrop-blur-sm bg-black/20 px-4 py-2 rounded-lg border border-white/10 hover:border-white/20"
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
            <div className="flex space-x-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              {navItems.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex ? 'bg-white shadow-lg' : 'bg-slate-600'
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