import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import {
  IconCode,
  IconRefresh,
  IconChecklist,
  IconTrendingUp,
  IconShieldCheck,
  IconUsers,
  IconHeadset,
  IconCurrencyDollar,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>([]);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate features one by one with delay
          features.forEach((_, index) => {
            setTimeout(() => {
              setVisibleFeatures(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 150); // 150ms delay between each feature
          });
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px',
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);
  const features= [
  {
    title: "Full-Stack Expertise",
    description: "Our team masters both frontend and backend technologies, delivering seamless integration across your entire stack.",
    icon: <IconCode className="text-blue-400" size={28} />,
  },
  {
    title: "Proven Track Record",
    description: "500+ successful projects delivered with 98% client satisfaction across industries.",
    icon: <IconChecklist className="text-purple-400" size={28} />,
  },
  {
    title: "Cutting-Edge Solutions",
    description: "We implement the latest technologies and best practices to future-proof your business.",
    icon: <IconTrendingUp className="text-green-400" size={28} />,
  },
  {
    title: "Transparent Process",
    description: "Regular updates, clear communication, and no hidden costs throughout our collaboration.",
    icon: <IconShieldCheck className="text-amber-400" size={28} />,
  },
  {
    title: "Agile Development",
    description: "Iterative approach that adapts to your evolving needs with bi-weekly deliverables.",
    icon: <IconRefresh className="text-red-400" size={28} />,
  },
  {
    title: "Dedicated Teams",
    description: "Get senior developers who become true extensions of your organization.",
    icon: <IconUsers className="text-cyan-400" size={28} />,
  },
  {
    title: "Cost Efficiency",
    description: "Premium quality at competitive rates with flexible engagement models.",
    icon: <IconCurrencyDollar className="text-emerald-400" size={28} />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock maintenance and emergency response when you need it most.",
    icon: <IconHeadset className="text-violet-400" size={28} />,
  },
];

  return (
    <div 
      ref={featuresRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto"
    >
      {features.map((feature, index) => (
        <Feature 
          key={feature.title} 
          {...feature} 
          index={index} 
          isVisible={visibleFeatures[index] || false}
        />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  isVisible,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isVisible: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-600 transition-all duration-700 ease-out",
        (index === 0 || index === 4) && "lg:border-l border-gray-600",
        index < 4 && "lg:border-b border-gray-600",
        isVisible 
          ? "opacity-100 transform translate-y-0" 
          : "opacity-0 transform translate-y-8"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-gray-800 to-transparent pointer-events-none" />
      )}
      <div className={cn(
        "mb-4 relative z-10 px-10 text-gray-400 transition-all duration-500 delay-150",
        isVisible ? "transform scale-100" : "transform scale-90"
      )}>
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className={cn(
          "absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-600 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center",
          isVisible ? "opacity-100 transform scaleY-100" : "opacity-0 transform scaleY-0"
        )} />
        <span className={cn(
          "group-hover/feature:translate-x-2 transition-all duration-500 inline-block text-gray-100",
          isVisible ? "transform translate-x-0" : "transform translate-x-4"
        )}>
          {title}
        </span>
      </div>
      <p className={cn(
        "text-sm text-gray-300 max-w-xs relative z-10 px-10 transition-all duration-600 delay-200",
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
      )}>
        {description}
      </p>
    </div>
  );
};