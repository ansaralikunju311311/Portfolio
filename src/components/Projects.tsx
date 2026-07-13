import { motion } from "framer-motion";
import {
  ExternalLink,
  Ticket,
  Video,
  Shield,
  ChevronRight,
  TrendingUp,
  Layers
} from "lucide-react";
import { Github } from "./BrandIcons";

interface ProjectProps {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  links: { github?: string; demo?: string };
  isFeatured?: boolean;
  demoAccess?: string;
  bgIcon?: React.ComponentType<{ size: number; className?: string }>;
}

const ProjectCard = ({
  title,
  description,
  features,
  tech,
  links,
  isFeatured,
  demoAccess,
  bgIcon: BgIcon
}: ProjectProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`p-1 rounded-[2.5rem] bg-gradient-to-br transition-all duration-500 hover:scale-[1.01] ${
      isFeatured
        ? "from-primary/40 via-accent/40 to-secondary/40 lg:col-span-2 shadow-xl shadow-primary/5"
        : "from-border-card to-transparent border border-border-card dark:from-slate-800 dark:to-slate-900 shadow-lg dark:shadow-none"
    }`}
  >
    <div className="h-full w-full bg-surface rounded-[2.3rem] p-8 md:p-12 overflow-hidden relative group transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-8 text-text-base -z-0 opacity-5 group-hover:opacity-10 transition-opacity">
        {BgIcon ? (
          <BgIcon size={isFeatured ? 240 : 120} />
        ) : isFeatured ? (
          <Ticket size={240} />
        ) : (
          <Video size={120} />
        )}
      </div>

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {isFeatured && (
            <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
              Featured Project
            </span>
          )}
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-slate-500/10 text-text-base text-[10px] font-bold uppercase tracking-widest rounded-full">
              {t}
            </span>
          ))}
        </div>

        <h3 className={`font-display font-bold mb-4 ${isFeatured ? "text-4xl md:text-6xl" : "text-3xl"} text-text-heading tracking-tight`}>
          {title}
        </h3>

        <p className="text-text-base text-lg mb-10 max-w-3xl leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start space-x-3 text-text-base">
              <div className="mt-1 p-1 bg-primary/10 rounded-lg text-primary shrink-0">
                <ChevronRight size={14} />
              </div>
              <span className="text-sm font-medium leading-snug">{feature}</span>
            </div>
          ))}
        </div>

        {demoAccess && (
          <div className="mb-10 p-6 bg-secondary/10 border border-secondary/20 rounded-2xl">
            <div className="flex items-center space-x-2 text-secondary mb-3">
              <Shield size={18} />
              <h4 className="text-xs font-bold uppercase tracking-widest">Demo Environment</h4>
            </div>
            <p className="text-sm text-text-base font-medium">
              {demoAccess}
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-text-heading hover:text-primary transition-all font-bold group/link">
              <Github size={22} className="group-hover/link:scale-110 transition-transform" />
              <span className="border-b-2 border-transparent group-hover/link:border-primary">GitHub Code</span>
            </a>
          )}
          {links.demo && (
            <a href={links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-text-heading hover:text-primary transition-all font-bold group/link">
              <ExternalLink size={22} className="group-hover/link:scale-110 transition-transform" />
              <span className="border-b-2 border-transparent group-hover/link:border-primary">Live Experience</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">
            Strategic Portfolio
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-text-base text-lg max-w-2xl mx-auto opacity-80 leading-relaxed">
            A curated showcase of commercial client work, corporate solutions, and complex software systems.
          </p>
        </motion.div>

        {/* Section 1: Freelance & Commercial Client Work */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 border-l-4 border-primary pl-6"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-text-heading mb-2">
              Client & Freelance Engagements
            </h3>
            <p className="text-text-base text-sm md:text-base max-w-3xl opacity-85 leading-relaxed">
              Custom-engineered production websites, branding galleries, and corporate tools developed to drive visibility, growth, and client leads.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard
              title="BEX Backdrops & Exhibitions"
              description="A high-performance digital showcase and inquiry platform for a leading Dubai-based exhibition stand fabrication and backdrop production company."
              features={[
                "Dynamic filterable portfolio displaying high-resolution exhibition builds",
                "Interactive cost estimation and custom backdrop quote builder",
                "Highly optimized asset compression and progressive image loading",
                "SEO framework targeting GCC exhibition, production, and stand-fitting markets",
                "Fluid user experience built with modern animations and responsive design"
              ]}
              tech={["React", "TypeScript", "Tailwind CSS", "Framer Motion"]}
              links={{
                demo: "https://bexdxb.com"
              }}
              bgIcon={Layers}
              isFeatured
            />
          </div>
        </div>

        {/* Section 2: Products & System Design */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 border-l-4 border-secondary pl-6"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-text-heading mb-2">
              Strategic Products & System Design
            </h3>
            <p className="text-text-base text-sm md:text-base max-w-3xl opacity-85 leading-relaxed">
              Advanced applications showcasing backend integration, real-time communications, distributed data synchronization, and modern web architectures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard
              title="Occasio – Event Ticket Booking"
              description="A scalable full-stack platform for booking online and offline events with real-time seat management and live streaming capabilities."
              features={[
                "Block-based seat layout (BookMyShow style)",
                "Real-time seat locking with Socket.IO",
                "Live streaming with WebRTC integration",
                "Dynamic QR ticket generation system",
                "RBAC: Admin, Manager, and User roles",
                "Real-time push notifications"
              ]}
              tech={["MERN", "TypeScript", "Socket.IO", "WebRTC"]}
              links={{ github: "https://github.com/ansaralikunju311311/Occasio" }}
              isFeatured
              bgIcon={Ticket}
            />

            <ProjectCard
              title="HealthHive"
              description="A comprehensive telemedicine platform enabling seamless doctor-patient consultations through secure video and messaging."
              features={[
                "Secure video consultation system",
                "Dynamic appointment booking workflow",
                "JWT & Role-based Access Control",
                "Real-time patient-doctor chat",
                "Integrated medical records management"
              ]}
              tech={["MERN Stack", "Socket.IO", "JWT"]}
              links={{
                github: "https://github.com/ansaralikunju311311/HealthHive",
                demo: "https://health-hive-lat51u3rs-ansar-as-projects.vercel.app/"
              }}
              bgIcon={Video}
            />

            <ProjectCard
              title="Finance Analytics Dashboard"
              description="A high-performance interactive dashboard enabling users to track real-time financial activity and gain deep insights through dynamic data visualizations and role-based simulation."
              features={[
                "Financial summary: Balance, Income, Expenses",
                "Interactive Recharts for spending trends",
                "Reusable table with search & filtering",
                "Role-based UI (Admin & Viewer modes)",
                "Automated spending pattern insights",
                "Pixel-perfect responsive design"
              ]}
              tech={["React", "Redux Toolkit", "Recharts", "Tailwind"]}
              links={{
                github: "https://github.com/ansaralikunju311311/dashboard",
                demo: "https://project-1kkyp.vercel.app"
              }}
              bgIcon={TrendingUp}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
