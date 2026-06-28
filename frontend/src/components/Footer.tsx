import logoImg from "../img/Logo.png";

export default function Footer() {
    return (
        <footer style={{ background: "#4A4A4A", padding: "20px 210px 28px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 20 }}>
                <img src={logoImg} alt="Moiiiii" style={{
                    height: 150, objectFit: "contain", alignSelf: "flex-start", marginTop: 10, marginBottom: -70, marginRight: 30
                }} />
                <div style={{ fontSize: 20, color: "#e0e0e0", fontWeight: 600 }}>For cat people, by cat people.</div>
                <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                    <div style={{ background: "#1a1a1a", color: "#fff", borderRadius: 8, padding: "8px 14px", fontSize: 11, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontSize: 14 }}>🍎</span> App Store
                    </div>
                    <div style={{ background: "#1a1a1a", color: "#fff", borderRadius: 8, padding: "8px 14px", fontSize: 11, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontSize: 14 }}>▶</span> Google Play
                    </div>
                </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 36 }}>
                <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#B8900A", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Product</div>
                    {["Features", "Lost Cat Finder", "Cat Profiles", "Community", "Pricing"].map((l) => (
                        <div key={l} style={{ fontSize: 13, color: "#ccc", marginBottom: 9, cursor: "pointer" }}>{l}</div>
                    ))}
                </div>
                <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#B8900A", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Company</div>
                    {["About Us", "Blog", "Careers", "Press Kit", "Contact"].map((l) => (
                        <div key={l} style={{ fontSize: 13, color: "#ccc", marginBottom: 9, cursor: "pointer" }}>{l}</div>
                    ))}
                </div>
            </div>

            <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
                {[
                    { label: "Instagram", icon: "📸" },
                    { label: "TikTok", icon: "🎵" },
                    { label: "Twitter / X", icon: "🐦" },
                ].map((s) => (
                    <div key={s.label} style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "7px 12px", fontSize: 11, fontWeight: 700, color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                        <span>{s.icon}</span> {s.label}
                    </div>
                ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                <div style={{ fontSize: 11, color: "#bbb" }}>© 2024 Moiiiii Inc. All rights reserved.</div>
                <div style={{ display: "flex", gap: 16 }}>
                    {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((l) => (
                        <span key={l} style={{ fontSize: 11, color: "#bbb", cursor: "pointer" }}>{l}</span>
                    ))}
                </div>
            </div>
        </footer>
    );
}
