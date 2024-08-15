import React from "react";
import Hero from "../components/about/Hero";
import Motto from "../components/about/Motto";
import Guidelines from "../components/about/Guidelines";
import Maps from "../components/about/Maps";
import Review from "../components/about/Review";
import Touchh from "../components/about/Touchh";
import Stories from "../components/about/Stories";
import Lead from "../components/about/Lead";
import Accordian from "../components/about/Accordian";
import cc from "../components/events/code-crusade3.jpg";
import About1 from "../components/about/About1";
import HeroSection16 from "../components/about/HeroSection16";
import UpcomingCard from "../components/events/UpcomingCard";


const About = ({ blogs }) => {
  return (
    <div className="">
      <Hero />
      <div className="w-full p-[30px]"></div>
      <Motto />
      <div className="w-full p-[30px]"></div>

      <div className="lg:px-6 md:px-5 sm:px-5 px-4">
        <Review />
      </div>
      <div className="lg:px-6 md:px-5 sm:px-5 px-4">
        <UpcomingCard
          img={cc}
          link="/campus-ambassador/commingevent/8"
          title="Code Crusade 3.0"
          description="Code Crusade is an introductory event for freshers to gain hands-on programming experience and enhance logical reasoning. Dive into languages like Python and C++, engage in practical sessions, and tackle real-world problems with guidance from experienced mentors. Participate in workshops, compete in coding contests, and test your skills through problem-solving challenges. The winner will receive direct entry into the esteemed batch, The Uniques."
        />
      </div>

      <div className="p-3"></div>
      <div className="lg:px-6 md:px-5 sm:px-5 px-4">
        <Maps />
      </div>

      <div className="p-3"></div>
      <Guidelines />
      <div className="p-3"></div>
      <div className="lg:px-6 md:px-5 sm:px-5 px-4">
        <Stories blogs={blogs} />
      </div>
      <About1 />
      <div className="p-3"></div>
      <div className="lg:px-6 md:px-5 sm:px-5 px-4">
        <Lead />
      </div>
      {/* <EventRegister/> */}

      <div className="p-3"></div>
      <Accordian />
      <div className="p-3"></div>
    </div>
  );
};

export default About;
