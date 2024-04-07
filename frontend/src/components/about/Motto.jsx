import React from "react";

const Motto = () => {
  return (
    <div className="px-7 bg-black/5">
      <div className="lg:flex justify-evenly p-3 my-3 items-center flex:wrap lg:flex-nowrap md:flex-nowrap">
        <div className="ps-4 pt-2 pb-2 pe-4">
          <h3 className="text-xl font-medium py-2">Collaborate</h3>
          <p className="text-[#414f53]">
            Engage with like-minded students interested in developer
            technologies at your college or university. All are invited,
            regardless of background or major, to join our inclusive community.
          </p>
        </div>
        <div className="ps-4 pt-2 pb-2 pe-4">
          <h3 className="text-xl font-medium py-2">Acquire</h3>
          <p className="text-[#414f53]">
            Explore a diverse range of technical topics and acquire new skills
            through interactive workshops, events, talks, and hands-on project
            activities, both online and in-person.
          </p>
        </div>
        <div className="ps-4 pt-2 pb-2 pe-4">
          <h3 className="text-xl font-medium py-2">Flourish</h3>
          <p className="text-[#414f53]">
            Apply your newfound knowledge to tackle local challenges and advance
            your skills, career, and network. Give back to your community by
            sharing your expertise and helping others learn and grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Motto;
