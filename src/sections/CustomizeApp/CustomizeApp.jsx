import React, { useEffect, useState } from "react";
import Img1 from "../../assets/Images/customizeapp/Image (4).png";
import TitleParagraph from "../../components/TitleParagraph/TitleParagraph";
import CallToAction from "../../components/CallToAction/CallToAction";
import { motion } from "motion/react";
import Paragraph from "../../components/Paragraph/Paragraph";
const CustomizeApp = () => {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 1024,
  );

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="content-section gap-16 lg:flex-row">
      <motion.div
        initial={{ opacity: 0, x: isDesktop ? -40 : 0, y: isDesktop ? 0 : 40 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img src={Img1} className="object-contain" />
      </motion.div>
      <div className="flex flex-col justify-center items-center gap-10 lg:items-start">
        <div className="flex flex-col justify-center items-center gap-6 lg:items-start">
          <TitleParagraph
            color="text-third"
            partOne="Customize it to your"
            partTwo="needs"
            delay={0.15}
          />
          <Paragraph
            content="  Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API."
            colorText="text-third"
            delay={0.3}
          />
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3}}
        >
          <CallToAction title="Let’s Go" ph="px-8" pv="py-3" text="text-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default CustomizeApp;
