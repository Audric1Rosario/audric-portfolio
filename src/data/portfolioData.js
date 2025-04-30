import {
  faReact,
  faDocker,
  faPython,
  faTrello,
} from "@fortawesome/free-brands-svg-icons";

export const languages = [
  "Python",
  "Java",
  "Javascript",
  "Typescript",
  "SQL",
  "C#",
  "C++",
  "C",
];
export const expertise = [
  {
    id: 1,
    name: "Full Stack Web Development",
    icon: faReact,
    description:
      "Proven ability to lead web application creation from concept to deployment, leveraging modern technologies like React and Spring Boot with strong SDLC proficiency.",
    skillset: [
      "Spring Boot",
      "FastAPI",
      "Flask",
      "Javalin",
      "React",
      "Firebase",
      "HTML5",
      "CSS3",
      "SASS",
      "Postman",
    ],
  },
  {
    id: 2,
    name: "Data Science & GenAI/LLM",
    icon: faPython,
    description:
      "I drive insights and process improvements by developing data science projects from scratch, training models with TensorFlow and Scikit-Learn, and integrating GenAI solutions.",
    skillset: [
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "MySQL",
      "Tableau",
      "Streamlit",
      "Apache Airflow",
      "OpenAI",
      "HuggingFace",
    ],
  },
  {
    id: 3,
    name: "DevOps & Automation",
    icon: faDocker,
    description:
      "By designing and implementing robust CI/CD pipelines within well-structured DevOps environments, I ensure the automated and successful deployment of solutions.",
    skillset: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Snowflake",
      "AWS",
      "Pandas",
      "Selenium",
    ],
  },
  {
    id: 4,
    name: "Teamwork & Leadership",
    icon: faTrello,
    description:
      "Experienced in leading and collaborating with development teams using Agile and Scrum, fostering collaboration and continuous value delivery.",
    skillset: ["Jira", "Trello", "YouTrack"],
  },
];

export const careerHistory = [
  {
    id: 1,
    company: "Engineering and Service Technological E&ST",
    position: "Software Engineer",
    startDate: new Date(2022, 2, 1),
    endDate: null,
    achievements: [
      "Contributed as a Full-Stack Web Developer",
      "Designed user interfaces",
      "Developed functionalities leveraging the company's microservices architecture",
      "Enhanced data utilization",
      "Actively participated in production deployments",
    ],
  },
  {
    id: 2,
    company: "Dominican BPO ",
    position: "Developer",
    startDate: new Date(2018, 5, 1),
    endDate: new Date(2018, 9, 10),
    achievements: [
      "Collaborated with the IT team on the development of the company website",
      "Automated the power system to enable IoT-based electrical monitoring",
    ],
  },
];

import tutorImg from "../assets/images/mock-tutor.png";
import eventImg from "../assets/images/mock-event.png";
import shortImg from "../assets/images/mock-shortener.png";
import mangoImg from "../assets/images/mock-mango.png";
import littleImg from "../assets/images/mock-littlerpg.png";
import flowImg from "../assets/images/mock-flowfree.png";

export const projects = [
  {
    id: 1,
    title: "Precalculus Math Tutor",
    date: new Date(2023, 0, 25),
    description:
      "Developed a standalone application with a React 18 frontend and a Python FastAPI backend to teach Precalculus topics. Leveraged Python with NumPy, Matplotlib, TensorFlow, and Keras for educational content and potentially interactive elements.",
    image: tutorImg,
    tags: [
      "Python",
      "Typescript",
      "React 18",
      "FastAPI",
      "TensorFlow",
      "Keras",
      "API ChatGPT 3.5",
    ],
    video:
      "https://www.youtube.com/watch?v=1Jl0W3WYxO0&ab_channel=AudricRosario",
    repo: "",
  },
  {
    id: 2,
    title: "Photography Services Website",
    date: new Date(2021, 10, 29),
    description:
      "Architected and developed a photography services website utilizing a microservices architecture with Spring Boot, Spring Cloud (Gateway, Eureka, Actuator, Config Server), MySQL and Docker for containerization.",
    image: eventImg,
    tags: ["Java", "Spring Boot", "Spring Cloud Services", "MySQL", "Docker"],
    video:
      "https://www.youtube.com/watch?v=tw6RCLD3xQA&ab_channel=AudricRosario ",
    repo: "https://github.com/Audric1Rosario/eventos-santiago",
  },
  {
    id: 3,
    title: "Link Shortener Website",
    date: new Date(2021, 7, 29),
    description:
      "Built a URL shortening website using Javalin, H2 ORM, client-side storage (LocalStorage & IndexedDB), Service Workers, and integrated SOAP, REST, and gRPC services.",
    image: shortImg,
    tags: [
      "Java",
      "Python",
      "Javalin",
      "HTML5",
      "ORM H2",
      "SOAP",
      "REST",
      "gRPC",
    ],
    video:
      "https://www.youtube.com/watch?v=ehyupnTtSqw&ab_channel=AudricRosario",
    repo: "https://github.com/Audric1Rosario/acortador-enlaces",
  },
  {
    id: 4,
    title: "Pharmaceutical Sales Website",
    date: new Date(2021, 2, 25),
    description:
      "Developed an e-commerce platform for pharmaceutical products using Spring Boot, SQL Server, and integrated with the PayPal test API for payment processing.",
    image: mangoImg,
    tags: ["Java", "Spring Boot", "SQL Server", "PayPal API"],
    video: "",
    repo: "https://github.com/Audric1Rosario/ing-software-mango-slr",
  },
  {
    id: 5,
    title: "Little RPG",
    date: new Date(2020, 3, 16),
    description:
      "Engineered a 2D Role-Playing Game in Unity using C#, featuring a storyline, items, power-ups, health/magic systems, basic enemies, a boss encounter, and a scoring mechanism.",
    image: littleImg,
    tags: ["C#", "Unity"],
    video:
      "https://www.youtube.com/watch?v=vz3eyy8x6Os&ab_channel=AudricRosario",
    repo: "",
  },
  {
    id: 6,
    title: "Flow Free",
    date: new Date(2020, 1, 11),
    description:
      "Developed a 2D connect-the-dots game using C# and the Unity game engine.",
    image: flowImg,
    tags: ["C#", "Unity"],
    video:
      "https://www.youtube.com/watch?v=V9N8SpRGCfI&ab_channel=AudricRosario",
    repo: "https://github.com/Audric1Rosario/flow-free",
  },
];
