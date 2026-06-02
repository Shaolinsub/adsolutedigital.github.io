import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  CheckCircle2,
  FileText,
  Gem,
  Globe2,
  Handshake,
  Home,
  Landmark,
  Layers3,
  Lightbulb,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import "./styles.css";

const FORM_LINK = "https://tally.so/r/gDkX9M";

const fundingOptions = [
  "Startup & pre-revenue funding",
  "Business loans & working capital",
  "Equipment financing & leasing",
  "Purchase order financing",
  "Invoice factoring",
  "Commercial mortgage options",
  "Real estate fix-and-flip funding",
  "Asset-backed loans",
  "IP-backed financing using registered patents as possible security",
  "Growth and expansion capital",
  "Strategic investment and partnership opportunities",
  "Rollup and acquisition-based growth strategies",
];

const processSteps = [
  {
    title: "Submit the intro form",
    text: "Share the basics about your business, funding need, timing, and current situation.",
  },
  {
    title: "We review the request",
    text: "Your information is reviewed to determine whether there may be a practical funding, investment, partnership, or acquisition path.",
  },
  {
    title: "Initial call",
    text: "If there appears to be a possible fit, the next step is a focused call to understand the opportunity.",
  },
  {
    title: "Next steps are routed efficiently",
    text: "When helpful, applicants may be directed to secure document, funder, valuation, credit-review, or deal-structure steps after the call.",
  },
];

function Button({ children, href, variant = "primary" }) {
  return (
    <a className={`button ${variant}`} href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {children}
    </a>
  );
}

function Header() {
  const navItems = ["Funding", "Startups", "Assets", "Strategy", "Process", "Apply"];

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="brand">
          <div className="brand-title">Adsolutedigital.net</div>
          <div className="brand-subtitle powered-by">Powered by <span>37-Dimensions.com</span></div>
        </a>

        <nav className="nav">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <Button href={FORM_LINK}>Start Funding Review</Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="pill">
            <Globe2 size={16} /> Canada & United States
          </div>

          <h1>Business funding, startup capital, and asset-backed financing — reviewed from every angle.</h1>

          <p className="hero-text">
            Adsolutedigital.net helps business owners, select startups, and opportunity-driven operators explore practical capital pathways across Canada and the U.S. — including working capital, equipment financing, leasing, purchase order financing, factoring, asset-backed loans, IP-backed financing, fix-and-flip funding, investment opportunities, partnerships, and rollup strategies.
          </p>

          <div className="highlight-box">
            Select startup and pre-revenue funding options may be available for qualified applicants, including situations where personal credit strength is a key factor — even before business revenue is established.
          </div>

          <div className="hero-actions">
            <Button href={FORM_LINK}>Start Funding Review <ArrowRight size={16} /></Button>
            <Button href="#process" variant="secondary">See How It Works</Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }}>
          <div className="dark-card fit-card">
            <div className="card-header">
              <div>
                <div className="muted">Opportunity Review</div>
                <h2>Initial Fit Check</h2>
              </div>
              <div className="icon-badge"><LineChart size={24} /></div>
            </div>
            <div className="check-list">
              {[
                "Startups and pre-revenue applicants",
                "Existing businesses with revenue",
                "Asset, IP, real estate, and acquisition opportunities",
                "Secure credit review only after initial call when helpful",
              ].map((item) => (
                <div className="check-item" key={item}>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FundingSection() {
  return (
    <section id="funding" className="section light">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Funding Options</p>
          <h2>A focused review before unnecessary paperwork.</h2>
          <p>The goal is not to force every applicant into one product. The goal is to understand the request, identify the likely path, and move efficiently only when there may be a workable fit.</p>
        </div>
        <div className="options-grid">
          {fundingOptions.map((option) => (
            <div key={option} className="option-card">
              <TrendingUp size={24} />
              <div>{option}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StartupSection() {
  const items = [
    [Lightbulb, "For new businesses", "Startup and early-stage applicants can submit an intro form for review."],
    [ShieldCheck, "No public credit gate", "Applicants are not asked to self-disqualify before a first conversation."],
    [BadgeDollarSign, "After-call credit review", "When useful, a secure provider link may be sent after the initial call."],
    [LineChart, "Pathway planning", "If someone is not ready today, they may still be guided toward future readiness."],
  ];

  return (
    <section id="startups" className="section soft">
      <div className="container split-grid">
        <div className="dark-panel">
          <Sparkles size={32} />
          <h2>Startup and pre-revenue focus</h2>
          <p>Some new businesses may have a funding path even before meaningful revenue exists. In these cases, personal credit strength, use of funds, applicant profile, and funder requirements can matter.</p>
        </div>
        <div className="small-grid">
          {items.map(([Icon, title, text]) => (
            <div key={title} className="white-card">
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AssetsSection() {
  const cards = [
    {
      icon: Gem,
      title: "Asset-backed lending options",
      text: "For applicants with eligible assets, asset-backed funding may be available based on the value, quality, liquidity, and verifiability of the asset. Eligible assets may support significant funding capacity — in some cases, up to 90% of verified asset value, subject to review, documentation, valuation, security registration, jurisdiction, and funder requirements.",
    },
    {
      icon: Landmark,
      title: "IP-backed financing",
      text: "For businesses with registered intellectual property, including registered patents, financing may be considered where the intellectual property can be reviewed and potentially used as security. Availability depends on registration status, ownership, enforceability, commercial value, and funder requirements.",
    },
    {
      icon: Home,
      title: "Real estate fix-and-flip funding",
      text: "Adsolutedigital.net may review real estate fix-and-flip projects where the property, purchase price, renovation plan, borrower profile, timeline, exit strategy, and projected after-repair value support a practical funding path.",
    },
  ];

  return (
    <section id="assets" className="section light">
      <div className="container">
        <div className="section-intro wide">
          <p className="eyebrow">Secured & Specialized Capital</p>
          <h2>Assets, patents, and real estate can change the funding path.</h2>
          <p>Some opportunities require a more structured review than a standard business loan. Adsolutedigital.net may review eligible assets, intellectual property, real estate projects, and other secured opportunities to determine whether they can support a practical capital solution.</p>
        </div>
        <div className="three-grid">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="white-card tall">
              <div className="light-icon"><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StrategySection() {
  const cards = [
    {
      icon: Handshake,
      title: "Investment and partnership interest",
      text: "For businesses with strong potential, unique assets, defensible intellectual property, recurring revenue, valuable customer relationships, or a scalable plan, Adsolutedigital.net may be open to reviewing investment or partnership structures.",
    },
    {
      icon: Network,
      title: "Rollup and acquisition strategies",
      text: "Adsolutedigital.net is open to reviewing rollup strategies, acquisition opportunities, and fragmented-industry consolidation plans where multiple smaller businesses may be combined, improved, financed, or scaled under a larger operating strategy.",
    },
    {
      icon: Layers3,
      title: "Beyond traditional funding",
      text: "In certain situations, a simple loan may not be the only path. Opportunities may involve funding, advisory support, partnership discussions, acquisition support, or deal-structure review depending on the situation.",
    },
  ];

  return (
    <section id="strategy" className="section dark">
      <div className="container">
        <div className="section-intro wide">
          <p className="eyebrow gold">Strategic Opportunity Review</p>
          <h2>Funding is one path. Partnership, investment, and rollups may be another.</h2>
          <p>Adsolutedigital.net is built to review opportunities from multiple angles, including situations where capital, structure, partnerships, acquisitions, or consolidation strategies may create a larger outcome.</p>
        </div>
        <div className="three-grid">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="dark-card tall">
              <div className="dark-icon"><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="section light">
      <div className="container">
        <div className="section-intro wide">
          <p className="eyebrow">Process</p>
          <h2>Simple intake. Smarter routing.</h2>
          <p>The first step is intentionally simple. After that, each opportunity can be routed based on whether it is credit-driven, revenue-driven, asset-backed, IP-backed, real estate-backed, acquisition-based, or better suited for future readiness.</p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div key={step.title} className="process-card">
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const cards = [
    [ShieldCheck, "No guarantee language", "Submitting an intake does not guarantee approval, funding, investment, partnership, or engagement."],
    [FileText, "Document-light first step", "The first form is intentionally short so the initial review can happen quickly."],
    [Users, "Human review first", "Early leads are reviewed manually before call center, AI, or CRM automation is added."],
  ];

  return (
    <section className="section soft compact">
      <div className="container three-grid">
        {cards.map(([Icon, title, text]) => (
          <div key={title} className="white-card">
            <Icon size={28} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="apply" className="section cta-section">
      <div className="cta-card">
        <Building2 size={40} />
        <h2>Start with an opportunity review.</h2>
        <p>Complete the intro form so your request can be reviewed for potential fit and next steps. No public contact information is displayed on this site.</p>
        <Button href={FORM_LINK}>Open Intro Form <ArrowRight size={16} /></Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand-title">Adsolutedigital.net</div>
          <div className="brand-subtitle powered-by">Powered by <span>37-Dimensions.com</span></div>
        </div>
        <p>Funding availability, terms, eligibility, timing, valuation, investment interest, partnership interest, and required documentation vary by applicant, product, funder, jurisdiction, asset type, opportunity type, and review. Submitting a form does not guarantee approval, funding, investment, partnership, or engagement.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <FundingSection />
      <StartupSection />
      <AssetsSection />
      <StrategySection />
      <ProcessSection />
      <TrustSection />
      <CTA />
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
