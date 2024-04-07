// import React from "react";
import React, { useState } from "react";
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


const OrganizerModal = ({ organizer, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="modal-overlay fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <h1 className="text-lg font-bold">{organizer.name}</h1>
              <span className="modal-close cursor-pointer z-50" onClick={onClose}>
                &times;
              </span>
            </div>
            <img src={organizer.image} alt={organizer.name} className="w-full h-auto rounded mb-4" />
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Company: </span>{organizer.company}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Designation: </span>{organizer.designation}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Bio: </span>{organizer.bio}
            </p>
            <div className="flex justify-between mt-4">
              <a href={organizer.twitter} className="text-blue-500">
                <CiLinkedin />
              </a>
              <a href={organizer.linkedin} className="text-blue-500">
                <IoIosPeople />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Slick2 = () => {

  const [selectedOrganizer, setSelectedOrganizer] = useState(null);

  const openModal = (organizer) => {
    setSelectedOrganizer(organizer);
  };

  const closeModal = () => {
    setSelectedOrganizer(null);
  };


  const organizers = [
    {
      id: 1,
      image: "https://gdgchandigarh.com/assets/speakers/anubhav-singh.jpg",
      name: "Kamal Vaid",
      company: "Infosys",
      designation: "Technology Lead",
      profile: "",
      twitter: "https://twitter.com/cammykamal",
      linkedin: "https://www.linkedin.com/in/kamal-vaid/",
      bio: "Kamal loves to work and explore Android. Working as Technology Lead with 8+ years of experience, he believes in the theory of sharing whatever you have learnt from everywhere. He is a blogger and write whenever he feel he has learnt something new and that needs to be shared. He is fond of Cars and Bikes, and spend his free time in riding."
    },
    {
      id: 2,
      image: "https://gdgchandigarh.com/assets/speakers/anubhav-singh.jpg",
      name: "Yatin Nayyar",
      company: "Wipro",
      designation: "Project Engineer",
      profile: "",
      twitter: "https://twitter.com/hifiveyatin",
      linkedin: "https://www.linkedin.com/in/hifiveyatin/",
      bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
    },
    {
      id: 3,
      image: "https://gdgchandigarh.com/assets/speakers/anubhav-singh.jpg",
      name: "Loveleen Kaur",
      company: "Astrotalk",
      designation: "Senior Engineer",
      profile: "",
      twitter: "https://twitter.com/loveleen_nancy",
      linkedin: "https://www.linkedin.com/in/loveleen-kaur/",

      bio: "Loveleen Kaur, a bundle of positivity and happiness, this tech-savvy girl loves mountains and works wonders with technology. She is currently working as an Senior Android Developer with 5 years of experience. She is Co-Organizer of GDG Chandigarh, WTM Ambassador and Google Android Educator. Hailing from the technology field, she loves logic, but also has a passion for creativity. In her free time, She loves to mentor people to help them learn and grow in their career."
    },
    {
      id: 4,
      image: "https://gdgchandigarh.com/assets/speakers/anubhav-singh.jpg",
      name: "Pranav Kumar Verma",
      company: "Nagarro",
      designation: "Senior Engineer",
      profile: "",
      linkedin: "https://www.linkedin.com/in/pranav-kumar-verma/",
      twitter: "https://twitter.com/prnvkmr954",
      bio: "Pranav is a Senior Engineer by profession having 6.7 years of experience in corporate field. He loves programming and developing games. He states that learning is a process that never stops, even if you are old enough, there will be things that you can still learn. His hobbies are reading books playing games."
    },
    {
      id: 5,
      image: "https://gdgchandigarh.com/assets/speakers/anubhav-singh.jpg",
      name: "Cherish Santoshi",
      company: "DevNetwork",
      designation: "Advisory Board Member",
      profile: "",
      twitter: "https://twitter.com/CherishSantoshi",
      linkedin: "https://www.linkedin.com/in/cherishsantoshi/",
      bio: "An experienced Program Manager currently managing programs for 5 million developers across the globe. I'm passionate about building and scaling tech-communities and promoting technical education."
    },
    {
      id: 6,
      image: "https://gdgchandigarh.com/assets/speakers/anubhav-singh.jpg",
      name: "Aashi",
      company: "MedEnGauge Healthcare Pvt Ltd",
      designation: "Co-Founder",
      profile: "",
      twitter: "https://twitter.com/AashiDutt",
      linkedin: "https://www.linkedin.com/in/aashi-dutt",

      bio: "Aashi is the lead organizer for TensorFlow UserGroup Chandigarh and a 2X Kaggle expert. She is a ML enthusiast who loves to work on real world problems."
    },
    {
      id: 7,
      image: "https://gdgchandigarh.com/assets/speakers/anubhav-singh.jpg",
      name: "Harneet Singh",
      company: "KPMG",
      designation: "Associate Consultant",
      profile: "",
      twitter: "https://twitter.com/iharneetsingh",
      linkedin: "https://www.linkedin.com/in/iharneetsingh/",

      bio: "By profession I'm working as Associate Consultant in KPMG. I believe in the theory of sharing whatever you have learnt from everywhere."
    },
    {
      id: 8,
      image: "https://gdgchandigarh.com/assets/speakers/anubhav-singh.jpg",
      name: "Ayush Sharma",
      company: "IBM",
      designation: "Application Developer",
      profile: "",
      twitter: "https://twitter.com/I_ayush_sharma",
      linkedin: "https://www.linkedin.com/in/sharmaayush981/",

      bio: "Ayush is an Application Developer in IBM. He is Co Lead - Meta Developer Circle (Chandigarh). He is Certified Java & Cloud full stack Developer. He is Core Team Lead (Google Developers Group-Chandigarh)."
    }
  ]

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
    <div className="slider-container w-11/12 mx-auto gap-3">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {organizers.map((organizer) => (
          <div key={organizer.id} onClick={() => openModal(organizer)} className="w-full flex flex-col justify-center bg-gray-100/50 p-5 rounded-md shadow-md mx-auto">
            <img src={organizer.image} alt={organizer.name} className="h-40 w-40 rounded-full mx-auto mb-3" />
            <div className="text-center">
              <p className="font-bold text-lg mb-3">{organizer.name}</p>
              <p className="font-medium">{organizer.company}</p>
              <p className="text-sm">{organizer.designation}</p>
              {/* <p>{organizer.bio}</p> */}
              {/* <a href={organizer.twitter}>
                <CiLinkedin />
              </a>
              <a href={organizer.linkedin}>
                <IoIosPeople />
              </a> */}

            </div>
          </div>

        ))}

      </div>
      {selectedOrganizer && (
        <OrganizerModal organizer={selectedOrganizer} onClose={closeModal} />
      )}
    </div>

  );
};

export default Slick2;
