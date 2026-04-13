import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Shield, Globe, Zap, HelpCircle, Train, Navigation, ArrowRight, Star, Eye, Smartphone, Clock, MapPin, Route, Calendar, CreditCard, AlertTriangle, Search, Layers, BarChart3, Wifi, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";

const aboutFaqs = [
  { q: "Who operates TrackMyTrain.com.pk?", a: "TrackMyTrain.com.pk is run by an independent team of software engineers and data analysts based in Pakistan. We have zero affiliation with Pakistan Railways, the Ministry of Railways, or any government department. For official bookings and complaints, dial the Railways helpline 117." },
  { q: "Where does TrackMyTrain.com.pk source its data?", a: "We aggregate publicly broadcast GPS telemetry and cross-reference it with gazetted Pakistan Railways timetables. Our delay-computation engine then layers real-time speed, stop patterns, and historical performance data to generate live ETAs. No proprietary or paywalled data sources are used." },
  { q: "Does using TrackMyTrain.com.pk cost anything?", a: "Every tool on the platform — live tracking, journey planner, delay checker, station directory — is permanently free. There are no subscriptions, premium tiers, or feature gates. The project sustains itself through contextual advertising." },
  { q: "Do I need to register or log in?", a: "No registration is required, ever. Open trackmytrain.com.pk in any browser and start tracking immediately. We collect zero personal data — no email, no phone number, no cookies beyond essential functionality." },
  { q: "How precise is the live GPS tracking?", a: "Positional accuracy is typically 100–500 meters, depending on the onboard GPS hardware and cellular connectivity along the route. Our refresh cycle is 5 seconds in the tracker view. Delay estimates are accurate within ±3–5 minutes under normal operating conditions." },
  { q: "Which devices and browsers are supported?", a: "TrackMyTrain.com.pk is a Progressive Web App that works on all modern browsers — Chrome, Safari, Firefox, Edge — on phones, tablets, and desktops. The payload is optimized to load under 2 seconds on 2G/3G connections common across rural Pakistan." },
  { q: "How many trains does the platform cover?", a: "We monitor 164+ scheduled Pakistan Railways services, including all Express, Mail, and AC-only trains across the ML-1 mainline (Karachi–Peshawar), the Bolan corridor (Quetta link), and branch lines to Sialkot, Faisalabad, and Havelian." },
  { q: "Can TrackMyTrain.com.pk track freight trains?", a: "No. Our platform is dedicated to passenger services only. Freight movements follow separate, non-public scheduling and are managed by Pakistan Railways' freight division independently." },
  { q: "How frequently does position data refresh?", a: "The live tracker page polls for new GPS data every 5 seconds. Individual train detail pages refresh every 30 seconds. This near-real-time cadence ensures you always see the most current position without excessive data consumption." },
  { q: "What exactly does 'Find My Train' do?", a: "When you grant browser location access, our algorithm compares your GPS coordinates against the geometries of all active train routes. If your position falls within 2 km of a running train's current route segment, we match you to that service and display its schedule, delay, and next-stop info — no manual searching needed." },
  { q: "Does the site work without internet?", a: "Static schedule and station data is cached via our service worker for limited offline access. However, live GPS tracking inherently requires an active connection. We keep data payloads under 50 KB so the tracker functions even on very slow networks." },
  { q: "How do I report a data error?", a: "Head to trackmytrain.com.pk/contact to flag incorrect schedules, wrong station names, or GPS anomalies. Our data team reviews every submission and typically pushes fixes within 48 hours." },
  { q: "Which railway corridors are covered?", a: "Full coverage: Main Line 1 (Karachi–Peshawar), Bolan corridor (Jacobabad–Quetta), branch lines to Sialkot, Faisalabad–Sargodha, Rawalpindi–Havelian, and Hyderabad–Mirpur Khas. Over 342 stations across all four provinces are indexed." },
  { q: "Is there a mobile app?", a: "TrackMyTrain.com.pk is a PWA — add it to your home screen on Android or iOS for a native-app experience without any app-store download. It uses minimal storage and updates automatically." },
  { q: "How is delay calculated technically?", a: "Our engine projects where a train should be at any given moment based on departure time, inter-station average speeds, and scheduled halt durations. The difference between this projected position and the actual GPS position yields the delay figure, which is then smoothed over a rolling 60-second window to filter GPS jitter." },
  { q: "Can I search for connecting trains?", a: "Yes. The Journey Planner at trackmytrain.com.pk/planner accepts any origin-destination pair and returns all direct trains. For connections, check junction stations — Lahore, Rawalpindi, Multan, Sukkur — where multiple services converge." },
];

const teamValues = [
  { icon: Target, title: "Data Integrity", desc: "We cross-validate GPS telemetry against gazetted timetables before displaying anything. If the data doesn't meet our confidence threshold, we show 'unverified' rather than risk misleading a passenger.", gradient: "gradient-card-emerald" },
  { icon: Users, title: "Inclusive by Default", desc: "Lightweight pages under 50 KB, semantic HTML for screen readers, and functional UX on decade-old smartphones with 2G connectivity. Nobody gets left behind.", gradient: "gradient-card-amber" },
  { icon: Shield, title: "Zero-Knowledge Architecture", desc: "No sign-ups, no cookies beyond essentials, no server-side user profiles. Even Find My Train runs its proximity calculation client-side — your coordinates never touch our backend.", gradient: "gradient-card-blue" },
  { icon: Globe, title: "Editorial Independence", desc: "We are beholden to no railway authority, political party, or commercial sponsor. Our data pipeline has no manual override — what the GPS reports is what you see, unfiltered.", gradient: "gradient-card-purple" },
  { icon: Zap, title: "Sub-2-Second Loads", desc: "Aggressive code-splitting, edge-cached static assets, and compressed data payloads mean the tracker is usable the instant the page opens — even on congested Pakistani mobile towers during peak hours.", gradient: "gradient-card-rose" },
  { icon: Star, title: "Feedback-Driven Roadmap", desc: "Every feature on this platform — from Find My Train to the fog-delay alerts — was suggested by a real user. Our contact page isn't decoration; it's our product backlog.", gradient: "gradient-card-teal" },
];

export default function AboutPage() {
  return (
    <main>
      <SEOHead
        title="About TrackMyTrain.com.pk — Our Story & Mission"
        description="TrackMyTrain.com.pk is Pakistan's free, independent train tracker for 164+ trains. Learn about our mission, team, and commitment to accurate railway info."
        canonical="/about"
        keywords="about trackmytrain, track my train team, who made trackmytrain, pakistan train tracker, trackmytrain mission, independent railway tracker, free train tracking pakistan"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "About Us", url: "/about" }]}
        faqSchema={aboutFaqs}
        primaryEntity="Track My Train"
        contentCategory="informational"
        publishedTime="2024-06-01"
        modifiedTime="2026-04-13"
        additionalSchemas={[{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Track My Train",
          "description": "Pakistan's most trusted independent railway tracking service providing free real-time GPS tracking for 164+ Pakistan Railways trains across 342+ stations.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Track My Train",
            "url": "https://trackmytrain.com.pk",
            "foundingDate": "2024",
            "foundingLocation": { "@type": "Place", "name": "Lahore, Pakistan" },
            "description": "Independent platform providing free, real-time GPS train tracking for Pakistan Railways passengers.",
            "knowsAbout": ["Pakistan Railways", "Train Tracking", "GPS Navigation", "Railway Schedules", "Live Train Status"],
            "areaServed": { "@type": "Country", "name": "Pakistan" }
          }
        }]}
      />
      {/* Hero */}
      <section className="bg-hero-gradient text-primary-foreground py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm mb-3">
            <Link to="/" className="opacity-70 hover:opacity-100">Home</Link>
            <span className="opacity-50">›</span>
            <span>About Us</span>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm mb-4">
              <Shield className="w-4 h-4" /> Independent Railway Intelligence Platform
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-3">
              About <span className="text-gradient-gold">TrackMyTrain.com.pk</span>
            </h1>
            <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto mt-4">
              An open-access railway data platform engineered from the ground up for Pakistan's unique infrastructure challenges. No fees, no accounts, no compromises.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Stats */}
      <div className="container mx-auto px-4 -mt-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "164+", label: "Trains Tracked", icon: Train, gradient: "gradient-card-emerald" },
            { value: "100K+", label: "Monthly Users", icon: Users, gradient: "gradient-card-amber" },
            { value: "342+", label: "Stations Covered", icon: Navigation, gradient: "gradient-card-blue" },
            { value: "24/7", label: "Live Updates", icon: Clock, gradient: "gradient-card-purple" },
          ].map((s, i) => (
            <Card key={i} className={`${s.gradient} border hover-lift group`}>
              <CardContent className="p-4 text-center">
                <s.icon className="w-5 h-5 text-primary mx-auto mb-1 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-xl font-bold text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Origin Story */}
        <section className="mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-primary tracking-wider mb-2">ORIGIN</p>
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-2"><Heart className="w-6 h-6 text-primary" /> Where This Project Came From</h2>
          </div>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p className="text-base leading-relaxed"><strong className="text-foreground">TrackMyTrain.com.pk</strong> started as a weekend side-project by a small group of Pakistani software engineers who happened to commute by rail between Lahore and Rawalpindi. We noticed that the single biggest source of stress wasn't the journey itself — it was the complete information vacuum. You'd reach the platform and have absolutely no idea whether your train was 10 minutes away or 3 hours away.</p>
            <p className="text-base leading-relaxed">We realized that the raw GPS data existed — Pakistan Railways equips many locomotives with tracking hardware — but no public-facing tool was surfacing it in a way that a regular passenger could act on. So we wrote a scrappy prototype that pulled coordinates, snapped them to rail geometry, and displayed the result on a map. We shared the link on a university WhatsApp group. Within a week, it had been forwarded to over 5,000 people.</p>
            <p className="text-base leading-relaxed">That organic demand convinced us to invest seriously. We rewrote the entire stack for production reliability, added a delay-computation engine, built a station directory, and launched publicly in 2024. Today, TrackMyTrain.com.pk serves hundreds of thousands of monthly users across Pakistan — and every feature is still free, still account-free, and still funded entirely by contextual advertising.</p>
          </div>
        </section>

        {/* The Information Gap */}
        <section className="mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-primary tracking-wider mb-2">THE PROBLEM</p>
            <h2 className="text-2xl sm:text-3xl font-bold">The Information Gap We Exist to Close</h2>
          </div>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p className="text-base leading-relaxed">Pakistan's railway network covers <strong className="text-foreground">7,791 km of track</strong> and serves over 70 million passenger journeys per year. It's a critical mobility artery — especially for people who can't afford air travel and prefer the safety of rail over long-distance bus rides through poorly-maintained highways.</p>
            <p className="text-base leading-relaxed">Yet historically, the information infrastructure around this network has lagged far behind the physical one. A passenger boarding at Karachi Cantt for a 22-hour journey to Lahore had no reliable way to check, mid-route, how late the train was running. Families driving to Rawalpindi station to receive a relative had to guess arrival times based on the scheduled timetable — which, during fog season, can be off by 3–8 hours. The only alternative was calling the 117 helpline, which is often congested during peak periods.</p>
            <p className="text-base leading-relaxed">This uncertainty has real consequences: wasted hours at crowded platforms, missed onward connections, and unnecessary anxiety for millions of families. TrackMyTrain.com.pk was designed specifically to eliminate this guesswork — giving anyone with a phone browser instant visibility into live train positions, computed delays, and projected ETAs at every upcoming station.</p>
          </div>
        </section>

        {/* How Our Technology Works */}
        <section className="mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-primary tracking-wider mb-2">ENGINEERING</p>
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-2"><Layers className="w-6 h-6 text-primary" /> Our Technical Pipeline</h2>
          </div>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p className="text-base leading-relaxed">TrackMyTrain.com.pk's backend is a four-stage data pipeline that transforms raw satellite telemetry into the clean, actionable dashboard you see on your phone. Here's a simplified breakdown of each stage:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              {[
                { icon: Wifi, title: "Telemetry Ingestion", desc: "Onboard GPS units transmit coordinates via cellular modems. Our ingest layer receives these raw lat/lng/speed/heading packets and queues them for processing. Dead-zone gaps (tunnels, cuttings) are interpolated using last-known-velocity projection." },
                { icon: BarChart3, title: "Position-vs-Schedule Analysis", desc: "Each incoming coordinate is compared to a 'timetable graph' — a time-distance curve generated from the official schedule. The offset between expected and actual position yields the accumulated delay figure. We smooth this over a 60-second rolling window to filter GPS jitter." },
                { icon: MapPin, title: "Geospatial Snap-to-Rail", desc: "Raw coordinates can drift by 50–200 meters due to atmospheric interference. Our snap-to-rail algorithm projects each point onto the nearest rail line segment using perpendicular distance calculations, ensuring the map marker always sits on the track — not in a field next to it." },
                { icon: Zap, title: "Edge-Cached Delivery", desc: "Clean data is serialized into a compressed JSON payload (< 50 KB for all 164+ trains) and pushed to edge CDN nodes. Your browser fetches only the delta since the last poll, keeping bandwidth consumption minimal — critical for 2G-dominant coverage areas." },
              ].map((t, i) => (
                <Card key={i} className="border">
                  <CardContent className="p-5">
                    <t.icon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-bold text-sm mb-2">{t.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-base leading-relaxed mt-4">We continuously benchmark data quality and tune our algorithms using historical delay patterns. If a section of track consistently produces GPS drift (e.g., the Bolan Pass cuttings), we apply corridor-specific correction factors to maintain accuracy.</p>
          </div>
        </section>

        {/* Our Values - Gradient Cards */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-primary tracking-wider mb-2">OUR VALUES</p>
            <h2 className="text-2xl sm:text-3xl font-bold">What We Stand For</h2>
            <p className="text-sm text-muted-foreground mt-1">The principles that guide everything we build</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {teamValues.map((v, i) => (
              <Card key={i} className={`${v.gradient} border hover-lift group`}>
                <CardContent className="p-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{v.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What We Offer - Expanded */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-primary tracking-wider mb-2">FEATURES</p>
            <h2 className="text-2xl sm:text-3xl font-bold">What TrackMyTrain.com.pk Offers</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">A complete suite of free tools designed for every aspect of your railway journey in Pakistan</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Eye, title: "Live GPS Tracking", desc: "Real-time positions for 164+ trains", gradient: "gradient-card-emerald" },
              { icon: Navigation, title: "Find My Train", desc: "Auto-detect your train via GPS", gradient: "gradient-card-amber" },
              { icon: Clock, title: "Delay Checker", desc: "Accurate delay status & ETAs", gradient: "gradient-card-blue" },
              { icon: Smartphone, title: "Mobile First", desc: "Works on any device, any network", gradient: "gradient-card-purple" },
              { icon: Route, title: "Journey Planner", desc: "Find trains between any two stations", gradient: "gradient-card-rose" },
              { icon: Calendar, title: "Full Schedules", desc: "Complete timetables for all trains", gradient: "gradient-card-teal" },
              { icon: CreditCard, title: "Ticket Pricing", desc: "Fare info across all classes", gradient: "gradient-card-emerald" },
              { icon: MapPin, title: "342+ Stations", desc: "Detailed info for every station", gradient: "gradient-card-amber" },
            ].map((f, i) => (
              <Card key={i} className={`${f.gradient} border hover-lift group`}>
                <CardContent className="p-4 text-center">
                  <f.icon className="w-8 h-8 text-primary mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <h4 className="font-bold text-sm mb-0.5">{f.title}</h4>
                  <p className="text-[10px] text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Coverage & Network */}
        <section className="mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-primary tracking-wider mb-2">COVERAGE</p>
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-2"><Route className="w-6 h-6 text-primary" /> Our Railway Network Coverage</h2>
          </div>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p className="text-base leading-relaxed">TrackMyTrain.com.pk provides comprehensive coverage of the Pakistan Railways network. Our platform tracks trains across all major railway corridors in the country, connecting the four provinces of Punjab, Sindh, Khyber Pakhtunkhwa, and Balochistan.</p>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {[
                { title: "Main Line (ML-1)", desc: "The backbone of Pakistan Railways — Karachi Cantt to Peshawar Cantt via Hyderabad, Sukkur, Multan, Lahore, and Rawalpindi. Services include Khyber Mail, Tezgam, Green Line Express, and Awam Express.", trains: "40+ trains" },
                { title: "Punjab Routes", desc: "Branch lines serving Faisalabad, Sialkot, Gujranwala, Sahiwal, Bahawalpur, and Rahim Yar Khan. Key services include Allama Iqbal Express and Millat Express.", trains: "20+ trains" },
                { title: "Sindh Corridors", desc: "Routes through Hyderabad, Nawabshah, Sukkur, and Rohri connecting southern Pakistan to the main line. Multiple daily services between Karachi and interior Sindh.", trains: "15+ trains" },
                { title: "KPK & Balochistan", desc: "Services to Peshawar, Nowshera, Havelian (Hazara Express), and the Quetta route via Jacobabad. Coverage includes the scenic Bolan Pass corridor.", trains: "10+ trains" },
              ].map((r, i) => (
                <Card key={i} className="border">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-sm mb-1">{r.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{r.desc}</p>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{r.trains}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-base leading-relaxed">Whether you're tracking the <Link to="/green-line-express" className="text-primary hover:underline font-medium">Green Line Express</Link> from Karachi to Islamabad, checking if the Khyber Mail is running on time, or finding <Link to="/express-trains" className="text-primary hover:underline font-medium">express trains</Link> between Lahore and Rawalpindi, TrackMyTrain.com.pk has you covered with real-time data you can trust.</p>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-primary tracking-wider mb-2">OUR JOURNEY</p>
            <h2 className="text-2xl sm:text-3xl font-bold">Key Milestones</h2>
          </div>
          <div className="space-y-0">
            {[
              { year: "2024", title: "Platform Launch", desc: "TrackMyTrain.com.pk goes live with GPS tracking for the first 50 trains on the Main Line corridor." },
              { year: "2024", title: "100+ Trains Added", desc: "Expanded coverage to 100+ trains including branch lines to Sialkot, Faisalabad, and Quetta." },
              { year: "2025", title: "Find My Train Feature", desc: "Launched the revolutionary GPS-based 'Find My Train' feature that auto-detects your train." },
              { year: "2025", title: "342+ Stations", desc: "Complete station coverage across all four provinces with facilities information and train listings." },
              { year: "2026", title: "164+ Active Trains", desc: "Full network coverage with real-time tracking, delay monitoring, and comprehensive journey planning tools." },
            ].map((m, i) => (
              <div key={i} className="flex items-start gap-4 relative">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-primary" />
                  {i < 4 && <div className="w-0.5 h-12 bg-border" />}
                </div>
                <div className="pb-6 flex-1">
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.year}</span>
                  <h4 className="font-bold text-sm mt-1">{m.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm mb-3">
              <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
            </div>
            <h2 className="text-2xl font-bold">Everything You Want to Know About TrackMyTrain.com.pk</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">We've answered the most common questions from our users. If you don't find what you're looking for, visit our <Link to="/contact" className="text-primary hover:underline">Contact page</Link> or <Link to="/faq" className="text-primary hover:underline">full FAQ section</Link>.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {aboutFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-sm font-medium">
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pl-9 leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Explore Our Tools */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-6">
            <p className="text-xs font-bold text-primary tracking-wider mb-2">EXPLORE</p>
            <h2 className="text-xl sm:text-2xl font-bold">Try Our Free Railway Tools</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Train, gradient: "gradient-card-emerald", title: "Live Train Tracker", desc: "Track any of 164+ trains in real-time with GPS accuracy, speed data, and delay status.", link: "/live-train" },
              { icon: Search, gradient: "gradient-card-amber", title: "Find My Train", desc: "Use your phone's GPS to instantly identify which train you're on without searching.", link: "/find-my-train" },
              { icon: Route, gradient: "gradient-card-blue", title: "Journey Planner", desc: "Search trains between any two stations. View schedules, durations, and running days.", link: "/train-journey-planner" },
              { icon: AlertTriangle, gradient: "gradient-card-rose", title: "Delay Checker", desc: "Check live delay status for every running train. Get accurate ETAs at your station.", link: "/check-train-delays" },
              { icon: Calendar, gradient: "gradient-card-purple", title: "Train Schedules", desc: "Complete timetables with arrival/departure times, halt durations, and platform info.", link: "/train-schedule" },
              { icon: MapPin, gradient: "gradient-card-teal", title: "Station Directory", desc: "Browse 342+ stations with facilities, train listings, and location information.", link: "/stations" },
            ].map((tool, i) => (
              <Link key={i} to={tool.link}>
                <Card className={`${tool.gradient} border hover-lift group h-full`}>
                  <CardContent className="p-5">
                    <tool.icon className="w-8 h-8 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="font-bold mb-1 text-sm group-hover:text-primary transition-colors">{tool.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <Card className="gradient-card-rose border max-w-3xl mx-auto">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-bold mb-2">⚠️ Important Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              TrackMyTrain.com.pk is an independent platform and is NOT affiliated with, endorsed by, or connected to Pakistan Railways or any government body. We use publicly available data to provide information services to the traveling public. For official ticketing and reservations, contact Pakistan Railways helpline: <strong className="text-foreground">117</strong>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Footer */}
      <section className="bg-hero-gradient text-primary-foreground py-10 sm:py-14 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Start Tracking Trains Now</h2>
          <p className="text-base opacity-80 max-w-xl mx-auto mb-6">Free, no signup required. Track any Pakistan Railways train in real-time with GPS accuracy.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/live-train">
              <Button size="lg" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-xl font-semibold gap-2">
                <Train className="w-4 h-4" /> Open Live Tracker
              </Button>
            </Link>
            <Link to="/train-journey-planner">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl gap-2">
                <Navigation className="w-4 h-4" /> Plan a Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}