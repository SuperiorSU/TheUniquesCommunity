import React from "react";
import "../components/leads/Leadpage.css";
import Button from "../components/leads/Button";
import { IoMdPeople } from "react-icons/io";
import banner from "../assets/leads/bsnner.png";
function Leadpage() {
  const extractedData = [
    {
      title: "Launch or Expand Your Community Presence",
      description:
        "As a Uniques Community Ambassador, you have the chance to kickstart or enrich a student club at your university. Collaborate with university officials to establish a student club, gather a committed core team, and appoint a faculty advisor to offer guidance and assistance.",
    },
    {
      title: "Conduct Engaging Workshops",
      description:
        "Coordinate workshops within The Uniques Community to enrich student understanding of various developer products and platforms. These interactive workshops and events offer invaluable opportunities for students to learn and develop within a supportive peer-to-peer environment.",
    },
    {
      title: "Lead Project Development Initiatives",
      description:
        "Collaborate with local organizations to identify project opportunities and spearhead collective project development initiatives. By closely partnering with local entities, Uniques Community Ambassadors can facilitate impactful projects that benefit both students and the broader community.",
    },
  ];

  return (
    <>
      <h1 className="text-center heading m-4">The Uniques Community</h1>
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
      <div className="cards-div">
        <h1 className=" card-heading m-4 mb-10 text-center">
          What does a Ambassadors do?
        </h1>
        <div className="flex flex-wrap justify-evenly items-center">
          {extractedData.map((item, index) => {
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

      <div className="flex justify-center items-center ">
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
            <b className="w-[fit-content] text-lg">Expand Your Network - &nbsp; </b>
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
            <b className="w-[fit-content] text-lg">Community Empowerment - &nbsp; </b>
            <span>
              Benefit from dedicated support from The Uniques Community to
              bolster your efforts in educating and expanding the community,
              both online and offline. Access resources, guidance, and
              collaborative initiatives aimed at nurturing a vibrant and
              inclusive community ecosystem.
            </span>
          </div>
          <div className="my-4">Application open dates</div>
          <ul>
            <li>February 22, 2024 - India</li>
            <li>
              March 1, 2024 - North America, Europe, Pakistan, Middle East and
              North Africa, Sub-Saharan Africa, Turkey, Central Asia, and
              Caucasus
            </li>
            <li>
              April 1, 2024 - Australia, New Zealand, South Korea, Japan, ASEAN,
              Taiwan, and Hong Kong
            </li>
          </ul>

          <div className="my-4">Application open dates</div>
          <ul className="mb-4">
            <li>February 22, 2024 - India</li>
            <li>
              March 1, 2024 - North America, Europe, Pakistan, Middle East and
              North Africa, Sub-Saharan Africa, Turkey, Central Asia, and
              Caucasus
            </li>
            <li>
              April 1, 2024 - Australia, New Zealand, South Korea, Japan, ASEAN,
              Taiwan, and Hong Kong
            </li>
          </ul>
          <Button text="Apply now" />
        </div>
      </div>

      <div className="second-body text-center md:text-start">
        <div className="left-part">
          <h1>Community Guidelines</h1>
          <p>
            When you join our programs, you're joining a community. And like any
            growing community, a few ground rules about expected behavior are
            good for everyone. These guidelines cover both online (for example,
            mailing lists and social channels) and offline (for example,
            in-person meetups) behavior.
          </p>
          <p>
            Violations of this code of conduct can result in members being
            removed from the program. Use your best judgment, and if you'd like
            more clarity or have questions feel free to reach out.
          </p>
        </div>
        <div className="img-div">
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
}

export default Leadpage;
