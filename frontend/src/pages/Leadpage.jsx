import React from "react";
import "../components/leads/Leadpage.css";
import Button from "../components/leads/Button";
import { IoMdPeople } from "react-icons/io";
import { IoIosSchool, IoIosRocket } from 'react-icons/io';

import ambass from "../assets/leads/Ambassador.png";
import ButtonHollow from "../components/about/ButtonHollow";

function Leadpage() {
  const extractedData = [
    {
      title: "Launch or Expand Your Community Presence",
      description:
        "As a Uniques Community Ambassador, you have the chance to kickstart or enrich a student club at your university. Collaborate with university officials to establish a student club, gather a committed core team, and appoint a faculty advisor to offer guidance and assistance.",
      icon: IoMdPeople
    },
    {
      title: "Conduct Engaging Workshops",
      description:
        "Coordinate workshops within The Uniques Community to enrich student understanding of various developer products and platforms. These interactive workshops and events offer invaluable opportunities for students to learn and develop within a supportive peer-to-peer environment.",
      icon: IoIosSchool
    },
    {
      title: "Lead Project Development Initiatives",
      description:
        "Collaborate with local organizations to identify project opportunities and spearhead collective project development initiatives. By closely partnering with local entities, Uniques Community Ambassadors can facilitate impactful projects that benefit both students and the broader community.",
      icon: IoIosRocket
    },
  ];
  const extractedData1 = [
    {
      title: "Minimum One Year Until Graduation:",
      description:
        "Applicants should have at least one year remaining until graduation from their undergraduate or graduate program.        ",
    },
    {
      title: "Full-Time Enrollment:",
      description:
        " Applicants must be enrolled full-time in an undergraduate or graduate program at a college or university",
    },
    {
      title: "Commitment:",
      description:
        "Individuals must commit to the program for a minimum of one year, demonstrating dedication to their role as a Lead.",
    },
    {
      title: "Passion for Impact:",
      description:
        "Applicants should be passionate about creating positive impact within their community and fostering growth and collaboration among peers.",
    },
    {
      title: "Technical Understanding:",
      description:
        "Individuals should possess a foundational understanding of computer programming and/or software engineering concepts, enabling them to effectively lead technical discussions and initiatives within the community.",
    },
    {
      title: "Event Planning Experience:",
      description:
        "Preference will be given to applicants with prior experience in event planning or leading a team, demonstrating their ability to organize and execute successful community events.",
    },
    {
      title: "Connection to Local Developer Community:",
      description:
        "Applicants should have a connection to the local developer community, whether through participation in related events, engagement with local tech organizations, or active involvement in developer forums and groups.",
    },
  ];

  const communityGuidelines = [
    {
      id: 1,
      title: "Host Regular Events",
      description:
        "Organize and host events, ideally once a month, to foster engagement and learning within your community. Aim to host a total of four events throughout the year, covering a diverse range of topics and formats to cater to the interests and needs of your members.",
    },
    {
      id: 2,
      title: "Report Activities",
      description:
        "Regularly report your chapter's activities on the designated event platform. This helps track progress, share insights, and ensure transparency across the community.",
    },
    {
      id: 3,
      title: "Build a Core Team",
      description:
        "Assemble a dedicated core team to support you in organizing events, workshops, and other community initiatives. Collaborate closely with your team to delegate tasks, leverage each other's strengths, and ensure the smooth execution of activities.",
    },
    {
      id: 4,
      title: "Participate in Program Campaigns",
      description:
        "Actively participate in program campaigns and events initiated by The Unique Community. These campaigns provide valuable opportunities to amplify your chapter's impact, collaborate with other chapters, and contribute to larger community initiatives.",
    },
    {
      id: 5,
      title: "Engage with Regional Lead and Community Manager",
      description:
        "Maintain regular communication with your Regional Lead and Community Manager for guidance, support, and mentorship. Schedule periodic meetings to discuss challenges, share successes, and seek advice on community-building strategies.",
    },
    {
      id: 6,
      title: "Adhere to Code of Conduct",
      description:
        "Uphold the Community Organizer Code of Conduct at all times, fostering an inclusive, respectful, and safe environment for all community members. Lead by example and ensure that all activities align with the values and principles of The Unique Community.",
    },
  ];

  return (
    <>
      <h1 className="text-center heading m-4 w-11/12 mx-auto">The Uniques Community</h1>
      <div className="para-div">
        <p className=" first-para">
          The Uniques Community Ambassadors are driven leaders within their
          university circles, committed to empowering their peers through
          learning and connection. Ambassadors, whether undergraduates or
          graduates pursuing diverse academic paths, possess fundamental
          knowledge of software development concepts
        </p>
        <p className=" first-para m-4 mb-10">
          Collaborating closely with The Uniques Community, Ambassadors receive
          support as they establish and nurture vibrant on-campus communities.
          This partnership ensures Ambassadors have the resources and guidance
          needed to cultivate inclusive environments where learning and growth
          thrive.
        </p>
        <Button text="Apply now" />
      </div>
      <div className="cards-div w-11/12 mx-auto">
        <h1 className="card-heading m-4 mb-10 text-center sm:text-2xl lg:text-4xl">What does an Ambassador do?</h1>
        <div className="flex flex-wrap justify-evenly items-center">
          {extractedData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="card p-4 bg-white rounded-xl shadow-md hover:shadow-lg mx-2 my-2 w-full">
                <Icon className="card-icon mb-2 text-4xl" />
                <h3 className="card-title text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-justify">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>



      <div className="flex justify-center items-center w-11/12 mx-auto">
        <div className="page-body text-center w-[80%]   md:text-start">
          <h1 className="font-bold mb-10">Benefits of being a Lead</h1>
          <div>
            <b className="w-[fit-content] text-lg">
              Foster Your Professional Development - &nbsp;{" "}
            </b>
            <span>
              As a Uniques Community Ambassador, you'll have the chance to
              advance your professional journey with access to tailored
              community management training and technical insights. Moreover,
              you'll receive exclusive invitations to select Google events,
              providing opportunities to broaden your knowledge base and forge
              valuable connections.
            </span>
            <br />
            <br />
            <b className="w-[fit-content] text-lg">
              Expand Your Network - &nbsp;{" "}
            </b>
            <span>
              By joining The Uniques Community, you'll tap into a vast global
              network encompassing student leaders, seasoned community
              organizers, industry mavens, and Google professionals. This
              expansive network offers avenues for collaboration, mentorship,
              and growth, ensuring you stay connected with peers and industry
              luminaries alike.
            </span>
            <br />
            <br />
            <b className="w-[fit-content] text-lg">
              Community Empowerment - &nbsp;{" "}
            </b>
            <span>
              Benefit from dedicated support from The Uniques Community to
              bolster your efforts in educating and expanding the community,
              both online and offline. Access resources, guidance, and
              collaborative initiatives aimed at nurturing a vibrant and
              inclusive community ecosystem.
            </span>
          </div>
        </div>
      </div>
      <div className="cards-div w-11/12 mx-auto ">
        <h1 className=" card-heading m-4 mb-10 text-center">
          What is the <span className="font-bold">Criteria</span> For Being a
          Ambassador ?
        </h1>
        <div className="flex flex-wrap justify-evenly items-center ">
          {extractedData1.map((item, index) => {
            return (
              <div key={index} className="card p-4">
                <IoMdPeople className="card-icon" />
                <h3 className="card-title">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="second-body text-center md:text-start w-11/12 mx-auto">
        <div className="left-part my-auto">
          <h1>Community Guidelines</h1>
          <p>
            The Uniques Community is committed to fostering a safe, inclusive,
            and harassment-free environment for all participants, regardless of
            gender identity and expression, sexual orientation, disabilities,
            neurodiversity, physical appearance, body size, ethnicity,
            nationality, race, age, religion, or other protected category. We
            believe that every individual deserves to participate in our events
            without fear of harassment, discrimination, or condescension.
          </p>

          <div className="mt-10">
            <ButtonHollow link="/communityguidelines" text="Read More" />
          </div>
        </div>
        <div className="img-div">
          <img src={ambass} width={600} className="mx-auto" alt="new" />
        </div>
      </div>

      <div className="flex justify-center items-center w-11/12 mx-auto ">
        <div className="page-body text-center w-[80%]   md:text-start">
          <h1 className="font-bold mb-10 md:text-xl">Responsibilities of an Ambassador</h1>

          {communityGuidelines.map((item) => {
            return (
              <div className="mt-10">
                <b className="w-[fit-content] md:text-lg">
                  {item.title} - &nbsp;{" "}
                </b>
                <span>
                  {item.description}
                </span>
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Leadpage;
