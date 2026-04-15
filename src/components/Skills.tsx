import { motion } from "framer-motion";
import { Server, Layout as FrontendIcon, Database, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FrontendIcon size={24} />,
    color: "text-primary",
    skills: ["React.js", "HTML5", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: <Server size={24} />,
    color: "text-secondary",
    skills: ["Node.js", "Express.js", "REST APIs", "TypeScript"],
  },
  {
    title: "Database",
    icon: <Database size={24} />,
    color: "text-accent",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: <Wrench size={24} />,
    color: "text-text-heading",
    skills: ["Git & GitHub", "Docker", "Postman"],
  },
  {
    title: "Concepts",
    icon: <Brain size={24} />,
    color: "text-primary",
    skills: [
      "Auth & Authz",
      "RBAC",
      "Real-time Systems",
      "API & Database Design",
    ],
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 px-4 bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Technical Arsenal</h2>
          <div className="h-1.5 w-20 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
           variants={container}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="p-8 glass rounded-3xl group hover:border-primary/30 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`${category.color} bg-slate-500/10 p-2 rounded-lg`}>
                   {category.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-text-heading">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-2 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover/item:bg-primary transition-colors" />
                    <span className="text-text-base group-hover/item:text-text-heading transition-colors uppercase tracking-widest text-[10px] font-bold">
                        {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
