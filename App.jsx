// src/App.js
import React, { useState } from "react";

/* =======================
   Static Data Definitions
   ======================= */

const STATS = {
  layers: 30,
  modules: 320,
  workflows: 4800,
  nodes: 3200
};

const OVERVIEW_POINTS = {
  whatIs: [
    "Prediction AI is a multi-layer, multi-agent prediction and forecasting engine built to analyze patterns, identify trends, and generate outcome predictions across multiple domains.",
    "It is designed as a plug-and-play prediction infrastructure that a buyer can use to build commercial platforms, SaaS products, API services, mobile apps, or private enterprise tooling.",
    "It is a clean, internal-only project—no external developers, no contractors, and no third-party code beyond standard open-source libraries.",
    "All architecture, workflows, nodes, modules, writing, diagrams, and system design were created entirely in-house.",
    "This makes Prediction AI ideal for resale, licensing, or integration into an existing product ecosystem."
  ],
  domains: [
    "Sports predictions",
    "Financial market forecasting",
    "Risk assessment",
    "Operational forecasting for businesses",
    "Performance trends",
    "Custom scenario simulation"
  ],
  purposeAccuracy: [
    "Predictive trend forecasting",
    "Outcome probability analysis",
    "Market behavior modeling",
    "Customer behavior insights",
    "Operational risk reduction"
  ],
  purposeSaaS: [
    "Subscription prediction dashboards",
    "AI betting advisory platforms (sports/legal markets only)",
    "AI simulators for trading",
    "AI forecasting models for small–medium businesses",
    "Predictive analytics B2B services"
  ],
  automation: [
    "Automated modeling",
    "Multi-variable analysis",
    "Weighted scoring",
    "Monte-Carlo simulations",
    "Real-time predictions",
    "Probability scoring (0–100%)"
  ],
  oneParagraphSummary:
    "Prediction AI is a 30-layer, 320-module, 4,800-workflow, 3,200-node multi-agent prediction engine built with a fully modular architecture, modern AI stack, and enterprise-class infrastructure. It provides multi-domain predictions—sports, finance, business, and risk—powered by time-series modeling, probability engines, and simulation systems. The codebase is clean, 100% original, with no external contributors, fully containerized, documented, and ready for immediate commercial use or integration as a SaaS, API, or enterprise forecasting platform."
};

const ARCHITECTURE_GROUPS = [
  {
    group: "Layers 0–5 – Core Infrastructure & System Foundations",
    layers: [
      {
        name: "Layer 0 — Monorepo Architecture",
        bullets: [
          "Unified folder structure",
          "Shared services & base libraries",
          "Repository-level documentation",
          "Global environment configuration"
        ]
      },
      {
        name: "Layer 1 — System Bootstrapping",
        bullets: ["Init services", "Core runtime", "Secure configuration loaders"]
      },
      {
        name: "Layer 2 — Environment Management",
        bullets: [".env structure", "Secrets handling", "API keys & credential isolation"]
      },
      {
        name: "Layer 3 — Utilities & Shared Functions",
        bullets: ["Math helpers", "Time-series utilities", "Custom data structures"]
      },
      {
        name: "Layer 4 — Logging & Telemetry",
        bullets: ["Activity logging", "Request/response trace", "System monitoring hooks"]
      },
      {
        name: "Layer 5 — Error Handling & Resiliency",
        bullets: ["Fail-safe handlers", "Retry strategies", "Input validation"]
      }
    ]
  },
  {
    group: "Layers 6–12 – AI Data Pipeline & Preprocessing",
    layers: [
      {
        name: "Layer 6 — Multi-Source Data Ingestion",
        bullets: ["API ingestion", "File ingestion", "Stream ingestion", "Input validation"]
      },
      {
        name: "Layer 7 — Data Cleaning Engine",
        bullets: ["Noise detection", "Missing value treatment", "Normalization", "Deduplication"]
      },
      {
        name: "Layer 8 — Feature Engineering",
        bullets: ["Feature extraction", "Feature scaling", "Derived variable creation"]
      },
      {
        name: "Layer 9 — Pattern Detection Engine",
        bullets: ["Moving averages", "Volatility scanning", "Trend profiling"]
      },
      {
        name: "Layer 10 — Time-Series Modeling",
        bullets: ["Sliding windows", "Autocorrelation patterns", "Model-ready dataset shaping"]
      },
      {
        name: "Layer 11 — Dataset Storage Layer",
        bullets: ["Local cache", "Model-ready datasets", "Training archive"]
      },
      {
        name: "Layer 12 — Data Orchestration Layer",
        bullets: ["Workflow routing", "Data lifecycle management"]
      }
    ]
  },
  {
    group: "Layers 13–18 – Prediction & Modeling Core",
    layers: [
      {
        name: "Layer 13 — Prediction Model Hub",
        bullets: ["Regression models", "Classification models", "Ensemble models"]
      },
      {
        name: "Layer 14 — Probability Engine",
        bullets: [
          "Weighted scoring",
          "Bayesian inference",
          "Multi-scenario probability distribution"
        ]
      },
      {
        name: "Layer 15 — Simulation Engine",
        bullets: [
          "Monte-Carlo simulation",
          "Risk scenario modeling",
          "Outcome distribution charts"
        ]
      },
      {
        name: "Layer 16 — Domain-Specific Prediction Modules",
        bullets: [
          "Sports prediction agents",
          "Market prediction agents",
          "Business forecasting agents"
        ]
      },
      {
        name: "Layer 17 — Pattern Synthesis Engine",
        bullets: [
          "Cross-domain trend analysis",
          "Correlation mapping",
          "Multi-factor modeling"
        ]
      },
      {
        name: "Layer 18 — Core Inference Engine",
        bullets: ["Fast inference", "Batch inference", "Real-time probability scoring"]
      }
    ]
  },
  {
    group: "Layers 19–24 – Automation, Agents & Reporting",
    layers: [
      {
        name: "Layer 19 — Multi-Agent Orchestration System",
        bullets: ["Task routing", "Agent-to-agent messaging", "Process automation"]
      },
      {
        name: "Layer 20 — Model Training Pipelines",
        bullets: ["Nightly training cycles", "Automatic retraining", "Performance scoring"]
      },
      {
        name: "Layer 21 — Auto-Update Engine",
        bullets: ["Continuous improvement", "Model-refresh triggers", "Data-driven tuning"]
      },
      {
        name: "Layer 22 — Notification & Alert Layer",
        bullets: ["Email alerts", "Event triggers", "Webhook integration"]
      },
      {
        name: "Layer 23 — Report Generator",
        bullets: ["Daily predictions", "Weekly summaries", "Exportable PDFs/CSV"]
      },
      {
        name: "Layer 24 — Visualization & Insights Engine",
        bullets: ["Charts & graphs", "Trend visualization", "Prediction timelines"]
      }
    ]
  },
  {
    group: "Layers 25–30 – Application Layer, APIs & Deployment",
    layers: [
      {
        name: "Layer 25 — API Gateway",
        bullets: ["REST endpoints", "GraphQL endpoints", "Endpoint authentication"]
      },
      {
        name: "Layer 26 — Frontend Templates",
        bullets: ["UI dashboards", "Data visualization components", "Account panels"]
      },
      {
        name: "Layer 27 — Full Developer Documentation",
        bullets: ["API docs", "Deployment instructions", "Integration guide"]
      },
      {
        name: "Layer 28 — DevOps & Infrastructure Deployment",
        bullets: ["Dockerfile", "docker-compose.yml", "Kubernetes manifests", "Auto-scaling"]
      },
      {
        name: "Layer 29 — Testing & QA Layer",
        bullets: ["Unit tests", "Integration tests", "End-to-end workflows"]
      },
      {
        name: "Layer 30 — Production Layer",
        bullets: ["Release builds", "Versioning", "Scaling profiles", "Buyer onboarding assets"]
      }
    ]
  }
];

const INVENTORY = {
  modules: {
    total: 320,
    categories: [
      {
        name: "Core System",
        count: 52,
        purpose: "Foundation services and base infrastructure."
      },
      {
        name: "AI Engine",
        count: 80,
        purpose: "Modeling, training, and inference across domains."
      },
      {
        name: "Prediction Modules",
        count: 96,
        purpose: "Sports, markets, business, and risk prediction logic."
      },
      {
        name: "Workflow Automation",
        count: 44,
        purpose: "Multi-agent orchestration and pipeline automation."
      },
      {
        name: "Visualization Modules",
        count: 28,
        purpose: "Graphs, dashboards, and reporting components."
      },
      {
        name: "DevOps / Deployment",
        count: 20,
        purpose: "Infrastructure automation, deployment, and monitoring."
      }
    ]
  },
  workflows: {
    total: 4800,
    categories: [
      {
        name: "Data ingestion & preparation workflows",
        count: 900,
        detail:
          "Data ingestion, live stream updating, normalization, noise reduction, and trend tagging."
      },
      {
        name: "Modeling workflows",
        count: 1100,
        detail:
          "Model training, pattern recognition, probability calculation, variable weighting, and scenario simulation."
      },
      {
        name: "Prediction workflows",
        count: 1300,
        detail:
          "Sports prediction, financial prediction, business forecasting, risk modeling, and performance scoring."
      },
      {
        name: "Automation & multi-agent workflows",
        count: 800,
        detail: "Alerts, orchestration, model refresh cycles, and API publishing."
      },
      {
        name: "Reporting & output workflows",
        count: 700,
        detail:
          "Dashboard feeds, visualization rendering, export functions, and API response formatters."
      }
    ]
  },
  nodes: {
    total: 3200,
    categories: [
      {
        name: "Data Nodes",
        count: 600,
        purpose: "Ingestion, transformation, and cleaning of raw data."
      },
      {
        name: "AI Nodes",
        count: 900,
        purpose: "Model training, scoring, and inference."
      },
      {
        name: "Prediction Nodes",
        count: 850,
        purpose: "Domain-specific outcomes for markets, sports, and business."
      },
      {
        name: "Workflow Nodes",
        count: 450,
        purpose: "Automation, orchestration, and internal routing."
      },
      {
        name: "Visualization Nodes",
        count: 300,
        purpose: "Dashboards, charts, timelines, and API presentation."
      },
      {
        name: "DevOps Nodes",
        count: 120,
        purpose: "Deployment, logging, scaling, and CI/CD."
      }
    ]
  }
};

const TECH_STACK = {
  backend: [
    "Python (AI & Modeling)",
    "Node.js (API Gateway)",
    "FastAPI / Express for endpoints"
  ],
  ai: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow / PyTorch (optional layer)"],
  frontend: ["React", "Chart.js / D3.js for visualization"],
  database: ["PostgreSQL (core DB)", "Redis (caching & queues)"],
  infra: ["Docker", "Kubernetes", "Git-based versioning"]
};

const STRENGTHS = [
  {
    title: "Fully Modular Architecture",
    points: [
      "Every part of Prediction AI is isolated, reusable, and upgradeable.",
      "Modules, workflows, and nodes can be extended without breaking the core system."
    ]
  },
  {
    title: "Clean Codebase & Clean IP",
    points: [
      "No outside contributors, no freelance development, no cloned code.",
      "No GPL, restrictive, or viral licenses. Only permissive, commercially safe libraries.",
      "100% in-house development with fully original architecture."
    ]
  },
  {
    title: "Containerized & Deployment Ready",
    points: [
      "Docker, Docker Compose, and Kubernetes manifests included.",
      "CI/CD templates available for cloud or on-prem deployment.",
      "Supports AWS, Azure, GCP, or custom infrastructure."
    ]
  },
  {
    title: "Multi-Agent Automation",
    points: [
      "Internal agents for cleaning data, detecting patterns, running simulations, and generating predictions.",
      "Agents coordinate via internal workflows for speed and scalability."
    ]
  },
  {
    title: "Flexible Commercialization",
    points: [
      "Launch as a SaaS platform, API prediction service, private enterprise system, or subscription-based prediction business.",
      "Built specifically as a clean IP asset for sale, transfer, and enterprise adoption."
    ]
  }
];

const FAQ_ENTRIES = [
  {
    q: "Q1: Who owns the Prediction AI codebase?",
    a: "The entire codebase, architecture, documentation, and all related assets are solely owned by the creator of Prediction AI. No third-party ownership exists, and no code rights have been transferred, shared, or licensed to anyone."
  },
  {
    q: "Q2: Who authored the code originally?",
    a: "All code, workflows, architecture designs, system instructions, and documentation were authored exclusively by the system’s original creator. There were no co-authors, contractors, agencies, or external developers involved at any stage."
  },
  {
    q: "Q3: Has any outside developer ever accessed the code?",
    a: "No. Prediction AI is a fully clean, privately developed system. No external developer, freelancer, agency, team member, or third-party contributor has accessed, modified, or reviewed the source code."
  },
  {
    q: "Q4: Are there any external or viral licenses (GPL, AGPL, LGPL, etc.)?",
    a: "No. Prediction AI avoids all restrictive or viral licenses. Any open-source libraries used (e.g., NumPy, Pandas, Scikit-learn) are under permissive licenses suitable for commercial use."
  },
  {
    q: "Q5: Has any code been copied or sourced from public repositories?",
    a: "No. All system architecture, multi-layer structure, modules, workflows, and nodes were planned and built originally. No copied code, no template projects, and no code reuse from outside sources."
  },
  {
    q: "Q6: How old is the codebase?",
    a: "Prediction AI is a recent build, developed within the last development cycle. It follows modern engineering practices and uses current libraries, frameworks, and architectural patterns."
  },
  {
    q: "Q7: What is the version history or commit history?",
    a: "The project follows a structured internal versioning approach. All commits, improvements, layer updates, workflow expansions, and module additions were performed by a single creator, ensuring a clean and traceable development path."
  },
  {
    q: "Q8: Is the system built using modern standards?",
    a: "Yes. The architecture follows best practices for modular components, predictive modeling pipelines, multi-agent orchestration, time-series analysis, containerization, API-first design, and documentation-first engineering."
  },
  {
    q: "Q9: What programming languages are used?",
    a: "Python is used for AI, modeling, and probability engines; Node.js powers the API gateway and orchestration; JavaScript/React powers dashboards and visualization; PostgreSQL and Redis back the data and caching layers."
  },
  {
    q: "Q10: What major libraries and frameworks are included?",
    a: "NumPy, Pandas, and Scikit-learn for AI/ML; a TensorFlow/PyTorch-ready structure for deep learning; FastAPI or Express on the backend; React and Chart.js on the frontend; Docker and Kubernetes for infrastructure."
  },
  {
    q: "Q11: Is the architecture scalable?",
    a: "Yes. Prediction AI is built on a 30-layer microservice-ready architecture, enabling both vertical scaling (larger models) and horizontal scaling (more users and workflows)."
  },
  {
    q: "Q12: Does Prediction AI store customer data?",
    a: "No customer data has ever been stored. The system is template-ready and can integrate with customer data sources, but no production data exists in the current version."
  },
  {
    q: "Q13: Is the system compliant with standard data-handling practices?",
    a: "Yes. It uses secure environment variables, avoids hardcoded credentials, manages controlled API access, and clearly separates data ingestion from processing layers."
  },
  {
    q: "Q14: Are there any security risks or legacy components?",
    a: "No. Prediction AI uses modern libraries, updated dependencies, and current modeling approaches. There is no legacy stack to replace."
  },
  {
    q: "Q15: How many layers, modules, workflows, and nodes does Prediction AI include?",
    a: "Prediction AI contains 30 layers, 320+ modules, 4,800+ workflows, and 3,200+ nodes, all categorized, indexed, and documented for developers."
  },
  {
    q: "Q16: How do the internal AI agents work?",
    a: "Modular agents handle data cleaning, feature extraction, probability scoring, simulation modeling, cross-domain trend synthesis, and automated report generation. Agents communicate via internal routing workflows for speed and reliability."
  },
  {
    q: "Q17: What infrastructure deployment options are available?",
    a: "Prediction AI is fully containerized and includes a Dockerfile, docker-compose.yml, Kubernetes manifests, and optional CI/CD configuration templates. It can run on AWS, Azure, GCP, or self-hosted environments."
  },
  {
    q: "Q18: Are testing frameworks included?",
    a: "Yes. Prediction AI includes unit test templates, integration test structure, workflow validation tests, and API response tests as a foundation for QA."
  },
  {
    q: "Q19: What does the development cycle look like?",
    a: "The development cycle follows architecture planning, layer-by-layer scaffolding, module development, workflow automation, node creation, testing and validation, documentation and diagrams, and final packaging for acquisition."
  },
  {
    q: "Q20: Who maintains the system today?",
    a: "Prediction AI is in a completed, stable, handoff-ready state. No maintenance is required unless the buyer chooses to extend functionality."
  },
  {
    q: "Q21: Can a buyer extend the system easily?",
    a: "Yes. The modular 30-layer architecture allows new prediction modules, data sources, frontends, third-party API integrations, and modeling engines to be added without disrupting the core."
  },
  {
    q: "Q22: Are there any long-term dependencies?",
    a: "No. Prediction AI is self-contained and does not rely on any external, ongoing third-party service to function."
  },
  {
    q: "Q23: What exactly will the buyer receive?",
    a: "The buyer receives the full codebase, all layers, modules, workflows, and nodes; branding assets (if applicable); technical and operational documentation; architecture and workflow diagrams; module maps; API documentation; deployment files; and a buyer onboarding guide."
  },
  {
    q: "Q24: Are there any restrictions after transfer?",
    a: "No. The buyer receives full ownership, full IP rights, and unlimited commercial usage."
  },
  {
    q: "Q25: Is the creator involved after the sale?",
    a: "The system was designed for zero ongoing obligations. A paid transition support period can be arranged if a buyer wants additional onboarding, but it is not required."
  }
];

const WHY_BUY = [
  {
    title: "1. Fully Built AI Prediction Platform (Rare on the Market)",
    bullets: [
      "No need to hire a full team or spend $300k–$500k on development.",
      "No 12–18 month build cycle—Prediction AI is already architected and packaged.",
      "Architecture, modules, workflows, and nodes are already in place and documented."
    ]
  },
  {
    title: "2. Easily Commercializable",
    bullets: [
      "Launch a SaaS prediction platform, B2B analytics dashboard, or financial forecasting service.",
      "Offer sports prediction subscriptions or private enterprise forecasting tools.",
      "Use Prediction AI as a white-label engine behind multiple products."
    ]
  },
  {
    title: "3. Everything Ready for Handoff",
    bullets: [
      "Documentation is complete, organized, turnkey, and professional.",
      "Designed specifically to pass technical due diligence and IP review.",
      "Enterprise buyers can integrate quickly with their own engineering teams."
    ]
  }
];

/* ======================
   Layout & Shared Components
   ====================== */

const NavBar = ({ activePage, onChangePage }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">Prediction AI</div>
        <div className="navbar-subtitle">
          Multi-Layer, Multi-Agent Forecasting &amp; Risk Intelligence
        </div>
      </div>
      <nav className="navbar-right">
        <button
          className={`nav-link ${activePage === "overview" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("overview")}
        >
          Overview
        </button>
        <button
          className={`nav-link ${activePage === "ask" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("ask")}
        >
          Ask Prediction AI
        </button>
        <button
          className={`nav-link ${activePage === "simlab" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("simlab")}
        >
          Simulation Lab
        </button>
        <button
          className={`nav-link ${activePage === "domains" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("domains")}
        >
          Domains
        </button>
        <button
          className={`nav-link ${activePage === "models" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("models")}
        >
          Models
        </button>
        <button
          className={`nav-link ${activePage === "workflows" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("workflows")}
        >
          Workflows
        </button>
        <button
          className={`nav-link ${activePage === "ingestion" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("ingestion")}
        >
          Data
        </button>
        <button
          className={`nav-link ${activePage === "agents" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("agents")}
        >
          Agents
        </button>
        <button
          className={`nav-link ${activePage === "insights" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("insights")}
        >
          Insights
        </button>
        <button
          className={`nav-link ${activePage === "api" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("api")}
        >
          API
        </button>
        <button
          className={`nav-link ${activePage === "archive" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("archive")}
        >
          Archive
        </button>
        <button
          className={`nav-link ${activePage === "architecture" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("architecture")}
        >
          Architecture
        </button>
        <button
          className={`nav-link ${activePage === "diligence" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("diligence")}
        >
          Due Diligence
        </button>
        <button
          className={`nav-link ${activePage === "admin" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("admin")}
        >
          Admin
        </button>
        <button
          className={`nav-link ${activePage === "legal" ? "nav-link-active" : ""}`}
          onClick={() => onChangePage("legal")}
        >
          Legal
        </button>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-main">
        <span className="footer-title">Prediction AI</span>
        <span className="footer-divider">•</span>
        <span className="footer-owner">Owned &amp; created by Maria Robles</span>
      </div>
      <div className="footer-sub">
        <span>© {new Date().getFullYear()} Maria Robles. All rights reserved.</span>
        <span className="footer-divider">•</span>
        <span>
          Demonstration interface only — predictions displayed here are mock examples and
          not financial or betting advice.
        </span>
      </div>
    </footer>
  );
};

/* ========= Shared Cards ========= */

const StatCard = ({ label, value, hint }) => (
  <div className="stat-card">
    <div className="stat-label">{label}</div>
    <div className="stat-value">{value}</div>
    <div className="stat-hint">{hint}</div>
  </div>
);

const InventoryCard = ({ title, totalLabel, total, description, rows }) => (
  <div className="inventory-card">
    <div className="inventory-header">
      <h2 className="inventory-title">{title}</h2>
      <div className="inventory-total">
        <span className="inventory-total-label">{totalLabel}</span>
        <span className="inventory-total-value">{total}</span>
      </div>
    </div>
    <p className="inventory-description">{description}</p>
    <table className="inventory-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Count</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx}>
            <td>{row.name}</td>
            <td>{row.count}</td>
            <td>{row.purpose || row.detail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const StackColumn = ({ title, items }) => (
  <div className="stack-col">
    <h3 className="mini-heading">{title}</h3>
    <ul className="bullet-list tight">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

const FaqItem = ({ active, question, answer, onClick }) => (
  <div className={`faq-item ${active ? "faq-item-active" : ""}`}>
    <button className="faq-question" onClick={onClick}>
      <span>{question}</span>
      <span className="faq-toggle">{active ? "−" : "+"}</span>
    </button>
    {active && <div className="faq-answer">{answer}</div>}
  </div>
);

/* ======================
   Overview Page
   ====================== */

const OverviewPage = () => {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-main">
          <h1 className="hero-title">Enterprise Prediction Engine, Ready for Transfer</h1>
          <p className="hero-subtitle">
            A clean, original, fully documented multi-domain prediction platform built for
            resale, licensing, or direct enterprise integration — with no outside developers and
            no shared code.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">30 Layers</span>
            <span className="hero-tag">320+ Modules</span>
            <span className="hero-tag">4,800+ Workflows</span>
            <span className="hero-tag">3,200+ Nodes</span>
            <span className="hero-tag hero-tag-strong">Clean IP • 100% In-House</span>
          </div>
        </div>
        <div className="hero-sidecard">
          <h2 className="sidecard-title">What Prediction AI Is</h2>
          <ul className="bullet-list tight">
            {OVERVIEW_POINTS.whatIs.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="stats-row">
        <StatCard
          label="Total Layers"
          value={STATS.layers}
          hint="From raw data ingestion to production deployment."
        />
        <StatCard
          label="Total Modules"
          value={STATS.modules}
          hint="Core system, AI engine, prediction logic, automation, and DevOps."
        />
        <StatCard
          label="Total Workflows"
          value={STATS.workflows.toLocaleString()}
          hint="Automated pipelines covering data, modeling, prediction, and reporting."
        />
        <StatCard
          label="Total Nodes"
          value={`${STATS.nodes.toLocaleString()}+`}
          hint="Fine-grained building blocks across all 30 layers."
        />
      </section>

      <section className="section-grid">
        <div className="section-card">
          <h2 className="section-title">Prediction Domains</h2>
          <p className="section-description">
            Prediction AI operates across multiple high-value domains, using the same
            underlying multi-agent engine.
          </p>
          <ul className="pill-list">
            {OVERVIEW_POINTS.domains.map((item, idx) => (
              <li key={idx} className="pill">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="section-card">
          <h2 className="section-title">Purpose — Accuracy for Real Businesses</h2>
          <p className="section-description">
            Most organizations lack the tooling to interpret their own data. Prediction AI
            closes that gap.
          </p>
          <h3 className="mini-heading">Accuracy Boost for Businesses</h3>
          <ul className="bullet-list">
            {OVERVIEW_POINTS.purposeAccuracy.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="section-card">
          <h2 className="section-title">Plug-and-Play AI for SaaS Builders</h2>
          <p className="section-description">
            Entrepreneurs and product teams can turn Prediction AI into multiple revenue
            streams immediately.
          </p>
          <ul className="bullet-list">
            {OVERVIEW_POINTS.purposeSaaS.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="section-card">
          <h2 className="section-title">Replace Manual Analysis with Automated AI</h2>
          <p className="section-description">
            Instead of human analysts manually hunting for patterns, Prediction AI handles the
            heavy lifting.
          </p>
          <ul className="bullet-list">
            {OVERVIEW_POINTS.automation.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="summary-card">
        <h2 className="section-title">One-Paragraph Technical Summary</h2>
        <p className="summary-text">{OVERVIEW_POINTS.oneParagraphSummary}</p>
      </section>

      <section className="whybuy-section">
        <h2 className="section-title">Why a Buyer Would Want Prediction AI</h2>
        <div className="whybuy-grid">
          {WHY_BUY.map((block, idx) => (
            <div key={idx} className="whybuy-card">
              <h3 className="whybuy-title">{block.title}</h3>
              <ul className="bullet-list tight">
                {block.bullets.map((b, i2) => (
                  <li key={i2}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ======================
   Ask Prediction AI Page
   ====================== */

const mockPredictions = [
  {
    id: 1,
    question: "Who is more likely to win: Team A vs Team B tonight?",
    domain: "Sports",
    probability: "Team A win: 64%",
    confidence: "Confidence: High",
    reasoning:
      "Recent form, injury reports, and pace-of-play stats favor Team A. Team B’s defense has underperformed in the last 5 games.",
    horizon: "Next 24 hours"
  },
  {
    id: 2,
    question: "Will monthly revenue grow next month?",
    domain: "Business",
    probability: "Revenue growth: 72%",
    confidence: "Confidence: Medium–High",
    reasoning:
      "Seasonality, pipeline volume, and historical conversion rates indicate a strong probability of growth, with marketing uplift as a key driver.",
    horizon: "Next 30 days"
  },
  {
    id: 3,
    question: "Short-term BTC price trend over the next 24 hours?",
    domain: "Markets",
    probability: "Upward momentum: 58%",
    confidence: "Confidence: Medium",
    reasoning:
      "Momentum factors, order book imbalance, and volatility clustering suggest a mild bullish bias, but with elevated intraday noise.",
    horizon: "Next 24 hours"
  }
];

const AskPredictionPage = () => {
  const [question, setQuestion] = useState("");
  const [domain, setDomain] = useState("Sports");
  const [results, setResults] = useState(mockPredictions);

  const handleAsk = () => {
    const filtered =
      domain === "All"
        ? mockPredictions
        : mockPredictions.filter((p) => p.domain === domain);

    setResults(filtered.length ? filtered : mockPredictions);
  };

  return (
    <div className="page">
      <h1 className="page-title">Ask Prediction AI</h1>
      <p className="page-subtitle">
        Interactive prediction console with mock responses that demonstrate how the engine
        scores outcomes, probabilities, and confidence.
      </p>

      <div className="ask-layout">
        <div className="ask-form-card">
          <h2 className="section-title">Ask a Question</h2>
          <p className="section-description">
            Choose a domain and describe the scenario you want Prediction AI to evaluate. This
            interface uses scripted examples for demonstration.
          </p>
          <div className="form-group">
            <label className="form-label">Domain</label>
            <select
              className="form-select"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            >
              <option>Sports</option>
              <option>Markets</option>
              <option>Business</option>
              <option>Risk</option>
              <option>All</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Prediction Question</label>
            <textarea
              className="form-textarea"
              placeholder="Example: Who is more likely to win: Team A vs Team B tonight?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <button className="primary-btn" onClick={handleAsk}>
            Run Mock Prediction
          </button>
          <p className="form-note">
            Note: This environment shows mock predictions only. It is designed to demonstrate
            how a live probability engine would respond.
          </p>
        </div>

        <div className="ask-results-card">
          <h2 className="section-title">Mock Prediction Output</h2>
          <p className="section-description">
            These examples simulate the behavior of the Probability Engine and Simulation
            Engine inside Prediction AI.
          </p>
          <div className="prediction-list">
            {results.map((p) => (
              <div key={p.id} className="prediction-card">
                <div className="prediction-header">
                  <span className="prediction-domain">{p.domain}</span>
                  <span className="prediction-horizon">{p.horizon}</span>
                </div>
                <div className="prediction-question">{p.question}</div>
                <div className="prediction-line">
                  <span className="prediction-prob">{p.probability}</span>
                  <span className="prediction-conf">{p.confidence}</span>
                </div>
                <p className="prediction-reason">{p.reasoning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ======================
   Simulation Lab Page
   ====================== */

const SimulationLabPage = () => {
  const scenarios = [
    {
      name: "Market Drawdown Stress Test",
      domain: "Markets",
      parameters: "Shock: -15% equity index, Vol spike +40%",
      result: "Probability of >20% portfolio drawdown: 22%",
      insight:
        "Most portfolios remain within acceptable risk bands. High-beta allocations experience disproportionate stress."
    },
    {
      name: "Monthly Revenue Monte-Carlo",
      domain: "Business",
      parameters: "100,000 runs, seasonality + marketing uplift",
      result: "P(Revenue ≥ target): 68%",
      insight:
        "Target is achievable with current funnel metrics. Upside is concentrated in top 10% of simulations driven by conversion spikes."
    },
    {
      name: "Championship Series Outcome Simulation",
      domain: "Sports",
      parameters: "Best-of-7 series, injury-adjusted ELO",
      result: "Series win probability for Team X: 61%",
      insight:
        "Home-court advantage and depth of bench create a consistent edge across simulations."
    }
  ];

  return (
    <div className="page">
      <h1 className="page-title">Simulation Lab</h1>
      <p className="page-subtitle">
        Monte-Carlo style scenario modeling for markets, business outcomes, and sports
        series — presented as mock outputs to show how Prediction AI handles uncertainty.
      </p>

      <div className="section-card">
        <h2 className="section-title">Scenario Overview</h2>
        <p className="section-description">
          The Simulation Engine inside Prediction AI runs multi-run scenarios to estimate
          distributions, tail risk, and probability bands for critical business and market
          questions.
        </p>
        <ul className="bullet-list">
          <li>Define input assumptions and stress scenarios.</li>
          <li>Generate thousands of simulation paths.</li>
          <li>Compute probability of thresholds and extreme events.</li>
          <li>Summarize with clear risk and opportunity insights.</li>
        </ul>
      </div>

      <div className="sim-grid">
        {scenarios.map((s) => (
          <div key={s.name} className="sim-card">
            <div className="sim-header">
              <span className="sim-domain">{s.domain}</span>
            </div>
            <h3 className="sim-name">{s.name}</h3>
            <div className="sim-field">
              <span className="sim-label">Parameters</span>
              <span className="sim-value">{s.parameters}</span>
            </div>
            <div className="sim-field">
              <span className="sim-label">Headline Result</span>
              <span className="sim-value sim-result">{s.result}</span>
            </div>
            <p className="sim-insight">{s.insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ======================
   Domain Center Page
   ====================== */

const DomainCenterPage = () => {
  const [activeDomain, setActiveDomain] = useState("Sports");

  const domainSections = {
    Sports: {
      title: "Sports Prediction Center",
      intro:
        "Multi-league prediction pipelines covering win probabilities, series outcomes, trend analysis, and player-impact adjustments.",
      rows: [
        {
          name: "Game Outcome Probability Model",
          detail:
            "Predicts win/draw/loss probabilities using form, pace, injuries, rest, and historical matchup data.",
          coverage: "Major leagues, tournaments, and playoff series."
        },
        {
          name: "Series Simulation Engine",
          detail:
            "Simulates best-of-5 and best-of-7 series outcomes with home advantage and rotation depth factored in.",
          coverage: "Basketball, hockey, baseball, and other multi-game series."
        }
      ]
    },
    Markets: {
      title: "Market Forecasting Center",
      intro:
        "Short and medium-term market prediction workflows for equities, indices, and digital assets.",
      rows: [
        {
          name: "Volatility & Drawdown Model",
          detail:
            "Forecasts volatility bands and drawdown probabilities over configurable horizons.",
          coverage: "Equities, indices, and sector ETFs."
        },
        {
          name: "Crypto Momentum Engine",
          detail:
            "Generates momentum scores and directional bias indicators for major digital assets.",
          coverage: "BTC, ETH, and large-cap assets."
        }
      ]
    },
    Business: {
      title: "Business Forecasting Hub",
      intro:
        "Revenue, churn, and operational forecasting for small to mid-sized businesses.",
      rows: [
        {
          name: "Monthly Revenue Forecasting",
          detail:
            "Predicts next-period revenue using seasonality, pipeline, and conversion-rate history.",
          coverage: "Subscription, e-commerce, and service businesses."
        },
        {
          name: "Customer Churn Scoring",
          detail:
            "Assigns churn probabilities to active customers based on engagement patterns.",
          coverage: "SaaS and membership-based products."
        }
      ]
    },
    Risk: {
      title: "Risk Assessment Center",
      intro:
        "Cross-domain risk scoring combining operational signals, exposure metrics, and modeled scenarios.",
      rows: [
        {
          name: "Operational Incident Early Warning",
          detail:
            "Flags abnormal patterns across key operational metrics before they become outages.",
          coverage: "Internal monitoring and reliability dashboards."
        },
        {
          name: "Portfolio Risk Summary",
          detail:
            "Aggregates risk indicators for portfolios, surfacing concentration and correlation risk.",
          coverage: "Market and business risk lenses."
        }
      ]
    },
    Trends: {
      title: "Trend Detection & Pattern Center",
      intro:
        "High-level view of trend detection, cross-domain pattern synthesis, and anomaly detection outputs.",
      rows: [
        {
          name: "Cross-Market Trend Radar",
          detail:
            "Monitors macro, market, and sentiment indicators to highlight emerging trends.",
          coverage: "Equities, FX, digital assets, and alternative datasets."
        },
        {
          name: "Anomaly & Outlier Detector",
          detail:
            "Surfaces unusual behaviors in data streams for human review.",
          coverage: "Operational, market, and product metrics."
        }
      ]
    }
  };

  const current = domainSections[activeDomain];

  return (
    <div className="page">
      <h1 className="page-title">Domain Centers</h1>
      <p className="page-subtitle">
        Explore how Prediction AI structures its prediction pipelines across sports, markets,
        business, risk, and trend-detection domains.
      </p>

      <div className="domain-layout">
        <aside className="domain-sidebar">
          <h2 className="domain-sidebar-title">Domains</h2>
          <p className="domain-sidebar-subtitle">
            Switch between domain centers to review available modules and workflows.
          </p>
          <div className="domain-tab-list">
            {["Sports", "Markets", "Business", "Risk", "Trends"].map((d) => (
              <button
                key={d}
                className={`domain-tab-btn ${
                  activeDomain === d ? "domain-tab-btn-active" : ""
                }`}
                onClick={() => setActiveDomain(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </aside>

        <section className="domain-detail">
          <div className="section-card">
            <h2 className="section-title">{current.title}</h2>
            <p className="section-description">{current.intro}</p>
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>Workflow / Module</th>
                  <th>Description</th>
                  <th>Coverage</th>
                </tr>
              </thead>
              <tbody>
                {current.rows.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.detail}</td>
                    <td>{row.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

/* ======================
   Architecture Page
   ====================== */

const ArchitecturePage = () => {
  const [expandedGroupIndex, setExpandedGroupIndex] = useState(0);

  return (
    <div className="page">
      <h1 className="page-title">Architecture &amp; Layered Design</h1>
      <p className="page-subtitle">
        A 30-layer, multi-agent architecture built for clean separation of concerns, high
        scalability, and serious enterprise due diligence.
      </p>

      <div className="architecture-layout">
        <aside className="arch-sidebar">
          <h2 className="arch-sidebar-title">Layer Stacks</h2>
          <p className="arch-sidebar-subtitle">
            Navigate the major layer groups that structure Prediction AI from the ground up.
          </p>
          <ul className="arch-group-list">
            {ARCHITECTURE_GROUPS.map((group, idx) => (
              <li key={group.group}>
                <button
                  className={`arch-group-btn ${
                    expandedGroupIndex === idx ? "arch-group-btn-active" : ""
                  }`}
                  onClick={() => setExpandedGroupIndex(idx)}
                >
                  {group.group}
                </button>
              </li>
            ))}
          </ul>

          <div className="arch-stack-summary">
            <h3 className="mini-heading">System Overview</h3>
            <ul className="bullet-list tight">
              <li>Modular, scalable, and containerized prediction engine.</li>
              <li>Supports sports, financial, business, and risk forecasting.</li>
              <li>Built as a premium, fully original IP asset for transfer or adoption.</li>
            </ul>
          </div>
        </aside>

        <section className="arch-detail">
          <div className="arch-detail-card">
            <h2 className="section-title">
              {ARCHITECTURE_GROUPS[expandedGroupIndex].group}
            </h2>
            <p className="section-description">
              Each layer is focused on a specific responsibility, making the system easier to
              reason about, audit, and extend.
            </p>

            <div className="arch-layers-grid">
              {ARCHITECTURE_GROUPS[expandedGroupIndex].layers.map((layer) => (
                <div key={layer.name} className="arch-layer-card">
                  <h3 className="arch-layer-name">{layer.name}</h3>
                  <ul className="bullet-list tight">
                    {layer.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="arch-extra-grid">
            <div className="section-card">
              <h2 className="section-title">System Strengths (Architecture)</h2>
              {STRENGTHS.map((s) => (
                <div key={s.title} className="strength-block">
                  <h3 className="mini-heading">{s.title}</h3>
                  <ul className="bullet-list tight">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="section-card">
              <h2 className="section-title">Tech Stack Snapshot</h2>
              <div className="stack-grid">
                <StackColumn title="Backend" items={TECH_STACK.backend} />
                <StackColumn title="AI &amp; Modeling" items={TECH_STACK.ai} />
                <StackColumn title="Frontend" items={TECH_STACK.frontend} />
                <StackColumn title="Databases" items={TECH_STACK.database} />
                <StackColumn title="Infrastructure" items={TECH_STACK.infra} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

/* ======================
   Due Diligence Page
   ====================== */

const DueDiligencePage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div className="page">
      <h1 className="page-title">Technical Due Diligence &amp; IP Summary</h1>
      <p className="page-subtitle">
        Clean IP, clear inventories, and a structured FAQ designed to answer the questions your
        CTO, legal team, and acquisition partners will ask.
      </p>

      <section className="inventory-grid">
        <InventoryCard
          title="Module Inventory"
          totalLabel="Total Modules"
          total={INVENTORY.modules.total}
          description="Prediction AI contains a fully modular architecture spanning core system, AI engine, prediction logic, automation, visualization, and DevOps."
          rows={INVENTORY.modules.categories}
        />
        <InventoryCard
          title="Workflow Inventory"
          totalLabel="Total Workflows"
          total={INVENTORY.workflows.total}
          description="A deep workflow system automates every step of the prediction lifecycle: ingestion, modeling, prediction, automation, and reporting."
          rows={INVENTORY.workflows.categories}
        />
        <InventoryCard
          title="Node Inventory"
          totalLabel="Total Nodes"
          total={`${INVENTORY.nodes.total}+`}
          description="Nodes represent the smallest functional units inside Prediction AI and are tagged by layer and category for full developer clarity."
          rows={INVENTORY.nodes.categories}
        />
      </section>

      <section className="section-card ip-card">
        <h2 className="section-title">Security &amp; IP Cleanliness</h2>
        <ul className="bullet-list">
          <li>Built specifically as a clean IP asset for sale.</li>
          <li>No contractors, no outsourced coding, no shared code from other projects.</li>
          <li>100% in-house development with fully original architecture.</li>
          <li>
            No GPL, restrictive, or viral licenses — only permissive, commercially safe
            libraries.
          </li>
          <li>Ensures clean transferability with zero legal complications.</li>
        </ul>
      </section>

      <section className="section-card transfer-card">
        <h2 className="section-title">Transfer &amp; Handoff Package</h2>
        <p className="section-description">
          Prediction AI is packaged to minimize friction during acquisition and onboarding.
        </p>
        <div className="transfer-grid">
          <ul className="bullet-list tight">
            <li>Full codebase and project structure.</li>
            <li>All layers, modules, workflows, and nodes.</li>
            <li>Branding assets (if applicable).</li>
            <li>Technical and operational documentation.</li>
          </ul>
          <ul className="bullet-list tight">
            <li>Architecture diagrams and workflow diagrams.</li>
            <li>Module maps and API documentation.</li>
            <li>Deployment files (Docker, Docker Compose, Kubernetes).</li>
            <li>Buyer onboarding and technical walkthrough guide.</li>
          </ul>
        </div>
        <p className="transfer-note">
          Buyer receives full ownership, full IP rights, and unlimited commercial usage. A
          paid transition support period can be arranged, but the system was designed with
          zero ongoing obligations.
        </p>
      </section>

      <section className="faq-section">
        <h2 className="section-title">Technical Due-Diligence FAQ</h2>
        <p className="section-description">
          Use this as a live, on-screen answer sheet during calls with buyers, CTOs, or
          investors.
        </p>
        <div className="faq-list">
          {FAQ_ENTRIES.map((item, idx) => (
            <FaqItem
              key={item.q}
              active={openFaqIndex === idx}
              question={item.q}
              answer={item.a}
              onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </section>

      <section className="summary-card">
        <h2 className="section-title">Summary for Decision-Makers</h2>
        <p className="summary-text">
          Prediction AI is a clean, modern, enterprise-grade prediction platform built with a
          30-layer architecture, 320+ modules, 4,800+ workflows, and 3,200+ nodes. The codebase
          is fully original, written by one creator, with no outside contributors. It is secure,
          scalable, documented, containerized, and ready for commercial deployment, SaaS
          integration, or expansion by a buyer’s engineering team.
        </p>
      </section>
    </div>
  );
};

/* ======================
   Model Management Page
   ====================== */

const ModelManagementPage = () => {
  const models = [
    {
      name: "Sports Match Outcome Classifier",
      domain: "Sports",
      type: "Classification",
      status: "Validated",
      metric: "AUC: 0.87",
      updated: "Last retrain: 7 days ago"
    },
    {
      name: "Equity Volatility Forecaster",
      domain: "Markets",
      type: "Time-Series Regression",
      status: "In Pilot",
      metric: "MAPE: 9.4%",
      updated: "Last retrain: 3 days ago"
    },
    {
      name: "Monthly Revenue Forecast Model",
      domain: "Business",
      type: "Time-Series Regression",
      status: "Production",
      metric: "MAPE: 6.8%",
      updated: "Last retrain: 14 days ago"
    },
    {
      name: "Customer Churn Prediction Model",
      domain: "Business",
      type: "Classification",
      status: "Production",
      metric: "AUC: 0.81",
      updated: "Last retrain: 10 days ago"
    }
  ];

  return (
    <div className="page">
      <h1 className="page-title">Model Management</h1>
      <p className="page-subtitle">
        Overview of the AI models used inside Prediction AI, including domain, type, status,
        and headline performance metrics. These are illustrative, buyer-facing examples.
      </p>

      <div className="section-card">
        <h2 className="section-title">Model Catalog</h2>
        <p className="section-description">
          In a full deployment, this panel would connect to the model registry, display
          evaluations, and control retraining cycles. Here, it provides a clear visual of how
          the modeling layer is structured.
        </p>
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Model Name</th>
              <th>Domain</th>
              <th>Type</th>
              <th>Status</th>
              <th>Key Metric</th>
              <th>Last Update</th>
            </tr>
          </thead>
          <tbody>
            {models.map((m) => (
              <tr key={m.name}>
                <td>{m.name}</td>
                <td>{m.domain}</td>
                <td>{m.type}</td>
                <td>{m.status}</td>
                <td>{m.metric}</td>
                <td>{m.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ======================
   Workflow Builder Page (Mock)
   ====================== */

const WorkflowBuilderPage = () => {
  const mockNodes = [
    "Data Ingestion Node",
    "Data Cleaning Node",
    "Feature Engineering Node",
    "Model Inference Node",
    "Probability Engine Node",
    "Reporting Node"
  ];

  return (
    <div className="page">
      <h1 className="page-title">Workflow Builder (Visual)</h1>
      <p className="page-subtitle">
        Conceptual visual of how workflows are chained together using nodes inside Prediction
        AI. This is a mock representation designed to show how a drag-and-drop builder could
        look.
      </p>

      <div className="section-card">
        <h2 className="section-title">Example Workflow Chain</h2>
        <p className="section-description">
          Each node represents a small atomic unit from the 3,200+ node library. Workflows are
          constructed by connecting nodes into ordered chains.
        </p>
        <div className="nodechain-badge-row">
          {mockNodes.map((n) => (
            <div key={n} className="node-badge">
              {n}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ======================
   Data Ingestion Control Panel
   ====================== */

const DataIngestionPage = () => {
  const sources = [
    {
      name: "Market Data API",
      type: "HTTP / WebSocket",
      status: "Configured",
      usage: "Equities, indices, and digital asset prices."
    },
    {
      name: "Sports Statistics Feed",
      type: "Scheduled Pull",
      status: "Configured",
      usage: "Match results, schedules, and player statistics."
    },
    {
      name: "Business Data Connector",
      type: "CSV / Database",
      status: "Template",
      usage: "ERP, CRM, and revenue data for SMBs."
    },
    {
      name: "Streaming Metrics",
      type: "Streaming Ingestion",
      status: "Template",
      usage: "Operational metrics and observability signals."
    }
  ];

  return (
    <div className="page">
      <h1 className="page-title">Data Ingestion Control Panel</h1>
      <p className="page-subtitle">
        High-level view of how Prediction AI connects to external data sources. In this demo,
        connections are shown as templates and configured examples.
      </p>

      <div className="section-card">
        <h2 className="section-title">Data Sources</h2>
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Source</th>
              <th>Type</th>
              <th>Status</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((s) => (
              <tr key={s.name}>
                <td>{s.name}</td>
                <td>{s.type}</td>
                <td>{s.status}</td>
                <td>{s.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ======================
   Agent Activity Monitor
   ====================== */

const AgentMonitorPage = () => {
  const agents = [
    {
      name: "Data Cleaning Agent",
      role: "Normalizes, cleans, and validates incoming data.",
      status: "Idle",
      lastRun: "5 minutes ago"
    },
    {
      name: "Simulation Agent",
      role: "Runs batch simulations for defined scenarios.",
      status: "Running",
      lastRun: "Currently executing"
    },
    {
      name: "Scoring Agent",
      role: "Applies probability engines and produces scores.",
      status: "Ready",
      lastRun: "2 minutes ago"
    },
    {
      name: "Reporting Agent",
      role: "Generates daily and weekly summary reports.",
      status: "Scheduled",
      lastRun: "Last run: 02:00 UTC"
    }
  ];

  return (
    <div className="page">
      <h1 className="page-title">Agent Activity Monitor</h1>
      <p className="page-subtitle">
        Illustrates the multi-agent orchestration layer inside Prediction AI — how internal
        agents collaborate to maintain the prediction engine.
      </p>

      <div className="section-card">
        <h2 className="section-title">Core Agents</h2>
        <div className="agent-grid">
          {agents.map((a) => (
            <div key={a.name} className="agent-card">
              <h3 className="agent-name">{a.name}</h3>
              <p className="agent-role">{a.role}</p>
              <div className="agent-meta-row">
                <span className="agent-status">{a.status}</span>
                <span className="agent-last">{a.lastRun}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ======================
   Predictions Archive & Time Machine
   ====================== */

const PredictionsArchivePage = () => {
  const rows = [
    {
      date: "2025-01-10",
      domain: "Sports",
      item: "Final score prediction — Championship Game",
      predicted: "Team X win: 62%",
      outcome: "Outcome: Team X won",
      note: "Prediction direction correct."
    },
    {
      date: "2025-01-05",
      domain: "Markets",
      item: "Weekly equity index direction",
      predicted: "Prob(up): 55%",
      outcome: "Index closed +3.2%",
      note: "Within expected band."
    },
    {
      date: "2024-12-20",
      domain: "Business",
      item: "Monthly revenue growth forecast",
      predicted: "P(≥ target): 70%",
      outcome: "Actual: 72% of target achieved",
      note: "Slight underperformance against high expectation."
    }
  ];

  return (
    <div className="page">
      <h1 className="page-title">Predictions Archive &amp; Time Machine</h1>
      <p className="page-subtitle">
        Illustrative history panel showing how predictions could be logged and later compared
        with real outcomes to measure accuracy and model calibration.
      </p>

      <div className="section-card">
        <h2 className="section-title">Archived Predictions (Mock)</h2>
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Domain</th>
              <th>Scenario</th>
              <th>Prediction</th>
              <th>Outcome</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx}>
                <td>{r.date}</td>
                <td>{r.domain}</td>
                <td>{r.item}</td>
                <td>{r.predicted}</td>
                <td>{r.outcome}</td>
                <td>{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ======================
   API Explorer Page
   ====================== */

const ApiExplorerPage = () => {
  const endpoints = [
    {
      method: "POST",
      path: "/api/predict",
      purpose: "Run a prediction for a given domain and scenario payload.",
      example: '{ "domain": "sports", "question": "team_a_vs_team_b" }'
    },
    {
      method: "POST",
      path: "/api/simulate",
      purpose: "Run a Monte-Carlo simulation using defined parameters.",
      example: '{ "scenario": "monthly_revenue", "runs": 10000 }'
    },
    {
      method: "GET",
      path: "/api/models",
      purpose: "List available models, domains, and status.",
      example: "/api/models?domain=markets"
    },
    {
      method: "GET",
      path: "/api/health",
      purpose: "Return health and readiness probes for deployed services.",
      example: "/api/health"
    }
  ];

  return (
    <div className="page">
      <h1 className="page-title">API Explorer</h1>
      <p className="page-subtitle">
        Mock API surface showing how external systems, SaaS products, or internal tools would
        call Prediction AI programmatically.
      </p>

      <div className="section-card">
        <h2 className="section-title">Example Endpoints</h2>
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Path</th>
              <th>Purpose</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {endpoints.map((e) => (
              <tr key={e.path}>
                <td>{e.method}</td>
                <td>{e.path}</td>
                <td>{e.purpose}</td>
                <td>
                  <code className="api-code">{e.example}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ======================
   Insights & Reports Page
   ====================== */

const InsightsPage = () => {
  const insights = [
    {
      title: "Sports: Upset Risk Elevated",
      detail:
        "Underdog win probabilities have increased by ~8% across recent simulations due to key injuries and schedule congestion."
    },
    {
      title: "Markets: Volatility Regime Shift",
      detail:
        "Short-term volatility indicators have risen above long-term medians, suggesting a possible transition to a higher volatility regime."
    },
    {
      title: "Business: Churn Cohort Identified",
      detail:
        "A specific cohort of low-engagement users shows churn probabilities > 80%, making them priority for targeted retention campaigns."
    }
  ];

  return (
    <div className="page">
      <h1 className="page-title">System Insights &amp; Reports</h1>
      <p className="page-subtitle">
        Example insights that demonstrate what type of narrative outputs Prediction AI can
        surface for decision-makers.
      </p>

      <div className="section-card">
        <h2 className="section-title">Weekly Intelligence Highlights (Mock)</h2>
        <div className="insights-grid">
          {insights.map((ins) => (
            <div key={ins.title} className="insight-card">
              <h3 className="insight-title">{ins.title}</h3>
              <p className="insight-detail">{ins.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ======================
   Admin / Settings Page
   ====================== */

const AdminSettingsPage = () => {
  return (
    <div className="page">
      <h1 className="page-title">Admin &amp; Advanced Settings</h1>
      <p className="page-subtitle">
        Conceptual admin control surface for managing providers, thresholds, and domain
        configuration in Prediction AI.
      </p>

      <div className="section-grid">
        <div className="section-card">
          <h2 className="section-title">Model Providers</h2>
          <ul className="bullet-list">
            <li>Local Prediction AI Model Hub (default internal provider).</li>
            <li>Optional external LLM endpoints for enrichment workflows.</li>
            <li>On-prem GPU or cloud GPU clusters for heavy workloads.</li>
          </ul>
        </div>
        <div className="section-card">
          <h2 className="section-title">Domain Activation</h2>
          <ul className="bullet-list">
            <li>Toggle sports, markets, business, and risk domains on or off.</li>
            <li>Configure which domains are exposed to external APIs.</li>
            <li>Set default prediction horizons for each domain.</li>
          </ul>
        </div>
        <div className="section-card">
          <h2 className="section-title">Threshold &amp; Alert Tuning</h2>
          <ul className="bullet-list">
            <li>Define alert thresholds for probabilities and risk scores.</li>
            <li>Control how sensitive alerts are to model drift and anomalies.</li>
            <li>Set frequency for system health checks and summary reports.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/* ======================
   Legal Page (Ownership: Maria Robles)
   ====================== */

const LegalPage = () => {
  return (
    <div className="page">
      <h1 className="page-title">Legal &amp; Ownership Notice</h1>
      <p className="page-subtitle">
        Ownership, intellectual property, licensing, and permitted use terms for Prediction AI.
      </p>

      <div className="section-card">
        <h2 className="section-title">1. Ownership</h2>
        <p className="section-description">
          Prediction AI, including all code, architecture, documentation, workflows, modules,
          nodes, and visual designs, is an original work created and owned by{" "}
          <strong>Maria Robles</strong>.
        </p>
        <ul className="bullet-list">
          <li>All intellectual property rights are held exclusively by Maria Robles.</li>
          <li>
            No portion of Prediction AI has been assigned, sold, or licensed to any third party,
            unless explicitly agreed in a signed contract.
          </li>
          <li>
            No contractors, agencies, or external developers have contributed code, architecture,
            or design assets to this project.
          </li>
        </ul>
      </div>

      <div className="section-card">
        <h2 className="section-title">2. Clean IP &amp; Original Work</h2>
        <ul className="bullet-list">
          <li>
            Prediction AI was planned, architected, and implemented as a clean, standalone IP
            asset.
          </li>
          <li>
            No code was copied from proprietary or closed-source repositories belonging to other
            companies or individuals.
          </li>
          <li>
            Any open-source libraries used are under permissive licenses appropriate for
            commercial use (e.g., MIT, Apache 2.0, BSD).
          </li>
        </ul>
      </div>

      <div className="section-card">
        <h2 className="section-title">3. Transfer &amp; Licensing</h2>
        <ul className="bullet-list">
          <li>
            Upon execution of a purchase or licensing agreement, rights and usage scope will be
            defined in a separate written contract between Maria Robles and the buyer.
          </li>
          <li>
            Full transfer scenarios may include assignment of all source code, documentation,
            branding assets, and associated IP to the buyer.
          </li>
          <li>
            Licensing scenarios may grant limited rights to use the platform without transferring
            ownership of the underlying IP.
          </li>
        </ul>
      </div>

      <div className="section-card">
        <h2 className="section-title">4. Restrictions</h2>
        <ul className="bullet-list">
          <li>
            Until a formal agreement is signed, no party is permitted to copy, redistribute, or
            commercialize Prediction AI or its materials.
          </li>
          <li>
            Evaluation access (e.g., demos, documentation, or screen shares) does not grant any
            license to use or modify the codebase.
          </li>
          <li>
            Unauthorized reproduction, resale, or rebranding of Prediction AI is strictly
            prohibited.
          </li>
        </ul>
      </div>

      <div className="section-card">
        <h2 className="section-title">5. Disclaimer</h2>
        <ul className="bullet-list">
          <li>
            All prediction examples, probabilities, and scenarios shown in this demonstration UI
            are mock outputs for illustrative purposes only.
          </li>
          <li>
            Nothing in this interface constitutes financial, investment, legal, or betting
            advice.
          </li>
          <li>
            Any real-world use of Prediction AI must comply with applicable laws and regulations
            in relevant jurisdictions.
          </li>
        </ul>
      </div>
    </div>
  );
};

/* ======================
   Root App
   ====================== */

const App = () => {
  const [activePage, setActivePage] = useState("overview");

  return (
    <div className="app-root">
      <NavBar activePage={activePage} onChangePage={setActivePage} />
      <main className="app-main">
        {activePage === "overview" && <OverviewPage />}
        {activePage === "ask" && <AskPredictionPage />}
        {activePage === "simlab" && <SimulationLabPage />}
        {activePage === "domains" && <DomainCenterPage />}
        {activePage === "models" && <ModelManagementPage />}
        {activePage === "workflows" && <WorkflowBuilderPage />}
        {activePage === "ingestion" && <DataIngestionPage />}
        {activePage === "agents" && <AgentMonitorPage />}
        {activePage === "archive" && <PredictionsArchivePage />}
        {activePage === "api" && <ApiExplorerPage />}
        {activePage === "insights" && <InsightsPage />}
        {activePage === "architecture" && <ArchitecturePage />}
        {activePage === "diligence" && <DueDiligencePage />}
        {activePage === "admin" && <AdminSettingsPage />}
        {activePage === "legal" && <LegalPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;

