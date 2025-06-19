
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
type Props = {};


const HeroSection = ({}: Props) => {
  return (
    <section className="py-50 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-300 mb-6 leading-tight">
          Grow Your Business with
          
          <span className="bg-gradient-to-r from-[#543535] backdrop-blur-3xl to-[#682323] bg-clip-text text-transparent">
            {" "}
            Teqaction
          </span>
          
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We help businesses scale through cutting-edge websites and mobile
          applications. Transform your ideas into powerful digital experiences
          that drive growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
                       label="Get Started" 
                       link="" 
                       position="right" 
                       paddingX='px-4' 
                       paddingY="py-3" 
                       color="secondary"
                       customColor="#"
                     />
          <button className=" h-[3rem] px-3   bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
            <span className="font-semibold">View Our Work</span>
            </button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
