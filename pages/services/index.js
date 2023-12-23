//components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants"

const Services = () => {
  return <div className="h-full bg-primary/30 py-36 flex items-center">
    <Circles />
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/* text */}
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate='show'
            exit='hidden'
            className="h2 xl:mt-8 ">My services <span className="text-amber-500">.</span></motion.h2>
          <motion.p variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate='show'
            exit='hidden'
            className="mb-4 maxw-[400px] mx-auto lg:mx-0">Experience the limitless possibilities of cutting-edge solutions. I specialize in creating tailored digital experiences that elevate your business. My commitment to excellence ensures you get the best in the industry, every time.</motion.p>
        </div>

        <motion.div variants={fadeIn('down', 0.6)}
          initial="hidden"
          animate='show'
          exit='hidden' className="w-full xl:max-w-[65%]">
          {/* slider */}
          <ServiceSlider />
        </motion.div>

      </div>
      <Bulb />
    </div>
  </div>;
};

export default Services;
