import { Mail, Heart } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800/50 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="text-xl font-display font-bold text-gradient">Ansar A</h4>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold flex items-center justify-center md:justify-start">
              Built with <Heart size={14} className="mx-1.5 text-primary fill-primary" /> using MERN Stack
            </p>
          </div>

          <div className="flex items-center space-x-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-secondary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ansar@example.com" className="text-slate-500 hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-sm text-slate-600 font-medium">
            &copy; {new Date().getFullYear()} Ansar A. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
