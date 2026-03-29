import React, { useEffect, useState } from 'react'
import { NAV_LINKS } from './JSON'

const Header = ({ activeSection, menuOpen, setActiveSection, setMenuOpen }: any) => {

    return (
        <>
            <nav className='nav'>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: "1rem" }}>
                    <span style={{ color: "#00ff88" }}>{"<"}</span>
                    <span style={{ color: "#f0f4f8" }}>SSL</span>
                    <span style={{ color: "#00ff88" }}>{"/"}</span>
                    <span style={{ color: "#f0f4f8" }}>{">"}</span>
                </div>
                <div style={{ display: "flex", gap: "2rem" }}>
                    {NAV_LINKS.map((l) => (
                        <button key={l} className="nav-link" onClick={() => scrollTo(l)} style={{
                            background: "none", border: "none", cursor: "pointer",
                            fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.04em",
                            color: activeSection === l ? "#00ff88" : "#718096",
                            fontWeight: activeSection === l ? 500 : 300, transition: "color 0.2s",
                        }}>
                            {activeSection === l && <span style={{ color: "#00ff88", marginRight: "4px" }}>_</span>}
                            {l}
                        </button>
                    ))}
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "#00ff88", fontSize: "1.5rem" }} className="md:hidden">
                    {menuOpen ? "✕" : "☰"}
                </button>
            </nav>

            {menuOpen && (
                <div style={{ position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99, background: "#0a1628", borderBottom: "1px solid #1e3a5f", padding: "1rem 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {NAV_LINKS.map((l) => (
                        <button key={l} onClick={() => scrollTo(l)} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9rem", color: activeSection === l ? "#00ff88" : "#a0aec0" }}>{l}</button>
                    ))}
                </div>
            )}
        </>
    )
}

export default Header