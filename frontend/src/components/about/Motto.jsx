import React from "react";

const mottosData = [
  {
    title: "Collaborate",
    description: "Engage with like-minded students interested in developer technologies at your college or university. All are invited, regardless of background or major, to join our inclusive community.",
    imageUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Acquire",
    description: "Explore a diverse range of technical topics and acquire new skills through interactive workshops, events, talks, and hands-on project activities, both online and in-person.",
    imageUrl: "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Flourish",
    description: "Apply your newfound knowledge to tackle local challenges and advance your skills, career, and network. Give back to your community by sharing your expertise and helping others learn and grow.",
    imageUrl: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Motto = () => {
  return (
    <div className=" py-12">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mottosData.map((motto, index) => (
            <div key={index} style={{ backgroundImage: `url(${motto.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center center" }} className="  rounded-md shadow-md" >
              <div className="h-[40vh] flex items-center bg-[#00000099] hover:bg-rose-700/90 transition text-white rounded-md">
                <div className="p-8">
                  <h3 className="text-2xl lg:text-3xl font-medium pb-4">{motto.title}</h3>
                  <p className="text-sm lg:text-lg pt-4 text-justify">{motto.description}</p>
                </div>  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Motto;
