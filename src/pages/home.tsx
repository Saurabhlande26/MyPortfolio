import React from 'react'

const Home = ({ scrollTo, typedText }: any) => {
    return (
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
    )
}

export default Home
