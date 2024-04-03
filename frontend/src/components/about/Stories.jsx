import React from "react";

const Stories = () => {
  return (
    <div className="mt-10 mb-10 flex justify-center items-center">
      <div className="w-full px-9">
        <h1 className="text-4xl font-medium">Stories from the community</h1>
        <div className="flex justify-between flex-wrap mt-2 mb-3 items-center">
          <h2>
            Get inspired by the Industrial insights and the Corporate Culture in
            your Campus...
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

        <div className="flex justify-evenly mt-4 flex-wrap md:flex-nowrap  items-center gap-5">
          <div className="md:w-[350px] relative rounded-sm w-[250px]   h-[maxcontent] pb-3 border">
            <div className="h-[150px] bg-[#ca0019] rounded-t-sm"></div>
            <div className="h-[100px] p-2">
              <h3 className="text-[10px] my-1 font-bold">The Uniques</h3>
              <p className="md:text-xl mb-3  mt-1 text-[#ca0019]">
              Building Corporate Enviornment
              </p>
            </div>
            <div className="text-[#ca0019] mt-5 inline-block ms-2 py-1 px-2 rounded-sm cursor-pointer font-semibold border hover:bg-[#d3979e48] text-[12px] ">
              Read More
            </div>
          </div>
          <div className="md:w-[350px] relative rounded-sm  w-[250px]  h-[maxcontent] pb-3 border">
            <div className="h-[150px] bg-[#ca0019] rounded-t-sm"></div>
            <div className="h-[100px] p-2">
              <h3 className="text-[10px] my-1 font-bold">The Uniques</h3>
              <p className="md:text-xl mt-1 mb-3 text-[#ca0019]">
                Teach How Indusrty works And How Roles is assigned
              </p>
            </div>
            <div className="text-[#ca0019] inline-block ms-2 mt-5 py-1 px-2 rounded-sm cursor-pointer font-semibold border hover:bg-[#d3979e48] text-[12px] ">
              Read More
            </div>
          </div>
          <div className="md:w-[350px] relative rounded-sm w-[250px]  h-[maxcontent] pb-3 border">
            <div className="h-[150px] bg-[#ca0019] rounded-t-sm"></div>
            <div className="h-[100px] p-2">
              <h3 className="text-[10px] mt-1 font-bold">The Uniques</h3>
              <p className="md:text-xl my-1 mb-3 text-[#ca0019]">
              Become a Part of Faculty Free Community..
              </p>
            </div>
            <div className="text-[#ca0019] inline-block ms-2 mt-5 py-1 px-2 rounded-sm cursor-pointer font-semibold border hover:bg-[#d3979e48] text-[12px] ">
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
