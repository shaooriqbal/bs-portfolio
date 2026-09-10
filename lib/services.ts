export type Service = {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  navLabel: string;
  summary: string;
  hero: string;
  intro: string;
  badge?: string;
  problems: string[];
  includes: string[];
  process: { title: string; body: string }[];
  techStack: string[];
  deliverables: string[];
  cases?: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    href: "/services/custom-software-development",
    title: "Custom Enterprise Software Development",
    shortTitle: "Custom Software",
    navLabel: "Custom Software",
    summary:
      "Bespoke, high-concurrency web and mobile applications designed to scale with your enterprise. Built with modern microservices architecture, clean code practices, and automated testing.",
    hero: "Purpose-Built Enterprise Software Engineered for Scale",
    intro:
      "BurjSoft delivers end-to-end custom software development tailored to complex business workflows. From legacy refactoring to greenfield multi-tenant SaaS platforms, our senior engineers construct resilient systems designed for maximum uptime and security.",
    badge: "Core Engineering",
    problems: [
      "Off-the-shelf software failing to support proprietary business logic",
      "Legacy monolithic systems holding back scale and developer velocity",
      "High maintenance costs and frequent production outages",
      "Fragmented data siloes across disconnected enterprise tools",
      "Lack of automated test coverage and CI/CD deployment safety",
    ],
    includes: [
      "Senior U.S. and global engineering team assignment",
      "Full IP ownership under Miami, FL legal entity (BurjSoft LLC)",
      "Domain-driven microservices architecture & API design",
      "React, Next.js, Node.js, .NET Core, Python, and Angular stacks",
      "Automated unit, integration, and E2E testing pipelines",
      "Continuous deployment with zero-downtime release strategies",
    ],
    process: [
      {
        title: "1. Architecture Discovery",
        body: "We audit business requirements, system dependencies, and data flows to construct a comprehensive technical specification.",
      },
      {
        title: "2. Sprint Engineering",
        body: "Bi-weekly agile sprints with continuous staging deployments, PR code reviews, and transparent task tracking.",
      },
      {
        title: "3. QA & Security Hardening",
        body: "Automated regression testing, static code security scanning, and SOC 2 / GDPR compliance verification.",
      },
      {
        title: "4. Deployment & SLA Support",
        body: "Seamless cloud deployment with automated monitoring, metric telemetry, and ongoing 24/7 engineering support.",
      },
    ],
    techStack: [
      "React / Next.js",
      "Node.js / Express",
      ".NET Core / C#",
      "Python / FastAPI",
      "TypeScript",
      "PostgreSQL / Redis",
    ],
    deliverables: [
      "Production-ready codebase with 100% IP transfer",
      "Complete API documentation (OpenAPI/Swagger)",
      "Infrastructure as Code (Terraform / CloudFormation)",
      "Automated CI/CD workflow configurations",
    ],
    cases: [
      {
        title: "Enterprise Field Asset Platform",
        body: "Engineered a real-time asset tracking and commissioning engine handling 50,000+ daily field reports with offline sync capability.",
      },
      {
        title: "Multi-Tenant SaaS Portal",
        body: "Architected a scalable micro-frontend portal supporting 100,000+ active subscribers with sub-100ms response latencies.",
      },
    ],
    faqs: [
      {
        q: "Who owns the code and intellectual property?",
        a: "You retain 100% full ownership of all code, assets, repositories, and documentation created during our engagement under US law.",
      },
      {
        q: "How do you ensure code quality?",
        a: "Every pull request undergoes mandatory code reviews by senior lead architects, strict linting, type-checking, and automated test suite verification.",
      },
      {
        q: "Can you integrate with our internal engineering team?",
        a: "Yes. Our senior engineers can seamlessly plug into your existing Git workflows, Jira boards, and team rituals as an extended dev unit.",
      },
    ],
    related: [
      { href: "/services/cloud-devops", label: "Cloud Architecture & DevOps" },
      { href: "/services/dedicated-engineering-teams", label: "Dedicated Engineering Teams" },
    ],
  },
  {
    slug: "cloud-devops",
    href: "/services/cloud-devops",
    title: "Cloud Architecture & DevOps Engineering",
    shortTitle: "Cloud & DevOps",
    navLabel: "Cloud & DevOps",
    summary:
      "Cloud-native infrastructure, automated CI/CD pipelines, containerization with Kubernetes, and enterprise security monitoring across AWS, Azure, and Google Cloud.",
    hero: "High-Availability Cloud Infrastructure & Automated Pipelines",
    intro:
      "Modernize your cloud infrastructure with resilient, automated DevOps pipelines. BurjSoft builds self-healing cloud setups that cut infrastructure spending while maintaining 99.99% uptime and instant automated deployments.",
    badge: "Infrastructure",
    problems: [
      "Manual deployment processes prone to human error and downtime",
      "Unoptimized cloud bills on AWS, Azure, or GCP",
      "Slow release cycles due to missing CI/CD automation",
      "Single-point-of-failure infrastructure without auto-scaling",
      "Security compliance gaps and unmonitored server clusters",
    ],
    includes: [
      "Cloud Migration & Infrastructure Modernization",
      "Infrastructure as Code (IaC using Terraform & Pulumi)",
      "Docker Containerization & Kubernetes Orchestration (EKS/GKE)",
      "Automated CI/CD Pipelines (GitHub Actions, GitLab, Jenkins)",
      "24/7 Metric Telemetry & Observability (Prometheus, Grafana, Datadog)",
      "Cost Optimization & AWS/Azure Well-Architected Reviews",
    ],
    process: [
      {
        title: "1. Infrastructure Audit",
        body: "Evaluating current server topologies, deployment bottleneck points, security policies, and monthly cloud spend.",
      },
      {
        title: "2. IaC Blueprinting",
        body: "Writing modular, version-controlled Infrastructure as Code scripts to automate server provisionings.",
      },
      {
        title: "3. CI/CD Automation",
        body: "Building zero-downtime blue/green deployment pipelines with integrated automated security testing.",
      },
      {
        title: "4. Monitoring & Handoff",
        body: "Setting up real-time alerting thresholds and delivering complete DevOps runbooks to your team.",
      },
    ],
    techStack: [
      "AWS / Azure / GCP",
      "Terraform / Pulumi",
      "Kubernetes & Docker",
      "GitHub Actions",
      "Prometheus & Grafana",
      "Datadog / CloudWatch",
    ],
    deliverables: [
      "Version-controlled Infrastructure as Code (IaC)",
      "Automated Zero-Downtime Deployment Pipelines",
      "Monitoring & Real-Time Security Alert Dashboards",
      "Detailed Disaster Recovery & Backup Protocols",
    ],
    faqs: [
      {
        q: "Which cloud providers do you support?",
        a: "We have extensive expertise across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).",
      },
      {
        q: "Can you help reduce our monthly AWS cloud bill?",
        a: "Yes. Our cloud financial audit identifies idle resources, optimizes instance sizing, and implements auto-scaling schedules to lower spend by 20–40%.",
      },
    ],
    related: [
      { href: "/services/custom-software-development", label: "Custom Software Development" },
      { href: "/services/dedicated-engineering-teams", label: "Dedicated Engineering Teams" },
    ],
  },
  {
    slug: "fintech-payroll",
    href: "/services/fintech-payroll",
    title: "Fintech & Payroll Platform Engineering",
    shortTitle: "Fintech & Payroll",
    navLabel: "Fintech",
    summary:
      "Bank-grade financial platforms, Earned Wage Access (EWA) systems, automated payment gateways, and GDPR-compliant payroll processing applications.",
    hero: "Bank-Grade Financial & Earned Wage Access Platforms",
    intro:
      "Financial software demands zero tolerance for precision errors or security vulnerabilities. BurjSoft develops compliant fintech platforms handling millions of transactions safely, featuring real-time ledger balancing, ACH integrations, and encrypted data vaults.",
    badge: "Fintech Domain",
    problems: [
      "Strict GDPR, PCI-DSS, and SOC 2 security compliance mandates",
      "Complex multi-party payment clearing and ACH processing logic",
      "Real-time Earned Wage Access (EWA) calculations at enterprise scale",
      "High transaction latencies during peak payroll windows",
      "Risk of financial ledger mismatching across third-party banking APIs",
    ],
    includes: [
      "Earned Wage Access (EWA) & On-Demand Pay Engines",
      "Plaid, Stripe, Dwolla, and Direct Banking API Integrations",
      "Immutable Audit Logs & Double-Entry Ledger Systems",
      "PCI-DSS & SOC 2 Compliant Data Encryption Frameworks",
      "Real-Time Fraud Prevention & Anomaly Detection",
      "Multi-Currency & International Wire Processing",
    ],
    process: [
      {
        title: "1. Security & Compliance Protocol",
        body: "Mapping regulatory constraints (PCI-DSS, SOC 2, GDPR) into system architectural boundaries.",
      },
      {
        title: "2. Banking API Integration",
        body: "Implementing resilient webhooks and fail-safe retry mechanisms for bank transfer protocols.",
      },
      {
        title: "3. Double-Entry Ledger Build",
        body: "Constructing high-throughput transactional storage with strict mathematical verification loops.",
      },
      {
        title: "4. Audit & Penetration Testing",
        body: "Executing rigorous security stress tests before deploying financial systems into production.",
      },
    ],
    techStack: [
      "Node.js / TypeScript",
      ".NET / C# Financial Core",
      "PostgreSQL Ledger",
      "Plaid & Stripe APIs",
      "Redis Caching",
      "Docker / AWS Security Hub",
    ],
    deliverables: [
      "SOC 2 & GDPR compliant financial engine codebase",
      "Double-entry transactional ledger architecture",
      "Bank integration webhooks with automated fallbacks",
      "Complete PCI-DSS security compliance documentation",
    ],
    faqs: [
      {
        q: "How do you handle security and compliance for fintech platforms?",
        a: "We implement end-to-end data encryption in transit and at rest, role-based access control (RBAC), and strict isolation of Sensitive PII to comply with SOC 2, PCI-DSS, and GDPR.",
      },
      {
        q: "Have you built Earned Wage Access (EWA) platforms before?",
        a: "Yes. We have built high-scale EWA and employee financial wellness systems that integrate directly into enterprise payroll providers.",
      },
    ],
    related: [
      { href: "/services/custom-software-development", label: "Custom Software Development" },
      { href: "/services/cloud-devops", label: "Cloud Architecture & DevOps" },
    ],
  },
  {
    slug: "logistics-fleet",
    href: "/services/logistics-fleet",
    title: "Logistics & Fleet Management Software",
    shortTitle: "Logistics & Fleet",
    navLabel: "Logistics",
    summary:
      "Automated dispatching, real-time GPS fleet tracking, route optimization algorithms, and telematics integration for freight & transportation providers.",
    hero: "Real-Time Dispatch & Intelligent Fleet Software",
    intro:
      "Streamline supply chains with custom logistics software. BurjSoft builds real-time driver dispatching apps, dynamic routing engines, load optimization software, and automated telematics dashboards built for high reliability.",
    badge: "Logistics Domain",
    problems: [
      "Inefficient manual dispatching resulting in high fuel costs and delays",
      "Lack of real-time GPS visibility for shippers and fleet managers",
      "Unintegrated ELD telematics and driver safety tracking",
      "Paper-based proof-of-delivery causing invoice processing bottlenecks",
      "Inability to re-route drivers dynamically around traffic incidents",
    ],
    includes: [
      "Real-Time GPS Fleet Tracking & Geofencing",
      "Automated Driver Dispatching & Load Matching",
      "Route Optimization & Fuel Consumption Analytics",
      "Cross-Platform Mobile Apps for Drivers (iOS & Android)",
      "ELD Telematics & Driver HOS (Hours of Service) Compliance",
      "Digital Proof of Delivery (e-Signatures, Photo Uploads)",
    ],
    process: [
      {
        title: "1. Logistics Workflow Mapping",
        body: "Analyzing dispatch bottlenecks, driver communication channels, and telematics data streams.",
      },
      {
        title: "2. Real-Time Engine Setup",
        body: "Building low-latency WebSocket / MQTT streams for instant location updates and map rendering.",
      },
      {
        title: "3. Driver Mobile App Build",
        body: "Developing offline-first mobile apps for truck drivers with turn-by-turn navigation integrations.",
      },
      {
        title: "4. Fleet Dashboard Launch",
        body: "Deploying manager web portals featuring live vehicle maps, ETA calculators, and load status analytics.",
      },
    ],
    techStack: [
      "React Native / Flutter",
      "React / Next.js Dashboard",
      "Node.js WebSockets",
      "Mapbox / Google Maps API",
      "PostGIS Spatial Database",
      "AWS IoT Core",
    ],
    deliverables: [
      "Web Fleet Management Portal",
      "iOS & Android Driver Mobile Applications",
      "Spatial Route Optimization Engine",
      "Telematics API Integrations",
    ],
    faqs: [
      {
        q: "Can the driver app work in areas with poor cellular coverage?",
        a: "Yes. We build driver mobile apps with offline-first synchronization, caching route states and signatures locally until connection is restored.",
      },
    ],
    related: [
      { href: "/services/custom-software-development", label: "Custom Software Development" },
      { href: "/services/cloud-devops", label: "Cloud Architecture & DevOps" },
    ],
  },
  {
    slug: "real-estate-proptech",
    href: "/services/real-estate-proptech",
    title: "Real Estate (PropTech) & Broker CRM Platforms",
    shortTitle: "PropTech & Real Estate",
    navLabel: "PropTech",
    summary:
      "Automated lead capture platforms, MLS/IDX property feed integrations, broker CRM systems, and digital transaction management tools.",
    hero: "High-Converting PropTech Platforms & Broker CRMs",
    intro:
      "Transform real estate operations with purpose-built PropTech solutions. From viral open-house lead capture apps (like Curb Hero) to complex broker CRM platforms with automatic MLS feed ingestion, BurjSoft powers modern real estate technology.",
    badge: "PropTech Domain",
    problems: [
      "Manual lead capture resulting in cold open-house follow-ups",
      "Fragmented MLS property data syncing across regional boards",
      "Generic CRM tools that don't match real estate transaction workflows",
      "Lack of automated SMS/email nurturing sequences for home buyers",
      "Clunky property listing management interfaces",
    ],
    includes: [
      "MLS / IDX Automated Property Feed Ingestion",
      "Open House Lead Capture & Digital Sign-In Kiosks",
      "Custom Real Estate Brokerage CRM & Pipeline Management",
      "Automated SMS & Email Lead Nurture Workflows",
      "Document Signing & Digital Transaction Vaults",
      "Comparative Market Analysis (CMA) Generation Tools",
    ],
    process: [
      {
        title: "1. Real Estate Strategy",
        body: "Mapping agent lead flows, property feed sync frequencies, and brokerage CRM requirements.",
      },
      {
        title: "2. MLS Data Normalization",
        body: "Building robust RETS / RESO Web API connectors to ingest and normalize property listings.",
      },
      {
        title: "3. Agent & Buyer Portal Engineering",
        body: "Crafting lightning-fast search interfaces and intuitive mobile sign-in experiences.",
      },
      {
        title: "4. Automation & Launch",
        body: "Integrating Twilio SMS, email marketing webhooks, and analytics dashboards.",
      },
    ],
    techStack: [
      "Next.js / React",
      "Node.js / Express",
      "RESO Web API / MLS",
      "Twilio / SendGrid APIs",
      "Elasticsearch Property Search",
      "PostgreSQL",
    ],
    deliverables: [
      "Real Estate Lead Capture Kiosk & Web App",
      "RESO-compliant MLS Data Pipeline",
      "Agent Brokerage Pipeline CRM Dashboard",
      "Automated Lead Nurture Engine",
    ],
    faqs: [
      {
        q: "Do you have experience with MLS property data integrations?",
        a: "Yes. We have engineered RESO Web API and RETS connectors to aggregate and index property listings seamlessly.",
      },
    ],
    related: [
      { href: "/services/custom-software-development", label: "Custom Software Development" },
      { href: "/services/dedicated-engineering-teams", label: "Dedicated Engineering Teams" },
    ],
  },
  {
    slug: "dedicated-engineering-teams",
    href: "/services/dedicated-engineering-teams",
    title: "Dedicated Engineering Teams & Team Augmentation",
    shortTitle: "Dedicated Teams",
    navLabel: "Dedicated Teams",
    summary:
      "Scale your engineering bandwidth with senior full-stack developers, software architects, and QA leads who embed directly into your company.",
    hero: "Scale Bandwidth with Senior Dedicated Engineer Pods",
    intro:
      "Accelerate your product roadmap with BurjSoft's dedicated engineering teams. Operating under transparent Miami LLC governance with 100+ global engineers, our pods integrate directly into your sprint rituals with an average client retention of 6+ years.",
    badge: "Staff Augmentation",
    problems: [
      "Slow local hiring pipelines and high recruiter placement fees",
      "Unreliable freelance developers with high turnover rates",
      "Lack of senior software architectural oversight on critical projects",
      "Need for flexible engineering bandwidth that can scale up or down",
      "Timezone alignment and communication barriers with traditional offshore vendors",
    ],
    includes: [
      "Dedicated Senior Developers (React, Next.js, Node, .NET, Angular, Python)",
      "Software Architects & Technical Project Managers",
      "Dedicated QA Automation Engineers & DevOps Specialists",
      "Direct integration into your Slack, GitHub, Jira, and Daily Standups",
      "Miami LLC governance, contract enforcement, and IP safety",
      "Flexible monthly contracts with straightforward scaling terms",
    ],
    process: [
      {
        title: "1. Skill Match & Interview",
        body: "We match your stack requirements and present vetted senior candidates for direct technical interviews.",
      },
      {
        title: "2. Fast Onboarding (1-2 Weeks)",
        body: "Selected engineers complete repository setup, access setup, and join your daily standups.",
      },
      {
        title: "3. Direct Management & Velocity",
        body: "Engineers commit code directly into your repositories and report to your internal engineering leads.",
      },
      {
        title: "4. Continuous Growth & Scale",
        body: "Add additional specialized roles (DevOps, QA, UI/UX) as your product roadmap evolves.",
      },
    ],
    techStack: [
      "Full-Stack React & Node.js",
      ".NET Core & C#",
      "Angular & TypeScript",
      "Python & Data Engineering",
      "Mobile iOS / Android",
      "DevOps & QA Automation",
    ],
    deliverables: [
      "Dedicated senior software engineers embedded in your team",
      "Full daily code commits directly to your private repositories",
      "Clear monthly transparent billing under Miami LLC framework",
      "Zero recruitment overhead or long-term hiring liability",
    ],
    faqs: [
      {
        q: "How fast can a BurjSoft dedicated engineer join our project?",
        a: "Most engagements ramp up within 1 to 2 weeks following initial candidate interview sign-off.",
      },
      {
        q: "What timezone do your engineers work in?",
        a: "Our global engineering core works overlapping hours tailored to US Eastern, Central, and European business working windows.",
      },
    ],
    related: [
      { href: "/services/custom-software-development", label: "Custom Software Development" },
      { href: "/services/cloud-devops", label: "Cloud Architecture & DevOps" },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
