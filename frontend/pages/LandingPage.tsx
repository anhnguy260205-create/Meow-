import { useState } from "react";

const stats = [
    { value: "24k+", label: "Cat parents" },
    { value: "180k+", label: "Photos shared" },
    { value: "4.9 ★", label: "App store rating" },
];

// Cards go from darkest-left to lightest, then pure black for active (right)
const cardShades = ["#3a3a3a", "#4a4a4a", "#5e5e5e", "#7a7a7a", "#000000"];

const features = [
    {
        title: "Share",
        desc: "Share adorable photos, videos, and stories with fellow cat lovers.",
        back: "Post daily moments, build a following, and become a cat influencer in the community.",
    },
    {
        title: "Find",
        desc: "Connect with cat owners and welcoming communities near you.",
        back: "Discover local meetups, cat cafés, and events happening right in your neighbourhood.",
    },
    {
        title: "Find",
        desc: "Report and help locate missing cats with the community.",
        back: "Our AI-powered lost cat board matches photos instantly to reunite cats with families.",
    },
    {
        title: "Smart",
        desc: "Never miss vaccinations, grooming, or appointments.",
        back: "Smart reminders synced to your cat's health record keep everything on schedule.",
    },
    {
        title: "Cat Profile",
        desc: "Create a personalized profile to showcase your feline friend.",
        back: "Add photos, health history, personality traits, and milestones all in one beautiful profile.",
        active: true,
    },
];

const testimonials = [
    { initials: "JT", name: "Jasmine T.", role: "Owner to 2 tabby cats", color: "#C8601A", text: "\"MoiXao Xeo helps me keep everything about my cat organized in one place. I love the cat profile feature!\"" },
    { initials: "KL", name: "Kevin L.", role: "Cat dad of Mochi", color: "#3A7CB8", text: "\"I've met so many friendly cat parents and joined local events through the app. It feels like home.\"" },
    { initials: "BH", name: "Brenda H.", role: "Cat mom of Binx", color: "#7B6FAA", text: "\"Thanks to MoiXao Xeo, I was able to find my cat within 24 hours. This app truly makes a difference.\"" },
    { initials: "SK", name: "Sophie W.", role: "Cat mom of Lulu", color: "#2E8B6A", text: "\"No more missed vaccinations or feelings! The smart reminders keep me on track and my cat healthy.\"" },
];

const faqs = [
    { q: "Is Moiii free to use?", a: "Yes! Moiii is completely free to download and use. We offer optional premium features for power users." },
    { q: "How does the lost cat finder work?", a: "Upload a photo of a cat you found and our AI model scans our lost cat board to surface the closest matches instantly." },
    { q: "Is my cat's data private?", a: "Absolutely. Your cat's profile and personal data are only visible to people you choose to share with." },
    { q: "Which platforms is Moiii available on?", a: "Moiii is available on iOS and Android. A web version is coming soon." },
];

const CARD_W = 150;
const CARD_H = 210;
const OVERLAP = 60; // how much each card slides under the next

function FeatureCards({ order, onBringToFront }: { order: number[]; onBringToFront: (fi: number) => void }) {
    return (
        <div style={{ position: "relative", height: CARD_H + 8, marginBottom: 8 }}>
            {order.map((fi, stackPos) => {
                const feature = features[fi];
                const bg = cardShades[fi];
                const x = stackPos * (CARD_W - OVERLAP);
                return (
                    <div
                        key={fi}
                        onClick={() => onBringToFront(fi)}
                        style={{
                            position: "absolute",
                            left: x,
                            top: 0,
                            width: CARD_W,
                            height: CARD_H,
                            background: bg,
                            borderRadius: 20,
                            padding: "22px 18px",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            cursor: "pointer",
                            zIndex: stackPos,
                            transition: "left 0.4s cubic-bezier(0.4,0.2,0.2,1)",
                            boxSizing: "border-box",
                        }}
                    >
                        <div style={{ fontWeight: 800, fontSize: 17, color: "#fff", marginBottom: 10, whiteSpace: "nowrap", overflow: "hidden" }}>
                            {feature.title}
                        </div>
                        <div style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.72)", overflow: "hidden" }}>
                            {feature.desc}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default function MoiiiLanding() {
    const [email, setEmail] = useState("");
    const [dragOver, setDragOver] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [joined, setJoined] = useState(false);
    const [cardOrder, setCardOrder] = useState([0, 1, 2, 3, 4]);

    const bringToFront = (fi: number) => {
        setCardOrder((prev) => [...prev.filter((x) => x !== fi), fi]);
    };

    // Which feature index is currently on top (last in order array)
    const activeCardIdx = cardOrder[cardOrder.length - 1];

    // total visual width of the stacked cards
    const stackWidth = CARD_W + (features.length - 1) * (CARD_W - OVERLAP);

    return (
        <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#1a1a1a", background: "#fff", margin: 0, padding: 0, overflowX: "hidden" }}>

            {/* ── NAV ── */}
            <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", position: "absolute", top: 0, left: 0, right: 0, zIndex: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <span style={{ fontWeight: 900, fontSize: 16, color: "#fff", letterSpacing: 0.5 }}>🐾 Moiiiii</span>
                    <span style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 8, fontWeight: 700, padding: "2px 6px", borderRadius: 3, letterSpacing: 1.5, textTransform: "uppercase", width: "fit-content" }}>For Cat People</span>
                </div>
                <button style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: 8, padding: "7px 18px", fontSize: 13, cursor: "pointer", fontWeight: 500 }}>Sign in</button>
            </nav>

            {/* ── HERO ── */}
            <section style={{ position: "relative", minHeight: 520, background: "#111", overflow: "hidden", display: "flex", alignItems: "flex-end", paddingBottom: 56 }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center 30%", opacity: 0.55 }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 180, background: "linear-gradient(to top, #111 0%, transparent 100%)" }} />
                <div style={{ position: "relative", zIndex: 1, padding: "0 24px", maxWidth: 500 }}>
                    <h1 style={{ fontSize: 36, fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: "0 0 10px" }}>
                        Every Cat Thinks They're<br />the <span style={{ color: "#F5C842" }}>Boss.</span>
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, margin: "0 0 26px", fontWeight: 700 }}>We Just Built the App.</p>
                    <div style={{ display: "flex", gap: 10 }}>
                        <button style={{ background: "#fff", color: "#1a1a1a", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Get Start</button>
                        <button style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", borderRadius: 8, padding: "10px 22px", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Explore Moiii</button>
                    </div>
                </div>
            </section>

            {/* ── STATS — single rounded pill card ── */}
            <section style={{ padding: "28px 20px" }}>
                <div style={{ background: "linear-gradient(135deg, #484848 0%, #2c2c2c 100%)", borderRadius: 20, display: "flex", alignItems: "stretch", overflow: "hidden" }}>
                    {stats.map((s, i) => (
                        <div key={s.label} style={{ flex: 1, padding: "28px 12px", textAlign: "center", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                            <div style={{ fontSize: 30, fontWeight: 900, color: "#fff", letterSpacing: -0.5 }}>{s.value}</div>
                            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── WHY MOIII ── */}
            <section style={{ padding: "32px 24px 0" }}>
                <div style={{ fontSize: 10, fontWeight: 900, color: "#B8900A", letterSpacing: 2.5, marginBottom: 14, textTransform: "uppercase" }}>Why Moiiiii</div>
                <h2 style={{ fontSize: 32, fontWeight: 900, margin: "0", lineHeight: 1.1, color: "#1a1a1a" }}>
                    Built for{" "}
                    <span style={{ textDecoration: "underline", textDecorationColor: "#B8900A", textDecorationThickness: 3, textUnderlineOffset: 5 }}>serious cat lovers</span>
                </h2>
                <p style={{ color: "#888", fontSize: 15, margin: "14px 0 36px", lineHeight: 1.65 }}>
                    Everything you need to find, connect, care, and celebrate your cat –{" "}
                    <strong style={{ color: "#555", fontWeight: 700 }}>all in  one place.</strong>
                </p>

                {/* STACKED OVERLAPPING CARDS */}
                <div style={{ overflowX: "auto", overflowY: "visible", paddingBottom: 12, scrollbarWidth: "none" }}>
                    <div style={{ width: stackWidth, minWidth: stackWidth, paddingTop: 4 }}>
                        <FeatureCards order={cardOrder} onBringToFront={bringToFront} />
                    </div>
                </div>

                {/* Paw indicators — one per card, active paw is larger + dark purple */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginTop: 32, marginBottom: 8 }}>
                    {features.map((_, i) => {
                        const isActive = activeCardIdx === i;
                        return (
                            <span
                                key={i}
                                onClick={() => bringToFront(i)}
                                style={{
                                    fontSize: isActive ? 26 : 18,
                                    cursor: "pointer",
                                    display: "inline-block",
                                    filter: isActive
                                        ? "brightness(0) saturate(100%) invert(22%) sepia(20%) saturate(800%) hue-rotate(220deg) brightness(60%)"
                                        : "grayscale(100%) brightness(0.6)",
                                    opacity: isActive ? 1 : 0.45,
                                    transition: "all 0.35s cubic-bezier(0.4,0.2,0.2,1)",
                                    transform: isActive ? "scale(1.15)" : "scale(1)",
                                }}
                            >🐾</span>
                        );
                    })}
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section style={{ background: "#2c2c2c", padding: "44px 20px", marginTop: 40 }}>
                <div style={{ fontSize: 10, fontWeight: 900, color: "#B8900A", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>What people say</div>
                <h2 style={{ fontSize: 24, fontWeight: 900, margin: "0 0 24px", color: "#fff" }}>Built for serious cat lovers</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {testimonials.map((t) => (
                        <div key={t.initials} style={{ background: "#3c3c3c", borderRadius: 14, padding: "16px 14px" }}>
                            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, margin: "0 0 14px" }}>{t.text}</p>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <div style={{ width: 30, height: 30, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 10, color: "#fff", flexShrink: 0 }}>{t.initials}</div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: 12, color: "#fff" }}>{t.name}</div>
                                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── LOST CAT FINDER ── */}
            <section style={{ padding: "44px 24px", background: "#fff" }}>
                <div style={{ fontSize: 10, fontWeight: 900, color: "#B8900A", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>AI-Powered Feature</div>
                <h2 style={{ fontSize: 28, fontWeight: 900, margin: "0 0 8px" }}>Lost cat finder</h2>
                <p style={{ color: "#777", fontSize: 14, margin: "0 0 28px", lineHeight: 1.65 }}>Upload a photo of a cat you found — our model scans the lost cat board and surfaces the closest matches instantly.</p>
                <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => { e.preventDefault(); setDragOver(false); }}
                    style={{ background: dragOver ? "#fffbea" : "#e8e8e6", borderRadius: 16, padding: "52px 24px", textAlign: "center", cursor: "pointer", transition: "background 0.2s", border: dragOver ? "2px dashed #F5C842" : "2px dashed transparent" }}
                >
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#444", marginBottom: 4 }}>Drop a cat photo here</div>
                    <div style={{ fontSize: 12, color: "#999" }}>JPG, PNG up to 10MB</div>
                </div>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                    <button style={{ background: "#F5C842", border: "none", borderRadius: 24, padding: "13px 34px", fontWeight: 800, fontSize: 14, cursor: "pointer", color: "#1a1a1a" }}>Try the demo</button>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section style={{ position: "relative", background: "#111", padding: "60px 24px", textAlign: "center", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.25 }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                    <h2 style={{ fontSize: 26, fontWeight: 900, color: "#fff", margin: "0 0 8px", lineHeight: 1.3 }}>Your moew deserves a fan club</h2>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, margin: "0 0 24px" }}>Join 24,000+ cat parents already on Moiiiii. Free forever</p>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@gmail.com" style={{ padding: "12px 18px", borderRadius: 8, border: "none", fontSize: 14, width: 240, outline: "none", color: "#1a1a1a" }} />
                        <button onClick={() => { if (email) setJoined(true); }} style={{ background: "#fff", color: "#1a1a1a", border: "none", borderRadius: 8, padding: "11px 36px", fontWeight: 800, fontSize: 13, cursor: "pointer", letterSpacing: 1.2 }}>
                            {joined ? "✓ You're in!" : "JOIN US"}
                        </button>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section style={{ padding: "44px 24px 52px", background: "#fff" }}>
                <div style={{ fontSize: 10, fontWeight: 900, color: "#B8900A", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>What do you want to know</div>
                <h2 style={{ fontSize: 26, fontWeight: 900, margin: "0 0 28px" }}>Q&A Section</h2>
                <div>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{ borderBottom: "1px solid #ebebeb" }}>
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "16px 0", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#1a1a1a" }}>
                                {faq.q}
                                <span style={{ fontSize: 22, color: "#ccc", fontWeight: 300 }}>{openFaq === i ? "−" : "+"}</span>
                            </button>
                            {openFaq === i && <p style={{ margin: "0 0 16px", fontSize: 13, color: "#666", lineHeight: 1.7 }}>{faq.a}</p>}
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
}