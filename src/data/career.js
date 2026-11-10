export const career = [
  {
    id: "devocho",
    company: "DevOcho",
    context:
      "Nearshore software consultancy serving U.S. clients in healthcare, real estate, industrial & logistics, and SaaS & tech. Assigned to a Leading U.S. Marine Manufacturer.",
    location: "Santiago, DR (Hybrid)",
    dates: "Apr 2026 – Present",
    current: true,
    roles: [
      {
        title: "Solutions Architect",
        dates: "Nov 2026 – Present",
        current: true,
        scope:
          "Designs end-to-end solution architectures (database, backend and frontend) from the client's SOW to approval, translates U.S. stakeholder requirements into architecture decisions, and supports delivery teams.",
      },
      {
        title: "Senior DBA, Enterprise Data Services",
        dates: "Aug 2026 – Present",
        current: true,
        scope:
          "Embedded as a contractor in the client's Enterprise Data Services team: database design and T-SQL development for the application teams, database change governance, and backup administration of the production SQL Server platforms alongside the primary DBA.",
      },
      {
        title: "Software Development Team Lead",
        dates: "Jun 2026 – Nov 2026",
        scope:
          "Designed the Warranty Claims Module architecture and led 3 engineers (1 Senior, 1 Mid, 1 Junior) from kickoff to delivery: code reviews, 1:1s, requirement translation with U.S. stakeholders, and the team's stories and tasks in Taiga alongside the delivery lead.",
      },
      {
        title: "Software Engineer (C# / .NET)",
        dates: "Apr 2026 – Jun 2026",
        scope:
          "C# / .NET engineering on the client's Dealer Portal on AWS: part of the KnowledgeBase team; built the SharePoint-to-S3 migration tooling and ran the migration.",
      },
    ],
    achievements: [
      {
        title: "Architecture & Leadership: Warranty Claims Module",
        text: "As Team Lead, designed the end-to-end architecture (database, backend, frontend) within the first 3 weeks, starting from the client's SOW; the client approved it. Led 3 engineers through delivery and kept refining the design with U.S. stakeholder feedback.",
      },
      {
        title: "Cloud Migration: KnowledgeBase Module",
        text: "Part of the team that built a document-management engine on AWS S3 (C# / .NET backend, frontend and stored procedures) to replace per-dealer SharePoint access. I built the migration tooling (a Python tool that mapped SharePoint into a migration inventory and a C# tool that used it to resolve dependencies) and ran the migration of 10,000+ files, which eliminated 800 SharePoint licenses across the dealer network.",
      },
      {
        title: "ML-Driven Observability",
        text: "Designed and built from scratch an observability platform for the production SQL Server servers (Grafana, Prometheus, Alertmanager, sql_exporter, windows_exporter), using ML analysis to choose the key metrics and alerts. It complements the commercial IDERA suite.",
      },
      {
        title: "Database Development & Change Governance",
        text: "Took over the Database Developer function for the application team (T-SQL, stored procedures, schema changes and query performance) and standardized database change requests in Jira, with structured SQL scripts and database code review before each production release.",
      },
      {
        title: "Reliability & Legacy Integration",
        text: "After a transactional outage, identified the root cause (legacy non-durable in-memory tables, SCHEMA_ONLY) and replaced them with durable tables. Completed the data-integration pipeline from legacy systems into the Dealer Portal, and fixed Data Warehouse feeds when application changes broke them.",
      },
    ],
    tags: ["C# / .NET", "SQL Server", "AWS", "Python", "Grafana", "Prometheus", "Jira", "Taiga"],
  },
  {
    id: "homs",
    company: "Hospital Metropolitano de Santiago (HOMS)",
    context: "Healthcare institution in Santiago, Dominican Republic.",
    location: "Santiago, DR",
    dates: "Jul 2025 – Apr 2026",
    roles: [{ title: "Data Engineer (Data Architecture Lead)", dates: "Jul 2025 – Apr 2026" }],
    achievements: [
      {
        title: "First centralized Data Warehouse",
        text: "Led the institutional data-modernization strategy and designed the hospital's first centralized Data Warehouse, both its concept and its technical architecture.",
      },
      {
        title: "Clinical & administrative ETL",
        text: "Designed and orchestrated ETL workflows that integrate heterogeneous clinical and administrative systems, with data-quality and governance policies for accurate executive reporting.",
      },
      {
        title: "ML & NLP for geospatial data",
        text: "Applied ML and NLP text processing to normalize patient addresses and sectors, improving operational logistics.",
      },
      {
        title: "BI & real-time visibility",
        text: "Delivered BI dashboards and automated reports that cut reporting time and gave medical leadership real-time visibility.",
      },
      {
        title: "Chronic-care messaging prototype",
        text: "Prototyped an automated follow-up messaging service for the chronic-care program with the Meta WhatsApp API and engagement analytics.",
      },
    ],
    tags: ["Python", "SQL Server", "ETL", "Data Warehousing", "NLP", "BI Dashboards"],
  },
  {
    id: "est",
    company: "Engineering and Service Technological (E&ST)",
    context: "Claro Dominicana contractor (telecommunications).",
    location: "Remote, DR",
    dates: "Mar 2022 – Jul 2025",
    roles: [{ title: "Software Engineer (Full Stack & Microservices)", dates: "Mar 2022 – Jul 2025" }],
    achievements: [
      {
        title: "High-availability microservices",
        text: "Built features for telecom platforms on a Java/Spring Boot microservices architecture (Red Hat), with the scalability and fault tolerance needed for mass service provisioning.",
      },
      {
        title: "REST & SOAP APIs",
        text: "Designed REST and SOAP APIs that improved inter-node communication and reduced transaction latency in the Prepaid and Fleet portals.",
      },
      {
        title: "Portal re-engineering",
        text: "Re-engineered the backend and frontend of the prepaid administrative portals, enabling the launch of new digital products.",
      },
      {
        title: "High-traffic USSD & Oracle SQL",
        text: "Implemented high-traffic USSD services and Oracle SQL logic for sales segmentation and number-inventory management under heavy load.",
      },
    ],
    tags: ["Java", "Spring Boot", "Red Hat", "REST", "SOAP", "Oracle SQL", "USSD"],
  },
];
