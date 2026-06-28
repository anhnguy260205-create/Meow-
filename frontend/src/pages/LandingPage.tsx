import { useState, useEffect, useRef } from "react";

import Footer from "../components/Footer";
import moiImg from "../img/moi.jpg";
import moi2Img from "../img/moi2.jpg";
import logoImg from "../img/Logo.png";

const stats = [
    { value: "24k+", label: "Cat parents" },
    { value: "180k+", label: "Photos shared" },
    { value: "4.9 ★", label: "App store rating" },
];

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

const CARD_W = 230;
const CARD_H = 210;
const OVERLAP = 60;

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
                        <div style={{ fontWeight: 800, fontSize: 17, color: "#F5C842", marginBottom: 10, whiteSpace: "nowrap", overflow: "hidden" }}>
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

export default function LandingPage() {
    const [email, setEmail] = useState("");
    const [dragOver, setDragOver] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [joined, setJoined] = useState(false);
    const [cardOrder, setCardOrder] = useState([0, 1, 2, 3, 4]);

    const section2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const targets = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.12 }
        );
        targets.forEach(t => observer.observe(t));
        return () => observer.disconnect();
    }, []);

    const bringToFront = (fi: number) => {
        setCardOrder((prev) => [...prev.filter((x) => x !== fi), fi]);
    };

    const activeCardIdx = cardOrder[cardOrder.length - 1];
    const stackWidth = CARD_W + (features.length - 1) * (CARD_W - OVERLAP);

    return (
        <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#1a1a1a", background: "#fff", margin: 0, padding: 0, overflowX: "hidden" }}>
            <style>{`
            @keyframes fadeSlideUp {
                from { opacity: 0; transform: translateY(40px); }
                to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to   { opacity: 1; }
            }
            .hero-content {
                position: relative;
                zIndex: 1;
                padding: 0 20px;
                padding-bottom: 48px;
                max-width: 560px;
                width: 100%;
            }
            @media (min-width: 640px) {
                .hero-content { padding: 0 40px 80px; }
            }
            @media (min-width: 1024px) {
                .hero-content { padding: 0 80px 140px; }
            }
            .hero-logo { height: 60px; }
            @media (min-width: 640px) { .hero-logo { height: 80px; } }
            @media (min-width: 1024px) { .hero-logo { height: 100px; } }
            .hero-h1 { font-size: 28px; }
            @media (min-width: 640px) { .hero-h1 { font-size: 36px; } }
            @media (min-width: 1024px) { .hero-h1 { font-size: 52px; } }
            .testimonials-grid { display: grid; gap: 12px; grid-template-columns: 1fr; }
            @media (min-width: 480px) { .testimonials-grid { grid-template-columns: 1fr 1fr; } }
            .cta-input { width: 100%; max-width: 320px; box-sizing: border-box; }
            .section-pad { padding: 44px 20px; }
            @media (min-width: 640px) { .section-pad { padding: 60px 48px; } }
            @media (min-width: 1024px) { .section-pad { padding: 80px 10%; } }

            .hero-animate { animation: fadeSlideUp 0.9s ease both; }
            .hero-animate-slow { animation: fadeIn 1.4s ease both 0.3s; }

            .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
            .reveal.visible { opacity: 1; transform: translateY(0); }
            .reveal-delay-1 { transition-delay: 0.1s; }
            .reveal-delay-2 { transition-delay: 0.25s; }
            .reveal-delay-3 { transition-delay: 0.4s; }

            .btn-signin {
                background: linear-gradient(to right, #fff 50%, rgba(255,255,255,0.12) 50%);
                background-size: 200% 100%; background-position: right center;
                color: #fff; border: 1px solid rgba(255,255,255,0.3);
                transition: background-position 0.35s ease, color 0.35s ease;
            }
            .btn-signin:hover { background-position: left center; color: #1a1a1a; }
            .btn-getstart {
                background: linear-gradient(to right, #1a1a1a 50%, #fff 50%);
                background-size: 200% 100%; background-position: right center;
                color: #1a1a1a; border: 1.5px solid #1a1a1a;
                transition: background-position 0.35s ease, color 0.35s ease;
            }
            .btn-getstart:hover { background-position: left center; color: #fff; }
            .btn-explore {
                background: linear-gradient(to right, rgba(255,255,255,0.95) 50%, transparent 50%);
                background-size: 200% 100%; background-position: right center;
                color: #fff; border: 1.5px solid rgba(255,255,255,0.4);
                transition: background-position 0.35s ease, color 0.35s ease;
            }
            .btn-explore:hover { background-position: left center; color: #1a1a1a; }
            .btn-join {
                background: linear-gradient(to right, #B8900A 50%, #fff 50%);
                background-size: 200% 100%; background-position: right center;
                color: #1a1a1a; border: none;
                transition: background-position 0.35s ease, color 0.35s ease;
            }
            .btn-join:hover { background-position: left center; color: #fff; }
        `}</style>

            {/* NAV */}
            <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0px 70px", position: "absolute", top: 0, left: 0, right: 0, zIndex: 20 }}>
                <img src={logoImg} alt="Moiiiii" style={{ height: 200, objectFit: "contain" }} />

                <button className="btn-signin" style={{ borderRadius: 8, padding: "7px 30px", fontSize: 15, cursor: "pointer", fontWeight: 500 }}>Sign in</button>
            </nav>

            {/* HERO */}
            <section style={{ position: "relative", minHeight: "100vh", background: "#111", overflow: "hidden", display: "flex", alignItems: "flex-end", paddingBottom: 56 }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${moiImg})`, backgroundSize: "cover", backgroundPosition: "center 70%", opacity: 0.55 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #111 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 100%)" }} />
                <div className="hero-content hero-animate" style={{ position: "relative", zIndex: 1, marginLeft: 70, marginBottom: 50 }}>
                    <span className="hero-animate" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 15, fontWeight: 500, padding: "5px 8px", borderRadius: 10, letterSpacing: 1.5, textTransform: "uppercase", display: "inline-block", marginBottom: 12, animationDelay: "0.1s" }}>For Cat People</span>
                    <h1 className="hero-h1 hero-animate" style={{ fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: "0 0 20px", animationDelay: "0.25s" }}>
                        Every Cat Thinks They're<br />the <span style={{ color: "#F5C842" }}>Boss.</span>
                    </h1>
                    <p className="hero-animate" style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, margin: "0 0 26px", animationDelay: "0.4s" }}>We Just Built the App.</p>
                    <div className="hero-animate" style={{ display: "flex", gap: 10, animationDelay: "0.55s" }}>
                        <button className="btn-getstart" style={{ borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Get Start</button>
                        <button className="btn-explore" style={{ borderRadius: 8, padding: "10px 22px", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Explore Moiii</button>
                    </div>
                </div>
            </section>

            {/* STATS + WHY wrapper — white bg, contained */}
            <div ref={section2Ref} style={{ background: "#fff", paddingBottom: "45px", padding: "45px" }}>

                {/* STATS */}
                <section className="reveal" style={{ padding: "28px 160px" }}>
                    <div style={{ background: "linear-gradient(135deg, #484848 0%, #2c2c2c 100%)", borderRadius: 20, display: "flex", alignItems: "stretch", overflow: "hidden" }}>
                        {stats.map((s, i) => (
                            <div key={s.label} style={{ flex: 1, padding: "28px 12px", textAlign: "center", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                                <div style={{ fontSize: 30, fontWeight: 900, color: "#fff", letterSpacing: -0.5 }}>{s.value}</div>
                                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WHY MOIII */}
                <section className="section-pad reveal reveal-delay-1" style={{ paddingBottom: 0 }}>
                    <div className="reveal reveal-delay-1" style={{ fontSize: 13, fontWeight: 900, color: "#B8900A", letterSpacing: 2.5, marginBottom: 10, textTransform: "uppercase" }}>Why Moiiiii</div>
                    <h2 className="reveal reveal-delay-2" style={{ fontSize: 40, fontWeight: 900, margin: "0", lineHeight: 1.1, color: "#1a1a1a" }}>
                        Built for{" "}
                        <span style={{ textDecoration: "underline", textDecorationColor: "#B8900A", textDecorationThickness: 3, textUnderlineOffset: 5 }}>serious cat lovers.</span>
                    </h2>
                    <p style={{ color: "#888", fontSize: 15, margin: "14px 0 36px", lineHeight: 1.65 }}>
                        Everything you need to find, connect, care, and celebrate your cat –{" "}
                        <strong style={{ color: "#555", fontWeight: 700 }}>all in one place.</strong>
                    </p>

                    <div style={{ overflowX: "auto", overflowY: "visible", paddingBottom: 12, scrollbarWidth: "none", paddingLeft: "200px" }}>
                        <div style={{ width: stackWidth, minWidth: stackWidth, paddingTop: 4 }}>
                            <FeatureCards order={cardOrder} onBringToFront={bringToFront} />
                        </div>
                    </div>

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

            </div> {/* end white wrapper */}

            {/* TESTIMONIALS */}
            <section style={{ background: "#2c2c2c", padding: "45px 210px", marginTop: 40 }}>
                <div className="reveal" style={{ fontSize: 13, fontWeight: 900, color: "#B8900A", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>What people say</div>
                <h2 className="reveal reveal-delay-1" style={{ fontSize: 40, fontWeight: 900, margin: "0 0 24px", color: "#fff" }}>Built for serious cat lovers</h2>
                <div className="testimonials-grid reveal reveal-delay-2">
                    {testimonials.map((t) => (
                        <div key={t.initials} style={{ width: "500px", background: "#3c3c3c", borderRadius: 14, padding: "16px 30px" }}>
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

            {/* LOST CAT FINDER */}
            <section className="section-pad" style={{ background: "#fff", padding: "45px 210px" }}>
                <div className="reveal" style={{ fontSize: 13, fontWeight: 900, color: "#B8900A", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>AI-Powered Feature</div>
                <h2 className="reveal reveal-delay-1" style={{ fontSize: 40, fontWeight: 900, margin: "0 0 8px" }}>Lost cat finder</h2>
                <p className="reveal reveal-delay-2" style={{ color: "#777", fontSize: 14, margin: "0 0 28px", lineHeight: 1.65 }}>Upload a photo of a cat you found — our model scans the lost cat board and surfaces the closest matches instantly.</p>
                <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => { e.preventDefault(); setDragOver(false); }}
                    style={{ marginLeft: "280px", width: "700px", background: dragOver ? "#fffbea" : "#e8e8e6", borderRadius: 16, padding: "40px 30px", textAlign: "center", cursor: "pointer", transition: "background 0.2s", border: dragOver ? "2px dashed #F5C842" : "2px dashed transparent" }}
                >
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#444", marginBottom: 4 }}>Drop a cat photo here</div>
                    <div style={{ fontSize: 12, color: "#999" }}>JPG, PNG up to 10MB</div>
                </div>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                    <button style={{ background: "#F5C842", border: "none", borderRadius: 24, padding: "13px 34px", fontWeight: 800, fontSize: 14, cursor: "pointer", color: "#1a1a1a" }}>Try the demo</button>
                </div>
            </section >

            {/* CTA BANNER */}
            <section style={{ position: "relative", background: "#111", height: "830px", padding: "0 24px", textAlign: "center", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${moi2Img})`, backgroundSize: "cover", backgroundPosition: "center 70%", opacity: 0.25 }} />
                <div className="reveal" style={{ position: "relative", zIndex: 1 }}>
                    <h2 style={{ fontSize: 40, fontWeight: 900, color: "#fff", margin: "0 0 8px", lineHeight: 1.3 }}>Your moew deserves a fan club</h2>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 20, margin: "0 0 24px" }}>Join 24,000+ cat parents already on Moiiiii. Free forever</p>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@gmail.com" className="cta-input" style={{ padding: "12px 18px", borderRadius: 14, border: "2px solid #B8900A", fontSize: 14, outline: "none", color: "#fff" }} />
                        <button className="btn-join" onClick={() => { if (email) setJoined(true); }} style={{ borderRadius: 8, padding: "11px 36px", fontWeight: 800, fontSize: 13, cursor: "pointer", letterSpacing: 1.2 }}>
                            {joined ? "✓ You're in!" : "JOIN US"}
                        </button>
                    </div>
                </div >
            </section >

            {/* FAQ */}
            <section className="section-pad" style={{ background: "#fff", padding: "45px 210px" }}>
                <div className="reveal" style={{ fontSize: 13, fontWeight: 900, color: "#B8900A", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>What do you want to know</div>
                <h2 className="reveal reveal-delay-1" style={{ fontSize: 40, fontWeight: 900, margin: "0 0 28px" }}>Q&A Section</h2>
                <div className="reveal reveal-delay-2">
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
            </section >

            <Footer />
        </div >
    );
}
