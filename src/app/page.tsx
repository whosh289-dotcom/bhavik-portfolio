"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Twitter, Globe, ExternalLink, Award, Shield } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Life Dashboard",
    description: "A comprehensive dashboard for tracking daily life metrics, habits, and productivity.",
    link: "https://life-dashboard-8hq.pages.dev/",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Brainy Syncro Work Flow",
    description: "An advanced workflow synchronization tool designed for optimal team productivity.",
    link: "https://brainy-syncro-work-flow.base44.app",
    tags: ["React", "Node.js", "UI/UX"],
  },
  {
    title: "AI Chat Assistant Interface",
    description: "A sleek, custom web-based chat interface for interacting with language models.",
    link: "#",
    tags: ["WebSockets", "Next.js", "Framer Motion"],
  },
  {
    title: "Student Tools Hub",
    description: "A collection of web-based utilities and calculators built specifically for students.",
    link: "#",
    tags: ["TypeScript", "Tailwind CSS"],
  }
];

const certificates = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Google via Coursera",
    date: "Apr 2026",
    courses: 7,
    verify: "https://coursera.org/verify/professional-cert/007XZW51DT9F",
    highlight: true,
  },
  {
    title: "Generative AI Leader Professional Certificate",
    issuer: "Google Cloud via Coursera",
    date: "Apr 2026",
    courses: 5,
    verify: "https://coursera.org/verify/professional-cert/18MVVW7HG8BU",
    highlight: true,
  },
  {
    title: "Google AI Essentials Professional Certificate",
    issuer: "Google via Coursera",
    date: "Apr 2026",
    courses: 5,
    verify: "https://coursera.org/verify/professional-cert/YETJM30S3FPC",
    highlight: true,
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata via Forage",
    date: "Apr 2026",
    verify: "#",
  },
  {
    title: "AI in Action Job Simulation",
    issuer: "Forage",
    date: "Apr 2026",
    verify: "#",
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM via Coursera",
    date: "Mar 2026",
    verify: "https://coursera.org/verify/6J84YL5Q04F0",
  },
  {
    title: "YUVA AI for ALL",
    issuer: "IndiaAI via Coursera",
    date: "Mar 2026",
    verify: "https://coursera.org/verify/DYAGHFUKPZ0N",
  },
  {
    title: "EF SET English Certificate — B2 Upper Intermediate",
    issuer: "EF SET",
    date: "Sep 2026",
    verify: "https://cert.efset.org/UoT7C1",
  },
];

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">Bhavik.</span>
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            <Link href="#work" className="hover:text-white transition-colors">Work</Link>
            <Link href="#certs" className="hover:text-white transition-colors">Certificates</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-500 font-medium mb-4 tracking-wide uppercase text-sm">Student & Frontend Developer</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              I build visually striking <br className="hidden md:block"/> & functional websites.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
              I've created dozens of diverse web projects. I love turning bold ideas into live URLs, designing sleek UI/UX, and writing clean, scalable code.
            </p>
            <div className="flex gap-4">
              <Link href="#work" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
                Explore My Websites <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="text-gray-400 text-lg max-w-3xl leading-relaxed space-y-6">
              <p>
                Hey, I'm Bhavik. I'm a student who spends practically all my free time designing, building, and deploying cool web-based tools and applications. 
              </p>
              <p>
                From custom AI assistant interfaces to heavy-duty productivity dashboards, I love the entire process of front-end development. My focus is always on creating sleek, dark-themed, and highly responsive user experiences that get out of the way and let the functionality shine.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Projects Showcase */}
        <section id="work" className="py-24 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-12">Featured Websites</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 rounded-2xl blur transition-all duration-500" />
                <div className="relative h-full bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors flex flex-col">
                  
                  {/* Browser Mockup Header */}
                  <div className="flex gap-2 mb-6 pb-4 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 flex items-center justify-between">
                    {project.title}
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </h3>
                  <p className="text-gray-400 mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certs" className="py-24 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Certificates & Credentials</h2>
            <p className="text-gray-400 mb-12 text-lg">Professional certificates from Google, IBM, and more — earned through Coursera and other platforms.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <motion.a
                  key={cert.title}
                  href={cert.verify}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative block"
                >
                  <div className={`h-full bg-[#111] border rounded-xl p-6 transition-all duration-300 hover:border-white/20 ${
                    cert.highlight ? "border-blue-500/30 hover:border-blue-500/50" : "border-white/10"
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-2 rounded-lg ${cert.highlight ? "bg-blue-500/10" : "bg-white/5"}`}>
                        {cert.highlight ? <Award size={20} className="text-blue-400" /> : <Shield size={20} className="text-gray-400" />}
                      </div>
                      <span className="text-xs text-gray-500">{cert.date}</span>
                    </div>
                    <h3 className="text-base font-semibold mb-2 group-hover:text-white transition-colors">{cert.title}</h3>
                    <p className="text-sm text-gray-500">{cert.issuer}</p>
                    {cert.courses && (
                      <p className="text-xs text-blue-400/70 mt-3">{cert.courses} courses completed</p>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">Let's Build Something.</h2>
            <p className="text-gray-400 text-lg mb-10">
              Always open to collaborating on new web projects. If you have an idea you want to turn into a live URL, let's talk.
            </p>
            
            <form className="space-y-4 mb-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#111] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors w-full" 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#111] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors w-full" 
                />
              </div>
              <textarea 
                placeholder="Your message..." 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-[#111] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors w-full resize-none" 
              />
              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors w-full disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
              
              {status === "success" && (
                <p className="text-green-500 mt-2 text-sm">Message sent successfully! I'll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-red-500 mt-2 text-sm">Failed to send message. Please try again or reach out via email.</p>
              )}
            </form>

            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Github size={20} /> GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Twitter size={20} /> Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Mail size={20} /> Email
              </a>
            </div>
          </motion.div>
        </section>
        
      </main>
    </div>
  );
}
