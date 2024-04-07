import React from "react";
import clubheaderbg from "../assets/clubs/clubheaderbg.jpg";
import Slick from "../components/clubs/Slick";
import Slick2 from "../components/clubs/Slick2";

const Clubs = () => {
  return (
    <div>
      <section
        className="w-full flex flex-col items-center justify-center h-[35rem] bg-[#eeeeee] no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${clubheaderbg})` }}
      >
        <div className="wrapper flex flex-col items-center justify-center text-center w-[90%] lg:w-[65%] md:w-[90%]">
          <h2 className=" text-3xl md:text-4xl  lg:text-5xl  text-[#1e1e1b] mb-8">
            The Uniques Community
          </h2>
          <p className="text-md md:text-lg">
            The Uniques Community is a university-based group welcoming students
            passionate about exploring a wide array of developer technologies.
            Regardless of academic discipline, undergraduates and graduates
            alike are encouraged to join. Within The Uniques Community, students
            engage in collaborative learning, enhancing their skills in a
            supportive peer environment. Moreover, they leverage their newfound
            knowledge to develop innovative solutions benefiting local
            businesses and communities.
          </p>
        </div>
      </section>
      <section className="w-full my-7 py-7">
        <div className="wrapper w-full flex flex-col items-center justify-center  h-[31.25rem] ">
          <div className="mb-5">
            <h2 className=" text-3xl md:text-4xl  lg:text-5xl  text-[#1e1e1b] mb-8">
              Our Past Events
            </h2>
          </div>
          <Slick />
        </div>
      </section>
      <section className="w-full my-7 py-7">
        <div className="wrapper w-full flex flex-col items-center justify-center  h-[31.25rem] ">
          <div className="mb-5">
            <h2 className=" text-3xl md:text-4xl  lg:text-5xl  text-[#1e1e1b] mb-8">
              Our mentors…
            </h2>
          </div>
          <Slick2 />
        </div>
      </section>
      <section className="w-full my-7 py-7">
        <div className="wrapper w-full flex flex-col items-center justify-center  h-[31.25rem] ">
          <div className="mb-5">
            <h2 className=" text-3xl md:text-4xl  lg:text-5xl  text-[#1e1e1b] mb-8">
              Our member...
            </h2>
          </div>
          <Slick2 />
        </div>
      </section>
    </div>
  );
};

export default Clubs;
