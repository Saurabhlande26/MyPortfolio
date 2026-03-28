
const NAV_LINKS = ["Home", "Skills", "Experience", "Projects", "Contact"];

const SKILLS = {
    Frontend: [
        { name: "React.js / React Native", level: 92 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5 & CSS3", level: 88 },
        { name: "Redux", level: 82 },
    ],
    Backend: [
        { name: "Node.js & Express.js", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "REST APIs & JWT Auth", level: 92 },
        { name: "Encryption & Token Handling", level: 85 },
    ],
    Database: [
        { name: "Oracle (PL/SQL)", level: 80 },
        { name: "MongoDB", level: 78 },
    ],
    Tools: [
        { name: "Docker & Redis", level: 75 },
        { name: "AWS S3 & MinIO", level: 78 },
        { name: "Nginx & PM2", level: 80 },
        { name: "Git & Bitbucket", level: 88 },
        { name: "Linux Server Handling", level: 82 },
    ],
};

const TOOLS_BADGES = [
    "React.js", "Node.js", "TypeScript", "Express.js", "Redux", "MongoDB", "Oracle",
    "Docker", "Redis", "AWS S3", "MinIO", "Nginx", "PM2", "Git", "JWT", "REST API", "Linux", "Postman",
];

const PROJECTS = [
    {
        name: "TaxCPC",
        tag: "FinTech · KYC Platform",
        color: "#00ff88",
        description:
            "A scalable multi-bank KYC platform architected with a data-driven approach enabling dynamic form rendering and validation without any code changes.",
        highlights: [
            "RESTful APIs with Node.js, Express.js, JWT & RBAC",
            "AES encryption + S3/MinIO file storage",
            "LDAP / Active Directory hybrid login",
            "Deployed on Linux/Windows via Nginx & PM2",
            "Production support for PNB, SBI, BOI, Bank of Baroda & CSB",
        ],
        stack: ["React.js", "Node.js", "Express.js", "JWT", "AWS S3", "Nginx"],
    },
    {
        name: "KYC Plus",
        tag: "Banking · Compliance",
        color: "#00cfff",
        description:
            "A configurable multi-bank KYC workflow engine with database-driven journey management and real-time ReKYC for seamless customer re-verification.",
        highlights: [
            "Database-driven workflow engine (enable/disable steps at runtime)",
            "Bank-specific API configurations & field-level customizations",
            "Real-time ReKYC web application for customer onboarding",
            "Dynamic React.js frontend with complex state management",
            "Fintech compliance standards for sensitive data",
        ],
        stack: ["React.js", "Node.js", "MongoDB", "Redux", "TypeScript"],
    },
    {
        name: "RITMS",
        tag: "Government · Tax Management",
        color: "#ffaa00",
        description:
            "Rajasthan Integrated Tax Management System — a government-grade application managing payroll, tax deductions, GST, and Form 24G reporting at scale.",
        highlights: [
            "Salary & tax calculation modules",
            "APIs for TDS, GST, and Form 24G processing",
            "Large-scale financial data with Oracle PL/SQL",
            "Secure data handling & compliance",
            "Optimized for high-volume transactions",
        ],
        stack: ["Node.js", "Express.js", "Oracle PL/SQL", "REST API"],
    },
];

export { NAV_LINKS, SKILLS, TOOLS_BADGES, PROJECTS }