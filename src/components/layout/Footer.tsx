import { Link, useLocation } from "react-router-dom";
import { Train, Phone, Globe, Leaf, Zap, Calendar, Navigation, CreditCard, Route as RouteIcon, HelpCircle, Landmark, BookOpen, Shield, MessageSquare, Sparkles, Map, AlertTriangle, ArrowRight, Heart, Ticket, FileSearch, Scale, Cookie, ArrowUpRight, Wifi, ExternalLink, MapPin, Clock } from "lucide-react";
import { resetCookieConsent } from "@/components/CookieConsent";

export default function Footer() {
  const location = useLocation();

  const quickLinks = [
    { label: "Live Train Tracker", path: "/live-train", icon: Train },
    { label: "Train Schedule", path: "/train-schedule", icon: Calendar },
    { label: "Station Directory", path: "/stations", icon: Landmark },
    { label: "Schedule Guide", path: "/schedule-guide", icon: FileSearch },
    { label: "Green Line Express", path: "/green-line-express", icon: Leaf },
    { label: "Contact Us", path: "/contact", icon: MessageSquare },
  ];

  const travelGuides = [
    { label: "Journey Planner", path: "/train-journey-planner", icon: Map },
    { label: "Express Trains", path: "/express-trains", icon: Zap },
    { label: "Ticket Prices", path: "/ticket-pricing", icon: CreditCard },
    { label: "Route Maps", path: "/routes", icon: RouteIcon },
    { label: "Find My Train (GPS)", path: "/find-my-train", icon: Navigation },
    { label: "Check Delays", path: "/check-train-delays", icon: AlertTriangle },
    { label: "Buy Tickets Online", path: "/buy-train-tickets", icon: Ticket },
    { label: "Blog & Guides", path: "/blog", icon: BookOpen },
  ];

  const legalMore = [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
    { label: "Disclaimer", path: "/disclaimer" },
    { label: "About Us", path: "/about" },
    { label: "Sitemap", path: "/sitemap" },
    { label: "FAQs", path: "/faq" },
    { label: "Request Feature", path: "/request-feature" },
  ];

  const popularRoutes = [
    { label: "Karachi → Lahore", path: "/routes/karachi-to-lahore" },
    { label: "Lahore → Islamabad", path: "/routes/lahore-to-islamabad" },
    { label: "Lahore → Karachi", path: "/routes/lahore-to-karachi" },
    { label: "Karachi → Peshawar", path: "/routes/karachi-to-peshawar" },
    { label: "Rawalpindi → Karachi", path: "/routes/rawalpindi-to-karachi" },
    { label: "Lahore → Multan", path: "/routes/lahore-to-multan" },
  ];

  return (
    <footer className="relative" role="contentinfo" aria-label="Site footer">
      {/* ── Cinematic Separator ── */}
      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-[hsl(var(--footer-bg))]" />
        {/* Double wave */}
        <svg className="absolute bottom-0 left-0 w-full h-20 text-[hsl(var(--footer-bg))]" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="currentColor" opacity="0.5" />
          <path d="M0,50 C360,80 720,20 1080,50 C1260,65 1380,30 1440,50 L1440,80 L0,80 Z" fill="currentColor" />
        </svg>
        {/* Animated glow line */}
        <div className="absolute bottom-[79px] left-0 right-0 h-[2px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-pulse" />
        </div>
        {/* Floating badge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="relative group cursor-default">
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-primary/50 via-accent/30 to-primary/50 blur-[2px] opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-2.5 px-5 py-2 rounded-full bg-[hsl(var(--footer-bg))] border border-[hsl(var(--footer-border))]">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-40" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[hsl(var(--footer-heading))]">Explore More</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="relative bg-[hsl(var(--footer-bg))] overflow-hidden">
        {/* Premium ambient lighting */}
        <div className="absolute -top-60 -left-60 w-[600px] h-[600px] rounded-full bg-[hsl(var(--footer-orb-1))] blur-[160px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[hsl(var(--footer-orb-2))] blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[hsl(var(--footer-orb-3))] blur-[180px] pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--footer-heading)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative container mx-auto px-4 pt-16 pb-12">
          {/* ── Hero Brand Section ── */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-16">
            {/* Brand */}
            <div className="max-w-md">
              <Link to="/" className="flex items-center gap-4 group mb-6" onClick={(e) => { if (location.pathname === "/") { e.preventDefault(); window.location.href = "/"; } }}>
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary via-primary/60 to-accent/40 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl shadow-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Train className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-400 border-[2.5px] border-[hsl(var(--footer-bg))]">
                    <div className="w-full h-full rounded-full bg-emerald-400 animate-ping opacity-50" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight leading-tight text-[hsl(var(--footer-heading))]">
                    Track <span className="text-primary">My</span> Train
                  </span>
                  <span className="text-[9px] font-bold text-[hsl(var(--footer-text-muted))] tracking-[0.25em] uppercase mt-1">Live Railway Intelligence</span>
                </div>
              </Link>
              <p className="text-sm text-[hsl(var(--footer-text))] leading-[1.8] max-w-sm">
                Pakistan's most advanced independent train tracking platform — real-time GPS positions, delay analytics, and journey intelligence for <span className="text-primary font-semibold">164+ trains</span>.
              </p>
            </div>

            {/* Helpline + Stats Row */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Helpline Glass Card */}
              <div className="relative group">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-accent/40 via-accent/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-4 bg-[hsl(var(--footer-helpline-bg))] backdrop-blur-sm rounded-2xl px-7 py-5 border border-[hsl(var(--footer-helpline-border))]">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/20 shadow-inner">
                    <Phone className="w-5.5 h-5.5 text-accent" />
                  </div>
                  <div>
                    <span className="text-[8px] text-[hsl(var(--footer-text-muted))] block uppercase tracking-[0.3em] leading-none mb-1.5 font-semibold">Railways Helpline</span>
                    <span className="text-3xl font-black text-accent leading-none tracking-tight">117</span>
                  </div>
                </div>
              </div>

              {/* Stat Chips */}
              <div className="hidden sm:flex items-center gap-2">
                {[
                  { value: "164+", label: "Trains", color: "text-emerald-400", glow: "from-emerald-500/20 to-emerald-500/5", borderColor: "border-emerald-500/20" },
                  { value: "342+", label: "Stations", color: "text-amber-400", glow: "from-amber-500/20 to-amber-500/5", borderColor: "border-amber-500/20" },
                  { value: "24/7", label: "Uptime", color: "text-blue-400", glow: "from-blue-500/20 to-blue-500/5", borderColor: "border-blue-500/20" },
                ].map((stat, i) => (
                  <div key={i} className={`relative group text-center px-5 py-3.5 rounded-xl border ${stat.borderColor} bg-[hsl(var(--footer-stat-bg))] hover:scale-105 transition-transform duration-300`}>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-b ${stat.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`relative text-base font-black ${stat.color} leading-none`}>{stat.value}</div>
                    <div className="relative text-[7px] text-[hsl(var(--footer-text-muted))] uppercase tracking-[0.3em] mt-1.5 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Premium CTA Banner ── */}
          <div className="relative mb-16 rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-[1px] rounded-2xl bg-[hsl(var(--footer-bg))]" />
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[hsl(var(--footer-heading))]">Track Any Train in Real-Time</h3>
                  <p className="text-xs text-[hsl(var(--footer-text-muted))] mt-0.5">GPS tracking, live delays & arrival predictions</p>
                </div>
              </div>
              <Link to="/live-train" className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-bold tracking-wide uppercase hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 group/btn">
                <span>Track Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ── Elegant Divider ── */}
          <div className="relative h-px mb-14">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--footer-border))] to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rotate-45 border border-[hsl(var(--footer-border))] bg-[hsl(var(--footer-bg))]" />
          </div>

          {/* ── Links Grid ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12">
            {/* Quick Links */}
            <div>
              <div className="flex items-center gap-2.5 mb-7">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-primary/10">
                  <Zap className="w-3.5 h-3.5 text-primary" />
                </div>
                <h3 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[hsl(var(--footer-heading))]">Quick Links</h3>
              </div>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-[13px] text-[hsl(var(--footer-text))] hover:text-primary transition-all duration-200 inline-flex items-center gap-2.5 group">
                      <div className="w-5 h-5 rounded-md bg-transparent group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-200">
                        <link.icon className="w-3 h-3 text-[hsl(var(--footer-text-muted))] group-hover:text-primary transition-colors duration-200" />
                      </div>
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel Tools */}
            <div>
              <div className="flex items-center gap-2.5 mb-7">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center border border-accent/10">
                  <Map className="w-3.5 h-3.5 text-accent" />
                </div>
                <h3 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[hsl(var(--footer-heading))]">Travel Tools</h3>
              </div>
              <ul className="space-y-3.5">
                {travelGuides.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-[13px] text-[hsl(var(--footer-text))] hover:text-accent transition-all duration-200 inline-flex items-center gap-2.5 group">
                      <div className="w-5 h-5 rounded-md bg-transparent group-hover:bg-accent/10 flex items-center justify-center transition-colors duration-200">
                        <link.icon className="w-3 h-3 text-[hsl(var(--footer-text-muted))] group-hover:text-accent transition-colors duration-200" />
                      </div>
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Routes */}
            <div>
              <div className="flex items-center gap-2.5 mb-7">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500/15 to-amber-500/5 flex items-center justify-center border border-amber-500/10">
                  <RouteIcon className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <h3 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[hsl(var(--footer-heading))]">Top Routes</h3>
              </div>
              <ul className="space-y-3.5">
                {popularRoutes.map((route) => (
                  <li key={route.path}>
                    <Link to={route.path} className="text-[13px] text-[hsl(var(--footer-text))] hover:text-amber-400 transition-all duration-200 inline-flex items-center gap-2.5 group">
                      <div className="w-5 h-5 rounded-md bg-transparent group-hover:bg-amber-400/10 flex items-center justify-center transition-colors duration-200">
                        <ArrowRight className="w-3 h-3 text-[hsl(var(--footer-text-muted))] group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all duration-200" />
                      </div>
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{route.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <div className="flex items-center gap-2.5 mb-7">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500/15 to-blue-500/5 flex items-center justify-center border border-blue-500/10">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <h3 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[hsl(var(--footer-heading))]">Resources</h3>
              </div>
              <ul className="space-y-3.5">
                {legalMore.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-[13px] text-[hsl(var(--footer-text))] hover:text-blue-400 transition-all duration-200 inline-flex items-center gap-2.5 group">
                      <div className="w-5 h-5 rounded-md bg-transparent group-hover:bg-blue-400/10 flex items-center justify-center transition-colors duration-200">
                        <ArrowUpRight className="w-3 h-3 text-[hsl(var(--footer-text-muted))] group-hover:text-blue-400 transition-colors duration-200" />
                      </div>
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Premium Bottom Bar ── */}
        <div className="relative bg-[hsl(var(--footer-bottom-bg))]">
          <div className="absolute inset-x-0 top-0 h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--footer-border))] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          </div>
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[11px] text-[hsl(var(--footer-bottom-text))] text-center sm:text-left leading-relaxed">
                © {new Date().getFullYear()} Track <span className="text-primary font-bold">My</span> Train — Pakistan's Independent Railway Intelligence. Made with{" "}
                <Heart className="w-3 h-3 inline text-red-400 animate-pulse" aria-hidden="true" /> for travelers.
              </p>
              <div className="flex items-center gap-6">
                <button
                  onClick={resetCookieConsent}
                  className="text-[10px] text-[hsl(var(--footer-bottom-text))] hover:text-primary transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <Cookie className="w-3 h-3 group-hover:rotate-12 transition-transform duration-200" /> Cookie Settings
                </button>
                <span className="text-[10px] text-[hsl(var(--footer-bottom-text))] flex items-center gap-1.5">
                  <Shield className="w-3 h-3 shrink-0" aria-hidden="true" />
                  Independent — NOT affiliated with Pakistan Railways
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
