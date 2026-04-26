import React, { useState, useEffect } from "react";
import background from "../../assets/Images/WorkManagement/Vector.png";
import Content from "../../components/Content/Content";
import Img1 from "../../assets/Images/WorkManagement/Image (2).png";
import WorkTogetherImage from "../../assets/Images/WorkManagement/670.jpg";
import { motion } from "motion/react";

const WorkManagement = () => {
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
    initial: {
      opacity: 0,
      x: isDesktop ? 60 : 0,
      y: isDesktop ? 0 : 40,
    },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  };

  const float = {
    animate: { y: [0, -14, 0] },
    transition: { duration: 3, ease: "easeInOut", repeat: Infinity },
  };

  return (
    <section className="relative  content-section gap-24 md:px-5 md:py-24 lg:px-8 lg:py-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute left-0 top-8 z-0 pointer-events-none"
      >
        <img
          src={background}
          alt="Background Decoration"
          className="w-28 opacity-55 object-contain md:w-36 lg:w-48"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Content
          lgDirection="lg:flex-row"
          firstWord="project"
          secondWord="management"
          paragraph="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
          titleButton="Get Started"
          image={Img1}
          animationProps={fadeUp}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Content
          lgDirection="lg:flex-row-reverse"
          firstWord="work"
          secondWord="together"
          paragraph="With Whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
          titleButton="Try it now"
          image={WorkTogetherImage}
          animationProps={float}
        />
      </motion.div>
    </section>
  );
};

export default WorkManagement;
