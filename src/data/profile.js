import { LINKS } from './links'

export const PROFILE = {
  name: 'Piyush Kushwaha',
  shortName: 'Piyush K.',
  title: 'Aspiring Software Developer',
  location: 'Prayagraj, Uttar Pradesh, India',
  education: '3rd Year BTech · Information Technology · AKTU',
  tagline:
    'Passionate about solving real-world problems with code, strong in DSA, and always building hands-on projects.',
  bio: [
    '3rd-year BTech IT student at AKTU with a drive to turn ideas into working software. I love competitive programming, open-source contributions, and collaborating on team projects that ship real impact.',
    'Skilled in C/C++, HTML, CSS, JavaScript, React, and Linux — with a lifelong learner mindset and curiosity for emerging tech trends.',
  ],
  roles: [
    'Software Developer',
    'DSA Enthusiast',
    'Open Source Contributor',
    'AKTU IT Student',
    'Problem Solver',
  ],
  skills: [
    'C/C++',
    'JavaScript',
    'React',
    'HTML & CSS',
    'Linux',
    'Generative AI',
    'Google Cloud',
    'Data Structures',
    'Algorithms',
    'Git & GitHub',
    'Team Collaboration',
    'Web Development',
  ],
  linkedin: {
    connections: 500,
    followers: 3697,
    url: LINKS.linkedin,
  },
  googleSkills: {
    league: 'Diamond League',
    points: 15860,
    memberSince: '2024',
    profileUrl: 'https://cloudskillsboost.google/public_profiles/72864a23-ae8a-456b-8f76-176d40d9441e',
  },
  highlights: [
    { label: 'University', value: 'AKTU', sub: 'BTech IT · Year 3' },
    { label: 'Google Cloud', value: 'Diamond', sub: '15,860 skill points' },
    { label: 'Mindset', value: 'Team Player', sub: 'Collaborative builder' },
  ],
}

/** LinkedIn Licenses & Certifications + verified Google Cloud badges */
export const ACHIEVEMENTS = {
  linkedinCerts: [
    {
      id: 'gcp-linkedin',
      title: 'Google Certifications',
      issuer: 'Google Cloud Skills Boost',
      date: 'May 2025',
      source: 'LinkedIn',
      type: 'certification',
      url: 'https://cloudskillsboost.google/public_profiles/72864a23-ae8a-456b-8f76-176d40d9441e/badges/15533323',
      description: 'Verified on LinkedIn Licenses & Certifications section.',
    },
    {
      id: 'gdg-linkedin',
      title: 'Google Certifications',
      issuer: 'Google Developers Group',
      date: '2025',
      source: 'LinkedIn',
      type: 'certification',
      url: LINKS.linkedin,
      description: 'Google developer ecosystem certification listed on LinkedIn.',
    },
  ],
  featured: [
    {
      id: 'diamond-league',
      title: 'Diamond League',
      issuer: 'Google Cloud Skills Boost',
      date: '2025',
      badge: '💎',
      points: 15860,
      description: 'Top-tier learner tier on Google Skills with 15,860+ points earned through labs, quests, and skill badges.',
    },
    {
      id: 'gen-ai',
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud',
      date: 'May 2025',
      badge: '🤖',
      description: 'Foundational microlearning on Generative AI, real-world use cases, and building Gen AI apps with Google tools.',
    },
    {
      id: 'gemini-rag',
      title: 'Gemini Multimodality & Multimodal RAG',
      issuer: 'Google Cloud',
      date: 'Aug 2025',
      badge: '🔍',
      description: 'Multimodal prompts, document metadata, text chunk retrieval, and RAG pipelines using Gemini.',
    },
    {
      id: 'building-blocks',
      title: 'Level 3: Building Blocks',
      issuer: 'Google Cloud',
      date: 'May 2025',
      badge: '🏗️',
      description: 'Hands-on with Artifact Registry, Cloud Run, secrets, traffic control, and containerized deployments.',
    },
  ],
  badges: [
    { title: 'Skills Boost Arcade Certification Zone', date: 'Apr 2025', category: 'Cloud' },
    { title: 'Skills Boost Arcade Base Camp', date: 'Apr 2025', category: 'Cloud' },
    { title: 'Level 3: The Arcade Quiz', date: 'May 2025', category: 'Cloud' },
    { title: 'Skills Boost Arcade Trivia May 2025', date: 'May 2025', category: 'Cloud' },
    { title: 'AI Boost: Prompting like a Pro', date: 'Aug 2025', category: 'AI' },
    { title: 'AI Boost: Content Generation with Gemini', date: 'Aug 2025', category: 'AI' },
    { title: 'AI Boost: NotebookLM Competitive Edge', date: 'Aug 2025', category: 'AI' },
    { title: 'AI Boost: Gemini Image-to-Sheets', date: 'Aug 2025', category: 'AI' },
    { title: 'AI Boost: Customer Insights with NotebookLM', date: 'Aug 2025', category: 'AI' },
    { title: 'AI Boost: Gemini Gems Marketing', date: 'Aug 2025', category: 'AI' },
    { title: 'AI Boost: TL;DR with Gemini in Docs', date: 'Aug 2025', category: 'AI' },
    { title: 'AI Boost: Personalization with Prompts', date: 'Aug 2025', category: 'AI' },
  ],
}

export const FEATURED_PROJECTS = [
  {
    id: 'tncc',
    name: 'TNCC · SARECM',
    repo: 'tncc-sarecm',
    description: 'College technical project built for TNCC — a focused web solution showcasing practical IT skills and team collaboration.',
    language: 'HTML',
    tags: ['TNCC', 'Web', 'College Project'],
    featured: true,
    github: 'https://github.com/Pk1823/tncc-sarecm',
  },
  {
    id: 'gdgoc',
    name: 'Setu · GDG On Campus',
    repo: 'GDGoc',
    description: 'AI-powered Academic Recall Assistant using Google Gemini and RAG — built for GDG On Campus TechSprint.',
    language: 'Python',
    tags: ['AI', 'Gemini', 'RAG'],
    github: 'https://github.com/Pk1823/GDGoc',
  },
]

export const PROFILE_IMAGE = '/images/profile.png'
