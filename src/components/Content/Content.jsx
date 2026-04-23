import React from "react";
import Img from "../../assets/Images/WorkManagement/Image.png";
import CallToAction from "../CallToAction/CallToAction";
import {motion } from "framer-motion"
const Content = (props) => {
  return (
    <section
      className={`z-10  relative flex flex-col justify-center items-center text-center  gap-14 lg:${props.direction} lg:text-left`}
  
    >
      {/* Content */}
      <div className="flex flex-col justify-center items-center gap-10 lg:items-start">
        {/* Title and Description */}
        <div className="flex flex-col justify-center items-center gap-6 w-full max-w-3xl mx-auto">
          <h4 className="capitalize font-primary font-bold text-4xl tracking-tight text-third md:text-5xl w-full">
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
          <p className="font-primary text-lg leading-8 tracking-tight font-light  text-third max-w-2xl lg:max-w-lg">
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
        className="mt-6 w-10/12 xm:max-w-lg mx-auto lg:max-w-lg "
       {...props.animationProps}
      >
        <img src={props.image} alt="work together" className="w-full" />
      </motion.div>
    </section>
  );
};

export default Content;
