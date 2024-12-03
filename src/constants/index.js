import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Systems Administrator Intern",
    company: "ServiceNow Inc.",
    description: `I am currently learning from the course which is assigned to the interns for internship.
    I will update when I know what i have to do.`,
    technologies: ["Sql", "Systems Administration"],
  },
  {
    year: "Mar 2024 - Apr 2024",
    role: "Web Developer Intern",
    company: "EY GDS- AICTE Internship",
    description: `Designed and developed user interfaces for web applications using React.Js. Worked closely with backend developers to integrate frontend components with Django APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Javascript", "Django", "ReactJs"],
  },
  {
    year: "2023 - 2023",
    role: "Web Developer Intern",
    company: "Bharat Intern",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["HTML", "CSS", "Javascript",]
  },
  
];

export const PROJECTS = [
  {
    title: "Scatch: E-Commerce Platform",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["EJS", "Node.js", "MongoDB", "TailwindCSS"],
    link : "https://github.com/piyush8601/Scatch"
  },
  {
    title: "Zentry Game Website",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like user Authentication and Users Posts, Like & Unlike, and user profiles. It is mainly a backend Project I used EJS & Tailwind for Frontend.",
    technologies: ["EJS", "NodeJs", "Express", "MongoDB"],
    link : "https://zenith-fzxy4gzxs-piyush-guptas-projects-56081406.vercel.app/",
  },
  {
    title: "Amazon.com Frontend Clone with Animation",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Javascript", "GSAP"],
    link : "https://piyush8601.github.io/Amazon-Clone-Using-GSAP-HTML-CSS/"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link : "",
  },
  
];

export const CONTACT = {
  address: "Near Kiet Group Of Institutions, Ghaziabad",
  phoneNo: "+91 ************",
  email: "piyushgupta8601@gmail.com",
};
