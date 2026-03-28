function SkillBar({ name, level, delay, inView }: any) {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "#a0aec0" }}>{name}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#00ff88" }}>{level}%</span>
            </div>
            <div style={{ background: "#1a2332", borderRadius: "2px", height: "4px", overflow: "hidden" }}>
                <div
                    style={{
                        height: "100%",
                        width: inView ? `${level}%` : "0%",
                        background: "linear-gradient(90deg, #00ff88, #00cfff)",
                        borderRadius: "2px",
                        transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
                        boxShadow: "0 0 8px #00ff8866",
                    }}
                />
            </div>
        </div>
    );
}
export { SkillBar }