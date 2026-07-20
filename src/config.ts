export const siteConfig = {
  name: "Tri, Nguyen",
  title: "Logistics & Operations Excellence Specialist",
  description: "Portfolio website of Minh Tri",
  accentColor: "#1d4ed8",
  social: {
    email: "tri.lamviec@example.com",
    linkedin: "https://linkedin.com/in/trilamviec",
    facebook: "https://facebook.com/tritaptheduc",
    github: "https://github.com/tritaptheduc",
  },
  aboutMe:
    "Logistics and Supply Chain professional with hands-on experience spanning from on-site maritime operations to supply chain data analysis. Adept at bridging the gap between field execution and data-driven cost optimization. Strong focus on building analytical workflows, lane benchmarking, and data automation to eliminate operational waste and identify savings opportunities.",
  skills: ["Power BI", "Excel", "Power Query", "Power Pivot", "SQL", "Python", "Google App Scripts"],
  projects: [
    {
      name: "SALES-DATA AUTOMATION & OPTIMIZATION (Applied DMAIC Framework)",
      description:
        "Optimize data processing time for business personnel (from taking around 30 minutes every day to being automated end-to-end, standardize the Master data structure (Single Source of Truth) to directly serve connecting automatic reporting Dashboards.",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["GAS", "BigQuery SQL", "Looker Studio"],
    },
    {
      name: "AutoAudit-Logistics: Automated Freight Invoice Audit Engine | SQL, Python, Power BI - DAX",
      description:
        "Designed and deployed an end-to-end automated freight invoice auditing pipeline using the Lean Six Sigma DMAIC framework to eliminate systemic corporate logistics cost leakage.",
      link: "https://github.com/tritaptheduc/logistics-freight-audit",
      skills: ["Python", "BigQuery SQL", "Power BI"],
    },
    {
      name: "FreightBench-Analytics: Ocean Freight Rate Benchmarking Engine | BigQuery SQL, Python, Power BI, DAX",
      description:
        "Accelerated sales quoting cycle efficiency by 95% (reducing response time from 4 hours to under 10 seconds), completely eliminated out-of-date pricing risks, and locked in optimal carrier routing to protect net logistics margins across all active trade lanes.",
      link: "https://github.com/tritaptheduc/logistics-freight-rates",
      skills: ["Python", "BigQuery SQL", "Power BI"],
    },
  ],
  experience: [
    {
      company: "ENIC",
      title: "Demand & Supply Chain Planning",
      dateRange: "Feb 2025 - Present",
      bullets: [
        "Monitored and analyzed daily sales data for 100+ SKUs, shifting from rigid forecasting to dynamic trend adjustments based on market fluctuations",
        "Planned and executed order placement and loading schedules, ensuring smooth and continuous supply flow",
        "Monitored daily sales data to support planning and maintain data accuracy across master data",
      ],
    },
    {
      company: "ThangLong Surveying Services",
      title: "Maritime Operational Surveyor",
      dateRange: "Mar 2023 - Dec 2024",
      bullets: [
        "Spearheaded cross-functional coordination with shipowners and port authorities to resolve critical logistics issues, reducing cargo loss by 20% and optimizing claim costs by 40-60%",
        "Conducted draft surveys and pre-/during-loading inspections to determine cargo quantities in compliance with international standards",
        "Performed on-hire/off-hire and damage surveys, preparing detailed reports in English for clients and stakeholders",
      ],
    },
  ],
  education: [
    {
      school: "Ho Chi Minh City University of Transport",
      degree: "Bachelor of Logistics & Supply Chain Management",
      dateRange: "2023 - 2025",
      achievements: [
        "Graduated with 3.6 GPA",
      ],
    },
    {
      school: "UNIGAP",
      degree: "Data Analytics Course",
      dateRange: "2024",
      achievements: [
        "5 Hands-on Project of Data analytics with SQL, Python, Power BI - DAX",
      ],
    },
    {
      school: "Maritime College II",
      degree: "Maritime Vessels Navigation",
      dateRange: "2020 - 2023",
      achievements: [
        "Exchange Student – APEC-SEN Global Maritime Leadership Program (KIMFT - Korea)",
      ],
    },
  ],
};
