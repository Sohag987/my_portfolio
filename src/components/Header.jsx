import { motion } from "motion/react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-xl font-bold font-mono tracking-tighter text-blue-400">
              SOHAG<span className="text-slate-200">MONDAL</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 border-l border-slate-700 pl-8">
              <a 
                href="/Sohag_Mondal_CV.pdf" 
                download 
                className="text-xs font-mono px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded hover:bg-blue-500 hover:text-white transition-all"
              >
                RESUME
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-400 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
