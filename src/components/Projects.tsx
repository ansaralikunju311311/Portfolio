import { motion } from "framer-motion";
import { ExternalLink, Ticket, Video, Shield, Lock, ChevronRight } from "lucide-react";
import { Github } from "./BrandIcons";

interface ProjectProps {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  links: { github: string; demo?: string };
  isFeatured?: boolean;
  demoAccess?: string;
  onTryDemo?: () => void;
}

const ProjectCard = ({ title, description, features, tech, links, isFeatured, demoAccess }: ProjectProps) => (
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
        {isFeatured ? <Ticket size={240} /> : <Video size={120} />}
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
                <div className="mt-1 p-1 bg-primary/10 rounded-lg text-primary">
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

        <div className="flex flex-wrap items-center gap-8">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-text-heading hover:text-primary transition-all font-bold group/link">
            <Github size={22} className="group-hover/link:scale-110 transition-transform" />
            <span className="border-b-2 border-transparent group-hover/link:border-primary">GitHub Code</span>
          </a>
          {links.demo && (
            <a href={links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-text-heading hover:text-primary transition-all font-bold group/link">
              <ExternalLink size={22} className="group-hover/link:scale-110 transition-transform" />
              <span className="border-b-2 border-transparent group-hover/link:border-primary">Live Experience</span>
            </a>
          )}
          {demoAccess && (
             <button className="flex items-center space-x-3 px-8 py-3 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-secondary/20 text-sm">
                <Lock size={18} />
                <span>Launch Demo</span>
             </button>
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
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Strategic Projects</h2>
          <div className="h-1.5 w-20 bg-accent mx-auto rounded-full" />
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
            links={{ github: "https://github.com/ansaralikunju311311/Occasio", }}
            isFeatured
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
            links={{ github: "https://github.com/ansaralikunju311311/HealthHive", demo: "https://health-hive-lat51u3rs-ansar-as-projects.vercel.app/" }}
          />
        </div>
      </div>
    </section>
  );
}
