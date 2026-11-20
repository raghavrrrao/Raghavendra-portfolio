// type: "software" → software projects (no screenshots or public URLs yet)
// type: "client"   → client websites (have screenshots; used by the hero showcase
//                    and the desktop 3D project menu, which both require an image)
const projectsData = [
    {
        type: "software",
        title: "Legal Metrology Label Compliance Checker",
        category: "AI / Backend / Smart India Hackathon 2026",
        description:
            "An OCR-based packaged commodity label compliance checker that evaluates product labels against the Legal Metrology (Packaged Commodities) Rules, 2011.\n\n" +
            "The system uses image validation, Tesseract OCR, field extraction and a deterministic rule engine to generate compliance findings with references to applicable rule clauses.",
        technologies: [
            "Python",
            "Django 5.2",
            "Django REST Framework",
            "PostgreSQL",
            "Tesseract OCR",
            "React 19",
            "React Native (Expo)"
        ],
        highlights: [
            "Built as part of a six-member Smart India Hackathon 2026 team.",
            "Encoded 11 executable rules from 69 inventoried clause-level requirements.",
            "Developed an evaluation harness using 28 label photographs.",
            "Implemented more than 1,500 automated Python tests.",
            "Five-job GitHub Actions pipeline for Docker production image builds."
        ]
    },
    {
        type: "software",
        title: "SQL Detective",
        category: "Full Stack / Interactive Game",
        description:
            "An interactive SQL investigation game where players solve mysteries by writing SQL queries against case databases.\n\n" +
            "Features include Personal Mode with five progressive difficulty levels, Festival Mode with randomized cases, timed investigations, competitive scoring, evidence discovery, accusation validation and persistent leaderboards.",
        technologies: ["React", "JavaScript", "Node.js", "SQLite", "SQL", "Render"],
        highlights: [
            "Database-driven investigation flow.",
            "Isolated player sessions.",
            "Automated tests for gameplay, session management and regression scenarios.",
            "Deployed on Render."
        ]
    },
    {
        type: "software",
        title: "LaunchPad",
        category: "Backend / MCA Research Project",
        description:
            "A college project platform that tracks projects from initial ideas to verified records, including team history, mentorship, milestones, reviews and verification.",
        technologies: ["Python", "Django 5.2", "PostgreSQL", "HTMX"],
        highlights: [
            "Backend development.",
            "Role-based server-side access checks.",
            "Developed as part of a three-member team."
        ]
    },
    {
        type: "client",
        title: "Crystal EMR",
        image: "/images/Projects/Client_Websites/crystal/crystal-preview.png",
        role: "Designed & Developed by Me",
        description: "Informative website for a comprehensive Electronic Medical Records system for healthcare providers.",
        link: "https://crystalemr.com/",
        handled: true
    },
    {
        type: "client",
        title: "Sane Eye Hospital",
        image: "/images/Projects/Client_Websites/saneeye/Sane-eye-preview.png",
        role: "Designed & Developed by Me",
        description: "Website for Sane Eye Hospital, providing information about their services, doctors, and patient resources.",
        link: "https://www.saneeye.in/",
        handled: true
    },
    {
        type: "client",
        title: "Tantshilpa",
        image: "/images/Projects/Client_Websites/tantashilpa/tantshilpa-preview.png",
        role: "Designed & Developed by Me",
        description: "E-commerce platform for traditional handloom products and sarees.",
        link: "https://tantshilpa.com/",
        handled: true
    },
    {
        type: "client",
        title: "Noopur Ghorpade",
        image: "/images/Projects/Client_Websites/noopur-portfolio/noopur-portfolio-preview.png",
        role: "Developed by Me",
        description: "Personal portfolio website for Graphic Designer Noopur Ghorpade.",
        link: "https://noopurghorpade.in/",
        handled: true
    },
    {
        type: "client",
        title: "Anuradha Pal",
        image: "/images/Projects/Client_Websites/anuradhapal/anuradhaPal-preview.png",
        role: "Developed by Me (Designed by Hemant Phanse)",
        description: "Website for an international tabla maestro.",
        note: "Isn't being handled by me now.",
        link: "https://www.anuradhapal.com/",
        handled: false
    },
    {
        type: "client",
        title: "RedVinca",
        image: "/images/Projects/Client_Websites/redvinca/redvinca-preview.png",
        role: "Developed by Me (Designed by Hemant Phanse)",
        description: "Website for an IT tech company.",
        note: "Isn't being handled by me now.",
        link: "https://redvinca.com/",
        handled: false
    },
    {
        type: "client",
        title: "AMPS 2024",
        image: "/images/Projects/Client_Websites/amps/amps-preview.png",
        role: "Developed by Me",
        description: "Website for AMPS – Abhiman Mitra Parivar Sanstha 2024 (Webkrida).",
        link: "https://webkrida.com/amps-2024/",
        handled: true
    },
    {
        type: "client",
        title: "Jyoti CSC Digital Services",
        image: "/images/Projects/Client_Websites/jyoticsc/jyoti-csc-preview.png",
        role: "Developed by Me",
        description: "Website for Jyoti CSC Digital Services (Webkrida).",
        link: "https://webkrida.com/jyoti-csc/",
        handled: true
    }
];

export const softwareProjects = projectsData.filter((project) => project.type === "software");

// Only projects with a screenshot can be shown in the image-based views.
export const clientProjects = projectsData.filter((project) => project.type === "client" && project.image);

export default projectsData;
