import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CiLinkedin } from "react-icons/ci";
import bharatTech from "../../assets/clubs/bharatTech.jpg";
import { IoIosPeople } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import ideathon from "../../assets/clubs/ideathon.jpg";
import globalSummit from "../../assets/clubs/google_sumit_pic[1].jpg";
import IOextended from "../../assets/clubs/IOextended.jpg";
const Slick2 = () => {
  const data = [
    {
      id: "a1",
      image: bharatTech,
      title: "Bharat Tech Xperience Hackathon",

      description: "Description for Bharat Tech Xperience Hackathon.",
    },
    {
      id: "a2",
      image: IOextended,
      title: "Google I/O Extended",

      description: "Description for Google I/O Extended.",
    },
    {
      id: "a3",
      image: ideathon,
      title: "Google Ideate Ideathon 2024",

      description: "Description for Google Ideate Ideathon 2024.",
    },
    {
      id: "a4",
      image: globalSummit,
      title: "Global Future Summit 2K24",

      description: "Description for Global Future Summit 2K24.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 598,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container  lg:w-[80%] md:w-[80%] sm:w-[80%] w-[84%] mx-auto gap-3">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className=" px-0 md:px-3 ">
            <div className="flex flex-col p-3 mx-auto sm:mx-0 md:mx-0 lg:mx-0 justify-around border-slate-300 border-[0.5px] outline-2 w-[250px] h-[390px]">
              {/* for image and title */}
              <div className="flex flex-col items-center justify-center mt-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-[10rem] h-[10rem]"
                />
                <p className="text-center  mt-4 text-[#1e1e1b] font-bold">
                  {item.title}
                </p>
                <p className="text-center mt-4 text-[#1e1e1b] font-medium">
                  {item.description}
                </p>
              </div>

              {/* for bottom */}
              <div className="flex  justify-between mt-auto">
                {/* for left icons and places we can say */}
                <div className="flex">
                  <IoIosPeople className="mr-2 my-auto text-[18px] text-[#ca0019]" />
                  <p className="text-[14px] p-0 m-0 my-auto font-light tracking-wider">
                    TU
                  </p>
                </div>
                <div className="flex">
                  <CiLinkedin  className="mr-2 my-auto text-[17px] text-[#ca0019]" />
                  <p className="text-[14px] p-0 m-0 my-auto font-light tracking-wider">
                    LinkedIN
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slick2;
