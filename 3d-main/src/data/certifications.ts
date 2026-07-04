/**
 * ─────────────────────────────────────────────────────────────────────────
 * CERTIFICATIONS DATA
 * ─────────────────────────────────────────────────────────────────────────
 * Single source of truth for the "Certifications & Training" section.
 *
 * HOW TO ADD A NEW CERTIFICATE
 * 1. Drop a preview image (ideally 1270x848, .webp) into `public/images/`.
 * 2. Copy one of the objects below and fill in your details.
 * 3. Save — the carousel and counters update automatically.
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface Certification {
  /** Unique, stable, url-safe id (kebab-case). */
  id: string;
  /** Full certificate title. */
  title: string;
  /** Issuing organization, shown as the badge. */
  issuer: string;
  /** Path under /public, e.g. "/images/my_cert.webp". */
  image: string;
}

export const certifications: Certification[] = [
  {
    id: "hackerrank-sql-advanced",
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    image: "/images/hackerrank_sql_advanced.webp",
  },
  {
    id: "aws-data-engineering",
    title: "AWS Academy Graduate: Data Engineering",
    issuer: "AWS Academy",
    image: "/images/aws_data_engineering.webp",
  },
  {
    id: "ibm-data-analysis-python",
    title: "Data Analysis Using Python",
    issuer: "IBM",
    image: "/images/ibm_data_analysis_python.webp",
  },
  {
    id: "anthropic-ai-fluency",
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    image: "/images/anthropic_ai_fluency.webp",
  },
  {
    id: "cisco-data-analytics",
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    image: "/images/cisco_data_analytics.webp",
  },
  {
    id: "jpmorgan-quant-research",
    title: "Quantitative Research Job Simulation",
    issuer: "JPMorgan Chase & Co.",
    image: "/images/jpmorgan_quant_research.webp",
  },
  {
    id: "citi-mqa",
    title: "Markets Quantitative Analysis (MQA) Job Simulation",
    issuer: "Citi",
    image: "/images/citi_mqa.webp",
  },
  {
    id: "deloitte-data-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    image: "/images/deloitte_data_analytics.webp",
  },
  {
    id: "forage-data-labeling",
    title: "Data Labeling Job Simulation",
    issuer: "Forage",
    image: "/images/forage_data_labeling.webp",
  },
];
