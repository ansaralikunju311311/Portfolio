import { motion } from "framer-motion";
import { ExternalLink, Ticket, Video, Shield, Lock, ChevronRight } from "lucide-react";
import { Github } from "./BrandIcons";

interface ProjectProps {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  links: { github: string; demo: string };
  isFeatured?: boolean;
  demoAccess?: string;
  onTryDemo?: () => void;
}

const ProjectCard = ({ title, description, features, tech, links, isFeatured, demoAccess }: ProjectProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`p-1 rounded-[2rem] bg-gradient-to-br transition-all duration-500 hover:scale-[1.02] ${
      isFeatured 
        ? "from-primary/40 via-accent/40 to-secondary/40 lg:col-span-2" 
        : "from-slate-800 to-slate-900 border border-slate-700/50"
    }`}
  >
    <div className="h-full w-full bg-[#0a0f1d] rounded-[1.8rem] p-8 md:p-12 overflow-hidden relative group">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-8 text-slate-800 -z-0 opacity-10 group-hover:opacity-20 transition-opacity">
        {isFeatured ? <Ticket size={200} /> : <Video size={100} />}
      </div>

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {isFeatured && (
            <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
              Featured Project
            </span>
          )}
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
              {t}
            </span>
          ))}
        </div>

        <h3 className={`font-display font-bold mb-4 ${isFeatured ? "text-4xl md:text-5xl" : "text-3xl"} text-slate-100`}>
          {title}
        </h3>

        <p className="text-slate-400 text-lg mb-8 max-w-2xl leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start space-x-3 text-slate-300">
                <div className="mt-1 p-1 bg-slate-800 rounded text-primary">
                  <ChevronRight size={14} />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
        </div>

        {demoAccess && (
           <div className="mb-8 p-4 bg-secondary/10 border border-secondary/20 rounded-xl">
             <div className="flex items-center space-x-2 text-secondary mb-2">
               <Shield size={16} />
               <h4 className="text-xs font-bold uppercase tracking-widest">Demo Access</h4>
             </div>
             <p className="text-sm text-slate-400">
               {demoAccess}
             </p>
           </div>
        )}

        <div className="flex flex-wrap items-center gap-6">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-100 hover:text-primary transition-colors font-semibold">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href={links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-100 hover:text-primary transition-colors font-semibold">
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
          {demoAccess && (
             <button className="flex items-center space-x-2 px-6 py-2 bg-secondary/20 border border-secondary/40 text-secondary rounded-lg font-bold hover:bg-secondary/30 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-secondary/10 text-sm">
                <Lock size={16} />
                <span>Try Demo</span>
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
            links={{ github: "#", demo: "#" }}
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
            links={{ github: "#", demo: "#" }}
            demoAccess="Demo access available for Admin, Doctor, and User roles. Use the 'Try Demo' button to auto-login."
          />
        </div>
      </div>
    </section>
  );
}
