import React from "react";



const Head = () => {
  return (
    <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1638029202288-451a89e0d55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }} className="bg-center bg-cover">
      <section
        className="w-full flex flex-col items-center justify-center h-[35rem] no-repeat bg-[#000000d2]"

      >
        <div className="wrapper flex flex-col items-center justify-center text-center w-[90%] lg:w-[65%] md:w-[90%] text-white">
          <div className="inline-flex text-md rounded-lg  border-blue-gray-50 bg-red-800 text-white py-1 lg:px-4 px-1 font-medium">
            Community Guidelines
          </div>
          <div

            color="blue-gray"
            className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-4xl font-semibold capitalize"
          >

           Time To Sync Up
          </div>
          <div
            variant="lead"
            className=" mx-auto w-full !text-gray-500 lg:text-md text-base "
          >
            Community guidelines for Virtual or In Person Events
          </div>
         

        </div>
      </section>
    </div>
  );
};

export default Head;
