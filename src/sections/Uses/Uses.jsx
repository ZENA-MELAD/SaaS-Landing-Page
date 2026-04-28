import React, { useEffect, useState } from "react";
import Img1 from "../../assets/Images/Uses/Image.png";
import Img2 from "../../assets/Images/Uses/Image (3).png";
import CallToAction from "../../components/CallToAction/CallToAction";
import { motion } from "motion/react";
import TitleParagraph from "../../components/TitleParagraph/TitleParagraph";
const Uses = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 1024,
  );
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <section className="content-section  gap-16  bg-primary md:px-8 md:py-24 lg:flex-row    lg:px-8 lg:py-36">
      <div className="flex flex-col justify-center items-center gap-10 lg:items-start">
        <div className="flex flex-col justify-center items-center gap-6 lg:items-start">
          <TitleParagraph
            color="text-white"
            partOne="Use as"
            partTwo="Extension"
            delay={0}
          />
          <motion.p
            className="class-description text-white sm:max-w-md"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </motion.p>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <CallToAction title="Let’s Go" ph="px-8" pv="py-3" text="text-lg" />
        </motion.div>
      </div>
      <motion.div
        className=" flex justify-center items-center"
        initial={{ opacity: 0, x: isDesktop ? 40 : 0, y: isDesktop ? 0 : 40 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <img src={Img2} alt="" className="w-full object-contain" />
      </motion.div>
    </section>
  );
};

export default Uses;
