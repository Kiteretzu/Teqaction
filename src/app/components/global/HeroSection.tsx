import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Props = {};

const HeroSection = ({}: Props) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Grow Your Business with
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Digital Solutions
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We help businesses scale through cutting-edge websites and mobile
          applications. Transform your ideas into powerful digital experiences
          that drive growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
