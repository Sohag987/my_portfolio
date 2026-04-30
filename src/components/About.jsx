import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <span className="w-10 h-1 bg-blue-500 inline-block rounded-full" />
              About Me
            </h2>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass p-6 rounded-2xl border-white/5">
                <p className="text-slate-400 leading-relaxed italic">
                  "Driven by curiosity — always exploring new technologies and development methodologies."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-2/3 space-y-8"
          >
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                I am a motivated <span className="text-white font-bold">CSE undergraduate</span> at Rajshahi University of Engineering and Technology (graduating 2028). 
                I have a strong foundation in <span className="text-blue-400">back-end development</span> and hands-on project experience.
              </p>
              <p className="text-slate-400 leading-relaxed">
                As the founder of <span className="text-white">boibondhu.xyz</span>, I have demonstrated real-world initiative in building and deploying 
                scalable web applications from the ground up. My passion lies in creating clean, production-ready software 
                that solves real problems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="glass p-6 rounded-xl border-white/5">
                <GraduationCap className="text-blue-400 mb-4" size={28} />
                <h3 className="font-bold text-white mb-2">Education</h3>
                <p className="text-sm text-slate-300">B.Sc. in Computer Science & Engineering</p>
                <p className="text-xs text-slate-500 mt-1">Rajshahi University of Engineering and Technology (RUET)</p>
                <p className="text-xs text-blue-400 mt-2 font-mono uppercase tracking-wider">Class of 2028</p>
              </div>

              <div className="glass p-6 rounded-xl border-white/5">
                <Award className="text-emerald-400 mb-4" size={28} />
                <h3 className="font-bold text-white mb-2">Professional Summary</h3>
                <ul className="text-xs text-slate-400 space-y-2">
                  <li>• Founder of boibondhu.xyz</li>
                  <li>• Scalable back-end services</li>
                  <li>• Production deployment experience</li>
                  <li>• Quick learner & team player</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Avid Reader', 'Scalable Architecture', 'Self-Development', 'Problem Solving'].map((trait) => (
                <span key={trait} className="px-3 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded-full text-xs">
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
