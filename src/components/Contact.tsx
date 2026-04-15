import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Get In Touch</h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-display font-semibold text-slate-100">Let's build something scalable.</h3>
            <p className="text-slate-400 text-lg max-w-md">
              Whether you have a question or just want to discuss backend architecture and real-time systems, I'm always open to connecting.
            </p>

            <div className="space-y-6">
              <a href="mailto:ansarpanoor311@gmail.com" className="flex items-center space-x-4 group p-4 glass rounded-2xl hover:border-primary/50 transition-all">
                <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:bg-primary group-hover:text-slate-100 transition-colors">
                   <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Email</p>
                  <p className="text-slate-200 font-semibold group-hover:text-primary transition-colors">ansarpanoor311@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/ansar-a-0b210620b/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group p-4 glass rounded-2xl hover:border-secondary/50 transition-all">
                <div className="p-3 bg-secondary/20 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-slate-100 transition-colors">
                   <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">LinkedIn</p>
                  <p className="text-slate-200 font-semibold group-hover:text-secondary transition-colors">Ansar</p>
                </div>
              </a>

              <a href="https://github.com/ansaralikunju311311" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group p-4 glass rounded-2xl hover:border-accent/50 transition-all">
                <div className="p-3 bg-accent/20 rounded-xl text-accent group-hover:bg-accent group-hover:text-slate-100 transition-colors">
                   <Github size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">GitHub</p>
                  <p className="text-slate-200 font-semibold group-hover:text-accent transition-colors">github.com/ansaralikunju311311</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 glass rounded-[2.5rem] border border-slate-700/50"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl focus:outline-none focus:border-primary transition-colors hover:border-slate-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl focus:outline-none focus:border-primary transition-colors hover:border-slate-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl focus:outline-none focus:border-primary transition-colors hover:border-slate-600 resize-none"
                />
              </div>
              <button
                type="button"
                className="w-full group flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-slate-100 rounded-2xl font-bold hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
