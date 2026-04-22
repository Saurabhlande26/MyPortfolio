import React from 'react'

const Experience = () => {
    return (
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
    )
}

export default Experience
