import { motion } from "motion/react";
import { ExternalLink, Github, Layers, Cpu, Database, Shield } from "lucide-react";

const project = {
  title: "boibondhu.xyz",
  role: "Founder & Lead Developer",
  description: "Conceptualized, designed, and built a full-stack web platform from scratch. Implemented robust back-end services and automated deployment pipelines.",
  tags: ["Django", "React", "PostgreSQL", "Nginx", "Redis", "CI/CD"],
  stats: [
    { label: "Backend", value: "Django REST", icon: <Cpu size={16} /> },
    { label: "Storage", value: "PostgreSQL", icon: <Database size={16} /> },
    { label: "State", value: "Redis", icon: <Layers size={16} /> },
    { label: "Security", value: "Nginx", icon: <Shield size={16} /> },
  ],
  highlights: [
    "Implemented RESTful API architecture with Django REST Framework.",
    "Deployed on a VPS using Nginx and Gunicorn with CI/CD integration.",
    "Optimized database design and caching with Redis for high performance.",
    "Managed full lifecycle: from conceptualization to global deployment."
  ],
  link: "https://boibondhu.xyz",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
            <p className="text-slate-400 max-w-xl">
              Selected projects that showcase my technical expertise in building full-stack applications and managing infrastructure.
            </p>
          </div>
          <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-2 mb-2">
            View all projects on GitHub <Github size={16} />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group lg:p-12"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-emerald-600/10 rounded-[2.5rem] blur-2xl group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative glass rounded-[2.5rem] overflow-hidden border-white/5 shadow-2xl flex flex-col lg:flex-row">
            {/* Project Info */}
            <div className="p-8 lg:p-12 lg:w-1/2 space-y-8">
              <div>
                <span className="text-blue-400 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Primary Venture</span>
                <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 font-medium">{project.role}</p>
              </div>

              <p className="text-slate-300 leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-blue-400 mb-2">{stat.icon}</div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-sm font-bold text-slate-200">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-2 bg-white text-slate-900 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  Visit Site <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Visual/List Part */}
            <div className="p-8 lg:p-12 lg:w-1/2 bg-blue-500/5 lg:border-l border-white/5 space-y-8">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
                <Layers className="text-blue-400" size={20} />
                Technical Highlights
              </h4>
              
              <ul className="space-y-6">
                {project.highlights.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 text-slate-300"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed">{item}</p>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-8">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Core Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-mono border border-blue-500/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
