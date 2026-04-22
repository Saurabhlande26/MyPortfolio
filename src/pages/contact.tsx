import React from 'react'

const Contact = () => {
    return (
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
                        © 2026 Saurabh Lande · Built with React & Tailwind CSS · Deployed on AWS
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contact
