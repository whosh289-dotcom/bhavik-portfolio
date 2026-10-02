"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Award, X, Eye } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Life Dashboard",
    description: "A comprehensive dashboard for tracking daily life metrics, habits, and productivity.",
    link: "https://life-dashboard-8hq.pages.dev/",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Cortex Band",
    description: "Built for a client — a complete web solution featuring both frontend and backend architectures.",
    link: "https://cortex-band-website.whosh289.workers.dev",
    tags: ["Frontend", "Backend", "Client Project"],
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-[#111] border border-white/15 rounded-2xl w-full max-w-5xl h-[88vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#141414]">
          <div className="min-w-0 pr-4">
            <h3 className="font-bold text-base sm:text-lg text-white truncate">{cert.title}</h3>
            <p className="text-xs sm:text-sm text-gray-400 truncate">{cert.issuer} · {cert.date}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {cert.verify && cert.verify !== "#" && (
              <a
                href={cert.verify}
                target="_blank"
                rel="noreferrer"
                className="text-xs bg-blue-500/15 text-blue-400 hover:bg-blue-500/25 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 font-medium"
              >
                Verify <ExternalLink size={12} />
              </a>
            )}
            <a
              href={cert.pdf}
              target="_blank"
              rel="noreferrer"
              className="text-xs bg-white/10 text-gray-200 hover:text-white hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 font-medium"
            >
              Open Original ↗
            </a>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white ml-1"
              aria-label="Close viewer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Certificate Embed */}
        <div className="flex-1 bg-[#141414] overflow-auto flex items-center justify-center p-3 sm:p-6">
          <img 
            src={cert.pdf.replace(/\.pdf$/, ".png")} 
            alt={cert.title} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl bg-white select-none" 
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [viewingCert, setViewingCert] = useState<typeof certificates[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-blue-500/30">
      
      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {viewingCert && <CertViewer cert={viewingCert} onClose={() => setViewingCert(null)} />}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">Bhavik.</span>
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            <Link href="#certs" className="hover:text-white transition-colors">Certificates</Link>
            <Link href="#work" className="hover:text-white transition-colors">Websites</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-start relative">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Available for freelance</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              I build visually striking <br className="hidden md:block"/> & functional websites.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-light">
              Student developer who turns bold ideas into live URLs, designing sleek UI/UX, and writing clean, scalable code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#work" className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 transition-all active:scale-95 flex items-center gap-2">
                Explore My Work <ArrowRight size={18} />
              </Link>
              <Link href="#about" className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                More About Me
              </Link>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-12 justify-between"
          >
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
              <div className="w-20 h-1 bg-blue-500 rounded-full mb-8"></div>
            </div>
            <div className="md:w-2/3 text-gray-400 text-lg leading-relaxed space-y-6">
              <p>
                Hey, I&apos;m Bhavik. I&apos;m a student developer who spends practically all my free time designing, building, and deploying web-based tools and applications. 
              </p>
              <p>
                I love rapidly turning concepts into live, polished software — from custom AI assistant interfaces to productivity dashboards. As a vibe coder, I have worked with clients to deliver complete web solutions, and my focus is always on creating sleek, dark-themed, and highly responsive user experiences.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                {['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Node.js'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-medium text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
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
            
            <div className="flex gap-4 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="group snap-start shrink-0 w-[220px] sm:w-[260px] md:w-[280px] text-left flex flex-col"
                >
                  <div className={`h-full bg-[#111] border rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/30 flex flex-col ${
                    cert.highlight ? "border-blue-500/40 hover:border-blue-500/70" : "border-white/10"
                  }`}>
                    {/* Certificate Preview Thumbnail (Clickable to View Full - Uncropped) */}
                    <div 
                      onClick={() => setViewingCert(cert)}
                      className="relative w-full aspect-[4/3] bg-[#080808] p-2.5 overflow-hidden cursor-pointer flex items-center justify-center border-b border-white/5"
                    >
                      <img 
                        src={cert.pdf.replace(/\.pdf$/, ".png")} 
                        alt={cert.title} 
                        className="max-w-full max-h-full object-contain rounded shadow-sm opacity-95 group-hover:opacity-100 transition-opacity" 
                        loading="lazy"
                      />
                      {/* View Full Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                          <Eye size={13} /> View Full
                        </span>
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="p-4 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h3 className="text-sm sm:text-base font-semibold leading-snug line-clamp-2">{cert.title}</h3>
                        </div>
                        <p className="text-xs text-gray-400 line-clamp-1">{cert.issuer}</p>
                        <div className="flex items-center justify-between mt-2 text-xs">
                          <span className="text-gray-500">{cert.date}</span>
                          {cert.courses && (
                            <span className="text-blue-400/80 font-medium">{cert.courses} courses</span>
                          )}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5">
                        <button
                          onClick={() => setViewingCert(cert)}
                          className="flex-1 py-1.5 px-3 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Eye size={12} /> View
                        </button>
                        {cert.verify && cert.verify !== "#" && (
                          <a
                            href={cert.verify}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-1"
                          >
                            Verify <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Top 3 Websites I Made */}
        <section id="work" className="py-24 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Top 3 Websites I Made</h2>
                <p className="text-gray-400 text-lg">Top projects I&apos;ve built recently.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/50 group-hover:to-purple-500/50 rounded-3xl blur-sm transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-full bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all flex flex-col hover:bg-[#141414] overflow-hidden">
                    {/* Decorative gradient orb */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
                    
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 group-hover:text-blue-400 transition-colors">
                        <Award size={24} />
                      </div>
                      <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-gray-400 hover:text-white">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-8 flex-grow text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:border-white/20 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 border-t border-white/10 mt-24 text-center">
          <p className="text-gray-500 font-medium">© {new Date().getFullYear()} Bhavik. Built with Next.js and Tailwind.</p>
        </footer>

      </main>
    </div>
  );
}
