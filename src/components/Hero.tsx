import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe, Rocket, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-8"
        >
          <Rocket size={14} />
          <span>Available for new projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter"
        >
          I'm <span className="text-gradient">Ansar A</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-display font-semibold text-text-heading mb-8"
        >
          MERN Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-text-base mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I build scalable full-stack web applications with a focus on backend systems and real-time features.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#projects"
            className="group flex items-center space-x-2 px-8 py-4 bg-primary text-slate-100 rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
          >
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group flex items-center space-x-2 px-8 py-4 bg-surface border border-border-card text-text-heading rounded-xl font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            <Mail size={18} className="group-hover:rotate-12 transition-transform" />
            <span>Contact Me</span>
          </a>
          <a
            href="/AnsarAlikunjuFinalCV.pdf"
            download
            className="group flex items-center space-x-2 px-8 py-4 bg-accent/20 border border-accent/30 text-accent rounded-xl font-semibold hover:bg-accent/30 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/10"
          >
            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Floating Icons Animation */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6, duration: 1 }}
           className="mt-28 grid grid-cols-3 gap-8 md:gap-16 items-center justify-center opacity-40 grayscale"
        >
          <div className="flex flex-col items-center space-y-2">
            <Code2 size={32} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Backend Systems</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Globe size={32} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Real-time Architecture</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Rocket size={32} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scalable Apps</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
