/* Portfolio data — single source of truth. Experience follows the CV of Oct 2026. */
import portrait from '../assets/images/portrait.webp'
import resume from '../assets/Trong-Phan-Software-Engineer-Resume.pdf'
import ritaLogo from '../assets/images/rita_logo.png'
import zdnLogo from '../assets/images/zdn_logo.png'
import projectKompact from '../assets/images/project_kompact_1920.jpg'
import projectTimes from '../assets/images/project_times_1920.jpg'
import projectRestaff from '../assets/images/project_restaff_1920.jpg'
import projectTinher from '../assets/images/project_tinher_1920.jpg'

export const D = {
  identity: {
    name: 'Trong Phan',
    fullName: 'Phan Nguyen Duc Trong',
    role: 'Software Engineer',
    location: 'Lexington, KY',
    timezone: 'ET',
    phone: '+1 (859) 705 1502',
    email: 'phanductrong1008@gmail.com',
    portrait,
    resume,
    resumeName: 'Trong-Phan-Software-Engineer-Resume.pdf',
    availability: 'Full-time opportunities',
    workAuth: 'U.S. Permanent Resident',
    sponsorship: 'No sponsorship required',
    languages: 'English (IELTS 6.5), Vietnamese (native)',
    years: 3,
    bio: 'Over three years across healthcare, HR, workforce and collaboration products, from the interface down to the API and database. Actively exploring AI engineering.',
  },
  education: {
    degree: 'Bachelor of Computer and Information Sciences (International Program)',
    school: 'Auckland University of Technology (AUT), University of Science (HCMUS)',
    years: '2019–2023',
    highlights: [
      { value: '3.72', unit: '/4.0', label: 'GPA' },
      { value: '50%', label: 'merit-based entrance scholarship' },
    ],
    diploma: 'https://www.myequals.net/sharelink/b5c63f02-6217-41d0-957f-7eb804ac75af/708bbed9-e73a-4e21-b267-4fc690d00e03',
  },
  social: {
    github: 'https://github.com/PhanTrong1008',
    linkedin: 'https://www.linkedin.com/in/pndtr/',
  },
  /* What the rest of the page does not say: every line is drawn from the CV */
  milestones: [
    { title: 'Intern to full-time in three months', desc: 'Zodinet Technology, Feb to Apr 2023' },
    { title: 'Led a team of four developers', desc: '100% on-time delivery of sprint goals, as an intern' },
    { title: 'AI in daily development', desc: 'Claude Code for implementation, refactoring, debugging and tests' },
  ],
  skills: [
    {
      title: 'Languages',
      tags: ['TypeScript', 'JavaScript', 'C#'],
    },
    {
      title: 'Frontend Development',
      tags: ['React', 'Next.js', 'Vue.js', 'Vuex', 'Angular', 'NgRx', 'RxJS', 'TanStack Query', 'Tailwind', 'SCSS'],
    },
    {
      title: 'Backend Development',
      tags: ['Node.js', 'Hono', 'Express', 'NestJS', '.NET Core', 'REST APIs', 'WebSockets', 'Auth0'],
    },
    {
      title: 'Databases',
      tags: ['PostgreSQL', 'Redis', 'MongoDB', 'SQL Server', 'JanusGraph', 'Drizzle ORM', 'TypeORM', 'Entity Framework'],
    },
    {
      title: 'Cloud & Delivery',
      tags: ['AWS', 'GitHub Actions', 'Docker', 'Git', 'Cloudinary'],
    },
    {
      title: 'Workflow & Collaboration',
      tags: ['Agile / Scrum', 'Code review', 'Mentoring', 'Claude Code'],
    },
  ],
  /* Roles, newest first. Contributions and stacks live on each project, as they do in the CV */
  experience: [
    {
      company: 'Random Order',
      employer: 'Random Order',
      logo: '',
      role: 'Full-Stack Developer',
      period: 'Jun 2026 — Present',
      location: 'Los Angeles, CA',
      workMode: 'Remote',
    },
    {
      company: 'Rita Vo Group',
      employer: 'Rita Vo Group',
      logo: ritaLogo,
      role: 'Full-Stack Developer',
      period: 'Apr 2025 — Apr 2026',
      months: 12, // one year exactly; the month count alone would say 13
      location: 'Ho Chi Minh City, Vietnam',
      workMode: 'On-site',
    },
    {
      company: 'Zodinet Technology',
      employer: 'Zodinet',
      logo: zdnLogo,
      role: 'Internship to full-time',
      period: 'Feb 2023 — Dec 2024',
      location: 'Ho Chi Minh City, Vietnam',
      workMode: 'On-site',
      /* Newest first, like the roles. Each stage collects the projects with the same `stage` */
      stages: [
        /* April 2023 is in both periods and the internship keeps it, so the two stages add up to the 23 months above */
        { key: 'fulltime', role: 'Full-Stack Developer', type: 'Full-time', period: 'Apr 2023 — Dec 2024', months: 20 },
        { key: 'intern', role: 'Team Lead & Backend Developer Intern', type: 'Internship', period: 'Feb 2023 — Apr 2023' },
      ],
    },
  ],
  projects: [
    {
      slug: 'quicktouch',
      title: 'QuickTouch',
      company: 'Random Order',
      kind: 'B2B healthcare SaaS',
      role: 'Full-Stack Developer',
      period: 'Jun 2026 — Present',
      team: '',
      image: '',
      summary: 'A B2B healthcare SaaS platform for managing medical device catalogs, inventory, and hospital product evaluation workflows.',
      desc: 'A B2B healthcare SaaS platform for managing medical device catalogs, inventory, and hospital product evaluation workflows. Core modules include CRM, product catalog, inventory management, and Value Analysis Committee (VAC) tracking.',
      tagline: 'Medical device catalogs, inventory and hospital evaluations.',
      points: ['RBAC and data isolation', 'CRM, inventory, VAC tracking', 'Faster data loading'],
      responsibilities: [
        'Delivered end-to-end features for a multi-tenant healthcare SaaS platform using Auth0, React, TypeScript, Hono, PostgreSQL, and Drizzle ORM, covering architecture, API design, and database modeling.',
        'Built and enhanced core business modules, including CRM, product catalog, inventory management, and Value Analysis Committee (VAC) tracking, translating complex healthcare requirements into scalable, user-friendly solutions.',
        'Designed secure backend APIs and authorization workflows, implementing role-based access control (RBAC), organization-level data isolation, and user membership management to support multi-tenant environments.',
        'Improved data loading by eliminating unnecessary sequential requests, compressing responses, and optimizing image delivery.',
        'Leveraged Claude Code AI in daily development workflows to accelerate implementation, code refactoring, debugging, and test generation, reducing development time while maintaining code quality through code reviews and automated testing.',
        'Collaborated with cross-functional teams to deliver production-ready features across system design, cloud infrastructure, and AI-assisted development.',
      ],
      stack: ['React', 'TypeScript', 'Node.js', 'Hono', 'Auth0', 'WebSockets', 'PostgreSQL', 'Drizzle ORM', 'Redis', 'AWS'],
    },
    {
      slug: 'kompact',
      title: 'Kompact Task Management',
      company: 'Rita Vo Group',
      kind: 'Task management and collaboration',
      role: 'Full-Stack Developer',
      period: 'Apr 2025 — Apr 2026',
      months: 12,
      team: '2 members',
      image: projectKompact,
      summary: 'Enterprise collaboration platform supporting task tracking and real-time communication.',
      desc: 'An enterprise collaboration platform designed to streamline daily workflows. Includes task tracking, dashboard analytics, and a real-time chat module for in-app communication between teams.',
      tagline: 'Task tracking and real-time team collaboration.',
      points: ['Real-time chat module', 'RESTful APIs with RBAC', 'Pixel-accurate Vue.js from Figma'],
      responsibilities: [
        'Developed and maintained a full-stack task management and collaboration system supporting task tracking, analytics dashboards, and real-time communication.',
        'Built high-quality, scalable Vue.js frontend interfaces with pixel-accurate implementation from Figma and optimized rendering performance across browsers.',
        'Designed and implemented RESTful APIs for core domains including tasks, projects, users, and role-based access control; architected Express.js backend services with modular, scalable design patterns to improve maintainability and extensibility.',
        'Implemented a real-time chat module enabling seamless in-app communication and collaboration between teams.',
        'Optimized data flow between frontend and backend, improving responsiveness and user experience in task-heavy workflows.',
        'Collaborated with cross-functional teams including Business Analysts, Designers, and Engineers to define requirements, estimate effort, and deliver features in Agile sprints.',
      ],
      stack: ['Vue.js', 'Vuex', 'Express.js', 'MongoDB'],
    },
    {
      slug: 'times',
      title: 'Times — Jobframe',
      company: 'Zodinet Technology',
      stage: 'fulltime',
      kind: 'Workforce management',
      role: 'Full-Stack Developer',
      period: 'May 2023 — Aug 2024',
      team: '4 members',
      image: projectTimes,
      summary: 'Time-tracking platform with org, employee, and assignment management.',
      desc: 'A web platform for tracking work hours across assignments. Provides organization, employee activity logs, and assignment management for time managers on the premium tier.',
      tagline: 'Time tracking and workforce management.',
      points: ['Redis caching for high traffic', 'JanusGraph org structures', 'Full Agile lifecycle'],
      responsibilities: [
        'Optimized API response times by integrating Redis caching, ensuring stable performance during high-traffic periods.',
        'Implemented complex organizational structures using JanusGraph to enable efficient querying of relationship data.',
        'Contributed to the full Agile lifecycle, from estimating tasks to delivering iterative features on schedule.',
      ],
      stack: ['TypeScript', 'Angular', 'RxJS', 'SCSS', 'Node.js', 'Express.js', 'Redis', 'JanusGraph'],
    },
    {
      slug: 'restaff',
      title: 'Jupiter — Restaff',
      company: 'Zodinet Technology',
      stage: 'fulltime',
      kind: 'HRM platform',
      role: 'Full-Stack Developer',
      /* The CV gives no project dates. These come from the earlier portfolio, with the end date held inside the CV's Zodinet period */
      period: 'Sep 2024 — Dec 2024',
      team: '2 members',
      image: projectRestaff,
      summary: 'Web HR management platform — modules and feature development.',
      desc: 'Maintained and developed modules for a web-based HR management platform; enhanced system functionality with new features and supporting improvements.',
      tagline: 'Web HR management platform.',
      points: ['Leave Transfer module', 'C#/.NET APIs', 'Legacy code refactoring'],
      responsibilities: [
        'Built and maintained scalable Angular features, including the Leave Transfer module, while refactoring legacy code to improve system stability and UI performance.',
        'Developed C#/.NET APIs and collaborated with backend teams to ensure seamless data integration and a consistent UI/UX across the HRM system.',
      ],
      stack: ['TypeScript', 'Angular', 'NgRx', 'SCSS', 'C#', '.NET', 'SQL Server'],
    },
    {
      slug: 'tinher',
      title: 'TinHer — Dating App',
      /* The CV names no project for the internship. TinHer has the same dates, role, team size and stack */
      company: 'Zodinet Technology',
      stage: 'intern',
      kind: 'Dating platform',
      role: 'Team Lead & Backend Developer Intern',
      period: 'Feb 2023 — Apr 2023',
      team: '4 members',
      image: projectTinher,
      summary: 'Web platform with personalized profiles, real-time chat, and proximity matching.',
      desc: 'A web platform for users to connect with their match. Features personalized profiles, real-time chat, and finding nearest friends — with profile preferences and matched-friend communication.',
      tagline: 'Profiles, real-time chat and proximity matching.',
      points: ['Led a team of four', 'NestJS with Clean Architecture', 'Code reviews and mentoring'],
      responsibilities: [
        'Led a team of four developers, managed task distribution, and ensured 100% on-time delivery of sprint goals.',
        'Built the backend using NestJS and TypeORM, applying Clean Architecture principles for better scalability.',
        'Conducted rigorous code reviews and mentored team members to maintain consistent code.',
      ],
      stack: ['Next.js', 'React', 'Tailwind CSS', 'NestJS', 'TypeORM', 'PostgreSQL', 'Cloudinary'],
    },
  ],
};

/* Kind of work behind each contribution, in the same order as the sentences above */
export const focus: Record<string, string[]> = {
  quicktouch: ['end-to-end', 'modules', 'security', 'performance', 'ai tooling', 'delivery'],
  kompact: ['end-to-end', 'interface', 'api', 'realtime', 'performance', 'delivery'],
  restaff: ['interface', 'api'],
  times: ['performance', 'data', 'delivery'],
  tinher: ['leadership', 'architecture', 'quality'],
};

export type Role = (typeof D.experience)[number]
export type Project = (typeof D.projects)[number]

export const projectOrg = (p: Project) => (p.stage === 'intern' ? `${p.company}, internship` : p.company)

/* Which layer of the stack each tool belongs to */
const LAYERS = [
  { label: 'interface', tools: ['React', 'Next.js', 'Vue.js', 'Vuex', 'Angular', 'NgRx', 'RxJS', 'TypeScript', 'SCSS', 'Tailwind CSS'] },
  { label: 'api', tools: ['Node.js', 'Hono', 'Express.js', 'NestJS', '.NET', 'C#', 'Auth0', 'WebSockets'] },
  { label: 'data', tools: ['PostgreSQL', 'MongoDB', 'SQL Server', 'Redis', 'JanusGraph', 'Drizzle ORM', 'TypeORM', 'Cloudinary'] },
  { label: 'cloud', tools: ['AWS'] },
]
export const layersOf = (stack: string[]) =>
  LAYERS.map((l) => ({ label: l.label, tools: stack.filter((t) => l.tools.includes(t)) })).filter((l) => l.tools.length)
