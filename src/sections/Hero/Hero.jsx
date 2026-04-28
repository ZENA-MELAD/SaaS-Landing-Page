import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import CallToAction from "../../components/CallToAction/CallToAction";
import Img from "../../assets/Images/HeroImages/undraw_data_25jw.svg";
import Paragraph from "../../components/Paragraph/Paragraph";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 1024,
  );

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const classContainer = `content-section gap-14 bg-primary
        bg-no-repeat bg-top bg-cover
        bg-[url('/src/assets/Images/HeroImages/bg-mobile.png')]
        xm:bg-[url('/src/assets/Images/HeroImages/bg-tablet.png')]
        lg:bg-[url('/src/assets/Images/HeroImages/bg-desktop.png')]
        lg:flex-row
        lg:gap-0
        lg:text-left
        lg:px-8
        lg:pt-10`;

  return (
    <section className={`${classContainer}`}>
      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center gap-10 lg:items-start">
        <div className="flex flex-col justify-center items-center gap-6 lg:items-start">
          {/* ✅ fadeInDown على العنوان */}
          <motion.h2
            className="capitalize font-primary text-4xl font-bold text-white tracking-tight lg:text-5xl lg:max-w-lg lg:leading-16"
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Get More Done With Whitepace
          </motion.h2>
          <Paragraph
            content=" Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks."
            colorText="text-white"
            delay={0.2}
          />
        </div>
        <CallToAction
          title="Try Taskey Free"
          pv="py-3 lg:py-4"
          ph="px-10"
          text="text-lg"
          withAnimation={true}
        />
      </div>

      {/* Hero Image */}
      <motion.div
        className="xm:max-w-xl   lg:mt-12"
        initial={{
          opacity: 0,
          x: isDesktop ? 60 : 0,
          y: isDesktop ? 0 : 40,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6, ease:"easeOut" , delay:0.2 }}
      >
        <img src={Img} alt="Hero Image" className="object-contain" />
      </motion.div>
    </section>
  );
};
export default Hero;
