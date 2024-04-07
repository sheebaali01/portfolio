import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Sheeba Ali",
  title: "Hi all, I'm Sheeba Ali",
  description:
    `Experienced Full Stack Developer with 2+ years of expertise in HTML, CSS, Bootstrap, Sass,JavaScript, jQuery, React.js, Vue.js, Node.js, PHP,
    Laravel, and MySQL. Proven track record in developing and maintaining robust web applications. Highly skilled in developing, testing, and
    debugging web applications. Seeking challenging opportunities to apply knowledge and contribute to the success of innovative projects.`,
  resumeLink: "https://sheebaali01.github.io/Resume/SheebaAli.pdf",
};

export const openSource = {
  githubUserName: "sheebaali01",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:sheebaali41998@gmail.com",
  linkedin: "https://www.linkedin.com/in/sheeba-ali-4a913119a",
  github: "https://github.com/sheebaali01",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/Animation1.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive website in Vue.js and React.js"),
        emoji("⚡ Building RESTful APIs in Nodejs, PHP and Laravel"),
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Vuejs",
          iconifyTag: "logos:vue",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "Laravel",
          iconifyTag: "logos:laravel",
        },
        {
          skillName: "MySQL",
          iconifyTag: "vscode-icons:file-type-mysql",
        },      
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "95", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Dawood University of Engeneering & Technology, Karachi",
    subHeader: "B.E in Computer System Engineering",
    duration: "2017 - 2021",
    desc: "",
    grade: "GPA 3.82",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Khursheed Government Girls College, Karachi",
    subHeader: "H.Sc in Pre-Engineering",
    duration: "2014 - 2016",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Akhtar Government Girls Secondary School, Karachi",
    subHeader: "S.Sc in Biology",
    duration: "2012 - 2014",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer",
    company: "Novus Altair",
    companyLogo: "/img/icons/common/novusaltair.png",
    date: "Oct 2021 - Present",
    desc: `Develop and maintain responsive web applications using HTML, CSS, Bootstrap, JavaScript, jQuery, Vue.js. Utilize Node.js and PHP, frameworks like Laravel, to build robust backend systems and RESTful APIs. Collaborate with cross-functional teams to translate business requirements into technical solutions. Perform thorough debugging and troubleshooting to identify and resolve issues in both frontend and backend code. Continuously enhance application performance and user experience through optimization techniques.`,
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Software Engineer Teacher",
    company: "Aptech Learning ",
    companyLogo: "/img/icons/common/aptech.png",
    date: "April 2021 - Oct 2021",
    desc: `Deliver comprehensive and engaging lectures on HTML, CSS, JavaScript, jQuery, Bootstrap, C++, Python, R language, and Microsoft Office. Design and develop curriculum materials, including lesson plans, assignments, and projects, to meet the educational objectives of the
    courses. Conduct hands-on workshops and coding exercises to reinforce theoretical concepts and enhance practical skills. Provide personalized guidance and support to students, assisting them with their projects and assignments. Foster a collaborative and supportive learning environment conducive to student success. Stay updated on the latest developments and trends in software engineering and incorporate relevant advancements into the curriculum.`,
  },
  {
    role: "Junior Web Developer",
    company: "Adot Worldwide Ltd ",
    companyLogo: "/img/icons/common/adot.png",
    date: "Sept 2020 - March 2021",
    desc: `Create html/css/javascript front end from wireframes or Photoshop compositions. Write code to achieve project specifications for new system functionality. Investigating and resolving issues and bugs.`,
  },
];

export const projects: ProjectType[] = [
  {
    name: "Web App | Novus Guard Pro",
    desc: `Novus Guard Pro presents a cutting-edge safety and security solution tailored for businesses seeking comprehensive protection measures. With a focus on enhancing employee safety and streamlining operational management, this robust system integrates advanced technologies to provide real-time tracking, lone worker protection, fleet management, and geo-fencing capabilities. I developed pivotal features like Job, Patrol, Bidding, and HR Modules, enhancing operational efficiency. Leveraging Laravel, Vue.js, Ajax, and
    Node.js, I created real-time functionalities including Live Officer Tracking and Chat Messaging using Socket.io, alongside developing APIs for mobile app integration.`,
    github: "",
    link: "https://app.novusguard.co.uk/administrator/login",
  },
  {
    name: "Web App | Novus Guard Sol",
    desc: `Novus guard solo, a comprehensive smartphone app ensuring user safety with emergency assistance, real-time tracking, and home
    automation features. It operates seamlessly offline, allowing users to trigger alarms, alert family members, emergency services, and the
    control room. Distress signals can be shared on WhatsApp and Twitter for widespread help. Spearheaded the development of key features including Session Module, Track Individual, Peer-to-peer Tracking, Recipient Alerts, and Home Intelligence System using Laravel, Vue.js, socket.io and Node.js.`,
    link: "https://solo.novusguard.co.uk/administrator/login",
  },
  {
    name: "Website & Web App | Custom eCommerece Management Web App & Website for Tookary",
    desc: "Tookary is an online grocery store that allows users to buy fresh vegetables, fruits, and other grocery items at wholesale rates. Tookary is an online bulk buying platform for bulk buyers and retail buyers to purchase bulk quantities at competitive prices. This platform was createdspecifically to enable households and businesses to purchase daily need products at wholesale prices. We are a startup and at this time we have entered the market with fresh vegetables. Soon you would see other products like fruits, meat, and other products on Tookary.",
    link: "https://tookary.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Sheeba Ali",
  description: greetings.description,
  author: "Sheeba Ali",
  // image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  // url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Sheeba",
    "Sheeba Ali",
    "Portfolio",
    "Sheeba Portfolio ",
    "Sheeba Ali Portfolio",
  ],
};
