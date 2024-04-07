import React from "react";

const Stories = () => {
  const storiesData = [
    {
      title: "The Uniques",
      description: "Building Corporate Environment",
      buttonText: "Read More",
      bgColor: "#ca0019",
      hoverBgColor: "#d3979e48",
      imgUrl:"https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "The Uniques",
      description: "Teach How Industry Works And How Roles are Assigned",
      buttonText: "Read More",
      bgColor: "#ca0019",
      hoverBgColor: "#d3979e48",
      imgUrl:'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: "The Uniques",
      description: "Become a Part of Faculty Free Community",
      buttonText: "Read More",
      bgColor: "#ca0019",
      hoverBgColor: "#d3979e48",
      imgUrl:'https://images.unsplash.com/photo-1550305080-4e029753abcf?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <div className="w-11/12 mx-auto flex justify-center items-center">
      <div className="w-full py-6">
        <h1 className="text-4xl font-bold">Stories From The <span className="text-red-800">Community</span></h1>
        <div className="flex justify-between flex-wrap mt-2 mb-3 items-center">
          <h2 className="py-2">
            Get inspired by the Industrial insights and the Corporate Culture in your Campus...
          </h2>
          <div className="flex flex-wrap my-4 md:my-0 gap-3 justify-center items-center">
            <div className="text-white py-1 px-2 border-[1px] font-semibold rounded-[6px] bg-[#ca0019] text-[12px] ">
              View more stories
            </div>
            <div className="text-[#ca0019]  rounded-[6px] py-1 px-2 border-[1px] cursor-pointer font-semibold hover:bg-[#d3979e48] text-[12px] ">
              Submit your story
            </div>
          </div>
        </div>

        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storiesData.map((story, index) => (
            <div key={index} className=" rounded-md shadow-md pb-5 border">
              <div className="h-[200px]" style={{ backgroundColor: story.bgColor, backgroundImage:`url(${story.imgUrl})`, backgroundSize:"cover", backgroundPosition:"center center" }}></div>
              <div className="h-[100px] p-5">
                <h3 className="text-[10px] my-1 font-bold">{story.title}</h3>
                <p className="md:text-xl mb-3  mt-1 text-[#ca0019]">
                  {story.description}
                </p>
              </div>
              <div className="text-[#ca0019] mt-5 inline-block ms-2 py-1 px-5 rounded-sm cursor-pointer font-semibold border hover:bg-[#d3979e48] text-[12px] ">
                {story.buttonText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
