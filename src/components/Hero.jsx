import { motion } from "motion/react";
import { ArrowRight, Code2, Server, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6"
            >
              <Server size={14} /> Available for full-stack opportunities
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              I'm <span className="text-gradient">Sohag Mondal</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
              Backend Developer & CSE Undergraduate. 
              Passionate about building scalable systems and clean, production-ready software from the ground up.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
              >
                View Projects <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="/Sohag_Mondal_CV.pdf"
                download="Sohag_Mondal_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium border border-white/10 flex items-center gap-2 transition-colors"
              >
                Download CV <ArrowRight className="rotate-90" size={18} />
              </motion.a>
            </div>

            <div className="mt-12 flex gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-white">RUET '28</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-mono">Education</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-white">Founder</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-mono">boibondhu.xyz</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 glass rounded-2xl p-6 border-white/5 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="text-[10px] text-slate-500 font-mono ml-4">Terminal — sohag@ruet</div>
              </div>
              <div className="font-mono text-sm space-y-2">
                <p className="text-blue-400"># Current Project</p>
                <div className="flex gap-2">
                  <span className="text-emerald-400">➜</span>
                  <p><span className="text-purple-400">const</span> status = <span className="text-emerald-300">"Building Scalable Apps"</span>;</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-emerald-400">➜</span>
                  <p><span className="text-purple-400">const</span> techStack = [<span className="text-emerald-300">"Django"</span>, <span className="text-emerald-300">"Redis"</span>, <span className="text-emerald-300">"React"</span>];</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-emerald-400">➜</span>
                  <p><span className="text-purple-400">const</span> location = <span className="text-emerald-300">"Rajshahi, Bangladesh"</span>;</p>
                </div>
                <div className="cursor-pulse w-2 h-5 bg-white/20 inline-block ml-1" />
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 border border-blue-500/10 rounded-full animate-spin-slow" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-emerald-500/10 rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
