import React from 'react'
import { PROJECTS } from '../component/JSON'
import { ProjectCard } from '../component/ProjectCard'

const Project = () => {
    return (
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
    )
}

export default Project
