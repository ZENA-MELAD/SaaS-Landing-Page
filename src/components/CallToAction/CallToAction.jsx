import React from "react";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";

const CallToAction = (props) => {
  const CTA = `${props.state} ${props.ph} ${props.pv} ${props.text}`;

  return (
    <motion.button
      className={`font-primary font-light text-white flex justify-center items-center gap-x-1 rounded-lg bg-secondary tracking-wide leading-8 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-blue-500 ${CTA}`}
      initial={props.withAnimation ? { opacity: 0, y: 40 } : false}
      animate={props.withAnimation ? { opacity: 1, y: 0 } : false}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6,
        scale: { transition: { duration: 0.2, delay: 0 } },
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2, delay: 0 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
    >
      <span>{props.title}</span>
      <motion.span
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2, delay: 0 }}
      >
        <FaArrowRight />
      </motion.span>
    </motion.button>
  );
};

export default CallToAction;
