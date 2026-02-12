export const personalInfo = {
  name: "Sohan Reddy",
  title: "Data Engineer | Azure Databricks | ETL Pipelines | MS in Data Science",
  email: "sohan.siddenki@gmail.com",
  phone: "+1 (904) 861-9116",
  location: "Jacksonville, Florida, United States",
  linkedin: "https://www.linkedin.com/in/sohan-reddy-7a8235183/",
  github: "https://github.com/sohanreddy",
  resumeUrl: "/resume.pdf",
};

export const about = {
  summary:
    "Experienced Data Engineer specializing in cloud-based data solutions, ETL pipeline development, and AI-powered analytics. Currently leading data modernization initiatives at D2I Healthcare while leveraging expertise from previous work with Johnson & Johnson. Passionate about transforming complex data challenges into scalable, efficient solutions that drive business value.",
  highlights: [
    {
      title: "Cloud Data Modernization",
      description: "Leading migration of legacy SSIS-based ETL pipelines to modern AWS Databricks architecture, achieving 30%+ runtime reduction through metadata-driven frameworks and optimized data orchestration.",
      icon: "Database",
    },
    {
      title: "Multi-Cloud Expertise",
      description: "Proficient in both Azure and AWS ecosystems, building robust data pipelines using Databricks, Data Factory, Glue, Lambda, and Step Functions for seamless data integration across platforms.",
      icon: "Workflow",
    },
    {
      title: "Healthcare Analytics",
      description: "Specialized experience in healthcare data engineering, including pharma reporting automation, regulatory compliance (HIPAA, GDPR), and real-time data processing for critical healthcare insights.",
      icon: "TrendingUp",
    },
    {
      title: "AI & Advanced Analytics",
      description: "Integrating AI/ML capabilities into data pipelines, including NLP, LLM integration, and predictive modeling to enable intelligent, data-driven decision-making across organizations.",
      icon: "Award",
    },
    {
      title: "Enterprise Solutions",
      description: "Proven track record delivering enterprise-scale solutions for Fortune 500 companies, automating reporting workflows, and improving data accuracy by 40% through robust validation frameworks.",
      icon: "Briefcase",
    },
    {
      title: "Technical Leadership",
      description: "Collaborating with cross-functional teams, mentoring junior engineers, and driving best practices in data governance, code quality, and agile development methodologies.",
      icon: "Users",
    },
  ],
};

export const skills = {
  "Data Engineering": [
    "Azure Databricks",
    "AWS Databricks",
    "Microsoft Azure",
    "Amazon S3",
    "ETL / ELT Pipelines",
    "Data Architecture & Modeling",
    "Azure Data Factory (ADF)",
    "AWS Glue & Lambda",
    "Delta Lake",
    "PySpark",
    "Hive / SQL Server",
    "Data Integration Frameworks",
    "SSIS to Cloud Migration",
    "Metadata-Driven Pipelines",
    "Data Orchestration (Step Functions, Airflow)",
  ],
  "Business Intelligence": [
    "Power BI",
    "Databricks SQL",
    "Dashboard Design & KPI Development",
    "Data Visualization",
    "Reporting Automation",
    "Data Analysis & Exploration",
    "DAX & Power Query",
    "Stakeholder Insights Dashboards",
    "Executive Metrics Tracking",
  ],
  "Programming & Tools": [
    "Python (pandas, numpy, pyspark, smtplib, boto3)",
    "SQL (T-SQL, HiveQL, Spark SQL)",
    "Git / GitHub / Bitbucket",
    "Azure DevOps / CI-CD Pipelines",
    "Jenkins / Ansible Tower",
    "JSON / XML / REST APIs",
    "Jupyter / VS Code / Databricks Notebooks",
    "Shell Scripting (Bash)",
    "Kafka (Confluent Platform)",
    "Docker (basic familiarity)",
  ],
  "Artificial Intelligence & Machine Learning": [
    "Machine Learning Fundamentals (Regression, Classification, Clustering)",
    "Predictive Modeling & Statistical Analysis",
    "Feature Engineering & Data Preprocessing",
    "Model Evaluation (Cross-validation, ROC, AUC)",
    "AI-Powered Analytics (NLP, Text Classification, LLM Integration)",
    "Natural Language to SQL Automation",
    "Chatbot & AI Assistant Integration (LangChain, Streamlit)",
    "Prompt Engineering & Generative AI Tools",
    "Model Deployment (MLflow, Databricks ML)",
    "OpenAI, Anthropic Claude, and Hugging Face APIs",
  ],
  "Data Science": [
    "Data Mining & Statistical Analysis",
    "Time Series Forecasting",
    "Experiment Design & A/B Testing",
    "Exploratory Data Analysis (EDA)",
    "Data Cleaning & Transformation",
    "Hypothesis Testing",
    "Research and Insights Generation",
  ],
  "Best Practices": [
    "Data Governance & Data Quality",
    "Agile & Scrum Methodologies",
    "Documentation & Knowledge Management",
    "Code Review & Version Control",
    "CI/CD and Release Automation",
    "Cloud Cost Optimization",
    "Security and Compliance (PHI, HIPAA, GDPR Awareness)",
  ],
};

export const experience = [
  {
    company: "Intuceo (via iCube)",
    role: "Data Engineer | D2I Healthcare",
    period: "Aug 2025 - Present",
    location: "New Jersey, United States (Remote)",
    description: "Currently working as a Data Engineer on D2I Healthcare's Data Modernization and Cloud Migration initiative.",
    achievements: [
      "Leading migration of on-premise SSIS-based ETL pipelines to a modern AWS Databricks architecture",
      "Building reusable PySpark frameworks for extracting, transforming, and loading data from multiple sources into Amazon S3 and Delta tables",
      "Integrating AWS Glue, Lambda, and Step Functions to orchestrate ETL workflows",
      "Designing metadata-driven ingestion and monitoring frameworks for both batch and near real-time data processing",
      "Collaborating with business and analytics teams to modernize data access and reduce ETL runtime by over 30%",
    ],
    technologies: ["AWS Databricks", "PySpark", "Amazon S3", "AWS Glue", "Lambda", "Step Functions", "SQL", "Delta Lake", "SSIS"],
  },
  {
    company: "Intuceo (via iCube)",
    role: "Data Engineer | Johnson & Johnson",
    period: "Dec 2022 - Jul 2025",
    location: "Jacksonville, Florida, United States",
    description: "Worked as a Data Engineer on Johnson & Johnson's JJAR (Johnson & Johnson Activity Repository) and Pharma Reporting Automation programs.",
    achievements: [
      "Migrated legacy QlikView/NPrinting dashboards to Databricks SQL, fully automating report generation and email delivery",
      "Developed end-to-end ETL workflows for PASS 1/2/3, ArisG, and PSMF Pharma reporting",
      "Implemented data aggregation and validation frameworks ensuring data quality and consistency across environments (DEV, UAT, PROD)",
      "Improved dashboard refresh times and data accuracy, increasing reporting efficiency by 40%",
      "Partnered with global stakeholders for delivery planning, QA validation, and monthly release automation",
    ],
    technologies: ["Azure Databricks", "PySpark", "Delta Lake", "Hive", "Power BI", "Python", "QlikView", "NPrinting"],
  },
];

export const projects = [
  {
    title: "New York City Shooting Victims: Analysis of the Most At-Risk Population",
    description: "An academic research project exploring gun violence patterns in New York City using NYPD Shooting Incident Data (2006–2019). Conducted comprehensive data analysis to identify at-risk populations and inform community health and safety policies.",
    achievements: [
      "Conducted data cleaning, feature extraction, and visualization using R and Python (pandas, matplotlib, seaborn)",
      "Built demographic and geographic visualizations to identify at-risk populations by age, race, and gender",
      "Analyzed borough-level trends, temporal patterns, and location-based risk (public housing, nightlife establishments)",
      "Developed insights supporting data-informed community health and safety policies",
      "Associated with George Mason University (Aug 2022 - Dec 2022)",
    ],
    technologies: [
      "R",
      "Python",
      "pandas",
      "matplotlib",
      "seaborn",
      "Data Visualization",
      "Statistical Analysis",
      "Data Cleaning",
    ],
    github: "#", // Placeholder - will be updated when repository is created
    demo: "https://drive.google.com/file/d/1VXDAKZF2PLP_xAyH6Abi18j94YKF9WJD/view?usp=share_link",
  },
];

export const education = {
  degree: "Master of Science in Data Science",
  university: "George Mason University",
  location: "Fairfax, Virginia",
  period: "Jan 2021 - Dec 2022",
  gpa: "4.0 / 4.0",
  highlights: [
    "Perfect 4.0 GPA",
    "Gained firm understanding of data science concepts and techniques",
    "Specialized in machine learning, statistical analysis, and data visualization",
  ],
  coursework: [
    "Machine Learning",
    "Statistical Analysis",
    "Data Visualization",
    "Big Data Analytics",
    "Data Mining",
    "Predictive Modeling",
  ],
};

export const certifications = [
  {
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    date: "2024",
    credentialUrl: "https://credentials.databricks.com/347df483-b5b3-4783-a469-9eb57aee1423#acc.dDVHlBNp",
    logo: "databricks",
  },
];
