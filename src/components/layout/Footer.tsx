import { Link, useLocation } from "react-router-dom";
import { Train, Phone, Leaf, Zap, Calendar, Navigation, CreditCard, Route as RouteIcon, Landmark, BookOpen, Shield, MessageSquare, Map, AlertTriangle, ArrowRight, Heart, Ticket, FileSearch, Cookie, ArrowUpRight, MapPin, Sparkles, Radio } from "lucide-react";
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
      {/* ── Animated gradient border keyframes (injected once) ── */}
      <style>{`
        @keyframes footer-gradient-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes footer-glow-pulse {
          0%, 100% { opacity: 0.4; filter: blur(12px); }
          50% { opacity: 0.8; filter: blur(20px); }
        }
        @keyframes footer-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes footer-border-flow {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .footer-animated-border {
          background: linear-gradient(90deg, hsl(var(--primary)/0), hsl(var(--primary)/0.5), hsl(var(--accent)/0.4), hsl(var(--primary)/0.5), hsl(var(--primary)/0));
          background-size: 200% 100%;
          animation: footer-border-flow 4s linear infinite;
        }
        .footer-card-glow::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: linear-gradient(135deg, hsl(var(--primary)/0.3), hsl(var(--accent)/0.2), hsl(var(--primary)/0.1));
          background-size: 300% 300%;
          animation: footer-gradient-rotate 6s ease infinite;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .footer-card-glow:hover::before {
          opacity: 1;
        }
      `}</style>

      {/* ── Cinematic Separator ── */}
      <div className="relative h-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-[hsl(var(--footer-bg))]" />
        {/* Triple wave with depth */}
        <svg className="absolute bottom-0 left-0 w-full h-24 text-[hsl(var(--footer-bg))]" viewBox="0 0 1440 96" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,48 C180,96 360,0 540,48 C720,96 900,0 1080,48 C1260,96 1380,24 1440,48 L1440,96 L0,96 Z" fill="currentColor" opacity="0.3" />
          <path d="M0,56 C240,88 480,16 720,56 C960,88 1200,16 1440,56 L1440,96 L0,96 Z" fill="currentColor" opacity="0.6" />
          <path d="M0,64 C360,96 720,32 1080,64 C1260,80 1380,40 1440,64 L1440,96 L0,96 Z" fill="currentColor" />
        </svg>
        {/* Animated gradient glow line */}
        <div className="absolute bottom-[95px] left-0 right-0 h-[2px] overflow-hidden">
          <div className="footer-animated-border w-full h-full" />
        </div>
        {/* Secondary softer glow behind the line */}
        <div className="absolute bottom-[91px] left-0 right-0 h-[6px]" style={{ animation: 'footer-glow-pulse 3s ease-in-out infinite' }}>
          <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm" />
        </div>
        {/* Floating badge with animated border */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="relative group cursor-default">
            {/* Animated gradient ring */}
            <div className="absolute -inset-[2px] rounded-full overflow-hidden">
              <div className="w-full h-full rounded-full" style={{
                background: 'linear-gradient(90deg, hsl(var(--primary)/0.6), hsl(var(--accent)/0.4), hsl(var(--primary)/0.6))',
                backgroundSize: '200% 100%',
                animation: 'footer-border-flow 3s linear infinite'
              }} />
            </div>
            <div className="relative flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[hsl(var(--footer-bg))] shadow-lg shadow-primary/10">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-40" />
                <div className="absolute -inset-1 rounded-full bg-emerald-400/20 animate-pulse" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[hsl(var(--footer-heading))]">Explore More</span>
              <Sparkles className="w-3 h-3 text-primary/60" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="relative bg-[hsl(var(--footer-bg))] overflow-hidden">
        {/* Premium ambient lighting — layered orbs */}
        <div className="absolute -top-60 -left-60 w-[600px] h-[600px] rounded-full bg-[hsl(var(--footer-orb-1))] blur-[160px] pointer-events-none" style={{ animation: 'footer-glow-pulse 8s ease-in-out infinite' }} />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[hsl(var(--footer-orb-2))] blur-[130px] pointer-events-none" style={{ animation: 'footer-glow-pulse 10s ease-in-out infinite 2s' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[hsl(var(--footer-orb-3))] blur-[180px] pointer-events-none" style={{ animation: 'footer-glow-pulse 12s ease-in-out infinite 4s' }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--footer-heading)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        {/* Diagonal shimmer overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 -skew-x-12 opacity-[0.015]" style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)',
            animation: 'footer-shimmer 8s ease-in-out infinite',
            width: '50%'
          }} />
        </div>

        <div className="relative container mx-auto px-4 pt-16 pb-12">
          {/* ── Hero Brand Section ── */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-16">
            {/* Brand with animated glow */}
            <div className="max-w-md">
              <Link to="/" className="flex items-center gap-4 group mb-6" onClick={(e) => { if (location.pathname === "/") { e.preventDefault(); window.location.href = "/"; } }}>
                <div className="relative">
                  {/* Animated glow ring behind logo */}
                  <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary)/0.4), hsl(var(--accent)/0.3), hsl(var(--primary)/0.4))',
                    backgroundSize: '300% 300%',
                    animation: 'footer-gradient-rotate 4s ease infinite',
                    filter: 'blur(12px)'
                  }} />
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl shadow-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-primary/50">
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
              {/* Helpline Glass Card with animated gradient border */}
              <div className="relative group footer-card-glow rounded-2xl">
                <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
                  <div className="w-full h-full rounded-2xl" style={{
                    background: 'linear-gradient(135deg, hsl(var(--accent)/0.5), hsl(var(--accent)/0.2), hsl(var(--accent)/0.4))',
                    backgroundSize: '300% 300%',
                    animation: 'footer-gradient-rotate 5s ease infinite'
                  }} />
                </div>
                <div className="relative flex items-center gap-4 bg-[hsl(var(--footer-helpline-bg))] backdrop-blur-sm rounded-2xl px-7 py-5">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl bg-accent/20 animate-pulse blur-sm" />
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-accent/25 to-accent/5 flex items-center justify-center border border-accent/25">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[8px] text-[hsl(var(--footer-text-muted))] block uppercase tracking-[0.3em] leading-none mb-1.5 font-semibold">Railways Helpline</span>
                    <span className="text-3xl font-black text-accent leading-none tracking-tight">117</span>
                  </div>
                </div>
              </div>

              {/* Stat Chips with animated borders */}
              <div className="hidden sm:flex items-center gap-2.5">
                {[
                  { value: "164+", label: "Trains", color: "text-emerald-400", glowColor: "hsl(var(--primary))", borderColor: "border-emerald-500/20" },
                  { value: "342+", label: "Stations", color: "text-amber-400", glowColor: "hsl(var(--accent))", borderColor: "border-amber-500/20" },
                  { value: "24/7", label: "Uptime", color: "text-blue-400", glowColor: "hsl(210 80% 50%)", borderColor: "border-blue-500/20" },
                ].map((stat, i) => (
                  <div key={i} className="relative group">
                    {/* Animated gradient border on hover */}
                    <div className="absolute -inset-[1px] rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-full h-full rounded-xl" style={{
                        background: `linear-gradient(90deg, transparent, ${stat.glowColor}/0.5, transparent)`,
                        backgroundSize: '200% 100%',
                        animation: 'footer-border-flow 2s linear infinite'
                      }} />
                    </div>
                    {/* Glow underneath on hover */}
                    <div className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle, ${stat.glowColor}/0.15, transparent 70%)` }} />
                    <div className={`relative text-center px-5 py-3.5 rounded-xl border ${stat.borderColor} bg-[hsl(var(--footer-stat-bg))] group-hover:scale-105 transition-transform duration-300`}>
                      <div className={`text-base font-black ${stat.color} leading-none`}>{stat.value}</div>
                      <div className="text-[7px] text-[hsl(var(--footer-text-muted))] uppercase tracking-[0.3em] mt-1.5 font-semibold">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Premium CTA Banner with animated gradient border ── */}
          <div className="relative mb-16 rounded-2xl overflow-hidden group">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl" style={{
              background: 'linear-gradient(90deg, hsl(var(--primary)/0.4), hsl(var(--accent)/0.3), hsl(var(--primary)/0.4))',
              backgroundSize: '200% 100%',
              animation: 'footer-border-flow 4s linear infinite'
            }} />
            {/* Inner glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)/0.08), transparent, hsl(var(--accent)/0.06))',
              backgroundSize: '300% 300%',
              animation: 'footer-gradient-rotate 6s ease infinite'
            }} />
            <div className="absolute inset-[1.5px] rounded-[14px] bg-[hsl(var(--footer-bg))]" />
            {/* Shimmer effect */}
            <div className="absolute inset-[1.5px] rounded-[14px] overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(90deg, transparent, hsl(var(--primary)/0.04), transparent)',
                  animation: 'footer-shimmer 3s ease-in-out infinite',
                  width: '60%'
                }} />
              </div>
            </div>
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-7">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1.5 rounded-xl bg-primary/15 animate-pulse blur-md" />
                  <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center border border-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[hsl(var(--footer-heading))]">Track Any Train in Real-Time</h3>
                  <p className="text-xs text-[hsl(var(--footer-text-muted))] mt-0.5 flex items-center gap-1.5">
                    <Radio className="w-3 h-3 text-primary/60 animate-pulse" />
                    GPS tracking, live delays & arrival predictions
                  </p>
                </div>
              </div>
              <Link to="/live-train" className="relative flex items-center gap-2 px-7 py-3 rounded-xl text-primary-foreground text-xs font-bold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 group/btn overflow-hidden">
                {/* Button animated gradient bg */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-primary/90 to-primary" style={{
                  backgroundSize: '200% 100%',
                  animation: 'footer-border-flow 3s linear infinite'
                }} />
                {/* Button glow */}
                <div className="absolute -inset-1 rounded-xl bg-primary/30 blur-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <span className="relative">Track Now</span>
                <ArrowRight className="relative w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* ── Elegant Divider with glowing diamond ── */}
          <div className="relative h-px mb-14">
            <div className="footer-animated-border w-full h-full" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-2">
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md animate-pulse" />
                <div className="relative w-4 h-4 rotate-45 border border-primary/30 bg-[hsl(var(--footer-bg))]">
                  <div className="absolute inset-[2px] bg-gradient-to-br from-primary/20 to-accent/10 rounded-[1px]" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Links Grid with animated section headers ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12">
            {/* Quick Links */}
            <div>
              <div className="flex items-center gap-2.5 mb-7">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-primary/20 blur-sm opacity-60" />
                  <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/15">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                  </div>
                </div>
                <h3 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[hsl(var(--footer-heading))]">Quick Links</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/15 to-transparent ml-2" />
              </div>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-[13px] text-[hsl(var(--footer-text))] hover:text-primary transition-all duration-200 inline-flex items-center gap-2.5 group">
                      <div className="w-5 h-5 rounded-md bg-transparent group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_8px_hsl(var(--primary)/0.2)]">
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
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-accent/20 blur-sm opacity-60" />
                  <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/15">
                    <Map className="w-3.5 h-3.5 text-accent" />
                  </div>
                </div>
                <h3 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[hsl(var(--footer-heading))]">Travel Tools</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-accent/15 to-transparent ml-2" />
              </div>
              <ul className="space-y-3.5">
                {travelGuides.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-[13px] text-[hsl(var(--footer-text))] hover:text-accent transition-all duration-200 inline-flex items-center gap-2.5 group">
                      <div className="w-5 h-5 rounded-md bg-transparent group-hover:bg-accent/10 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_8px_hsl(var(--accent)/0.2)]">
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
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-amber-400/20 blur-sm opacity-60" />
                  <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center border border-amber-500/15">
                    <RouteIcon className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                </div>
                <h3 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[hsl(var(--footer-heading))]">Top Routes</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-amber-400/15 to-transparent ml-2" />
              </div>
              <ul className="space-y-3.5">
                {popularRoutes.map((route) => (
                  <li key={route.path}>
                    <Link to={route.path} className="text-[13px] text-[hsl(var(--footer-text))] hover:text-amber-400 transition-all duration-200 inline-flex items-center gap-2.5 group">
                      <div className="w-5 h-5 rounded-md bg-transparent group-hover:bg-amber-400/10 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(251,191,36,0.2)]">
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
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-blue-400/20 blur-sm opacity-60" />
                  <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center border border-blue-500/15">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[hsl(var(--footer-heading))]">Resources</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-400/15 to-transparent ml-2" />
              </div>
              <ul className="space-y-3.5">
                {legalMore.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-[13px] text-[hsl(var(--footer-text))] hover:text-blue-400 transition-all duration-200 inline-flex items-center gap-2.5 group">
                      <div className="w-5 h-5 rounded-md bg-transparent group-hover:bg-blue-400/10 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(96,165,250,0.2)]">
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

        {/* ── Premium Bottom Bar with animated top border ── */}
        <div className="relative bg-[hsl(var(--footer-bottom-bg))]">
          <div className="absolute inset-x-0 top-0 h-[1.5px] overflow-hidden">
            <div className="footer-animated-border w-full h-full" />
          </div>
          {/* Subtle glow under the border */}
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[11px] text-[hsl(var(--footer-bottom-text))] text-center sm:text-left leading-relaxed">
                © {new Date().getFullYear()} Track <span className="text-primary font-bold">My</span> Train — Pakistan's Independent Railway Intelligence. Made with{" "}
                <Heart className="w-3 h-3 inline text-red-400 animate-pulse" aria-hidden="true" /> for travelers.
              </p>
              <div className="flex items-center gap-6">
                <button
                  onClick={resetCookieConsent}
                  className="text-[10px] text-[hsl(var(--footer-bottom-text))] hover:text-primary transition-all duration-200 flex items-center gap-1.5 group hover:drop-shadow-[0_0_4px_hsl(var(--primary)/0.3)]"
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
