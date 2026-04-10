import { getProjectScreenshots, getDisplayImage } from '../utils/imageHelper';
export const personalInfo = {
  name: 'MD. Nazmul Sakib',
  title: 'Full-Stack Software Engineer',
  email: 'mdsakib.ndc17@gmail.com',
  phone: '+880 1631891718',
  location: '72/A Maniknagar, Dhaka-1203',
  github: 'https://github.com/m-n-sakib-dev',
  linkedin: 'https://linkedin.com/in/md-nazmul-sakib',
  profile:
    'Full-Stack Software Engineer with a B.Sc. in Computer Science from CUET. Recently completed an internship at BD Funnel Builder where I consistently delivered production-level work on par with junior developers — optimizing query performance by 40–50% on a large SaaS platform, building and deploying full-stack features, and integrating AI-powered workflows for faster delivery. Proficient across the full stack: Vue/Nuxt/React/Next on the frontend and Laravel/Django/FastAPI/Node on the backend. Passionate about clean architecture, RESTful API design, and leveraging AI tools to ship high-quality software faster.',
};

export const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript (ES6)', level: 70 },
      { name: 'C++ / C', level: 78 },
      { name: 'PHP', level: 60 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    category: 'Frontend',
    icon: '◈',
    skills: [
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'React.js', level: 68 },
      { name: 'Vue.js / Nuxt.js', level: 86 },
      { name: 'Next.js', level: 70 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙',
    skills: [
      { name: 'Laravel', level: 88 },
      { name: 'Django', level: 82 },
      { name: 'FastAPI', level: 80 },
      { name: 'Node.js / Express', level: 76 },
      { name: 'REST API Design', level: 90 },
    ],
  },
  {
    category: 'Databases',
    icon: '▦',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'SQLite', level: 80 },
      { name: 'Firebase', level: 68 },
      { name: 'Redis (Cache)', level: 75 },
    ],
  },
  {
    category: 'State & Libraries',
    icon: '◎',
    skills: [
      { name: 'Filament (Laravel)', level: 80 },
      { name: 'Pinia', level: 90 },
      { name: 'RTK / RTK Query', level: 78 },
      { name: 'React Hook Form', level: 80 },
      { name: 'Inertia.js', level: 75 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '⚡',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'GitHub Actions (CI/CD)', level: 88 },
      { name: 'Ubuntu Server', level: 72 },
      { name: 'Laravel Cloud', level: 70 },
      { name: 'Android Studio', level: 58 },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    role: 'Software Engineer Intern',
    company: 'BD Funnel Builder',
    period: 'Jan 2026 – Present',
    type: 'current',
    bullets: [
      'Implemented CI/CD pipeline on self-hosted Ubuntu server using GitHub Actions — automated deployment, process auto-restart on deploy, achieved zero-touch deployment on git push.',
      'Built and shipped front-end features for an e-commerce platform using Nuxt.js under tight deadlines.',
      'Query optimized the company\'s main SaaS (Laravel Filament) achieving 40–50% speed improvement on dashboard and orders pages, measured via debugger tooling.',
      'Developed a full-stack task management system in Laravel with Sanctum auth, role-based permissions, middleware, caching, queues, observers, and RESTful CRUD APIs.',
      'Architected FastAPI microservice for AI-powered CV analysis (GenAI) and integrated with Laravel Filament CV analyzer app — delivering the complete solution in a single day.',
      'Applied AI-assisted development (ChatGPT/Gemini/Claude) for code generation — significantly reducing delivery time on production features.',
    ],
  },
  {
    id: 2,
    role: 'Business Lead (Family Business)',
    company: 'Molla Rent a Car, Dhaka',
    period: 'Feb 2024 – Dec 2025',
    type: 'past',
    bullets: [
      'Managed end-to-end operations for a car rental agency, coordinating a fleet of private vehicles and professional drivers for B2B and B2C clients.',
      'Developed and maintained strong relationships with vehicle owners (supply side) and corporate/individual clients (demand side) to ensure consistent service availability.',
      'Streamlined daily logistics including driver scheduling, route optimization, and vehicle maintenance tracking to ensure 100% operational uptime.',
      'Handled financial transactions, contract negotiations, and real-time conflict resolution between clients and staff in a high-pressure environment.',
      'Utilized digital tools (Excel/Google Sheets) to track vehicle logs, driver commissions, and payment cycles, improving record-keeping accuracy.',
    ],
  },
  {
    id: 3,
    role: 'Software Developer',
    company: 'Bright Tutors, Chittagong',
    period: 'Jun 2023 – Dec 2023',
    type: 'past',
    bullets: [
      'Engineered a tutor-matching engine using Python and MySQL that automates the pairing of guardians and tutors based on complex preference algorithms. The system features real-time notifications, automatically identifying qualified tutors for new postings and triggering instant SMS alerts to selected candidates.',
      'Architected and deployed a proprietary SMS automation system in Python to replace manual advertising workflows. Developed a hardware-integrated solution using modems and USB hubs to manage multi-SIM broadcasting, successfully migrating the company from 3rd-party dependencies to an in-house infrastructure.',
      'Developed a dedicated Android application using Android Studio to provide real-time monitoring and updates for the automated SMS dispatch system and the core tuition matching platform.',
      'Built an automated CV parsing and filtering system using Python to extract specific candidate profiles from large-scale databases. The system streamlines the recruitment workflow by applying multi-criteria filters to Excel-based records and dynamically generating professional CVs in PDF format.',
      'Developed a high-performance data extraction tool to process massive volumes of CV data from XLS files. By leveraging raw Python and optimized MySQL queries without the overhead of heavy frameworks, I achieved ultra-fast processing speeds for large-scale data migration and analysis.',

    ],
  },
  {
    id: 4,
    role: 'Industrial Attachment',
    company: 'New Vision IT Ltd., Chittagong',
    period: 'Oct 2022 – Dec 2022',
    type: 'past',
    bullets: [
      'Gained hands-on exposure to professional software development life cycles (SDLC) and collaborative team workflows in an enterprise environment.',
      'Developed a Movie Management System using the .NET Framework, implementing full CRUD functionality and a dynamic landing page to display data.',
      'Acquired a deep understanding of why high-scale enterprises prefer the .NET ecosystem for building secure, scalable, and robust backend architectures.',
      'Studied the company’s internal system architecture and operational workflows to learn how large-scale IT solutions are managed and maintained.',
    ],
  },
];

export const projects = [
  {
    id: 'odommopress',
    title: 'Odommopress',
    subtitle: 'E-book E-commerce Platform',
    displayImg: getDisplayImage('odommopress'),
    shortDesc:
      'Production-ready e-book store with category management, dynamic order tables, digital payment with SSlcommerz and real-time API integration.',
    longDesc:
      'Developed core front-end modules for a production e-commerce platform owned by BD Funnel Builder. Built Category Management, Dynamic Order Tables, Language and Tag management modules. Collaborated on API integration to ensure real-time data consistency between the Nuxt.js frontend and the backend REST APIs.',
    tech: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'Pinia Store', 'REST API', 'JWT authenitcation'],
    category: 'E-commerce',
    badge: 'Production',
    liveLink: 'https://odommopress.com/',
    githubLink: '',
    screenshots: getProjectScreenshots('odommopress'),
  },
  {
    id: 'fill-blog',
    title: 'Fill Blog',
    subtitle: 'Multi-Author Blog Platform',
    displayImg: getDisplayImage('fillblog'),
    shortDesc:
      'Live multi-author blog platform with custom user domains, article publishing, and role-based permissions.',
    longDesc:
      'Built a multi-author blog platform with custom user domains (main_domain/username), article publishing, category & tag management, and role-based permissions. Full-stack implementation using Laravel + Filament for the admin and backend, and Inertia.js for the frontend SPA. Deployed live on Laravel Cloud. It is fully responsive for Mobile, Tablet and Desktop.',
    tech: ['Laravel', 'Filament', 'Inertia.js', 'Laravel Cloud', 'VueJs', 'Spatie Role-Based Permissions'],
    category: 'Blog Platform',
    badge: 'Live',
    liveLink: 'https://fill-blog-main-lplrtb.free.laravel.cloud/',
    githubLink: 'https://github.com/m-n-sakib-dev/fill-blog',
    screenshots: getProjectScreenshots('fillblog'),
  },
  {
    id: 'itweet',
    title: 'ITweet',
    subtitle: 'Social Media Platform',
    shortDesc:
      'Full-featured social platform with posts, likes, comments, hashtags, following, and trending suggestions.',
    longDesc:
      'Building a full-featured social platform with Posts, Likes, Comments, Hashtags, Following system, Trending Suggestions, and Search functionality. The responsive frontend is built with Bootstrap 5, with plans for Nuxt.js frontend integration for improved performance.',
    tech: ['Python', 'Django', 'SQLite', 'JavaScript', 'HTML5', 'Bootstrap 5'],
    category: 'Social Media',
    badge: 'In Progress',
    liveLink: '',
    githubLink: 'https://github.com/m-n-sakib-dev/itweet/',
    screenshots: [
      // Feed / home timeline screenshot
      // Post detail with comments screenshot
      // User profile page screenshot
      // Search / trending hashtags screenshot
    ],
  },
  {
    id: 'exam-platform',
    title: 'Exam Platform',
    subtitle: 'Google Forms Alternative',
    shortDesc:
      'Full-stack exam system with auto-grading, JWT auth, middleware, and role-based API access.',
    longDesc:
      'Built a complete full-stack exam system where question setters create exams with answers, and candidates submit responses that are automatically graded. Features JWT auth, middleware, role-based API access, and a results/analytics dashboard visible to question setters.',
    tech: ['React', 'Next.js', 'RTK', 'RTK Query', 'React Hook Form', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'EdTech',
    badge: 'Full-Stack',
    liveLink: '',
    githubLink: '',
    screenshots: [
      // Exam listing page screenshot
      // Active exam / question answering screenshot
      // Results / analytics dashboard screenshot
      // Question setter / admin panel screenshot
    ],
  },
  {
    id: 'uBuy',
    title: 'uBuy',
    subtitle: 'Nuxt.js + Pinia Store',
    displayImg: getDisplayImage('ubuy'),
    shortDesc:
      'Complete e-commerce frontend with product listing, cart management, and checkout — built with Nuxt.js and Pinia.',
    longDesc:
      'Developed a complete e-commerce frontend featuring product listing with filters, cart management, and a multi-step checkout flow. Built with Vue.js and Nuxt.js for server-side rendering, Pinia for reactive state management, and Tailwind CSS for styling.',
    tech: ['Vue.js', 'Nuxt.js', 'Pinia', 'Tailwind CSS'],
    category: 'E-commerce',
    badge: 'Frontend',
    liveLink: '',
    githubLink: 'https://github.com/m-n-sakib-dev/uBuy-ecommerce',
    screenshots: getProjectScreenshots('ubuy'),
  },
  {
    id: 'cv-finder',
    title: 'CV Finder',
    subtitle: 'Automated CV Screening Tool',
    shortDesc:
      'Automated CV parsing and screening with custom scoring algorithms, MySQL storage, and Tkinter GUI.',
    longDesc:
      'Built an automated CV parsing and screening tool with custom scoring algorithms that match candidates to job requirements. Designed a MySQL database for CV storage and retrieval, and built a Tkinter GUI to make the tool accessible for non-technical HR users.',
    tech: ['Python', 'MySQL', 'Tkinter', 'Data Analysis'],
    category: 'AI / Data Tool',
    badge: 'Desktop App',
    liveLink: '',
    githubLink: '',
    screenshots: [
      // Main application window screenshot
      // CV upload / screening results screenshot
      // Score breakdown / analytics screenshot
    ],
  },
];

export const education = [
  {
    degree: 'B.Sc. in Computer Science & Technology',
    institution: 'CUET',
    year: '2024',
  },
  {
    degree: 'H.S.C',
    institution: 'Notre Dame College, Dhaka',
    year: '2017',
  },
  {
    degree: 'S.S.C',
    institution: 'Maniknagar Model H.S., Dhaka',
    year: '2015',
  },
];

export const achievements = [
  'ICPC Asia Dhaka Regional Online Preliminary Contest',
  'Inter-University Programming Contest',
  'Software Engineering: The Best Professional Practice (Workshop — Brain Station 23)',
];

export const languages = [
  { name: 'Bengali', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Conversational' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
