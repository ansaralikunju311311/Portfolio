import { Mail, Heart } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border-card dark:border-slate-800/50 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="text-xl font-display font-bold text-gradient">Ansar A</h4>
            <p className="text-sm text-text-base uppercase tracking-widest font-semibold flex items-center justify-center md:justify-start">
              Built with <Heart size={14} className="mx-1.5 text-primary fill-primary" /> using MERN Stack
            </p>
          </div>

          <div className="flex items-center space-x-10">
            <a href="https://github.com/ansaralikunju311311" target="_blank" rel="noopener noreferrer" className="text-text-base hover:text-primary transition-all hover:scale-110">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/ansar-a-0b210620b/" target="_blank" rel="noopener noreferrer" className="text-text-base hover:text-secondary transition-all hover:scale-110">
              <Linkedin size={22} />
            </a>
            <a href="mailto:ansarpanoor311@gmail.com" className="text-text-base hover:text-accent transition-all hover:scale-110">
              <Mail size={22} />
            </a>
          </div>

          <div className="text-xs text-text-base font-bold uppercase tracking-widest opacity-60">
            &copy; {new Date().getFullYear()} Ansar A. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
