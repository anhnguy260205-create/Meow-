{/* ── FOOTER ── */ }
<footer style={{ background: "#f2f2f0", padding: "44px 24px 28px" }}>
    {/* Top row: brand + tagline + app store badges */}
    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 32 }}>
        <div style={{ fontWeight: 900, fontSize: 18, color: "#1a1a1a", letterSpacing: 0.5 }}>🐾 Moiiiii</div>
        <div style={{ fontSize: 13, color: "#888", fontWeight: 500 }}>For cat people, by cat people.</div>
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <div style={{ background: "#1a1a1a", color: "#fff", borderRadius: 8, padding: "8px 14px", fontSize: 11, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 14 }}>🍎</span> App Store
            </div>
            <div style={{ background: "#1a1a1a", color: "#fff", borderRadius: 8, padding: "8px 14px", fontSize: 11, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 14 }}>▶</span> Google Play
            </div>
        </div>
    </div>

    {/* Link columns */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 36 }}>
        <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: "#B8900A", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Product</div>
            {["Features", "Lost Cat Finder", "Cat Profiles", "Community", "Pricing"].map((l) => (
                <div key={l} style={{ fontSize: 13, color: "#666", marginBottom: 9, cursor: "pointer" }}>{l}</div>
            ))}
        </div>
        <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: "#B8900A", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Company</div>
            {["About Us", "Blog", "Careers", "Press Kit", "Contact"].map((l) => (
                <div key={l} style={{ fontSize: 13, color: "#666", marginBottom: 9, cursor: "pointer" }}>{l}</div>
            ))}
        </div>
    </div>

    {/* Social row */}
    <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
        {[
            { label: "Instagram", icon: "📸" },
            { label: "TikTok", icon: "🎵" },
            { label: "Twitter / X", icon: "🐦" },
        ].map((s) => (
            <div key={s.label} style={{ background: "#e4e4e2", borderRadius: 8, padding: "7px 12px", fontSize: 11, fontWeight: 700, color: "#444", cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                <span>{s.icon}</span> {s.label}
            </div>
        ))}
    </div>

    {/* Divider */}
    <div style={{ borderTop: "1px solid #ddddd9", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <div style={{ fontSize: 11, color: "#aaa" }}>© 2024 Moiiiii Inc. All rights reserved.</div>
        <div style={{ display: "flex", gap: 16 }}>
            {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((l) => (
                <span key={l} style={{ fontSize: 11, color: "#aaa", cursor: "pointer" }}>{l}</span>
            ))}
        </div>
    </div>
</footer>