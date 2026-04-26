import React from "react";
import Img from "../../assets/Images/WorkManagement/Image.png";
import CallToAction from "../CallToAction/CallToAction";
import {motion } from "framer-motion"
const Content = (props) => {
  return (
    <section
      className={`z-10  relative flex flex-col justify-center items-center text-center  gap-14 ${props.lgDirection} lg:text-left`}
  
    >
      {/* Content */}
      <div className="flex flex-col justify-center items-center gap-10 lg:items-start">
        {/* Title and Description */}
        <div className="flex flex-col justify-center items-center gap-6  mx-auto">
          <h4 className="capitalize class-title text-third md:text-5xl w-full">
            {props.firstWord}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{props.secondWord}</span>
              <img
                src={Img}
                alt="Underline Decoration"
                className="absolute left-2 top-2/3 w-full object-contain z-0 pointer-events-none"
              />
            </span>
          </h4>
          <p className="class-description  text-third  lg:max-w-lg">
            {props.paragraph}
          </p>
        </div>
        {/* Call To Action */}
        <CallToAction
          title={props.titleButton}
          ph="px-8"
          pv="py-3"
          text="text-lg"
        />
      </div>
      <motion.div
        className="mt-6  xm:max-w-lg"
       {...props.animationProps}
      >
        <img src={props.image} alt="work together" className="w-full object-contain" />
      </motion.div>
    </section>
  );
};

export default Content;
