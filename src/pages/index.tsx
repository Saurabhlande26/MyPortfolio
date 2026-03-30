import { useEffect, useState } from "react";
import { useInView } from "../component/hooks/useInView";
import { NAV_LINKS, PROJECTS, SKILLS, TOOLS_BADGES } from "../component/JSON";
import { SkillBar } from "../component/SkillBar";
import { ProjectCard } from "../component/ProjectCard";
import Header from "../component/header";

export default function Portfolio() {
    const [typedText, setTypedText] = useState("");
    const [skillsRef, skillsInView] = useInView(0.1);
    const [activeSection, setActiveSection] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    const fullText = "Full Stack Developer!!";

    useEffect(() => {
        let i = 0;
        const iv = setInterval(() => {
            setTypedText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) clearInterval(iv);
        }, 80);
        return () => clearInterval(iv);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = NAV_LINKS.map((s) => document.getElementById(s.toLowerCase()));
            const scrollY = window.scrollY + 120;
            sections.forEach((sec) => {
                if (sec && sec.offsetTop <= scrollY && sec.offsetTop + sec.offsetHeight > scrollY) {
                    setActiveSection(sec.id.charAt(0).toUpperCase() + sec.id.slice(1));
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <div style={{ background: "#060d1a", minHeight: "100vh", color: "#f0f4f8" }}>
            {/* NAVBAR */}
            <Header {...{ activeSection, setActiveSection, menuOpen, setMenuOpen }} />

            {/* HERO */}
            <section id="home" className="grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: "64px" }}>
                <div style={{ position: "absolute", top: "20%", right: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, #00ff8814 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "10%", left: "5%", width: "300px", height: "300px", background: "radial-gradient(circle, #00cfff0a 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
                <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem", width: "100%" }}>
                    <div style={{ animation: "fadeUp 0.7s ease 0.1s both" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#00ff8811", border: "1px solid #00ff8833", borderRadius: "20px", padding: "0.35rem 1rem", marginBottom: "1.5rem" }}>
                            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00ff88", animation: "pulse-glow 2s ease infinite" }} />
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#00ff88", letterSpacing: "0.08em" }}>AVAILABLE FOR OPPORTUNITIES</span>
                        </div>
                    </div>
                    <div style={{ animation: "fadeUp 0.7s ease 0.25s both" }}>
                        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1, letterSpacing: "-0.03em", color: "#f0f4f8", marginBottom: "0.5rem" }}>
                            Saurabh<br /><span style={{ color: "#00ff88" }}>Lande</span>
                        </h1>
                    </div>
                    <div style={{ animation: "fadeUp 0.7s ease 0.4s both", marginBottom: "1.5rem" }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#00cfff", fontWeight: 300 }}>
                            {"// "}{typedText}<span style={{ animation: "blink 1s ease infinite", color: "#00ff88" }}>|</span>
                        </span>
                    </div>
                    <div style={{ animation: "fadeUp 0.7s ease 0.55s both" }}>
                        <p style={{ maxWidth: "600px", color: "#718096", lineHeight: "1.8", fontSize: "1rem", fontFamily: "'Inter', sans-serif", fontWeight: 300, marginBottom: "2.5rem" }}>
                            Full Stack Developer with <span style={{ color: "#f0f4f8", fontWeight: 500 }}>3+ years of experience</span> building scalable web applications. Specialized in authentication systems, dynamic form development, API design, and deploying applications in production for <span style={{ color: "#f0f4f8", fontWeight: 500 }}>major banking clients</span>.
                        </p>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeUp 0.7s ease 0.7s both" }}>
                        <button onClick={() => scrollTo("Projects")} style={{ background: "#00ff88", color: "#060d1a", border: "none", borderRadius: "6px", padding: "0.75rem 1.75rem", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", letterSpacing: "0.02em" }}>View Projects →</button>
                        <button onClick={() => scrollTo("Contact")} style={{ background: "transparent", color: "#f0f4f8", border: "1px solid #1e3a5f", borderRadius: "6px", padding: "0.75rem 1.75rem", fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer" }}>Get in Touch</button>
                    </div>
                    <div style={{ display: "flex", gap: "3rem", marginTop: "4rem", flexWrap: "wrap", animation: "fadeUp 0.7s ease 0.85s both" }}>
                        {[["3+", "Years Experience"], ["3", "Major Projects"], ["6+", "Banking Clients"], ["10+", "Tech Stack"]].map(([num, label]) => (
                            <div key={label}>
                                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#00ff88" }}>{num}</div>
                                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#4a5568", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section id="skills" style={{ padding: "6rem 2rem", background: "#070e1d" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div style={{ marginBottom: "3rem" }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#00ff88", letterSpacing: "0.1em", textTransform: "uppercase" }}>02. Skills</span>
                        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f0f4f8", letterSpacing: "-0.02em", marginTop: "0.5rem" }}>Tech Stack</h2>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3.5rem" }}>
                        {TOOLS_BADGES.map((t) => (
                            <span key={t} style={{ background: "#0d1f2d", border: "1px solid #1e3a5f", borderRadius: "6px", padding: "0.35rem 0.85rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#8fa3b8" }}>{t}</span>
                        ))}
                    </div>
                    <div ref={skillsRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
                        {Object.entries(SKILLS).map(([category, skills]) => (
                            <div key={category} style={{ background: "#0a1628", border: "1px solid #1e3a5f", borderRadius: "12px", padding: "1.75rem" }}>
                                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#00ff88", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>{category}</h3>
                                {skills.map((skill, i) => <SkillBar key={skill.name} {...skill} delay={i * 120} inView={skillsInView} />)}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="grid-bg" style={{ padding: "6rem 2rem", background: "#060d1a" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div style={{ marginBottom: "3rem" }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#00ff88", letterSpacing: "0.1em", textTransform: "uppercase" }}>03. Experience</span>
                        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f0f4f8", letterSpacing: "-0.02em", marginTop: "0.5rem" }}>Work History</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start" }}>
                        <div style={{ position: "sticky", top: "100px" }}>
                            <div style={{ background: "#0a1628", border: "1px solid #00ff8833", borderRadius: "12px", padding: "2rem" }}>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#00ff88", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>CURRENT</div>
                                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#f0f4f8", marginBottom: "0.25rem" }}>Full Stack Developer</h3>
                                <div style={{ color: "#00cfff", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", marginBottom: "0.25rem" }}>Azlogics Pvt. Ltd</div>
                                <div style={{ color: "#4a5568", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", marginBottom: "1.5rem" }}>Sep 2022 – Present · Nagpur</div>
                                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                                    {["React.js", "Node.js", "AWS", "Oracle"].map(t => (
                                        <span key={t} style={{ background: "#00ff8811", border: "1px solid #00ff8833", color: "#00ff88", borderRadius: "4px", padding: "0.15rem 0.5rem", fontSize: "0.68rem", fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ background: "#0a1628", border: "1px solid #1e3a5f", borderRadius: "12px", padding: "1.5rem", marginTop: "1.25rem" }}>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#4a5568", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>EDUCATION</div>
                                <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f0f4f8", marginBottom: "0.2rem" }}>Bachelor of Commerce</h4>
                                <div style={{ color: "#718096", fontSize: "0.825rem", fontFamily: "'Inter', sans-serif" }}>CMS College, Nagpur</div>
                                <div style={{ color: "#4a5568", fontSize: "0.75rem", fontFamily: "'JetBrains Mono', monospace", marginTop: "0.25rem" }}>RTMNU · 2019–2022</div>
                            </div>
                            <div style={{ background: "#0a1628", border: "1px solid #1e3a5f", borderRadius: "12px", padding: "1.5rem", marginTop: "1.25rem" }}>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#4a5568", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>CERTIFICATION</div>
                                <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#f0f4f8" }}>Web Development Certification</h4>
                            </div>
                        </div>
                        <div>
                            {[
                                { title: "API Architecture & Security", desc: "Developed RESTful APIs using Node.js & Express.js with JWT authentication and Role-Based Access Control (RBAC). Implemented AES encryption for data security and managed file storage using AWS S3 & MinIO." },
                                { title: "Production Deployments", desc: "Deployed and managed applications on Linux & Windows servers using Nginx and PM2. Handled production issues, debugging, and performance optimization across multiple banking environments." },
                                { title: "Authentication Systems", desc: "Integrated LDAP (Active Directory) authentication with support for hybrid login, enabling seamless SSO experiences for enterprise banking clients." },
                                { title: "Banking Client Support", desc: "Managed deployments and production support for major clients including PNB, SBI, BOI, Bank of Baroda, and CSB — ensuring high uptime for critical financial systems." },
                                { title: "Dynamic Form Systems", desc: "Architected data-driven frontends enabling dynamic form rendering and validation without code changes — drastically reducing time-to-deploy for new bank onboarding." },
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#00ff88", flexShrink: 0, marginTop: "6px", boxShadow: "0 0 8px #00ff88" }} />
                                        {i < 4 && <div style={{ width: "1px", flex: 1, background: "linear-gradient(#00ff8844, transparent)", marginTop: "6px" }} />}
                                    </div>
                                    <div style={{ background: "#0a1628", border: "1px solid #1e3a5f", borderRadius: "10px", padding: "1.25rem 1.5rem", flex: 1 }}>
                                        <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f0f4f8", marginBottom: "0.5rem" }}>{item.title}</h4>
                                        <p style={{ color: "#718096", fontSize: "0.85rem", lineHeight: "1.7", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" style={{ padding: "6rem 2rem", background: "#070e1d" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div style={{ marginBottom: "3rem" }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#00ff88", letterSpacing: "0.1em", textTransform: "uppercase" }}>04. Projects</span>
                        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f0f4f8", letterSpacing: "-0.02em", marginTop: "0.5rem" }}>Featured Work</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
                        {PROJECTS.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" style={{ padding: "10rem 2rem", background: "#060d1a" }}>
                <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#00ff88", letterSpacing: "0.1em", textTransform: "uppercase" }}>05. Contact</span>
                    <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f0f4f8", letterSpacing: "-0.02em", margin: "0.5rem 0 1rem" }}>Let's Build Something</h2>
                    <p style={{ color: "#718096", fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: "1.8", marginBottom: "3rem" }}>
                        Open to new opportunities, collaborations, and interesting problems. Drop me a message — I usually respond within a day.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                        {[
                            { label: "Email", value: "saurabhlande26@gmail.com", href: "mailto:saurabhlande26@gmail.com", icon: "✉" },
                            { label: "Phone", value: "+91 7745820290", href: "tel:+917745820290", icon: "☎" },
                            { label: "LinkedIn", value: "LinkedIn/SaurabhLande", href: "https://www.linkedin.com/in/saurabh-lande-6a0067227/", icon: "in" },
                        ].map((c) => (
                            <a key={c.label} href={c.href} target={c.label === "LinkedIn" ? "_blank" : undefined} rel="noopener noreferrer"
                                style={{ display: "flex", alignItems: "center", gap: "1rem", background: "#0a1628", border: "1px solid #1e3a5f", borderRadius: "10px", padding: "1rem 1.75rem", width: "100%", maxWidth: "420px", textDecoration: "none", transition: "all 0.25s" }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = "#00ff8855"; e.currentTarget.style.background = "#0d1f2d"; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e3a5f"; e.currentTarget.style.background = "#0a1628"; }}
                            >
                                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#00ff8811", border: "1px solid #00ff8833", display: "flex", alignItems: "center", justifyContent: "center", color: "#00ff88", fontSize: "0.9rem", fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>{c.icon}</div>
                                <div style={{ textAlign: "left" }}>
                                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#4a5568", letterSpacing: "0.08em", textTransform: "uppercase" }}>{c.label}</div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#a0aec0", marginTop: "0.1rem" }}>{c.value}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid #1e3a5f22" }}>
                        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#2d3748" }}>
                            © 2025 Saurabh Lande · Built with React & Tailwind CSS · Deployed on AWS
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}