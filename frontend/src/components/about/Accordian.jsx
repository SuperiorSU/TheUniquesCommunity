import React , {useState} from "react";
import { FaAngleDown } from "react-icons/fa6";

const Accordian = () => {
    const [toggle, setToggle] = useState('');

    const handleToggle = (index) => {
        if(toggle === index) {
            return setToggle('');
        }
        setToggle(index);
    }

    const data = [
        {
            title: 'Who should join Google Developer Student Clubs?',
            content: 'College and university students are encouraged to join Google Developer Student Clubs.',
            subContent: null
        },
        {
            title: 'Can I join multiple chapters?',
            content: 'You can participate in events organized by multiple chapters, however if you decide to dedicate yourself to become a GDSC Lead or Core Team Member, you will be officially assigned to one chapter.',
            subContent: null
        },
        {
            title: 'What does a GDSC lead do?',
            content: "In general, GDSC leaders are focused on the following areas:",
            subContent: [
                'Start a club - Work with your university or college to start a student club. Select a core team and faculty advisor to support.',
                'Host workshops - Grow student knowledge on developer products and platforms through hands-on workshops and events.',
                'Build projects - Identify local partners to work with and lead project building activities.'
            ]
        },
        {
            title: 'Who can lead a club?',
            content: "There are a few things we look for when selecting club leaders. If you fit this description, we welcome your application.",
            subContent: [
                'Students who are at least 18 years old.',
                'A minimum of one year left until graduation.',
                'Enrollment in an undergraduate or graduate program at a college or university.',
                'Can commit to the program for one year.',
                'Passionate about creating impact in their community.',
                'Strong technical understanding of computer programming and/or software engineering.',
                'Experience with event planning or leading a team.',
                'Some connection to the local developer community.',
                'Available to host an event ideally once a month, and at least every 3 months.',
            ]
        },
        {
            title: 'How do I apply to become a club leader?',
            content: "There are a few steps you need to take to apply to be an organizer.",
            subContent: [
                'See if there’s a current Google Developer Student Club on your campus or near you. We encourage you to participate or even help organize an event to gain practical experience!',
                'Read the community guidelines.',
                'Submit your GDSC Lead application.',
                "We'll review your submission and get back to you via email as soon as possible.",
            ]
        },
        {
            title: 'What are the benefits of becoming a GDSC lead?',
            content: "There are a few steps you need to take to apply to be an organizer.",
            subContent: [
                'Professional growth - Access to community management training and technical knowledge to help you be a stronger leader, and receive invitations to select Google events.',
                'Network growth - Access to a global network of student leaders, professional community organizers, industry experts, and Googlers to gain mentorship and share knowledge.',
                'Community learning - Dedicated support to help educate and expand your community online and in-person.',
            ]
        },
        {
            title: 'What is the time commitment?',
            content: "GDSC Leads should be available to run an event ideally once a month, and at least every three months to remain an active GDSC chapter. Additionally, running a GDSC is a one year commitment.",
            subContent: null
        },
        {
            title: 'What is the timeline for applying for the GDSC Lead position?',
            content: "We accept applications once per year, between April and August. Please follow this page for the new deadlines and the GDSC events platform to check current chapters.",
            subContent: null
        },
    ]

  return (
    <div className="mt-10 mb-10 md:px-7 flex justify-center items-center">
      <div className="w-full px-9">
        <h2 className="font-semibold text-3xl mb-5">FAQs</h2>
        {
            data.map((item, index) => {
                return (
                    <div key={index} className="border-b mb-3">
                        <div onClick={() => handleToggle(index)}  className="flex justify-between gap-4 cursor-pointer items-center">
                            <h1 className="text-[12px] py-2 text-[#ca0019] font-medium">{item.title}</h1>
                            <div className="cursor-pointer" >
                                <FaAngleDown className={`transform ${toggle === index ? 'rotate-180' : ''} duration-300`} />
                            </div>
                        </div>
                        {
                            toggle === index && (
                                <div className="mt-1 mb-3 text-[11px]">
                                    <p>{item.content}</p>
                                    {
                                        item.subContent && (
                                            <ul className="list-disc ml-5 mt-2">
                                                {
                                                    item.subContent.map((subItem, subIndex) => {
                                                        return (
                                                            <li key={subIndex} className="my-[5px]">{subItem}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                )
            })
        }
        
      </div>
    </div>
  );
};

export default Accordian;
