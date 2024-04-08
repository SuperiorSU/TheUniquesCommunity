import './App.css';
import Foot from './components/about/Foot';
import CommGuide from './pages/CommGuide';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/about/Navbar';
import Clubs from './pages/Clubs';
import About from './pages/About';
import Leadpage from './pages/Leadpage';
import Ambassador from './pages/Ambassador';
import MemberRequests from './pages/MemberRequests';
import EventForm from './pages/EventForm';
import EventList from './pages/EventList';
import Event from './pages/Event';
import Campus from './pages/Campus';

import sm from './mantra logo.png'

function App() {

  const event = [
    {
      id:4,
      chapter: "The Uniques | SVIET",
      headerImage: "https://media.licdn.com/dms/image/D5622AQEEj3rY4VRJYA/feedshare-shrink_2048_1536/0/1711181295676?e=1715212800&v=beta&t=biU5tSaDzVZaV1pV-xeNvlSmvUY9ZilyuZ1C0ZLtnT8",
      logo: "https://media.licdn.com/dms/image/D4E22AQHG3lpve4KsoA/feedshare-shrink_1280/0/1710927341125?e=1715212800&v=beta&t=3Xj3TaewuFj1Lgo7luHp8duirsCX7vLgiDmUjg2uQFw",
      name: "Global Future Submit 2024",
      date: "23rd March 2024",
      venue: "SVIET Auditorium",
      overview: "the Global Future Summit 2024, featuring a dynamic panel discussion led by HR experts and industry leaders on the latest technology trends. Gain insights into the future of work, innovation, and talent development. Explore how cutting-edge technologies are reshaping industries and workforce dynamics. Don't miss this opportunity to be part of shaping the global future!",
      speakers: [
        {
          id: 2,
          image: "https://gdgchandigarh.com/assets/organizers/Pranav.png",
          name: "Pranav Kumar",
          company: "Nagarro",
          designation: "Sen. Engineerr",
          profile: "",
          twitter: "https://twitter.com/hifiveyatin",
          linkedin: "https://www.linkedin.com/in/hifiveyatin/",
          bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },
        {
          id: 2,
          image: "https://media.licdn.com/dms/image/D4D03AQHFVnHYuXhvyA/profile-displayphoto-shrink_100_100/0/1698305288670?e=1718236800&v=beta&t=82odK-drFsH8AENFN2sTy4FzPWQ3hdGoSYsbIgjXGW4",
          name: "Harsh Logani",
          company: "Escalon",
          designation: "Manager HR",
          profile: "",
          twitter: "https://twitter.com/hifiveyatin",
          linkedin: "https://www.linkedin.com/in/hifiveyatin/",
          bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },
        {
          id: 3,
          image: "https://media.licdn.com/dms/image/D4D03AQEu2auoBqUR9Q/profile-displayphoto-shrink_200_200/0/1698170865921?e=1718236800&v=beta&t=vKfPqW_uohrQ6G5AqNV156yxBnwD2H428_IZgD2JXBg",
          name: "Deepti Negi",
          company: "Spectraforce",
          designation: "Sr. Manager- Human Resource",
          profile: "",
          twitter: "https://twitter.com/hifiveyatin",
          linkedin: "https://www.linkedin.com/in/hifiveyatin/",
          bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },
        {
          id: 4,
          image: "https://media.licdn.com/dms/image/D5622AQFSFhSWiUAXsg/feedshare-shrink_800/0/1711901764902?e=1715212800&v=beta&t=NiHczE9QKX2iIDVQAQS8ZMzc59pC7uSroTbPN51IZYs",
          name: "Amrita Kapoor Bedi",
          company: "IDS Infotech",
          designation: "Manager: Human Resource",
          profile: "",
          twitter: "https://twitter.com/hifiveyatin",
          linkedin: "https://www.linkedin.com/in/hifiveyatin/",
          bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },
        {
          id: 5,
          image: "https://media.licdn.com/dms/image/D4D22AQHMaanrcPLg3g/feedshare-shrink_800/0/1699630250098?e=1715212800&v=beta&t=tZEbmNtA_SOj0EmiP9p7ZT_IqGPfux5hi3TJRAxUzA0",
          name: "Sumit Bhatia",
          company: "Oswal Grouph",
          designation: "Senior Manager",
          profile: "",
          twitter: "https://twitter.com/hifiveyatin",
          linkedin: "https://www.linkedin.com/in/hifiveyatin/",
          bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },
        {
          id: 6,
          image: "https://media.licdn.com/dms/image/D4D03AQHQsjc2d9IymQ/profile-displayphoto-shrink_100_100/0/1681669561450?e=1718236800&v=beta&t=6dmH47v_y8gFiOkL4V1lhxG24Svk4hYa7CbMkjq6MYo",
          name: "Twinkle Mehta",
          company: "Accenture",
          designation: "Senior Analyst",
          profile: "",
          twitter: "https://twitter.com/hifiveyatin",
          linkedin: "https://www.linkedin.com/in/hifiveyatin/",
          bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },
        {
          id: 7,
          image: "https://media.licdn.com/dms/image/C4D03AQGyzHTa0xbo1A/profile-displayphoto-shrink_100_100/0/1516550942001?e=1718236800&v=beta&t=cM0MB-UVkizKjn5iyJnL8BCg7sM9kyK2ue-ii_r16Fg",
          name: "Sanjeev Demra",
          company: "Infosys",
          designation: "Delivery Management",
          profile: "",
          twitter: "https://twitter.com/hifiveyatin",
          linkedin: "https://www.linkedin.com/in/hifiveyatin/",
          bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },
        {
          id: 8,
          image: "https://media.licdn.com/dms/image/C5103AQGxlwvs8kNCSA/profile-displayphoto-shrink_100_100/0/1517276431954?e=1718236800&v=beta&t=Xv3n7DHKFTTcSshQdMEKY28l4IqHZmuXgy5J2i5BsYc",
          name: "Sanjeev Demra",
          company: "Infosys",
          designation: "Principal Technology Architect",
          profile: "",
          twitter: "https://twitter.com/hifiveyatin",
          linkedin: "https://www.linkedin.com/in/hifiveyatin/",
          bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },
        {
          id: 9,
          image: "https://media.licdn.com/dms/image/C4D22AQF7gf40J2DeAQ/feedshare-shrink_800/0/1673247515620?e=1715212800&v=beta&t=hxiOe-7GEj5arQdzVvGl42bRr6I3wIRsdJ6vOs-NLGs",
          name: "Shallu Narula",
          company: "Creative Hatti",
          designation: "Founder",
          profile: "",
          twitter: "https://twitter.com/hifiveyatin",
          linkedin: "https://www.linkedin.com/in/hifiveyatin/",
          bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },
        {
          id: 11,
          image: "https://media.licdn.com/dms/image/C5603AQFNf6_AhIRAsg/profile-displayphoto-shrink_100_100/0/1516442918229?e=1718236800&v=beta&t=N2VuTZ9TrOe4mGzpJml-hU4Xk4phXTzPLxSBZNjnKss",
          name: "Yamini Mehta",
          company: "Grazitti Interactive",
          designation: "HR Head",
          profile: "",
          twitter: "https://twitter.com/hifiveyatin",
          linkedin: "https://www.linkedin.com/in/hifiveyatin/",
          bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },

      ],
      eventType: [
        "Ideathon", "HR Session", "Industrial Panel",
        "AI/ML",
        "Summit",
        "Solution Challenge",
      ],
      guest_type: "Chief Guest",
      partners: [
        "https://sviet.ac.in/wp-content/uploads/2021/08/svietlogooo-1-400x83.png",
        "https://tse3.mm.bing.net/th?id=OIP.T5dL6Z8d1-ElueVdCzdipAHaEK&pid=Api&P=0&h=220",
        "https://up.yimg.com/ib/th?id=OIP.qhAPWvYnIyuJMR-rdUWrJgHaEK&%3Bpid=Api&rs=1&c=1&qlt=95&w=203&h=114","https://1000logos.net/wp-content/uploads/2020/08/Logo-Infosys-1024x640.jpg","https://tse1.mm.bing.net/th?id=OIP.YPQMM0nCBfk8-Y77Cw5LvAHaHa&pid=Api&P=0&h=220","https://tse2.mm.bing.net/th?id=OIP.b94pLdM9jhCGyKruL9CL8wAAAA&pid=Api&P=0&h=220","https://s3.amazonaws.com/handshake.production/app/public/assets/institutions/179905/cover/hs-emp-branding-image-data.?1501078107", "https://media.glassdoor.com/sqll/353722/ids-infotech-limited-squarelogo-1503985023634.png" ,"https://tse2.mm.bing.net/th?id=OIP.j3mxZxVy_u1U8gWHVGV24AHaBM&pid=Api&P=0&h=220"

        
      ]
    },
    {
      id:5,
      chapter: "The Uniques | SVIET",
      headerImage: "https://media.licdn.com/dms/image/D4D22AQEL6ULQQjmG6A/feedshare-shrink_2048_1536/0/1698642601892?e=1715212800&v=beta&t=_2O83ldmUbezl9BKWB342FaqhWalhWZPeTA_9BBRyN0",
      logo: "https://google-ideate-ideathon.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fe42010dbd6fd4e8ba4686665f50e7a64%2Fassets%2Ffavicon%2F76.jpeg&w=768&q=75",
      name: "Google Ideate Ideathon",
      date: "17 February 2024",
      venue: "SVIET Campus",
      overview: "Gear up for the Google Ideate Ideathon 2024! Join us in showcasing innovative ideas that push the boundaries of technology. Collaborate with like-minded individuals, present your groundbreaking concepts, and vie for recognition. Unleash your creativity and be part of shaping the future. Don't miss this chance to make your mark on the world of innovation!",
      speakers: [
          {
              id: 1,
              image: "https://media.licdn.com/dms/image/D5603AQEVP9NUGo4_6g/profile-displayphoto-shrink_200_200/0/1708107118265?e=1718236800&v=beta&t=eYMDWLyYegqsi3zo1fw0S4CytI57G5N-_HFIGCBNg8E",
              name: "Gaurav Mahipal",
              company: "Veritos InfoSolutions Pvt Ltd",
              designation: "Managing Director",
              profile: "",
              twitter: "https://twitter.com/cammykamal",
              linkedin: "https://www.linkedin.com/in/kamal-vaid/",
              bio: "Kamal loves to work and explore Android. Working as Technology Lead with 8+ years of experience, he believes in the theory of sharing whatever you have learnt from everywhere. He is a blogger and write whenever he feel he has learnt something new and that needs to be shared. He is fond of Cars and Bikes, and spend his free time in riding."
          },
          {
              id: 2,
              image: "https://media.licdn.com/dms/image/C5603AQHf7VJG-0wVug/profile-displayphoto-shrink_800_800/0/1644000811499?e=1718236800&v=beta&t=Q5foIfAxuxeIMLbyGskDzoV1i6Ic3BMGBJeIwgZkNwQ",
              name: "Harish Kumar",
              company: "Paras Technologies",
              designation: "Founder & CEO",
              profile: "",
              twitter: "https://twitter.com/hifiveyatin",
              linkedin: "https://www.linkedin.com/in/hifiveyatin/",
              bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
          },
          {
              id: 3,
              image: "https://media.licdn.com/dms/image/D5603AQGV5uzbY5cT_Q/profile-displayphoto-shrink_800_800/0/1686818441933?e=1718236800&v=beta&t=1BCENIx2Jf08IuwIqE8D_a2dJs3wBulvvO-N1UvyGLg",
              name: "Arun Kumar",
              company: "Tech Exponent System",
              designation: "Director",
              profile: "",
              twitter: "https://twitter.com/loveleen_nancy",
              linkedin: "https://www.linkedin.com/in/loveleen-kaur/",

              bio: "Loveleen Kaur, a bundle of positivity and happiness, this tech-savvy girl loves mountains and works wonders with technology. She is currently working as an Senior Android Developer with 5 years of experience. She is Co-Organizer of GDG Chandigarh, WTM Ambassador and Google Android Educator. Hailing from the technology field, she loves logic, but also has a passion for creativity. In her free time, She loves to mentor people to help them learn and grow in their career."
          },

      ],
      eventType: [
          "Ideathon", "Tech Talk", "AI",
          "Android",
          "Cloud",
          "Machine Learning",
          "Mobile",
          "Web",
          "Women Techmakers"
      ],
      guest_type: "Judge",
      partners: [
        "https://www.drupal.org/files/infosys-logo-PNG.png",
        "https://media.licdn.com/dms/image/D4D0BAQFJ_9CR1sASHw/company-logo_200_200/0/1687872437902/seed_global_education_logo?e=2147483647&v=beta&t=B4A_7P3Iow5sR8aSbnm-l_XC-px6Q6IwmlKjvAQvbUU",
        "https://www.finlatics.com/landing/img/brand.png",
        ]
  },
    {
      id:0,
      chapter: "The Uniques | SVIET",
      headerImage: "https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-goog/event_wrapup/DSC05771.JPG",
      logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Bevy%20Thumbnail_3yFLs9d.png",
      name: "Google I/O Extended 2023",
      date: "27th May 2023",
      venue: "SVIET Auditorium",
      overview: "Google Developers Group Chandigarh(GDG Chandigarh) is back with its most awaited event of the year, Google IO Extended Chandigarh ‘23. Join us for a day of learning, networking, and fun at Google Cloud Community Day at SVIET (Swami Vivekanand Institute of Engineering & Technology) on 27th May 2023! Google I/O Extended is a series of community-led tech meetups that bring the knowledge and excitement of Google I/O to developers on a city level, all around the globe. Google I/O Extended events are typically held in the days leading up to or following Google I/O, and they feature a variety of talks, workshops, and activities related to Google's latest developer products and technologies. Google I/O Extended events are a great opportunity for developers to learn about the latest Google technologies, to network with other developers, and to get help and support from Google experts. If you're a developer who is interested in learning more about Google's latest technologies, I encourage you to be a part of this great event.",
      speakers: [
        {
          id: 1,
          image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-goog/events/Copy%2520of%2520WTM%2520IWD%25202024%2520-%2520Profile%2520Avatar%2520%25282%2529.jpg",
          name: "Loveleen Kaur",
          company: "Astrotalk",
          designation: "Senior Software Engineer",
          profile: "",
          twitter: "https://twitter.com/cammykamal",
          linkedin: "https://www.linkedin.com/in/kamal-vaid/",
          bio: "Kamal loves to work and explore Android. Working as Technology Lead with 8+ years of experience, he believes in the theory of sharing whatever you have learnt from everywhere. He is a blogger and write whenever he feel he has learnt something new and that needs to be shared. He is fond of Cars and Bikes, and spend his free time in riding."
        },
        {
          id: 2,
          image: "https://gdgchandigarh.com/assets/organizers/Pranav.png",
          name: "Pranav Kumar",
          company: "Nagarro",
          designation: "Sen. Engineerr",
          profile: "",
          twitter: "https://twitter.com/hifiveyatin",
          linkedin: "https://www.linkedin.com/in/hifiveyatin/",
          bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },
        {
          id: 3,
          image: "https://gdgchandigarh.com/assets/organizers/Aashi.jpeg",
          name: "Aashi Dutt",
          company: "MedEnGauge Healthcare Pvt Ltd",
          designation: "Co-Founderr",
          profile: "",
          twitter: "https://twitter.com/loveleen_nancy",
          linkedin: "https://www.linkedin.com/in/loveleen-kaur/",

          bio: "Loveleen Kaur, a bundle of positivity and happiness, this tech-savvy girl loves mountains and works wonders with technology. She is currently working as an Senior Android Developer with 5 years of experience. She is Co-Organizer of GDG Chandigarh, WTM Ambassador and Google Android Educator. Hailing from the technology field, she loves logic, but also has a passion for creativity. In her free time, She loves to mentor people to help them learn and grow in their career."
        },
        {
          id: 4,
          image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/WhatsApp%2520Image%25202023-08-04%2520at%252017.32.11.jpeg",
          name: "Nitin Tiwari",
          company: "LTIMindtree",
          designation: "Software Engineerr",
          profile: "",
          linkedin: "https://www.linkedin.com/in/pranav-kumar-verma/",
          twitter: "https://twitter.com/prnvkmr954",
          bio: "Pranav is a Senior Engineer by profession having 6.7 years of experience in corporate field. He loves programming and developing games. He states that learning is a process that never stops, even if you are old enough, there will be things that you can still learn. His hobbies are reading books playing games."
        },
        {
          id: 5,
          image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/WhatsApp%2520Image%25202023-05-23%2520at%25205.28.55%2520PM%2520%25282%2529.jpeg",
          name: "Kartik Derasari",
          company: "Google Cloud",
          designation: "Google Cloud Expert",
          profile: "",
          twitter: "https://twitter.com/CherishSantoshi",
          linkedin: "https://www.linkedin.com/in/cherishsantoshi/",
          bio: "An experienced Program Manager currently managing programs for 5 million developers across the globe. I'm passionate about building and scaling tech-communities and promoting technical education."
        },

      ],
      eventType: [
        "Speaker Session", "Tech Talk", "AI",
        "Android",
        "Cloud",
        "Machine Learning",
        "Mobile",
        "Web",
        "Women Techmakers"
      ],
      guest_type: "Speaker",
      partners: [
        "https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_QmPdj9K.svg",
        "https://gdgchandigarh.com/assets/Brand/CommunityPartners/tfug.jpg",
        "https://gdgchandigarh.com/assets/Brand/CommunityPartners/KUG.jpg",
        "https://gdgchandigarh.com/assets/Brand/CommunityPartners/allevents.jpg"
      ]
    },
    {
      id:1,
      chapter: "The Uniques | SVIET",
      headerImage: "https://media.licdn.com/dms/image/D4D22AQEL6ULQQjmG6A/feedshare-shrink_2048_1536/0/1698642601892?e=1715212800&v=beta&t=_2O83ldmUbezl9BKWB342FaqhWalhWZPeTA_9BBRyN0",
      logo: "https://assets.devfolio.co/hackathons/d111a298717f42e0b647027976e265b0/assets/cover/87.jpeg",
      name: "Bharat TechXperience Hackathon",
      date: "28-29 October 2023",
      venue: "SVIET Campus",
      overview: " A dynamic two-day event fostering innovation and collaboration among tech enthusiasts nationwide. Join us for an immersive journey of coding, problem-solving, and creativity to shape the future of technology in India. Unleash your potential and make an impact",
      speakers: [
        {
          id: 1,
          image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-goog/events/Copy%2520of%2520WTM%2520IWD%25202024%2520-%2520Profile%2520Avatar%2520%25282%2529.jpg",
          name: "Loveleen Kaur",
          company: "Astrotalk",
          designation: "Senior Software Engineer",
          profile: "",
          twitter: "https://twitter.com/cammykamal",
          linkedin: "https://www.linkedin.com/in/kamal-vaid/",
          bio: "Kamal loves to work and explore Android. Working as Technology Lead with 8+ years of experience, he believes in the theory of sharing whatever you have learnt from everywhere. He is a blogger and write whenever he feel he has learnt something new and that needs to be shared. He is fond of Cars and Bikes, and spend his free time in riding."
        },
        {
          id: 2,
          image: "https://gdgchandigarh.com/assets/organizers/Pranav.png",
          name: "Pranav Kumar",
          company: "Nagarro",
          designation: "Sen. Engineerr",
          profile: "",
          twitter: "https://twitter.com/hifiveyatin",
          linkedin: "https://www.linkedin.com/in/hifiveyatin/",
          bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },
        {
          id: 3,
          image: "https://gdgchandigarh.com/assets/organizers/Aashi.jpeg",
          name: "Aashi Dutt",
          company: "MedEnGauge Healthcare Pvt Ltd",
          designation: "Co-Founderr",
          profile: "",
          twitter: "https://twitter.com/loveleen_nancy",
          linkedin: "https://www.linkedin.com/in/loveleen-kaur/",

          bio: "Loveleen Kaur, a bundle of positivity and happiness, this tech-savvy girl loves mountains and works wonders with technology. She is currently working as an Senior Android Developer with 5 years of experience. She is Co-Organizer of GDG Chandigarh, WTM Ambassador and Google Android Educator. Hailing from the technology field, she loves logic, but also has a passion for creativity. In her free time, She loves to mentor people to help them learn and grow in their career."
        },
        {
          id: 4,
          image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/WhatsApp%2520Image%25202023-08-04%2520at%252017.32.11.jpeg",
          name: "Nitin Tiwari",
          company: "LTIMindtree",
          designation: "Software Engineerr",
          profile: "",
          linkedin: "https://www.linkedin.com/in/pranav-kumar-verma/",
          twitter: "https://twitter.com/prnvkmr954",
          bio: "Pranav is a Senior Engineer by profession having 6.7 years of experience in corporate field. He loves programming and developing games. He states that learning is a process that never stops, even if you are old enough, there will be things that you can still learn. His hobbies are reading books playing games."
        },
        {
          id: 5,
          image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/WhatsApp%2520Image%25202023-05-23%2520at%25205.28.55%2520PM%2520%25282%2529.jpeg",
          name: "Kartik Derasari",
          company: "Google Cloud",
          designation: "Google Cloud Expert",
          profile: "",
          twitter: "https://twitter.com/CherishSantoshi",
          linkedin: "https://www.linkedin.com/in/cherishsantoshi/",
          bio: "An experienced Program Manager currently managing programs for 5 million developers across the globe. I'm passionate about building and scaling tech-communities and promoting technical education."
        },

      ],
      eventType: [
        "Speaker Session", "Tech Talk", "AI",
        "Android",
        "Cloud",
        "Machine Learning",
        "Mobile",
        "Web",
        "Women Techmakers"
      ],
      guest_type: "Judge",
      partners: [
        "https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_QmPdj9K.svg",
        "https://gdgchandigarh.com/assets/Brand/CommunityPartners/tfug.jpg",
        "https://gdgchandigarh.com/assets/Brand/CommunityPartners/KUG.jpg",
        "https://gdgchandigarh.com/assets/Brand/CommunityPartners/allevents.jpg"
      ]
    },
    {
      id:2,
      chapter: "The Uniques | SVIET",
      headerImage: "https://pbs.twimg.com/media/FqSl9vhaAAE0Vlu?format=jpg&name=4096x4096",
      logo: sm,
      name: "Success Mantra",
      date: "March 03, 2023",
      venue: "SVIET Campus",
      overview: " The CEO/Founder of #ChaiThela, Mr. Pankaj Judge, shared his life-changing journey during Talk Show: Success Mantra, as a way to enhance the entrepreneurship skills of our students. His journey helps students understand what it takes to be successful. An inspiring session on Success Mantra with Mr. Pankaj Judge, the visionary founder of Chai Thela. Learn firsthand from his journey of turning a humble chai stall into a thriving business empire. Discover the secrets behind his success and gain valuable insights to fuel your own entrepreneurial endeavors. Don't miss this opportunity to unlock the keys to success!",
      speakers: [
        {
          id: 1,
          image: "https://tse1.mm.bing.net/th?id=OIP.kqSfv6D6R9Fw6DcN_mCppgAAAA&pid=Api&P=0&h=220",
          name: "Pankaj Judge",
          company: "Chai Thela",
          designation: "CEO",
          profile: "",
          twitter: "https://twitter.com/cammykamal",
          linkedin: "https://www.linkedin.com/in/kamal-vaid/",
          bio: "Kamal loves to work and explore Android. Working as Technology Lead with 8+ years of experience, he believes in the theory of sharing whatever you have learnt from everywhere. He is a blogger and write whenever he feel he has learnt something new and that needs to be shared. He is fond of Cars and Bikes, and spend his free time in riding."
        }

      ],
      eventType: [
        "Speaker Session", "Tech Talk", "AI",
        "Android",
        "Cloud",
        "Machine Learning",
        "Mobile",
        "Web",
        "Women Techmakers"
      ],
      guest_type: "Chief Guest",
      partners: [
        "https://sviet.ac.in/wp-content/uploads/2021/08/svietlogooo-1-400x83.png",
        "http://chaithela.com/images/logo.png"
      ]
    },
    {
      id:3,
      chapter: "The Uniques | SVIET",
      headerImage: "https://pranav-s-portfolio.web.app/assets/events/Workshops/SVIET/img1.jpg",
      logo: "https://www.gstatic.com/images/branding/product/2x/firebase_64dp.png",
      name: "Expert Talk on Firebase",
      date: "13th April 2023",
      venue: "U-Zone",
      overview: "An expert talk by Pranav Kumar Verma on Firebase. Explore the power of Firebase with insights from Pranav, an experienced developer. Learn how to leverage its features for seamless app development and real-time data synchronization. Don't miss this chance to level up your Firebase skills!",
      speakers: [
        {
          id: 2,
          image: "https://gdgchandigarh.com/assets/organizers/Pranav.png",
          name: "Pranav Kumar",
          company: "Nagarro",
          designation: "Sen. Engineerr",
          profile: "",
          twitter: "https://twitter.com/hifiveyatin",
          linkedin: "https://www.linkedin.com/in/hifiveyatin/",
          bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },

      ],
      eventType: [
        "Speaker Session", "Tech Talk", "AI",
        "Android",
        "Cloud",
        "Machine Learning",
        "Mobile",
        "Web",
        "Women Techmakers"
      ],
      guest_type: "Chief Guest",
      partners: [
        "https://sviet.ac.in/wp-content/uploads/2021/08/svietlogooo-1-400x83.png",
        "https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_QmPdj9K.svg"
      ]
    },
  ]

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Foot />
      </div>
    )
  }

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <About />
        },
        {
          path: '/clubs',
          element: <Clubs event={event} />

        },
        {
          path: '/communityguidelines',
          element: <CommGuide />
        },
        {
          path: '/leads',
          element: <Leadpage />
        },
        {
          path: '/campus-ambassador',
          element: <Ambassador />
        },
        {
          path: '/campus-ambassador/member-request',
          element: <MemberRequests />
        },
        {
          path: '/campus-ambassador/create-event',
          element: <EventForm />
        },
        {
          path: '/campus-ambassador/event-list',
          element: <EventList />
        },
        {
          path: '/campus-ambassador/event/:id',
          element: <Event events={event} />
        },
        {
          path: '/chapter',
          element: <Campus event={event} />
        },
      ]
    }
  ]
  )


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
