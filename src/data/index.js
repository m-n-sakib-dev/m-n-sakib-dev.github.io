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
      { name: 'JavaScript (ES6)', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PHP', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'C++ / C', level: 68 },
    ],
  },
  {
    category: 'Frontend',
    icon: '◈',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Vue.js / Nuxt.js', level: 86 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML5 / CSS3', level: 95 },
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
      { name: 'Redis (Cache)', level: 65 },
    ],
  },
  {
    category: 'State & Libraries',
    icon: '◎',
    skills: [
      { name: 'Pinia', level: 82 },
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
      { name: 'GitHub Actions (CI/CD)', level: 78 },
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
    role: 'Software Developer',
    company: 'Bright Tutors, Chittagong',
    period: 'Jun 2023 – Dec 2023',
    type: 'past',
    bullets: [
      'Built a complete software-based management system to replace traditional manual processes.',
      'Developed an automated SMS dispatch system for client communication.',
    ],
  },
  {
    id: 3,
    role: 'Industrial Attachment',
    company: 'New Vision IT Ltd., Chittagong',
    period: 'Oct 2022 – Dec 2022',
    type: 'past',
    bullets: [
      'Gained hands-on exposure to professional software development workflows and team practices.',
    ],
  },
];

export const projects = [
  {
    id: 'odommopress',
    title: 'Odommopress',
    subtitle: 'E-book E-commerce Platform',
    shortDesc:
      'Production-ready e-book store with category management, dynamic order tables, and real-time API integration.',
    longDesc:
      'Developed core front-end modules for a production e-commerce platform owned by BD Funnel Builder. Built Category Management, Dynamic Order Tables, Language and Tag management modules. Collaborated on API integration to ensure real-time data consistency between the Nuxt.js frontend and the backend REST APIs.',
    tech: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'REST API'],
    category: 'E-commerce',
    badge: 'Production',
    liveLink: '',
    githubLink: '',
    screenshots: [
      // Home / landing page screenshot
      // Category management page screenshot
      // Order management table screenshot
      // Product detail page screenshot
    ],
  },
  {
    id: 'fill-blog',
    title: 'Fill Blog',
    subtitle: 'Multi-Author Blog Platform',
    shortDesc:
      'Live multi-author blog platform with custom user domains, article publishing, and role-based permissions.',
    longDesc:
      'Built a multi-author blog platform with custom user domains (main_domain/username), article publishing, category & tag management, and role-based permissions. Full-stack implementation using Laravel + Filament for the admin and backend, and Inertia.js for the frontend SPA. Deployed live on Laravel Cloud.',
    tech: ['Laravel', 'Filament', 'Inertia.js', 'Laravel Cloud', 'Role-Based Permissions'],
    category: 'Blog Platform',
    badge: 'Live',
    liveLink: '',
    githubLink: '',
    screenshots: [
      // Blog home / article listing page screenshot
      // Single article page screenshot
      // Admin panel / Filament dashboard screenshot
      // User profile page screenshot
    ],
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
    githubLink: '',
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
    id: 'ecommerce-frontend',
    title: 'E-Commerce Frontend',
    subtitle: 'Nuxt.js + Pinia Store',
    shortDesc:
      'Complete e-commerce frontend with product listing, cart management, and checkout — built with Nuxt.js and Pinia.',
    longDesc:
      'Developed a complete e-commerce frontend featuring product listing with filters, cart management, and a multi-step checkout flow. Built with Vue.js and Nuxt.js for server-side rendering, Pinia for reactive state management, and Tailwind CSS for styling.',
    tech: ['Vue.js', 'Nuxt.js', 'Pinia', 'Tailwind CSS'],
    category: 'E-commerce',
    badge: 'Frontend',
    liveLink: '',
    githubLink: '',
    screenshots: [
      // Product listing / shop page screenshot
      // Product detail page screenshot
      // Shopping cart screenshot
      // Checkout flow screenshot
    ],
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
