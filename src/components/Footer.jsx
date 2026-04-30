import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-4">
            <span className="text-xl font-bold font-mono tracking-tighter text-blue-400">
              SM<span className="text-slate-200">.DEV</span>
            </span>
            <p className="text-slate-500 text-sm max-w-xs">
              Building the backbone of modern web applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
            <div className="flex gap-6">
              {[
                { icon: <Github size={20} />, href: "https://github.com/Sohag987", name: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/sohag-mondal-3b7042317/", name: "LinkedIn" },
                
                { icon: <Mail size={20} />, href: "mailto:sohagmondal987@gmail.com", name: "Email" },
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="text-slate-500 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-slate-600 text-[10px] font-mono uppercase tracking-widest">
              © {currentYear} Sohag Mondal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
