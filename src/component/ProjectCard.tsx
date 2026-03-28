import { useState } from "react";
import { useInView } from "./hooks/useInView";

function ProjectCard({ project, index }: any) {
    const [ref, inView] = useInView(0.1);
    const [hovered, setHovered] = useState(false);
    return (
        <div
            ref={ref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: hovered ? "#0d1f2d" : "#0a1628",
                border: `1px solid ${hovered ? project.color : "#1e3a5f"}`,
                borderRadius: "12px",
                padding: "2rem",
                transition: "all 0.4s ease",
                transform: inView ? "translateY(0)" : "translateY(40px)",
                opacity: inView ? 1 : 0,
                transitionDelay: `${index * 120}ms`,
                boxShadow: hovered ? `0 0 30px ${project.color}22` : "none",
                cursor: "default",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "#f0f4f8", letterSpacing: "-0.02em" }}>{project.name}</h3>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: project.color, textTransform: "uppercase", letterSpacing: "0.08em" }}>{project.tag}</span>
                </div>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: `${project.color}22`, border: `1px solid ${project.color}44`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: project.color, fontSize: "1rem" }}>⬡</span>
                </div>
            </div>
            <p style={{ color: "#718096", fontSize: "0.875rem", lineHeight: "1.7", marginBottom: "1.25rem" }}>{project.description}</p>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem" }}>
                {project.highlights.map((h, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", marginBottom: "0.45rem" }}>
                        <span style={{ color: project.color, fontSize: "0.65rem", marginTop: "0.35rem", flexShrink: 0 }}>▶</span>
                        <span style={{ color: "#8fa3b8", fontSize: "0.825rem", lineHeight: "1.6" }}>{h}</span>
                    </li>
                ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.stack.map((s) => (
                    <span key={s} style={{
                        background: `${project.color}11`,
                        border: `1px solid ${project.color}33`,
                        color: project.color,
                        borderRadius: "4px",
                        padding: "0.2rem 0.6rem",
                        fontSize: "0.7rem",
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: "0.04em",
                    }}>{s}</span>
                ))}
            </div>
        </div>
    );
}

export { ProjectCard }