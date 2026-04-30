import { motion } from "motion/react";
import { Server, Database, Layout, Settings, Terminal } from "lucide-react";

const skillGroups = [
  {
    title: "Back-end Development",
    icon: <Server className="text-blue-400" />,
    skills: ["Python", "Django", "Django REST Framework", "Redis"],
  },
  {
    title: "Databases",
    icon: <Database className="text-emerald-400" />,
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Frontend",
    icon: <Layout className="text-purple-400" />,
    skills: ["HTML", "Tailwind CSS", "JavaScript", "React", "Axios"],
  },
  {
    title: "DevOps & Deployment",
    icon: <Settings className="text-amber-400" />,
    skills: ["Git", "GitHub", "CI/CD pipelines", "Nginx", "Gunicorn", "VPS management"],
  },
  {
    title: "Tools & Testing",
    icon: <Terminal className="text-rose-400" />,
    skills: ["Postman", "Networking fundamentals"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Technical <span className="text-gradient">Stack</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            A comprehensive set of skills focused on building robust back-end systems and modern user interfaces.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h3 className="font-bold text-white text-lg">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white/5 text-slate-300 border border-white/10 rounded-md text-xs font-mono group-hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
