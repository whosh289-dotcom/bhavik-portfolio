"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Mail, Twitter, ExternalLink, Award, Shield, X, Eye } from "lucide-react";
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
    title: "Rajesh LED LCD TV Repairing Services",
    description: "Built for a client — a full business website for a TV repair shop in Nagpur, featuring service listings, a photo gallery, live Google Reviews integration, and click-to-call functionality.",
    link: "https://rajesh-tv-repair.whosh289.workers.dev",
    tags: ["Business Website", "Cloudflare Workers", "SEO"],
  },
  {
    title: "Notes Maker — AI Study Notes",
    description: "An AI-powered study note generator that turns rough notes into exam-ready sheets with derivations, trap detection, and previous year questions.",
    link: "https://notes-maker.whosh289.workers.dev",
    tags: ["AI", "Cloudflare Workers", "Education"],
  },
];

const certificates = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Google via Coursera",
    date: "Apr 2026",
    courses: 7,
    verify: "https://coursera.org/verify/professional-cert/007XZW51DT9F",
    pdf: "/certs/google-ai-professional.pdf",
    highlight: true,
  },
  {
    title: "Generative AI Leader Professional Certificate",
    issuer: "Google Cloud via Coursera",
    date: "Apr 2026",
    courses: 5,
    verify: "https://coursera.org/verify/professional-cert/18MVVW7HG8BU",
    pdf: "/certs/google-cloud-gen-ai-leader.pdf",
    highlight: true,
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata via Forage",
    date: "Apr 2026",
    pdf: "/certs/tata-cybersecurity.pdf",
    verify: "#",
  },
  {
    title: "AI in Action Job Simulation",
    issuer: "Forage",
    date: "Apr 2026",
    pdf: "/certs/ai-in-action-forage.pdf",
    verify: "#",
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM via Coursera",
    date: "Mar 2026",
    pdf: "/certs/ibm-prompt-engineering.pdf",
    verify: "https://coursera.org/verify/6J84YL5Q04F0",
  },
  {
    title: "YUVA AI for ALL",
    issuer: "IndiaAI via Coursera",
    date: "Mar 2026",
    pdf: "/certs/yuva-ai-for-all.pdf",
    verify: "https://coursera.org/verify/DYAGHFUKPZ0N",
  },
  {
    title: "EF SET English Certificate — B2 Upper Intermediate",
    issuer: "EF SET",
    date: "Sep 2026",
    pdf: "/certs/ef-set-english.pdf",
    verify: "https://cert.efset.org/UoT7C1",
  },
  {
    title: "AI Fundamentals",
    issuer: "Google via Coursera",
    date: "Apr 2026",
    pdf: "/certs/google-ai-fundamentals.pdf",
    verify: "https://coursera.org/verify/Y8TV9PLHQ32O",
  },
  {
    title: "AI for Brainstorming and Planning",
    issuer: "Google via Coursera",
    date: "Apr 2026",
    pdf: "/certs/google-ai-brainstorming.pdf",
    verify: "https://coursera.org/verify/BY7855L5OHF9",
  },
  {
    title: "AI for Content Creation",
    issuer: "Google via Coursera",
    date: "Apr 2026",
    pdf: "/certs/google-ai-content-creation.pdf",
    verify: "https://coursera.org/verify/IQJYINQ0CPED",
  },
  {
    title: "AI for Data Analysis",
    issuer: "Google via Coursera",
    date: "Apr 2026",
    pdf: "/certs/google-ai-data-analysis.pdf",
    verify: "https://coursera.org/verify/BHYHBXMVY2SD",
  },
  {
    title: "AI for Research and Insights",
    issuer: "Google via Coursera",
    date: "Apr 2026",
    pdf: "/certs/google-ai-research.pdf",
    verify: "https://coursera.org/verify/O4P26NIX02FH",
  },
  {
    title: "AI for Writing and Communicating",
    issuer: "Google via Coursera",
    date: "Apr 2026",
    pdf: "/certs/google-ai-writing.pdf",
    verify: "https://coursera.org/verify/0M0NYWCOMAR1",
  },
  {
    title: "Discover the Art of Prompting",
    issuer: "Google via Coursera",
    date: "Apr 2026",
    pdf: "/certs/google-art-of-prompting.pdf",
    verify: "https://coursera.org/verify/I03G5JGERU62",
  },
  {
    title: "Gen AI: Unlock Foundational Concepts",
    issuer: "Google Cloud via Coursera",
    date: "Apr 2026",
    pdf: "/certs/google-cloud-gen-ai-1.pdf",
    verify: "https://coursera.org/verify/E9MLFZGVOG40",
  },
  {
    title: "Gen AI: Navigate the Landscape",
    issuer: "Google Cloud via Coursera",
    date: "Apr 2026",
    pdf: "/certs/google-cloud-gen-ai-2.pdf",
    verify: "https://coursera.org/verify/F9WHAPI2G3WR",
  },
  {
    title: "Gen AI: Beyond the Chatbot",
    issuer: "Google Cloud via Coursera",
    date: "Apr 2026",
    pdf: "/certs/google-cloud-gen-ai-3.pdf",
    verify: "https://coursera.org/verify/AS5S6AMRI453",
  },
  {
    title: "Gen AI Apps: Transform Your Work",
    issuer: "Google Cloud via Coursera",
    date: "Apr 2026",
    pdf: "/certs/google-cloud-gen-ai-apps.pdf",
    verify: "https://coursera.org/verify/IKJPEXD7BH2L",
  },
  {
    title: "Maximize Productivity With AI Tools",
    issuer: "Google via Coursera",
    date: "Mar 2026",
    pdf: "/certs/google-maximize-productivity.pdf",
    verify: "https://coursera.org/verify/HYZI3BG75HJ5",
  },
  {
    title: "Introduction to AI",
    issuer: "Google via Coursera",
    date: "Mar 2026",
    pdf: "/certs/google-intro-to-ai.pdf",
    verify: "https://coursera.org/verify/LDXYQIYORNOV",
  },
  {
    title: "AI Appreciate 2025",
    issuer: "AI Appreciation Program",
    date: "2025",
    pdf: "/certs/ai-appreciate-2025.png",
    verify: "#",
  },
  {
    title: "AI Aware 2025",
    issuer: "AI Awareness Program",
    date: "2025",
    pdf: "/certs/ai-aware-2025.png",
    verify: "#",
  },
  {
    title: "AI For All",
    issuer: "AI For All Program",
    date: "2025",
    pdf: "/certs/ai-for-all.png",
    verify: "#",
  },
  {
    title: "AI For All — Advanced",
    issuer: "AI For All Program",
    date: "2025",
    pdf: "/certs/ai-for-all-1.png",
    verify: "#",
  },
  {
    title: "AI for Oceans — Hour of Code",
    issuer: "Code.org",
    date: "2026",
    pdf: "/certs/ai-for-oceans-hour-of-code.pdf",
    verify: "#",
  },
  {
    title: "Mix & Move with AI",
    issuer: "AI Workshop",
    date: "2026",
    pdf: "/certs/mix-and-move-with-ai.pdf",
    verify: "#",
  },
  {
    title: "AI Foundation Course",
    issuer: "AI Foundation",
    date: "2026",
    pdf: "/certs/ai-foundation-course.pdf",
    verify: "#",
  },
  {
    title: "Google AI Professional Certificate Badge",
    issuer: "Google via Credly",
    date: "Apr 2026",
    pdf: "/certs/google-ai-badge.pdf",
    verify: "https://www.credly.com/go/pFfIyv9f",
    highlight: true,
  },
];

// Certificate Viewer Modal
function CertViewer({ cert, onClose }: { cert: typeof certificates[0] | null; onClose: () => void }) {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div>
              <h3 className="font-bold text-lg">{cert.title}</h3>
              <p className="text-sm text-gray-500">{cert.issuer} · {cert.date}</p>
            </div>
            <div className="flex items-center gap-3">
              {cert.verify !== "#" && (
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-lg hover:bg-blue-500/20 transition-colors"
                >
                  Verify ↗
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* PDF / Image Embed */}
          <div className="flex-1 bg-[#0a0a0a] overflow-auto">
            {cert.pdf.endsWith(".png") ? (
              <div className="flex items-center justify-center h-full p-8">
                <img src={cert.pdf} alt={cert.title} className="max-w-full max-h-full object-contain rounded-lg" />
              </div>
            ) : (
              <iframe
                src={cert.pdf}
                className="w-full h-full border-0"
                title={cert.title}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [viewingCert, setViewingCert] = useState<typeof certificates[0] | null>(null);

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
      
      {/* Certificate Viewer Modal */}
      {viewingCert && <CertViewer cert={viewingCert} onClose={() => setViewingCert(null)} />}

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
              I&apos;ve created dozens of diverse web projects. I love turning bold ideas into live URLs, designing sleek UI/UX, and writing clean, scalable code.
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
                Hey, I&apos;m Bhavik. I&apos;m a student who spends practically all my free time designing, building, and deploying cool web-based tools and applications. 
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
        <section id="certs" className="py-12 sm:py-16 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Certificates & Credentials</h2>
              <p className="text-gray-400 text-sm sm:text-lg">{certificates.length} professional certificates. Tap any to view full size.</p>
            </div>
            
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
              {certificates.map((cert, index) => (
                <motion.button
                  key={cert.title}
                  onClick={() => setViewingCert(cert)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="group snap-start shrink-0 w-[180px] sm:w-[220px] md:w-[240px] text-left"
                >
                  <div className={`h-full bg-[#111] border rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20 ${
                    cert.highlight ? "border-blue-500/30 hover:border-blue-500/50" : "border-white/10"
                  }`}>
                    {/* Certificate Preview Thumbnail */}
                    <div className="relative w-full h-[120px] sm:h-[150px] bg-[#0a0a0a] overflow-hidden">
                      {cert.pdf.endsWith(".png") ? (
                        <img src={cert.pdf} alt={cert.title} className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity" />
                      ) : (
                        <iframe
                          src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                          className="w-full h-[300px] border-0 pointer-events-none scale-[0.5] origin-top-left"
                          style={{ width: "200%", height: "300px" }}
                          title={cert.title}
                          tabIndex={-1}
                        />
                      )}
                      {/* View Full Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                          <Eye size={12} /> View Full
                        </span>
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="p-3 sm:p-4">
                      <h3 className="text-xs sm:text-sm font-semibold mb-1 leading-tight line-clamp-2">{cert.title}</h3>
                      <p className="text-[10px] sm:text-xs text-gray-500 line-clamp-1">{cert.issuer}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[10px] sm:text-xs text-gray-600">{cert.date}</span>
                        {cert.courses && (
                          <span className="text-[10px] text-blue-400/70">{cert.courses} courses</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.button>
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
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Build Something.</h2>
            <p className="text-gray-400 text-lg mb-10">
              Always open to collaborating on new web projects. If you have an idea you want to turn into a live URL, let&apos;s talk.
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
                <p className="text-green-500 mt-2 text-sm">Message sent successfully! I&apos;ll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-red-500 mt-2 text-sm">Failed to send message. Please try again or reach out via email.</p>
              )}
            </form>

            <div className="flex gap-6 text-gray-400">
              <a href="https://github.com/whosh289-dotcom" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
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
