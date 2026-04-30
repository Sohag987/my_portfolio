import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-slate-400 mb-12 max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Whether it's back-end engineering or full-stack ventures, let's talk.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 glass rounded-2xl border-white/5 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:sohagmondal987@gmail.com" className="text-lg font-bold text-slate-200 hover:text-blue-400 transition-colors">
                    sohagmondal987@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 glass rounded-2xl border-white/5 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-lg font-bold text-slate-200">+880 1850 554600</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 glass rounded-2xl border-white/5 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold text-slate-200">Rajshahi, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-10 glass rounded-[2rem] border-white/5 shadow-2xl relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-blue-400" size={20} />
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-slate-500 uppercase tracking-widest">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-slate-500 uppercase tracking-widest">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono text-slate-500 uppercase tracking-widest">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-slate-500 uppercase tracking-widest">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-emerald-400 text-sm text-center"
              >
                Thank you! I'll get back to you soon.
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
