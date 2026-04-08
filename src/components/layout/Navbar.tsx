import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Train, MapPin, Calendar, ChevronDown, Moon, Sun, Sparkles, Radio, Menu, X, Route, Navigation, Landmark, CreditCard, Zap, HelpCircle, Phone, Leaf, Ticket, BookOpen, Headphones } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Live Trains", path: "/live-train", icon: Train },
    { label: "Journey Planner", path: "/train-journey-planner", icon: MapPin },
    { label: "Schedule", path: "/train-schedule", icon: Calendar },
  ];

  const moreItems = [
    { label: "Route Maps", path: "/routes", icon: Route },
    { label: "Find My Train", path: "/find-my-train", icon: Navigation },
    { label: "Stations", path: "/stations", icon: Landmark },
    { label: "Ticket Prices", path: "/ticket-pricing", icon: CreditCard },
    { label: "Express Trains", path: "/express-trains", icon: Zap },
    { label: "Green Line Express", path: "/green-line-express", icon: Leaf },
    { label: "Buy Tickets", path: "/buy-train-tickets", icon: Ticket },
    { label: "Schedule Guide", path: "/schedule-guide", icon: BookOpen },
    { label: "Railway Helpline", path: "/railway-helpline", icon: Headphones },
    { label: "FAQs", path: "/faq", icon: HelpCircle },
    { label: "Contact", path: "/contact", icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      {/* Top accent line */}
      <div className="h-[3px] bg-gradient-to-r from-primary via-accent to-primary" aria-hidden="true" />

      <div className={`transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg shadow-foreground/5 border-b border-border/50"
          : "bg-card border-b border-border/30"
      }`}>
        <nav id="navigation" className={`flex items-center justify-between px-3 sm:px-4 lg:px-6 transition-all duration-300 ${scrolled ? "h-14 sm:h-[58px]" : "h-16 sm:h-[66px]"}`} role="navigation" aria-label="Main navigation">
          {/* Logo — Unique brand identity */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 min-w-0 group" aria-label="Track My Train - Home" onClick={(e) => { if (location.pathname === "/") { e.preventDefault(); window.location.href = "/"; } }}>
            <div className={`relative rounded-2xl bg-gradient-to-br from-foreground via-foreground to-foreground/80 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 ${scrolled ? "w-8 h-8 sm:w-9 sm:h-9" : "w-10 h-10 sm:w-11 sm:h-11"}`}>
              <Train className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-background drop-shadow-sm" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary border-2 border-card" />
            </div>
            <div className="flex flex-col leading-none min-w-0">
              <span className="text-foreground text-[15px] sm:text-base font-black tracking-tight whitespace-nowrap">
                Track <span className="text-primary">My</span> Train
              </span>
              <span className="text-[7px] sm:text-[8px] font-semibold tracking-[0.2em] text-muted-foreground uppercase whitespace-nowrap mt-0.5">
                Pakistan Railways
              </span>
            </div>
          </Link>

          {/* Desktop Nav — pill style */}
          <div className="hidden lg:flex items-center bg-muted/50 rounded-full px-1.5 py-1" role="menubar" aria-label="Primary links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                role="menuitem"
                aria-current={isActive(item.path) ? "page" : undefined}
                className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-card text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="w-3.5 h-3.5" aria-hidden="true" />
                {item.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                aria-controls="more-menu"
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  moreOpen ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                More <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {moreOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setMoreOpen(false)} role="presentation" />
                  <div id="more-menu" className="absolute right-0 top-full mt-3 w-60 bg-card backdrop-blur-xl rounded-2xl border border-border/60 shadow-2xl shadow-foreground/10 z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-150" role="menu" aria-label="More navigation links">
                    {moreItems.map((item, index) => (
                      <div key={item.path}>
                        {index === 6 && <div className="border-t border-border/50 my-1.5 mx-3" />}
                        <Link
                          to={item.path}
                          onClick={() => setMoreOpen(false)}
                          role="menuitem"
                          aria-current={isActive(item.path) ? "page" : undefined}
                          className={`flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors rounded-xl mx-2 ${
                            isActive(item.path)
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          <item.icon className="w-4 h-4 text-primary/70" aria-hidden="true" />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link to="/request-feature" className="hidden lg:flex">
              <Button size="sm" className="rounded-full gap-1.5 bg-foreground hover:bg-foreground/90 text-background font-semibold shadow-md transition-all duration-200 px-4 text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Request Feature
              </Button>
            </Link>

            <button
              onClick={toggle}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <Link to="/live-train" className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-xs font-bold text-primary hover:bg-primary/15 transition-colors" aria-label="View live train tracking">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span aria-hidden="true">LIVE</span>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div id="mobile-nav" className="lg:hidden border-t border-border/30 bg-card animate-in slide-in-from-top-2 duration-150 max-h-[calc(100vh-68px)] overflow-y-auto" role="menu" aria-label="Mobile navigation">
            <div className="p-3 space-y-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  role="menuitem"
                  aria-current={isActive(item.path) ? "page" : undefined}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive(item.path) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted active:bg-muted"
                  }`}
                >
                  <item.icon className="w-4 h-4" aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border/50 my-2" role="separator" aria-hidden="true" />
              {moreItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  role="menuitem"
                  aria-current={isActive(item.path) ? "page" : undefined}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(item.path) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted active:bg-muted"
                  }`}
                >
                  <item.icon className="w-4 h-4 text-primary/70" aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border/50 my-2" role="separator" aria-hidden="true" />
              <Link
                to="/request-feature"
                onClick={() => setMobileOpen(false)}
                role="menuitem"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-primary"
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                Request Feature
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
