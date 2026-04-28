import React from "react";
import Img from "../../assets/Images/WorkManagement/Image.png";
import CallToAction from "../CallToAction/CallToAction";
import { motion } from "framer-motion";
import TitleParagraph from "../TitleParagraph/TitleParagraph";
import Paragraph from "../Paragraph/Paragraph";
const Content = (props) => {
  return (
    <section
      className={`z-10  relative flex flex-col justify-center items-center text-center  gap-16 ${props.lgDirection} lg:text-left`}
    >
      {/* Content */}
      <div className="flex flex-col justify-center items-center gap-10 lg:items-start">
        {/* Title and Description */}
        <div className="flex flex-col justify-center items-center gap-6  mx-auto lg:items-start">
          <TitleParagraph
            color="text-third"
            partOne={props.firstWord}
            partTwo={props.secondWord}
            delay={0}
          />
         <Paragraph
         content={props.paragraph} 
         colorText="text-third"
         delay={0}
         />
        </div>
        {/* Call To Action */}
        <CallToAction
          title={props.titleButton}
          ph="px-8"
          pv="py-3"
          text="text-lg"
        />
      </div>
      <motion.div className="mt-6  xm:max-w-lg" {...props.animationProps}>
        <img
          src={props.image}
          alt="work together"
          className="w-full object-contain"
        />
      </motion.div>
    </section>
  );
};

export default Content;
