import { useEffect, useState } from "react";
import { useInView } from "../component/hooks/useInView";
import { NAV_LINKS } from "../component/JSON";
import Header from "../component/header";
import Home from "./home";
import Skills from "./skills";
import Experience from "./experience";
import Project from "./project";
import Contact from "./contact";

export default function Portfolio() {
    const [typedText, setTypedText] = useState("");
    const [skillsRef, skillsInView] = useInView(0.1);
    const [activeSection, setActiveSection] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    const fullText = "Full Stack Developer";

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
    const scrollTo = (id: any) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <div style={{ background: "#060d1a", minHeight: "100vh", color: "#f0f4f8" }}>
            {/* NAVBAR */}
            <Header {...{ activeSection, setActiveSection, menuOpen, setMenuOpen }} />

            {/* HERO */}
            <Home {...{ scrollTo, typedText }} />

            {/* SKILLS */}
            <Skills {...{ skillsRef, skillsInView }} />

            {/* EXPERIENCE */}
            <Experience />

            {/* PROJECTS */}
            <Project />

            {/* CONTACT */}
            <Contact />
        </div>
    );
}