export const SITE = {
  name: 'Moses Akash J',
  role: 'Senior Full-Stack Developer',
  tagline: 'Building scalable web applications & intelligent systems.',
  location: 'Trichy, Tamil Nadu, India',
  email: 'moses@processdrive.com',
  linkedin: 'https://linkedin.com/in/moses-akash-j',
  github: 'https://github.com/mosesakashj',
  resumeUrl: '/resume.pdf',
} as const

export const EDUCATION = {
  degree: 'Bachelor of Engineering in Computer Science',
  institution: 'C.A.R.E Group of Institutions, Anna University',
  years: '2016 – 2020',
} as const

export const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined
