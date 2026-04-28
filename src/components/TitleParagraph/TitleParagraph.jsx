import React from "react";
import Img from "../../assets/Images/customizeapp/Image.png";
import { motion } from "motion/react";
const TitleParagraph = (props) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.h4
      className={`class-title  ${props.color}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: props.delay }}
    >
      {props.partOne} {" "}
      <span className="relative inline-block">
        <span className=" relative z-10">{props.partTwo}</span>
        <img
          className="absolute z-0 left-3 top-3/4 w-full object-contain pointer-events-none "
          alt="line Image"
          src={Img}
        />
      </span>
    </motion.h4>
  );
};

export default TitleParagraph;
