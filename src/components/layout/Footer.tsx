import { Link, useLocation } from "react-router-dom";
import { Train, Phone, MapPin, Globe, Leaf, Zap, Calendar, Navigation, CreditCard, Route as RouteIcon, HelpCircle, Landmark, BookOpen, Shield, FileText, MessageSquare, Sparkles, Map, AlertTriangle, Radio, ArrowRight, Heart, Ticket, FileSearch, Scale, Cookie, ArrowUpRight, Mail } from "lucide-react";
import { resetCookieConsent } from "@/components/CookieConsent";

export default function Footer() {
  const location = useLocation();

  const quickLinks = [
    { label: "All Trains", path: "/train" },
    { label: "Live Trains", path: "/live" },
    { label: "Train Schedule", path: "/schedule" },
    { label: "Station Directory", path: "/stations" },
    { label: "Schedule Guide", path: "/schedule-guide" },
    { label: "Green Line Express", path: "/green-line-express" },
    { label: "Contact Us", path: "/contact" },
  ];

  const travelGuides = [
    { label: "Journey Planner", path: "/planner" },
    { label: "Express Trains", path: "/express-trains" },
    { label: "Ticket Prices", path: "/ticket-pricing" },
    { label: "Route Maps", path: "/routes" },
    { label: "Find My Train (GPS)", path: "/find-my-train" },
    { label: "Check Delays", path: "/check-delays" },
    { label: "Buy Tickets Online", path: "/buy-tickets" },
    { label: "Blog & Guides", path: "/blog" },
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
    <footer className="relative overflow-hidden" role="contentinfo" aria-label="Site footer">
      {/* Accent top border — gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="bg-[hsl(225_35%_6%)] text-[hsl(220_15%_75%)]">
        {/* Top section — brand + CTA */}
        <div className="container mx-auto px-4 pt-12 pb-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12">
            {/* Brand */}
            <div className="max-w-md">
              <Link to="/" className="flex items-center gap-3 group mb-4" onClick={(e) => { if (location.pathname === "/") { e.preventDefault(); window.location.href = "/"; } }}>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary via-primary to-[hsl(165_60%_30%)] flex items-center justify-center shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                  <Train className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-tight leading-tight text-white">
                    Track <span className="text-primary">My</span> Train
                  </span>
                  <span className="text-[9px] font-medium text-[hsl(220_15%_45%)] tracking-[0.18em] uppercase">Live Railway Intelligence</span>
                </div>
              </Link>
              <p className="text-sm text-[hsl(220_15%_50%)] leading-relaxed">
                Pakistan's most advanced independent train tracking platform. Real-time GPS positions, delay analytics, and journey intelligence for 164+ trains.
              </p>
            </div>

            {/* Helpline + Stats row */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 bg-[hsl(225_25%_10%)] rounded-xl px-5 py-3 border border-[hsl(225_20%_14%)]">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <span className="text-[9px] text-[hsl(220_15%_40%)] block uppercase tracking-[0.2em] leading-none">Railways Helpline</span>
                  <span className="text-xl font-black text-accent leading-tight">117</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-5">
                {[
                  { value: "164+", label: "Trains", color: "text-emerald-400" },
                  { value: "342+", label: "Stations", color: "text-amber-400" },
                  { value: "24/7", label: "Uptime", color: "text-blue-400" },
                ].map((stat, i) => (
                  <div key={i} className="text-center px-3">
                    <div className={`text-base font-black ${stat.color}`}>{stat.value}</div>
                    <div className="text-[8px] text-[hsl(220_15%_40%)] uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[hsl(225_20%_14%)] to-transparent mb-10" />

          {/* Links grid — 4 columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-x-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-[11px] font-bold mb-5 uppercase tracking-[0.25em] text-primary/80">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-[13px] text-[hsl(220_15%_55%)] hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-primary" />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel Guides */}
            <div>
              <h3 className="text-[11px] font-bold mb-5 uppercase tracking-[0.25em] text-primary/80">
                Travel Tools
              </h3>
              <ul className="space-y-2.5">
                {travelGuides.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-[13px] text-[hsl(220_15%_55%)] hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-primary" />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Routes */}
            <div>
              <h3 className="text-[11px] font-bold mb-5 uppercase tracking-[0.25em] text-accent/80">
                Top Routes
              </h3>
              <ul className="space-y-2.5">
                {popularRoutes.map((route) => (
                  <li key={route.path}>
                    <Link to={route.path} className="text-[13px] text-[hsl(220_15%_55%)] hover:text-accent transition-colors duration-200 inline-flex items-center gap-1.5 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-accent" />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{route.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & More */}
            <div>
              <h3 className="text-[11px] font-bold mb-5 uppercase tracking-[0.25em] text-primary/80">
                Resources
              </h3>
              <ul className="space-y-2.5">
                {legalMore.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-[13px] text-[hsl(220_15%_55%)] hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-primary" />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(225_20%_10%)]">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <p className="text-[11px] text-[hsl(220_15%_35%)] text-center sm:text-left">
                © {new Date().getFullYear()} Track <span className="text-primary font-semibold">My</span> Train — Pakistan's Independent Railway Intelligence Platform. Built with <Heart className="w-3 h-3 inline text-destructive" aria-hidden="true" /> for travelers.
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={resetCookieConsent}
                  className="text-[10px] text-[hsl(220_15%_35%)] hover:text-primary transition-colors flex items-center gap-1"
                >
                  <Cookie className="w-3 h-3" /> Cookie Settings
                </button>
                <span className="text-[10px] text-[hsl(220_15%_25%)] flex items-center gap-1">
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
