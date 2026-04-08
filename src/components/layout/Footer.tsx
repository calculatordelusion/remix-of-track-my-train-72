import { Link, useLocation } from "react-router-dom";
import { Train, Phone, MapPin, Globe, Leaf, Zap, Calendar, Navigation, CreditCard, Route as RouteIcon, HelpCircle, Landmark, BookOpen, Shield, FileText, MessageSquare, Sparkles, Map, AlertTriangle, Radio, Gauge, ArrowRight, Heart, ExternalLink, Ticket, FileSearch, Scale, Cookie } from "lucide-react";
import { resetCookieConsent } from "@/components/CookieConsent";

export default function Footer() {
  const location = useLocation();
  const quickLinks = [
    { label: "All Trains", icon: Train, path: "/train" },
    { label: "Live Trains", icon: Radio, path: "/live" },
    { label: "Train Schedule", icon: Calendar, path: "/schedule" },
    { label: "Station Directory", icon: Landmark, path: "/stations" },
    { label: "Schedule Guide", icon: FileSearch, path: "/schedule-guide" },
    { label: "Green Line Express", icon: Leaf, path: "/green-line-express" },
    { label: "Contact Us", icon: MessageSquare, path: "/contact" },
  ];

  const travelGuides = [
    { label: "Journey Planner", icon: MapPin, path: "/planner" },
    { label: "Express Trains", icon: Zap, path: "/express-trains" },
    { label: "Ticket Prices", icon: CreditCard, path: "/ticket-pricing" },
    { label: "Route Maps", icon: RouteIcon, path: "/routes" },
    { label: "Find My Train (GPS)", icon: Navigation, path: "/find-my-train" },
    { label: "Check Delays", icon: AlertTriangle, path: "/check-delays" },
    { label: "Buy Tickets Online", icon: Ticket, path: "/buy-tickets" },
    { label: "Blog & Guides", icon: BookOpen, path: "/blog" },
  ];

  const legalMore = [
    { label: "Privacy Policy", icon: Shield, path: "/privacy" },
    { label: "Terms of Service", icon: Scale, path: "/terms" },
    { label: "Disclaimer", icon: AlertTriangle, path: "/disclaimer" },
    { label: "About Us", icon: Globe, path: "/about" },
    { label: "Sitemap", icon: Map, path: "/sitemap" },
    { label: "FAQs", icon: HelpCircle, path: "/faq" },
    { label: "Request Feature", icon: Sparkles, path: "/request-feature" },
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
      {/* Main Footer — deep navy with warm accents */}
      <div className="bg-[hsl(222_47%_8%)] text-[hsl(210_30%_85%)]">
        {/* Top section — brand strip */}
        <div className="border-b border-[hsl(222_30%_14%)]">
          <div className="container mx-auto px-4 py-8 sm:py-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <Link to="/" className="flex items-center gap-3 group" onClick={(e) => { if (location.pathname === "/") { e.preventDefault(); window.location.href = "/"; } }}>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-[hsl(165_55%_22%)] flex items-center justify-center shadow-lg shadow-primary/15 transition-transform duration-300 group-hover:scale-105">
                  <Train className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tight leading-tight text-white">
                    Track<span className="text-primary">My</span>Train
                  </span>
                  <span className="text-[10px] font-medium text-[hsl(210_20%_50%)] tracking-[0.15em] uppercase">Pakistan Railways Live Tracking</span>
                </div>
              </Link>

              <div className="flex items-center gap-6">
                {/* Helpline — pill style */}
                <div className="flex items-center gap-3 bg-[hsl(222_30%_12%)] rounded-full px-5 py-2.5 border border-[hsl(222_25%_16%)]">
                  <Phone className="w-4 h-4 text-accent" />
                  <div>
                    <span className="text-[9px] text-[hsl(210_20%_45%)] block uppercase tracking-widest leading-none">Helpline</span>
                    <span className="text-lg font-black text-accent leading-tight">117</span>
                  </div>
                </div>

                {/* Stats mini */}
                <div className="hidden md:flex items-center gap-4">
                  {[
                    { value: "164+", label: "Trains" },
                    { value: "342+", label: "Stations" },
                    { value: "24/7", label: "Live" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm font-black text-white">{stat.value}</div>
                      <div className="text-[9px] text-[hsl(210_20%_45%)] uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-xs mb-5 uppercase tracking-[0.2em] text-[hsl(210_20%_55%)]">
                Quick Links
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link key={link.path + link.label} to={link.path} className="flex items-center gap-2 text-sm text-[hsl(210_20%_60%)] hover:text-primary transition-all duration-200 group">
                    <span className="w-1 h-1 rounded-full bg-[hsl(210_20%_30%)] group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Travel Guides */}
            <div>
              <h3 className="font-bold text-xs mb-5 uppercase tracking-[0.2em] text-[hsl(210_20%_55%)]">
                Travel Guides
              </h3>
              <div className="space-y-3">
                {travelGuides.map((link) => (
                  <Link key={link.path + link.label} to={link.path} className="flex items-center gap-2 text-sm text-[hsl(210_20%_60%)] hover:text-primary transition-all duration-200 group">
                    <span className="w-1 h-1 rounded-full bg-[hsl(210_20%_30%)] group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Routes */}
            <div>
              <h3 className="font-bold text-xs mb-5 uppercase tracking-[0.2em] text-[hsl(38_80%_50%)]">
                Popular Routes
              </h3>
              <div className="space-y-3">
                {popularRoutes.map((route) => (
                  <Link key={route.path} to={route.path} className="flex items-center gap-2 text-sm text-[hsl(210_20%_60%)] hover:text-accent transition-all duration-200 group">
                    <ArrowRight className="w-3 h-3 text-[hsl(210_20%_30%)] group-hover:text-accent transition-colors shrink-0" />
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal & More */}
            <div>
              <h3 className="font-bold text-xs mb-5 uppercase tracking-[0.2em] text-[hsl(210_20%_55%)]">
                Legal & More
              </h3>
              <div className="space-y-3">
                {legalMore.map((link) => (
                  <Link key={link.path + link.label} to={link.path} className="flex items-center gap-2 text-sm text-[hsl(210_20%_60%)] hover:text-primary transition-all duration-200 group">
                    <span className="w-1 h-1 rounded-full bg-[hsl(210_20%_30%)] group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(222_30%_12%)]">
          <div className="container mx-auto px-4 py-5">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <p className="text-xs text-[hsl(210_20%_40%)] text-center sm:text-left">
                © {new Date().getFullYear()} Track<span className="text-primary font-semibold">My</span>Train — Pakistan's Independent Live Train Tracker. Made with <Heart className="w-3 h-3 inline text-destructive" aria-hidden="true" /> for travelers.
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={resetCookieConsent}
                  className="text-[11px] text-[hsl(210_20%_40%)] hover:text-primary transition-colors flex items-center gap-1"
                >
                  <Cookie className="w-3 h-3" /> Cookie Settings
                </button>
                <p className="text-[11px] text-[hsl(210_20%_30%)] text-center sm:text-right max-w-md flex items-center gap-1.5">
                  <AlertTriangle className="w-3 h-3 shrink-0" aria-hidden="true" />
                  Independent — NOT affiliated with Pakistan Railways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
