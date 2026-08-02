import { useEffect, useRef, useState } from 'react';
import { Github } from 'lucide-react';
import TextShuffle from './TextShuffle';
import ScrambleText from './ScrambleText';
import ScrambleHTML from './ScrambleHTML';
import spaIcon from './spa-ceylon.png';
import fluxIcon from './flux.png';
import onitIcon from '../assets/logos/ONIT Logo.png';
import coinflowIcon from '../assets/logos/Coinflow.svg';
import boxitIcon from '../assets/logos/BOXIT Logo.png';
import lankaAluminiumIcon from '../assets/logos/Lanka Aluminium Logo.png';

const ecuIcon = 'https://www.ecu.edu.lk/wp-content/themes/wp-edith-cowan-sri-lanka/images/site-logo.svg';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldDecode, setShouldDecode] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setShouldDecode(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "ONIT.",
      subtitle: "Real-Time Service Operations Platform",
      duration: "Apr 2026 – Present",
      description: "OnIt is a real-time service operations platform engineered for high-ownership support teams. It combines event-driven state propagation, a bifurcated visibility model, and a principle-of-least-privilege role hierarchy to give operators precise control over both internal workflow orchestration and customer-facing communication surfaces.",
      techStack: ["React 19", "React Router 7", "Vite 8", "Tailwind CSS 4", "Supabase (PostgreSQL + RLS)"],
      skills: ["Service Operations", "System Orchestration", "Principle of Least Privilege", "Product Design"],
      icon: onitIcon,
      forceWhiteBackground: true,
      featured: true,
    },
    {
      title: "FLUX",
      subtitle: "Financial Statement Analysis Engine",
      description: "Transform complex PDF bank statements into clear, actionable insights. Experience automated analysis with enterprise-grade privacy and security.",
      techStack: ["React", "TypeScript", "Node.js", "AI / LLM Analysis"],
      skills: ["Financial Statement Parsing", "Data Visualization", "Privacy-First Security"],
      icon: fluxIcon,
      forceWhiteBackground: true,
      demoUrl: "https://flux.shankaalwis.dev",
      featured: true,
      highlightTag: "Key Features:",
      highlightText: (
        <ul style={{ paddingLeft: "1.5em", listStyleType: "disc" }} key="flux-list">
          <li><strong>Automated Analysis:</strong> Intelligent engine categorizes transactions and identifies subscriptions instantly from PDF uploads.</li>
          <li><strong>Actionable Insights:</strong> Gain immediate visibility into spending patterns and financial health with clear visualizations.</li>
          <li><strong>Enterprise Security:</strong> Built with privacy-first architecture ensuring your financial data remains secure.</li>
          <li><strong>Broad Support:</strong> Compatible with PDF statements from most major banking institutions.</li>
        </ul>
      ),
    },
    {
      title: "Coinflow",
      subtitle: "Personal & Business Financial Tracking",
      duration: "Sep 2025 – Present",
      description: "A finance companion built to demystify cash flow for freelancers and growing teams. It brings every cashbook, income stream, and expense into one control center so you can spot trends, stay compliant, and make faster decisions. If you're ready to trade spreadsheets for clarity, take control of your cash flow with Coinflow.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Financial Data Engine"],
      skills: ["Cash Flow Management", "Financial Tracking", "Expense Analytics", "Compliance"],
      icon: coinflowIcon,
      forceWhiteBackground: true,
      featured: false,
    },
    {
      title: "Spa Ceylon Reservation System",
      subtitle: "Island-Wide Centralized Rollout across 19 Outlets",
      association: "Associated with Spa Ceylon Ayurveda Wellness",
      duration: "Jul 2025 – Present",
      description: "Led the end-to-end delivery of a centralized Spa Reservation System, designed to streamline outlet operations and improve visibility across the business. The system was successfully rolled out to 19 outlets, onboarding nearly 300 operational users, and handling reservations, schedules, and operational coordination with zero downtime since launch in September. Worked closely with Niogin Technologies as the technology partner.",
      techStack: ["Enterprise Systems Integration", "Centralized Database", "REST APIs", "Cloud Infrastructure"],
      skills: ["Digital Transformation", "Product & Project Leadership", "Multi-Outlet Operations", "Zero Downtime Rollout", "Change Management"],
      icon: spaIcon,
      forceWhiteBackground: true,
      demoUrl: "https://bookspaceylon.com",
      featured: false,
      highlightTag: "Key Rollout Highlights:",
      highlightText: (
        <ul style={{ paddingLeft: "1.5em", listStyleType: "disc" }} key="spa-res-list">
          <li><strong>19 Outlets Onboarded:</strong> Successfully scaled to nearly 300 operational users handling daily reservations and schedules.</li>
          <li><strong>Zero Downtime Since Launch:</strong> Robust, scalable architecture delivering 100% uptime since September deployment.</li>
          <li><strong>Cross-Functional & Partner Leadership:</strong> Worked closely with Niogin Technologies to translate operational needs into a reliable, production-ready system.</li>
        </ul>
      ),
    },
    {
      title: "BoxIt",
      subtitle: "Warehouse & Logistics Inventory Platform",
      duration: "Jan 2026 – Mar 2026",
      description: "A full-stack inventory management platform built for modern warehouse and logistics operations. Designed around real workflows — check-in, issuing, returns, and stock requests — replacing manual tracking with a QR-code-first system where every item gets a unique identity and every move gets logged.",
      techStack: ["React 19", "TanStack Start (SSR)", "TanStack Router", "Supabase (PostgreSQL + Auth)", "shadcn/ui", "Tailwind CSS v4"],
      skills: ["Warehouse Logistics", "QR Code Inventory", "Audit Trail & Snapshots", "Row-Level Security (RLS)"],
      icon: boxitIcon,
      forceWhiteBackground: true,
      featured: false,
      highlightTag: "Key Features:",
      highlightText: (
        <ul style={{ paddingLeft: "1.5em", listStyleType: "disc" }} key="boxit-list">
          <li><strong>QR-Code First Inventory:</strong> Staff scan product SKUs, assign 5-digit item codes, and store items in seconds.</li>
          <li><strong>Multi-Stage Approval Pipeline:</strong> Admins manage stock requests while internal teams submit and track requests from pending to fulfilled.</li>
          <li><strong>Complete Audit Trail & RLS:</strong> Full audit history with before/after state snapshots and database-level Row-Level Security.</li>
        </ul>
      ),
    },
    {
      title: "Lanka Aluminium PLC",
      subtitle: "Corporate Web Portal & Investor Relations (aluminium.lk)",
      duration: "Nov 2025 – Mar 2026",
      description: "Designed and developed the official corporate website for Lanka Aluminium PLC — Sri Lanka's leading aluminium extrusion manufacturer. The platform serves as a comprehensive B2B/B2C portal featuring a full product catalog with technical specifications, investor relations (CSE/SEC compliant), fabricator registration, and corporate governance documentation — all delivered through a fast, modern, mobile-first experience at aluminium.lk",
      techStack: ["Modern Web Architecture", "Tailwind CSS", "CMS / Content Portal", "Responsive UI/UX"],
      skills: ["B2B & B2C Strategy", "Investor Relations (CSE/SEC)", "Product Catalog Architecture", "Corporate Governance"],
      icon: lankaAluminiumIcon,
      forceWhiteBackground: true,
      demoUrl: "https://aluminium.lk",
      featured: false,
    },
    {
      title: "Anomaly Detection & Firewall Management",
      subtitle: "Web-Based SecOps Platform Using ML & LLMs",
      association: "Associated with Edith Cowan University",
      duration: "Jul 2025 – Oct 2025",
      description: "University group project creating a platform that brings enterprise-grade security operations to smart homes, small offices, and IoT-heavy environments. Built with React, Vite, and Supabase, it orchestrates real-time telemetry, automated investigations, and AI-guided response from a single interface, transforming dense security data into explainable stories.",
      techStack: ["React", "Vite", "Supabase", "Machine Learning", "LLMs", "Python"],
      skills: ["Cybersecurity Operations", "Anomaly Detection", "Firewall Management", "Real-Time Telemetry", "AI Security Response"],
      icon: ecuIcon,
      forceWhiteBackground: true,
      featured: false,
    },
    {
      title: "Spa Ceylon Rewards App Revamp",
      subtitle: "Omni-Channel Loyalty & POS Infrastructure Sync",
      association: "Associated with Spa Ceylon Ayurveda Wellness",
      duration: "Dec 2024 – Jun 2025",
      description: "As the key digital transformation and technologies lead for the project, took over and led the full revamp of the existing loyalty app, transforming it into a modern, data-driven platform aligned with customer experience and retention goals. Reshaped the direction of the project and delivered an integrated, performance-oriented solution.",
      techStack: ["POS System Integration", "RESTful APIs", "Loyalty Infrastructure", "Database Centralization"],
      skills: ["Digital Transformation", "Product Leadership", "Outlet Data Centralization", "Customer Experience (CX)", "Retention Strategy"],
      icon: spaIcon,
      forceWhiteBackground: true,
      demoUrl: "https://lk.spaceylon.com/pages/spa-ceylon-rewards",
      featured: false,
      highlightTag: "Key Highlights:",
      highlightText: (
        <ul style={{ paddingLeft: "1.5em", listStyleType: "disc" }} key="rewards-list">
          <li><strong>App Overhaul:</strong> Completely redesigned and re-engineered the existing loyalty app for usability, functionality, and scalability.</li>
          <li><strong>POS System Integration:</strong> Seamlessly integrated with existing POS infrastructure for real-time transaction syncing and unified customer profiles.</li>
          <li><strong>Outlet Data Centralization:</strong> Centralized outlet-level customer data to enable personalized remarketing and accurate segmentation.</li>
          <li><strong>Cross-Functional Leadership:</strong> Collaborated with CRM, retail, tech, and marketing teams for a coordinated rollout and long-term impact.</li>
        </ul>
      ),
    }
  ];

  const handleMouseEnter = () => {
    setShouldDecode(true);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`mb-16 max-w-3xl ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 reveal-hidden stagger-1 reveal-visible">
            <TextShuffle text="Projects" shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
          </h2>
          <p className="text-lg text-muted-foreground reveal-hidden stagger-2 reveal-visible">
            <ScrambleText text="Real-world applications of passion, engineering, and problem-solving." shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 group relative flex flex-col h-full ${project.featured ? 'lg:col-span-2' : ''} ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
              style={{ transitionDelay: `${(index * 100) + 200}ms` }}
            >
              {project.featured && (
                <div className="absolute top-6 right-6 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Featured
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-start gap-4 mb-6">
                  {/* @ts-ignore */}
                  <div className={`w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl ${project.forceWhiteBackground ? 'bg-white p-2' : 'bg-secondary/50'} group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                    {/* @ts-ignore */}
                    {project.icon && typeof project.icon === 'string' ? (
                      <img
                        /* @ts-ignore */
                        src={project.icon}
                        alt={`${project.title} icon`}
                        className="w-full h-full object-contain"
                      />
                    ) : project.icon ? (
                      /* @ts-ignore */
                      <project.icon className="w-7 h-7 text-primary" />
                    ) : null}
                  </div>
                  <div className="pr-16">
                    <h3 className="text-2xl font-bold text-foreground leading-tight">
                      <ScrambleText text={project.title} shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm font-medium text-primary mt-1">
                        <ScrambleText text={project.subtitle} shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                      </p>
                    )}
                    {(project.duration || project.association) && (
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mt-1">
                        {project.duration && (
                          <span className="font-medium">
                            <ScrambleText text={project.duration} shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                          </span>
                        )}
                        {project.duration && project.association && <span>•</span>}
                        {project.association && (
                          <span className="italic">
                            <ScrambleText text={project.association} shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                  <ScrambleText text={project.description} shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                </p>

                {/* Highlights */}
                {project.highlightText && (
                  <div className="mb-6 bg-secondary/30 rounded-xl p-5 border border-border/50">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-600 text-xs font-bold uppercase tracking-wide mb-3">
                      <ScrambleText text={project.highlightTag ?? "Highlights"} shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                    </span>
                    <div className="text-muted-foreground text-sm space-y-2 [&>ul]:list-disc [&>ul]:pl-4 [&>ul>li]:pl-1">
                      <ScrambleHTML shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter}>
                        {project.highlightText}
                      </ScrambleHTML>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                {project.techStack?.filter(Boolean).length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide opacity-70">
                      <ScrambleText text="Tech Stack" shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.filter(Boolean).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-xs font-medium"
                        >
                          <ScrambleText text={tech} shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills & Domain */}
                {project.skills?.filter(Boolean).length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide opacity-70">
                      <ScrambleText text="Skills & Competencies" shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.skills.filter(Boolean).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                        >
                          <ScrambleText text={skill} shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {/* Code button */}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-card text-foreground border border-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <ScrambleText text="View Code" shouldDecode={shouldDecode} onTriggerDecode={handleMouseEnter} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
