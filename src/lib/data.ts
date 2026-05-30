export const portfolioData = {
  personal: {
    name: 'Neha Choudhary',
    role: 'Senior Software Developer',
    location: 'India',
    email: 'choudharyn856@gmail.com',
    phone: '+91-1111111111',
    degree: 'B.Tech CSE',
    cvUrl: 'https://neha-choudhary-resume.tiiny.site',
    github: 'https://github.com/NehaChoudhary5',
    linkedin: 'https://www.linkedin.com/in/neha--choudhary/',
    tagline:
      "Senior Software Engineer with 7+ years of experience building scalable Java & Spring Boot applications serving on Web as well as App. I'm Based in India.",
    about1:
      'Software Engineer with expertise in Java, Spring Boot, Microservices, and AWS, skilled in system design, cloud migration, and secure coding practices.',
    about2:
      'Experienced in CI/CD, observability, and leveraging AI tools like GitLab Duo to deliver scalable, high‑quality solutions.',
  },

  stats: [
    { value: '7+', label: 'Years Experience' },
    { value: '3+', label: 'Projects Built' },
    { value: '200+', label: 'Bugs Fixed' },
    { value: '2 days to 2 hours', label: 'Time saved for devs' },
  ],

  typewriterRoles: ['Software Developer', 'Java', 'Spring Boot'],

  skills: [
    {
      name: 'Core Java',
      category: 'backend',
      level: 'Advanced',
      icon: 'FaJava',
    },
    {
      name: 'Spring Boot',
      category: 'backend',
      level: 'Advanced',
      icon: 'SiSpringboot',
    },
    { name: 'REST API', category: 'backend', level: 'Advanced', icon: 'TbApi' },
    {
      name: 'JWT Tokens',
      category: 'backend',
      level: 'Intermediate',
      icon: 'RiKey2Line',
    },
    {
      name: 'MySQL',
      category: 'backend',
      level: 'Intermediate',
      icon: 'SiMysql',
    },
    { name: 'HTML5', category: 'frontend', level: 'Advanced', icon: 'FaHtml5' },
    {
      name: 'CSS3',
      category: 'frontend',
      level: 'Advanced',
      icon: 'FaCss3Alt',
    },
    { name: 'React', category: 'frontend', level: 'Beginner', icon: 'FaReact' },
    { name: 'AWS', category: 'tools', level: 'Intermediate', icon: 'FaAws' },
    { name: 'Docker', category: 'tools', level: 'Beginner', icon: 'FaDocker' },
    {
      name: 'Gradle, Maven',
      category: 'tools',
      level: 'Intermediate',
      icon: 'FaTools',
    },
    {
      name: 'Git / GitHub / GitLab',
      category: 'tools',
      level: 'Advanced',
      icon: 'FaGitAlt',
    },
    {
      name: 'Postman / Insomnia',
      category: 'tools',
      level: 'Advanced',
      icon: 'SiPostman',
    },
  ],

  experience: [
    {
      company: 'Barlcays',
      role: 'Senior Software Engineer',
      location: 'Pune, India',
      date: 'Apr 2021 – Present',
      points: [
        'Promotion & Career Growth: Promoted from Software Developer to Senior Software Engineer in recognition of strong technical delivery and ownership.',
        'Cloud Migration Leadership: Successfully led the end-to-end AWS migration of 4 enterprise applications, ensuring seamless production delivery with zero downtime.',
        'Regulatory Compliance Projects: Designed and implemented a mortgage feature aligned with regulatory requirements,delivering on time and ensuring compliance.',
        'Automation & Efficiency: Developed utility automation scripts to streamline local setup for both legacy and AWS-migrated applications, reducing onboarding time and manual effort.',
        'System Design & Architecture: Currently leading the development of a unified credit card transactions API serving both mobile and web platforms. Applied system design principles and design patterns to build scalable, maintainable code architecture. Implemented caching to boost performance and designed generic, property-driven Java code to minimize future changes and ensure scalability.',
      ],
    },
    {
      company: 'HSBC',
      role: 'Software Developer',
      location: 'Pune, India',
      date: 'Jul 2018 – Apr 2021',
      points: [
        'Collaborated with cross‑functional development and QA teams to design and deliver robust solutions aligned with client requirements.',
        'Provided production support, effectively troubleshooting live issues using AppDynamics and Splunk, ensuring minimal downtime and quick resolution.',
        'Understanding client requirements and translating them into technical solutions.',
        'Enhanced application quality by proactively addressing vulnerabilities and resolving bugs identified through Checkmarx, SonarQube, and NexusIQ, strengthening security and reliability',
      ],
    },
  ],

  projects: [
    {
      title: 'Mock Forge',
      emoji: '🔄',
      year: '2026',
      description: 'MockForge = a tool that forges API mocks from specs.',
      tech: ['React', 'Node.js', 'AI', 'Typescript', 'HTML/CS'],
      highlights: [
        'MockForge turns any OpenAPI 3.0 spec into a working mock backend instantly — with realtime logs, dynamic routing, and a built‑in API testing dashboard.',
        'Reduces efforts of creating mocks API manually.',
        'Easy mock generation reduces time to write test by 50%.',
      ],
      gradient: 'from-[#667eea] to-[#764ba2]',
      liveUrl: 'https://github.com/NehaChoudhary5',
      sourceUrl: 'https://github.com/NehaChoudhary5',
    },
  ],

  education: {
    university: 'Banasthali University',
    degree: 'B.Tech — Computer Science and Engineering',
    duration: '2014 — 2018',
    location: 'Rajasthan',
    cgpa: '7.5 / 10',
    coursework: [
      'DSA',
      'Operating Systems',
      'OOP Concepts',
      'Cloud Computing',
      'Software Engineering',
      'DBMS',
      'Java',
    ],
  },

  achievements: [
    {
      title: 'Front-End Performance Boost',
      icon: '🚀',
      description:
        "Created service in API for exporting user's account transaction, reducing page download time and saving user time.",
      stat: 'Previous download time : 3 minutes | Current : 4 secs max | 97% Faster download ',
    },
    {
      title: 'Developer Efficiency Boost',
      icon: '👩🏻‍💻',
      description: 'Legacy + AWS application setup automated for local systems',
      stat: 'Previous time consumed : 2 days | Current: 2 hrs | Time saved : 46 hours',
    },
    {
      title: 'Critical Bug Resolution',
      icon: '🐛',
      description:
        'Identified and fixed over 200 critical bugs in a high-traffic application, significantly enhancing system stability and user satisfaction across the platform.',
      stat: '200+ Bugs Fixed',
    },
    {
      title: 'Testing coverage Increased',
      icon: '📈',
      description:
        'Increased 2 APIs testing coverage significantly covering most edge, negative, positive cases via tests.',
      stat: 'JUnit - 95% , Mutation coverage : 91%',
    },
  ],

  certifications: [
    {
      name: 'Amazon Web Services Solutions Architect Associate',
      icon: 'FaAws',
    },
    { name: 'Diploma in Internet and Web Application', icon: 'FaHtml5' },
  ],
};
