import React from "react";
import clubheaderbg from "../assets/clubs/clubheaderbg.jpg";
import Slick from "../components/chapter/Slick";
import { Link } from "react-router-dom";
import Slick2 from "../components/clubs/Slick2";
import spon from './tus.png'
const Clubs = ({ event }) => {
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
    <div className="bg-gray-100">
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
      <div className="w-11/12 mx-auto pt-12  pb-6">
        <p className="text-2xl md:text-4xl font-bold mb-6">
          Our <span className="text-red-800">
            Chapters
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link to={'/chapter'}>
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
