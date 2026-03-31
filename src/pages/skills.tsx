import React from 'react'
import { SKILLS, TOOLS_BADGES } from '../component/JSON'
import { SkillBar } from '../component/SkillBar'

const Skills = ({ skillsRef, skillsInView }: any) => {
    return (
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
    )
}

export default Skills
