import React from "react";
import background from "../../assets/Images/WorkManagement/Vector.png";
import Content from "../../components/Content/Content";
import Img1 from "../../assets/Images/WorkManagement/Image (2).png";
import WorkTogetherImage from "../../assets/Images/WorkManagement/Work Together Image.png";
const WorkManagement = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-24 px-4 py-20 md:px-5 md:py-24 lg:px-8 lg:py-36 ">
      <div className="absolute left-0 top-8 z-0 pointer-events-none">
        <img
          src={background}
          alt="Background Decoration"
          className="w-28 opacity-55 object-contain md:w-36"
        />
      </div>
      <Content
        firstWord="project"
        secondWord="management"
        paragraph="Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note."
        titleButton="Get Started"
        image={Img1}
      />
      <Content
        firstWord="work"
        secondWord="together"
        paragraph="With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others."
        titleButton="Try it now"
        image={WorkTogetherImage}
      />
    </div>
  );
};

export default WorkManagement;
