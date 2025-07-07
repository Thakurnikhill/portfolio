import cusatImage from "../assets/experience-cusat-expanded.jpeg";
import iptifImage from "../assets/experience-iptif.png";
import portfolioImage from "../assets/project-portfolio-1.jpg";
import mslLogo from "../assets/msl-logo-expanded.jpeg";
import mslLogoTransparent from "../assets/msl-logo-transparent.png";
import mslProfilePhoto from "../assets/msl-profile.jpg";
import resumePdf from "../assets/resume.pdf";

// Personal Information
export const personalInfo = {
    name: "Mishal K R",
    title: "Full Stack Developer",
    description: "Building meaningful digital experiences with clarity, care, and code.",
    email: "mishalrajeev@gmail.com",
    phone: "+91 9633616388",
    location: "Kerala, India",
    resume: resumePdf,
    photo: mslProfilePhoto,
    logoNormal: mslLogo,
    logoTransparent: mslLogoTransparent,
    socialLinks: {
        github: "https://github.com/MsL-Mishal",
        linkedin: "https://linkedin.com/in/mishal-k-r",
        twitter: "https://x.com/MishalMsLz",
        leetcode: "https://leetcode.com/u/MISHALKR/",
        geeksforgeeks: "https://www.geeksforgeeks.org/user/mishalkr_mslz/",
    },
};

// Education
export const education = [
    {
        id: 1,
        degree: "M.Tech in Computer and Information Science",
        university: "Cochin University of Science and Technology",
        startDate: "2020",
        endDate: "2022",
        description: [
            "University 3rd Rank Holder",
            "Elected University Union Councillor for the batch",
            "Specialized in Computer and Information Science"
        ],
        image: cusatImage,
    },
    {
        id: 2,
        degree: "B.Tech in Computer Science and Engineering",
        university: "Cochin University of Science and Technology",
        startDate: "2014",
        endDate: "2018",
        description: [
            "Graduated with First Class in Computer Science and Engineering",
            "Qualified GATE 2019 in the first attempt",
            "Built a strong foundation in core computer science subjects"
        ],
        image: cusatImage,
    },
];

// Work Experience
export const workExperience = [
    {
        id: 1,
        title: "Self-Initiated Full-Stack Projects",
        company: "Independent Learning & Practice",
        startDate: "January 2025",
        endDate: "Present",
        description: [
            "Built multiple full-stack applications using the MERN stack to strengthen backend logic, database design, and authentication (JWT).",
            "Developed responsive user interfaces with React and Tailwind CSS following component-driven development",
            "Practiced API development and testing using Express.js, Postman, and followed MVC-based architecture.",
            "Applied clean code principles and project structuring learned from technical training and cohort projects.",
        ],
        image: mslLogo,
    },
    {
        id: 2,
        title: "Assistant Professor",
        company: "Department of Computer Applications, CUSAT",
        startDate: "September 2023",
        endDate: "September 2024",
        description: [
            "Taught courses including OOP with Java, Web Technologies and Programming, Python, MongoDB, MySQL.",
            "Guided final-year projects and coordinated class activities.",
            "Conducted labs and hands-on coding sessions for data management and programming courses.",
        ],
        image: cusatImage,
    },
    {
        id: 3,
        title: "Software Engineer",
        company: "IIT Palakkad Technology Ihub Foundation (IPTIF)",
        startDate: "November 2022",
        endDate: "February 2023",
        description: [
            "Worked on an AI-based Smart Agriculture Project.",
            "Conducted case studies and handled data collection and preprocessing.",
            "Mentored IIT OELP students and contributed to research proposals.",
        ],
        image: iptifImage,
    },
];

// Projects
export const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description:
            "A sleek, responsive personal portfolio built with React and Vite. Features include smooth Framer Motion animations, dark/light theme toggle, SEO optimization, and Google Analytics integration.",
        image: portfolioImage,
        technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite", "Google Analytics", "SEO"],
        githubLink: "https://github.com/MsL-Mishal/MsL-Mishal.github.io",
        liveLink: "https://msl-mishal.github.io/",
    },
];

// Skills
export const skills = {
    frontend: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 }
    ],
    backend: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Java", level: 90 },
        { name: "Python", level: 75 },
        { name: "C++", level: 65 },
        { name: "PostgreSQL", level: 70 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
    ],
    tools: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 80 },
        { name: "AWS", level: 65 },
        { name: "VS Code", level: 85 },
        { name: "Postman", level: 80 },
        { name: "Prisma", level: 80 },
        { name: "Turborepo", level: 70 },
        { name: "Websockets", level: 75 },
    ],
};

export const additionalSkills = [
    "Problem Solving",
    "Agile/Scrum",
    "Version Control",
    "REST APIs",
    "API Design",
    "Database Design",
    "Responsive Design",
    "Monorepo",
    "MVC",
    "CI/CD",
    "Vite",
    "npm",
    "Bcrypt",
    "JWT",
    "Zod",
    "Mongoose",
    "Framer Motion",
    "Recoil",
    "Context API",
    "NextAuth.js",
];
