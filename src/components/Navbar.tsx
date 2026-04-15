import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Sun, Moon } from "lucide-react";
import type { RootState } from "../store";
import { toggleTheme } from "../store/themeSlice";
import { Github, Linkedin } from "./BrandIcons";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold text-gradient cursor-pointer"
          >
            Ansar A
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-base hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-slate-700/20 dark:border-slate-800 pl-8">
              <button
                onClick={() => dispatch(toggleTheme())}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-text-heading hover:text-primary transition-all active:scale-90"
                aria-label="Toggle Theme"
              >
                {mode === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              
              <a href="https://github.com/ansaralikunju311311" target="_blank" rel="noopener noreferrer" className="text-text-base hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ansar-a-0b210620b/" target="_blank" rel="noopener noreferrer" className="text-text-base hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button
                onClick={() => dispatch(toggleTheme())}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-text-heading"
              >
                {mode === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-base hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-semibold text-text-base hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex justify-center space-x-8 px-3 py-6 border-t border-slate-200 dark:border-slate-800">
                <a href="https://github.com/ansaralikunju311311" target="_blank" rel="noopener noreferrer">
                  <Github size={24} className="text-text-base hover:text-primary" />
                </a>
                <a href="https://www.linkedin.com/in/ansar-a-0b210620b/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} className="text-text-base hover:text-primary" />
                </a>
                <a href="mailto:ansarpanoor311@gmail.com">
                  <Mail size={24} className="text-text-base hover:text-primary" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
