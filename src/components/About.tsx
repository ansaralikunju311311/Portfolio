import { motion } from "framer-motion";
import { User, Target, Zap, Layout } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">About Me</h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-400 text-lg leading-relaxed"
          >
            <p>
              I am a <span className="text-slate-100 font-semibold">self-taught MERN Stack Developer</span> with a rigorous approach to software engineering and system design. My journey began with a deep curiosity about how large-scale systems handle thousands of concurrent users.
            </p>
            <p>
              While I enjoy building polished user interfaces, my true passion lies in <span className="text-primary font-semibold">backend architecture</span> and developing robust, scalable server-side systems. I specialize in real-time communication using <span className="text-secondary font-semibold">Socket.IO</span> and peer-to-peer data streaming with <span className="text-secondary font-semibold">WebRTC</span>.
            </p>
            <p>
              My most significant achievement to date is <span className="text-accent font-semibold">Occasio</span>, a high-performance event management platform featuring real-time seat locking and live streaming—a project that pushed the boundaries of my knowledge in distributed systems and state management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="p-6 glass rounded-2xl space-y-3 hover:border-primary/50 transition-colors">
              <div className="p-2 bg-primary/20 rounded-lg w-fit text-primary">
                <Target size={24} />
              </div>
              <h3 className="font-display font-bold text-slate-100">System Design</h3>
              <p className="text-sm text-slate-500">Focus on scalability and performance.</p>
            </div>
            <div className="p-6 glass rounded-2xl space-y-3 hover:border-secondary/50 transition-colors">
              <div className="p-2 bg-secondary/20 rounded-lg w-fit text-secondary">
                <Zap size={24} />
              </div>
              <h3 className="font-display font-bold text-slate-100">Real-time</h3>
              <p className="text-sm text-slate-500">Expertise in Socket.IO and WebRTC.</p>
            </div>
            <div className="p-6 glass rounded-2xl space-y-3 hover:border-accent/50 transition-colors">
              <div className="p-2 bg-accent/20 rounded-lg w-fit text-accent">
                <Layout size={24} />
              </div>
              <h3 className="font-display font-bold text-slate-100">Full Stack</h3>
              <p className="text-sm text-slate-500">Seamless frontend-backend integration.</p>
            </div>
            <div className="p-6 glass rounded-2xl space-y-3 hover:border-slate-100/50 transition-colors">
              <div className="p-2 bg-slate-100/10 rounded-lg w-fit text-slate-100">
                <User size={24} />
              </div>
              <h3 className="font-display font-bold text-slate-100">Self-Driven</h3>
              <p className="text-sm text-slate-500">Continuous learner and problem solver.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
