import React from "react"; 
import CallToAction from "../../components/CallToAction/CallToAction";
import Img from "../../assets/Images/HeroImages/undraw_data_25jw.svg";

const Hero = () => {
  const classContainer = `px-4 pt-20 flex flex-col justify-start items-center text-center gap-14 bg-primary
        bg-no-repeat bg-top bg-cover
        bg-[url('/src/assets/Images/HeroImages/bg-mobile.png')]
        xm:bg-[url('/src/assets/Images/HeroImages/bg-tablet.png')]
        lg:bg-[url('/src/assets/Images/HeroImages/bg-desktop.png')]
        lg:flex-row
        lg:justify-between
        lg:gap-0
        lg:text-left
        lg:px-8
        lg:pt-10`;
  return (
    <section className={`${classContainer}`}>
      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center gap-10 lg:items-start ">
        <div className="flex flex-col justify-center items-center gap-6 lg:items-start">
          <h2 className="capitalize font-primary text-4xl font-bold text-white tracking-tight lg:text-6xl lg:leading-16">
            Get More Done With Whitepace
          </h2>
          <p className="font-primary text-lg text-white font-light tracking-tight leading-7  max-w-lg">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks.
          </p>
        </div>
        <CallToAction
          title="Try Taskey Free"
          pv="py-3 lg:py-4"
          ph="px-10"
          text="text-lg"
        />
      </div>

      {/* Hero Image */}
      <div className="xm:max-w-xl md:max-w-2xl lg:max-w-xl lg:mt-12 xl:max-w-2xl xl:mt-28">
        <img src={Img} alt="Hero Image" className="object-contain" />
      </div>
    </section>
  );
};

export default Hero;
