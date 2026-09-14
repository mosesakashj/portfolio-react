import type { ExperienceEntry } from '@/types/experience'

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'processdrive',
    company: 'ProcessDrive India Pvt. Ltd',
    role: 'Senior Full Stack Developer',
    location: 'Hosur, Tamil Nadu',
    startDate: 'Oct 2020',
    endDate: 'Present',
    summary:
      'Lead the architecture, development, deployment, and continuous enhancement of three enterprise SaaS products used by over 150 business customers.',
    responsibilities: [
      'Designed and developed reporting modules (invoicing, resource planning, inventory) that surface breakdown/variance analysis and drive downstream recommendations for business teams.',
      'Built two-way integrations between web applications and external systems (Tripletex, PowerOffice, Shopify, Razorpay, Shiprocket, Microsoft Graph), significantly reducing manual reconciliation effort through automated synchronization.',
      'Improved API response times from 2.5s to 400ms using Redis caching, query optimization, and async processing; optimized SQL Server and PostgreSQL databases with 5M+ records for 60% faster queries.',
      'Deployed and maintained services on Microsoft Azure (Blob Storage, App Services) using Docker and CI/CD pipelines (GitHub Actions).',
      'Implemented Playwright-based end-to-end automation, improving regression stability and cutting manual testing effort across releases.',
      'Lead and mentor a team of 3 developers and 2 testers using Agile/Scrum practices (sprint planning, code reviews); mentored 5+ developers, reducing critical production incidents by 35%.',
    ],
    stack: [
      'React.js',
      'Vue.js',
      '.NET Core',
      'Laravel',
      'Node.js',
      'SQL Server',
      'PostgreSQL',
      'Redis',
      'Azure',
      'Docker',
    ],
  },
]
