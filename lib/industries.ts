export type Industry = {
  slug: string;
  href: string;
  title: string;
  subtitle: string;
  summary: string;
  iconName: string;
  keyFeatures: string[];
  stats: { label: string; value: string }[];
  caseStudy: {
    client: string;
    title: string;
    description: string;
    impact: string;
  };
};

export const industries: Industry[] = [
  {
    slug: "fintech-payroll",
    href: "/industries/fintech-payroll",
    title: "Fintech & Payroll",
    subtitle: "Bank-Grade Financial Systems & On-Demand Pay Solutions",
    summary:
      "Engineered for high concurrency, zero ledger discrepancy, and full compliance with SOC 2, PCI-DSS, and GDPR regulations.",
    iconName: "CreditCard",
    keyFeatures: [
      "Earned Wage Access (EWA) Engines",
      "Immutable Ledger Transaction Vaults",
      "Plaid & Stripe Banking Webhooks",
      "Automated Payroll Disbursement",
    ],
    stats: [
      { label: "Daily Transactions Processed", value: "1M+" },
      { label: "Ledger Accuracy SLA", value: "100%" },
      { label: "Security Compliance", value: "SOC 2 / GDPR" },
    ],
    caseStudy: {
      client: "Earned Wage Access Provider",
      title: "Global Payroll & Immediate Wage Transfer Core",
      description:
        "Architected an EWA backend connecting directly into employer payroll systems to deliver sub-second salary transfers for employees across 4 countries.",
      impact: "Processed over $150M in wage advances with 0 security incidents.",
    },
  },
  {
    slug: "logistics-fleet",
    href: "/industries/logistics-fleet",
    title: "Logistics & Fleet Ops",
    subtitle: "Intelligent Fleet Management & Driver Dispatch Apps",
    summary:
      "Real-time GPS tracking, spatial routing algorithms, telematics integration, and automated driver dispatch for freight & transportation operations.",
    iconName: "Truck",
    keyFeatures: [
      "Sub-Second GPS Telematics Stream",
      "Offline-First Mobile Driver App",
      "Spatial Route & Fuel Optimization",
      "Digital e-Signature Proof of Delivery",
    ],
    stats: [
      { label: "Active Fleet Vehicles", value: "25,000+" },
      { label: "Fuel Spend Reduced", value: "18%" },
      { label: "Telemetry Latency", value: "< 200ms" },
    ],
    caseStudy: {
      client: "North American Freight Carrier",
      title: "Automated Dispatch & Driver Telematics System",
      description:
        "Built a real-time dispatch control center and mobile driver application connecting ELD hardware, routing engines, and customer tracking portals.",
      impact: "Reduced dispatcher manual workload by 45% and improved on-time deliveries by 22%.",
    },
  },
  {
    slug: "real-estate-proptech",
    href: "/industries/real-estate-proptech",
    title: "Real Estate (PropTech)",
    subtitle: "High-Converting Lead Capture & MLS Data Networks",
    summary:
      "Automated open house sign-in platforms, RESO-compliant MLS property data pipelines, and custom real estate brokerage CRM systems.",
    iconName: "Building",
    keyFeatures: [
      "Open House Lead Capture Kiosks",
      "RESO Web API & MLS Ingestion",
      "Brokerage Pipeline Management",
      "Automated SMS/Email Follow-Up",
    ],
    stats: [
      { label: "Leads Captured", value: "500,000+" },
      { label: "MLS Boards Integrated", value: "30+" },
      { label: "Agent Conversion Uplift", value: "+34%" },
    ],
    caseStudy: {
      client: "Curb Hero / PropTech Platform",
      title: "Digital Open House Sign-In & Brokerage Growth App",
      description:
        "Engineered a mobile and web lead-capture platform used by thousands of real estate agents to capture, verify, and nurture home buyer leads automatically.",
      impact: "Empowered tens of thousands of agents with instant lead sync into top CRMs.",
    },
  },
  {
    slug: "field-engineering",
    href: "/industries/field-engineering",
    title: "Engineering & Field Ops",
    subtitle: "Industrial Commissioning & Asset Management Suites",
    summary:
      "Field engineering inspection software, equipment commissioning forms, safety compliance tracking, and project management portals for complex industrial environments.",
    iconName: "Wrench",
    keyFeatures: [
      "Offline Field Inspection Forms",
      "Industrial Asset Lifecycle Tracking",
      "Automated Regulatory Compliance Audit",
      "Photo & Blueprint Annotation Tools",
    ],
    stats: [
      { label: "Field Reports Processed", value: "2M+" },
      { label: "Commissioning Speedup", value: "3x" },
      { label: "Data Loss Incidents", value: "0" },
    ],
    caseStudy: {
      client: "Industrial Engineering Consultancy",
      title: "Commissioning & Safety Compliance Platform",
      description:
        "Replaced legacy paper binders with an offline-capable tablet app for engineers performing field audits in remote industrial facilities.",
      impact: "Eliminated manual data re-entry, saving 15 hours per engineer per week.",
    },
  },
];
