import project4 from "../assets/projects/project-4.png";
import aqua_lab from "../assets/projects/Aqua_Lab.png";
import ct from "../assets/projects/customer_ticketing.png";
import maintenance from "../assets/projects/maintenance.png";

export const HERO_CONTENT = `I am a Backend Software Engineer at Appinventiv Technologies with 1.2+ years of experience in Node.js, NestJS, Express, and TypeScript.
I specialize in building scalable backend systems, working with PostgreSQL, MongoDB, Redis, Kafka, and RabbitMQ.
Passionate about clean code and performance optimization, I focus on delivering reliable and efficient server-side solutions.`;


export const ABOUT_TEXT = [
  "I am a Backend Software Engineer at Appinventiv Technologies with 1.2+ years of experience designing and developing scalable backend solutions. My core expertise includes Node.js, NestJS, Express.js, TypeScript, PostgreSQL, MongoDB, and Redis.",
  "I build maintainable REST APIs, optimize database queries, and develop reliable integrations across services. I have hands-on experience with TypeORM, Sequelize, Mongoose, Prisma, Redis caching, and event-driven architectures using Kafka and RabbitMQ.",
  "I am also exploring Go, Generative AI, and Retrieval-Augmented Generation (RAG), and use tools such as Claude and Cursor to improve development workflows while maintaining code quality and understanding.",
  "I enjoy learning by building projects and exploring new engineering approaches to create efficient, scalable, production-ready applications.",
];


export const EXPERIENCES = [
  {
    year: "Sep 2025 - Preset",
    role: "Software Engineer (Node Js)",
    company: "Appinventiv Pvt Ltd",
    description: `• Working as a Software Engineer at Appinventiv, building and maintaining backend services using Node.js, NestJS, TypeScript, and PostgreSQL across Quivio and Roso Travel.
                  • Developed and refactored 100+ REST APIs across Quivio’s CRM, Customer Ticketing, Aqua Lab, and Maintenance modules, focusing on performance, maintainability, and production reliability.
                  • Implemented Redis caching, SQL query optimization, RRule-based recurring assignment scheduling, and Keycloak-based RBAC for scalable, secure multi-tenant applications.
                  • Contributed to Roso Travel by developing 50+ admin and customer-facing APIs, integrating Kafka for booking and invoice workflows, and working on Elasticsearch-based keyword search across travel destinations and products.`,
    technologies: ["NodeJs", "NestJS", "Express", "TypeScript", "PostgreSQL", "Redis", "Kafka", "RabbitMQ", "MongoDB", "Grafana", "Cursor", "Claude", ],
  },
  {
    year: "Mar 2025 - Oct 2025",
    role: "Software Trainee (Node Js)",
    company: "Appinventiv Pvt Ltd",
    description: `• Received training and mentorship from senior team leads and architects in Node.js backend development and application architecture.
                  • Implemented role-based access control (RBAC) using Keycloak for the Quivio multi-tenant platform.
                  • Incorporated Customer Ticketing features with email and in-app notifications using Azure Event Hubs, and provided production support by debugging issues and resolving failures in existing features`,
    technologies: ["NodeJs", "NestJS", "Express", "TypeScript", "PostgreSQL", "Redis", "Kafka", "RabbitMQ", "MongoDB", "React", "Cursor"],
  },
  {
    year: "Mar 2024 - Apr 2024",
    role: "Web Developer Intern",
    company: "EY GDS- AICTE Internship",
    description: `• Designed and developed user interfaces for web applications using React.Js. 
                  • Worked closely with backend developers to integrate frontend components with Django APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Javascript", "Django", "ReactJs", "TailwindCSS"],
  }
];

export const PROJECTS = [
  {
    title: "E-commerce Microservices",
    image: "https://raw.githubusercontent.com/venkataravuri/e-commerce-microservices-sample/master/architecture.png",
    description: "A scalable e-commerce backend built using a microservices architecture with 8 independent services for product management, user authentication, shopping cart, order processing, inventory management, and payment workflows. Developed REST APIs using NestJS and TypeScript, with gRPC for synchronous inter-service communication and Kafka and RabbitMQ for asynchronous event-driven processing. Integrated Redis for caching to improve response times, MongoDB for data persistence, and Stripe for secure payment processing.",
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Kafka",
      "RabbitMQ",
      "gRPC",
      "Stripe",
      "Microservices",
      "REST APIs",
    ],
    link: "https://github.com/piyush8601/e-Commerce-Microservices",
    isInternal: false,
  },
  {
    title: "Quivio - Customer Ticketing Module",
    image: ct,
    description: "Developed backend services for customer ticket management, including ticket workflows and email and in-app notifications using Azure Event Hubs for event-driven communication. Added the ticket user and Admin comments with in-app and email notifications of the comments. Set-up cron-job for SLA of the tickets to mark outdated if the tickets are not resolved in specified time. Implemented Keycloak-based authentication and role-based authorization to secure access across the multi-tenant platform. Customer and Admin Side APIs and Notifications.",
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Azure Event Hubs",
      "Keycloak",
      "RBAC",
      "REST APIs",
    ],
    link: "",
    isInternal: true,
  },
  {
    title: "Quivio - Maintenance Module",
    image: maintenance,
    description:
      "Built backend functionality for maintenance assignments, recurring task scheduling, workflow automation, and checklist management. Implemented RRule-based scheduling for daily, weekly, and custom recurring assignments, with tenant-level data isolation and Keycloak-based authentication and role-based authorization.",
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "RRule",
      "Keycloak",
      "RBAC",
      "REST APIs",
    ],
    link: "",
    isInternal: true,
  },
  {
    title: "Quivio - Aqua Lab Module",
    image: aqua_lab,
    description:
      "Developed and maintained backend APIs for the Aqua Lab module within Quivio's multi-tenant SaaS platform. Optimized database interactions and supported existing production features while enforcing secure, role-based access through Keycloak authentication and authorization.",
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "Keycloak",
      "RBAC",
      "REST APIs",
    ],
    link: "",
    isInternal: true,
  },
  {
    title: "Zentry Game Website",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like user Authentication and Users Posts, Like & Unlike, and user profiles. It is mainly a backend Project I used EJS & Tailwind for Frontend.",
    technologies: ["EJS", "NodeJs", "Express", "MongoDB"],
    link: "https://zenith-fzxy4gzxs-piyush-guptas-projects-56081406.vercel.app/",
    isInternal: false,
  },
  {
    title: "Blog Website",
    image:
      "https://www.sitesaga.com/wp-content/uploads/2022/09/blog-site-examples.png",
    description:
      "A platform for creating and publishing blog posts, with features like user Authentication and Users Posts, Like & Unlike, and user profiles. It is mainly a backend Project I used EJS & Tailwind for Frontend.",
    technologies: ["EJS", "Node.js", "MongoDB", "TailwindCSS"],
    link: "https://github.com/piyush8601/scatch",
    isInternal: false,
  },
];

export const CONTACT = {
  address: "Noida, Uttar Pradesh, India",
  email: "piyushgupta8601@gmail.com",
};
