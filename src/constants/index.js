
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  powerbi,
  java,
  python,
  
  data,
  aiml,
  iot,
  git,
  html,
  javascript,
  mongodb,
  
  reactjs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
   {
    name: "data",
    icon: data,
  },
  
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "iot",
    icon: iot,
  },
  {
    name: "aiml",
    icon: aiml,
  },
  {
    name: "Power Bi",
    icon: powerbi,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Student Intern",
    company_name: "NOVITECH R&D Pvt ltd.",
    icon: tekisky,
    iconBg: "#383E56",
    date: "08/2024 - 09/2024",
    points: [
      "Gathered data for market research projects in AI and analyzed findings to make recommendations using Data Science.",
      "Collaborated with team members to create a comprehensive social media strategy.",
      "Contributed ideas during brainstorming sessions to generate creative solutions.",
      "Developed and implemented communications strategies for various projects.",
    ],
  },
  {
    title: "Student Intern",
    company_name: "Oasis Infobyte",
    //icon: tekisky,
    iconBg: "#383E56",
    date: "10/2024 - 11/2024,",
    points: [
      "Application Development",
      "Developed user-oriented applications with a focus on system efficiency and modularity.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Fire Alarm–Based Obstacle Avoiding Robot",
    description:
      "The project aimed to develop a fire alarm-based obstacle-avoiding and Bluetooth-controlled robot. The robot is designed to detect fires, navigate its environment while avoiding obstacles, and be controlled remotely via Bluetooth.",
    tags: [
      {
        name: "Adruino",
        color: "blue-text-gradient",
      },
      {
        name: "Bluetooth",
        color: "blue-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Smart Energy integrated with Home Automation",
    description:
      "Home Automation Systems (HAS) gained popularity due to communication technology advancement. Smart home is one of the Internet of Things (IoT)applications that facilitates the control of home appliances over the Internet using automation systems.",
    tags: [
      {
        name: "ESP8266",
        color: "blue-text-gradient",
      },
      {
        name: "BlinkIot",
        color: "blue-text-gradient",
      },
      
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gradelix",
    description:"Gradelix is a robust and scalable web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) aimed at automating and enhancing the academic result analysis process in educational institutions",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
