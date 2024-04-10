import React from "react";
import clubheaderbg from "../assets/clubs/clubheaderbg.jpg";
import Slick from "../components/chapter/Slick";
import { Link } from "react-router-dom";
import Slick2 from "../components/clubs/Slick2";
import spon from './tus.png'
const Clubs = ({ event, handleClick }) => {
  const chapter = {
    name: "TheUniques | SVIET",
    logo: spon,
    backdrop: "",
    description: "",
    lead: "Ronit Jai Prakash",
    coLead: "Priyanshi Sharma",
    facultyCordinator: "Mr. Ankur Gill",
    facultyCordinatorDesignation: "Director Operations",
    events: [
      {
        event_id: "1",
        name: "Global Summit 2024",
      },
      {
        event_id: "2",
        name: "G Ideate Ideathon",
      },
      {
        event_id: "3",
        name: "Bharat TechXperience",
      },

    ]

  }
  return (
    <div className="bg-gray-100  ">
      <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1638029202288-451a89e0d55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }} className="bg-center bg-cover">
        <section
          className="w-full flex flex-col items-center justify-center h-[35rem] no-repeat bg-[#000000d2]"

        >
          <div className="wrapper flex flex-col items-center justify-center text-center w-[90%] lg:w-[65%] md:w-[90%] text-white">
            <div className="inline-flex text-md rounded-lg  border-blue-gray-50 bg-red-800 text-white py-1 lg:px-4 px-1 font-medium">
              The Uniques Community
            </div>
            <div

              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-4xl font-semibold capitalize"
            >

              A exploring a wide array of technologies and entreprenurial skills.
            </div>
            <div
              variant="lead"
              className=" mx-auto w-full !text-gray-500 lg:text-md text-base "
            >
              Within The Uniques Community, students
              engage in collaborative learning, enhancing their skills in a
              supportive peer environment. Moreover, they leverage their newfound
              knowledge to develop innovative solutions benefiting local
              businesses and communities.
            </div>


          </div>
        </section>
      </div>
      <div className="w-11/12 mx-auto pt-12  pb-6">
        <p className="text-2xl md:text-4xl font-bold mb-6">
          Our <span className="text-red-800">
            Chapters
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link to={'/chapter'} onClick={handleClick}>
            <div className="bg-white rounded-md shadow-md p-5">
              <img src={chapter.logo} alt="" srcset="" className="w-3/4 py-6 mx-auto" />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-11/12 mx-auto pb-12">
        <Slick events={event} />
      </div>

    </div>
  );
};

export default Clubs;
