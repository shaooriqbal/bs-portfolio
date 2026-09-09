export const site = {
  name: "BurjSoft",
  legalName: "BurjSoft LLC",
  tagline: "Purpose-Built Custom Software Engineering for High-Growth Enterprises",
  description:
    "BurjSoft builds mission-critical custom software for Fintech, Logistics, Real Estate (PropTech), and Field Engineering operations. Miami-registered LLC with 100+ global software engineers.",
  phone: "+1 (305) 555-0199",
  phoneHref: "+13055550199",
  whatsapp: "13055550199",
  email: "contact@burjsoft.com",
  address: "Miami, Florida, United States",
  owner: "BurjSoft Engineering Team",
  guarantee: "Enterprise SLA & Security Assurance",
  hours: "24/7 Global Engineering Operations",
  stats: {
    engineers: "100+",
    engagementYears: "6+ Years",
    projectsDelivered: "50+",
    uptime: "99.99%",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
];

export const projectTypes = [
  "Custom Enterprise Platform",
  "Fintech / Payroll Software",
  "Logistics & Fleet Dispatch",
  "Real Estate / PropTech CRM",
  "Field Engineering Software",
  "Cloud Architecture & DevOps",
  "Dedicated Engineering Team",
  "Legacy System Modernization",
] as const;

export const techStackList = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  ".NET Core / C#",
  "Angular",
  "Python / AI Integrations",
  "AWS / Azure / GCP",
  "Docker & Kubernetes",
  "PostgreSQL / Redis",
  "GraphQL / REST APIs",
];

export const homeFaqs = [
  {
    q: "What makes BurjSoft different from traditional offshore agencies?",
    a: "We operate as an extended engineering core under Miami LLC governance, focusing on multi-year strategic engagements (average 6+ years). We assign dedicated senior engineers who embed directly into your workflows.",
  },
  {
    q: "Which industries does BurjSoft specialize in?",
    a: "We have deep domain expertise in Fintech & Payroll, Logistics & Fleet Operations, Real Estate (PropTech), and Industrial Field Engineering.",
  },
  {
    q: "How fast can you ramp up an engineering team?",
    a: "Depending on stack requirements, we can deploy senior software engineers, architects, and QA leads within 1 to 2 weeks.",
  },
  {
    q: "How do you handle IP protection and security compliance?",
    a: "All code and intellectual property remain 100% owned by your business under US jurisdiction. We adhere to strict GDPR, SOC 2, and ISO security standards.",
  },
  {
    q: "What is your engagement model?",
    a: "We offer dedicated engineering teams (Time & Materials with flexible scaling) as well as fixed-scope milestone deliverables for defined product roadmaps.",
  },
  {
    q: "Do you support cloud infrastructure and DevOps?",
    a: "Yes. We design cloud-native architectures on AWS, Azure, and GCP, implement automated CI/CD pipelines, container orchestration (Docker/K8s), and 24/7 monitoring.",
  },
];

export const whyChoose = [
  "Miami LLC governance with transparent U.S. legal compliance & IP ownership",
  "Deep domain specialization in Fintech, Logistics, PropTech & Engineering",
  "Senior engineering core with proven 6+ year average client retention",
  "Agile 2-week sprint cycles with continuous deployment & transparent reporting",
  "Comprehensive QA automation & enterprise-grade security protocols",
  "Scalable team model from single module delivery to 20+ engineer pods",
];

export function whatsappUrl(text?: string) {
  const message =
    text ||
    "Hi BurjSoft, I would like to schedule a software architecture discovery call for my enterprise project.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

