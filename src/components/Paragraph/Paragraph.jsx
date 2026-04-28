import React from "react";
import { motion } from "motion/react";

const Paragraph = (props) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.p
      className={`class-description ${props.colorText} `}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut",delay: props.delay }}

    >
      {props.content}
    </motion.p>
  );
};

export default Paragraph;
