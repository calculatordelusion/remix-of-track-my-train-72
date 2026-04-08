import { Link, useLocation } from "react-router-dom";
import { Train, Phone, Globe, Leaf, Zap, Calendar, Navigation, CreditCard, Route as RouteIcon, HelpCircle, Landmark, BookOpen, Shield, MessageSquare, Sparkles, Map, AlertTriangle, ArrowRight, Heart, Ticket, FileSearch, Scale, Cookie, ArrowUpRight, Wifi } from "lucide-react";
import { resetCookieConsent } from "@/components/CookieConsent";

export default function Footer() {
  const location = useLocation();

  const quickLinks = [
    { label: "Live Train Tracker", path: "/live-train", icon: Train },
    { label: "Train Schedule", path: "/schedule", icon: Calendar },
    { label: "Station Directory", path: "/stations", icon: Landmark },
    { label: "Schedule Guide", path: "/schedule-guide", icon: FileSearch },
    { label: "Green Line Express", path: "/green-line-express", icon: Leaf },
    { label: "Contact Us", path: "/contact", icon: MessageSquare },
  ];

  const travelGuides = [
    { label: "Journey Planner", path: "/planner", icon: Map },
    { label: "Express Trains", path: "/express-trains", icon: Zap },
    { label: "Ticket Prices", path: "/ticket-pricing", icon: CreditCard },
    { label: "Route Maps", path: "/routes", icon: RouteIcon },
    { label: "Find My Train (GPS)", path: "/find-my-train", icon: Navigation },
    { label: "Check Delays", path: "/check-delays", icon: AlertTriangle },
    { label: "Buy Tickets Online", path: "/buy-tickets", icon: Ticket },
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
      {/* ── Grand Separator ── */}
      <div className="relative h-28 overflow-hidden">
        {/* Gradient fade from page → footer */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-[hsl(var(--footer-bg))]" />
        {/* Decorative wave SVG */}
        <svg className="absolute bottom-0 left-0 w-full h-16 text-[hsl(var(--footer-bg))]" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,16 1440,32 L1440,64 L0,64 Z" fill="currentColor" />
        </svg>
        {/* Glowing line */}
        <div className="absolute bottom-[63px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        {/* Floating badge */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(var(--footer-bg))] border border-[hsl(var(--footer-border))] shadow-lg shadow-primary/5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[hsl(var(--footer-text))]">Explore More</span>
          </div>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="relative bg-[hsl(var(--footer-bg))] overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[hsl(var(--footer-orb-1))] blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[hsl(var(--footer-orb-2))] blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--footer-orb-3))] blur-[150px] pointer-events-none" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--footer-heading)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        {/* Brand Row */}
        <div className="relative container mx-auto px-4 pt-14 pb-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-14">
            {/* Brand */}
            <div className="max-w-lg">
              <Link to="/" className="flex items-center gap-3.5 group mb-5" onClick={(e) => { if (location.pathname === "/") { e.preventDefault(); window.location.href = "/"; } }}>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-xl shadow-primary/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/40">
                    <Train className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[hsl(var(--footer-bg))] animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tight leading-tight text-[hsl(var(--footer-heading))]">
                    Track <span className="text-primary">My</span> Train
                  </span>
                  <span className="text-[9px] font-semibold text-[hsl(var(--footer-text-muted))] tracking-[0.2em] uppercase mt-0.5">Live Railway Intelligence</span>
                </div>
              </Link>
              <p className="text-sm text-[hsl(var(--footer-text))] leading-relaxed max-w-sm">
                Pakistan's most advanced independent train tracking platform — real-time GPS positions, delay analytics, and journey intelligence for 164+ trains.
              </p>
            </div>

            {/* Helpline + Stats */}
            <div className="flex flex-wrap items-center gap-5">
              <div className="relative flex items-center gap-3.5 bg-[hsl(var(--footer-helpline-bg))] rounded-2xl px-6 py-4 border border-[hsl(var(--footer-helpline-border))] shadow-lg shadow-accent/5">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
                <div className="relative w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="relative">
                  <span className="text-[8px] text-[hsl(var(--footer-text))] block uppercase tracking-[0.25em] leading-none mb-1">Railways Helpline</span>
                  <span className="text-2xl font-black text-accent leading-none tracking-tight">117</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                {[
                  { value: "164+", label: "Trains", color: "text-emerald-400", borderColor: "border-emerald-500/20" },
                  { value: "342+", label: "Stations", color: "text-amber-400", borderColor: "border-amber-500/20" },
                  { value: "24/7", label: "Uptime", color: "text-blue-400", borderColor: "border-blue-500/20" },
                ].map((stat, i) => (
                  <div key={i} className={`text-center px-4 py-2.5 rounded-xl border ${stat.borderColor} bg-[hsl(var(--footer-stat-bg))]`}>
                    <div className={`text-sm font-black ${stat.color} leading-none`}>{stat.value}</div>
                    <div className="text-[7px] text-[hsl(var(--footer-text-muted))] uppercase tracking-[0.25em] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative h-px mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--footer-border))] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 lg:gap-x-10">
            {/* Quick Links */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-primary" />
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[hsl(var(--footer-heading))]">Quick Links</h3>
              </div>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-[13px] text-[hsl(var(--footer-text))] hover:text-primary transition-all duration-200 inline-flex items-center gap-2 group">
                      <link.icon className="w-3.5 h-3.5 text-[hsl(var(--footer-text-muted))] group-hover:text-primary transition-colors duration-200" />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel Tools */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center">
                  <Map className="w-3 h-3 text-accent" />
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[hsl(var(--footer-heading))]">Travel Tools</h3>
              </div>
              <ul className="space-y-3">
                {travelGuides.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-[13px] text-[hsl(var(--footer-text))] hover:text-accent transition-all duration-200 inline-flex items-center gap-2 group">
                      <link.icon className="w-3.5 h-3.5 text-[hsl(var(--footer-text-muted))] group-hover:text-accent transition-colors duration-200" />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Routes */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-md bg-amber-500/10 flex items-center justify-center">
                  <RouteIcon className="w-3 h-3 text-amber-400" />
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[hsl(var(--footer-heading))]">Top Routes</h3>
              </div>
              <ul className="space-y-3">
                {popularRoutes.map((route) => (
                  <li key={route.path}>
                    <Link to={route.path} className="text-[13px] text-[hsl(var(--footer-text))] hover:text-amber-400 transition-all duration-200 inline-flex items-center gap-2 group">
                      <ArrowRight className="w-3.5 h-3.5 text-[hsl(var(--footer-text-muted))] group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all duration-200" />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{route.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center">
                  <BookOpen className="w-3 h-3 text-blue-400" />
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[hsl(var(--footer-heading))]">Resources</h3>
              </div>
              <ul className="space-y-3">
                {legalMore.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-[13px] text-[hsl(var(--footer-text))] hover:text-blue-400 transition-all duration-200 inline-flex items-center gap-2 group">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[hsl(var(--footer-text-muted))] group-hover:text-blue-400 transition-colors duration-200" />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="relative bg-[hsl(var(--footer-bottom-bg))]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--footer-border))] to-transparent" />
          <div className="container mx-auto px-4 py-5">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <p className="text-[11px] text-[hsl(var(--footer-bottom-text))] text-center sm:text-left">
                © {new Date().getFullYear()} Track <span className="text-primary font-semibold">My</span> Train — Pakistan's Independent Railway Intelligence. Made with <Heart className="w-3 h-3 inline text-red-400" aria-hidden="true" /> for travelers.
              </p>
              <div className="flex items-center gap-5">
                <button
                  onClick={resetCookieConsent}
                  className="text-[10px] text-[hsl(var(--footer-bottom-text))] hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <Cookie className="w-3 h-3" /> Cookie Settings
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
