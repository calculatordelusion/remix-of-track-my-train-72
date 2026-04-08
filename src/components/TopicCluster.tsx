import { Link } from "react-router-dom";
import { ArrowRight, Train, Landmark, CreditCard, Route, AlertTriangle, Calendar, Navigation, Leaf, Zap, MapPin, BookOpen } from "lucide-react";

interface TopicLink {
  label: string;
  path: string;
  icon: React.ElementType;
  relation: string; // e.g. "serves this station", "on this route"
}

interface TopicClusterProps {
  /** The entity this page is about */
  entity: string;
  /** Entity type for styling */
  entityType: "train" | "station" | "route" | "feature";
  /** Contextual links to related entities */
  links: TopicLink[];
  /** Optional heading override */
  heading?: string;
}

/**
 * Entity-based internal linking component for topic cluster SEO.
 * Connects related pages (trains ↔ stations ↔ routes ↔ pricing)
 * to build topical authority and improve crawlability.
 */
export default function TopicCluster({ entity, entityType, links, heading }: TopicClusterProps) {
  if (!links.length) return null;

  const colors = {
    train: { accent: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", hover: "hover:text-emerald-400" },
    station: { accent: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", hover: "hover:text-amber-400" },
    route: { accent: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", hover: "hover:text-blue-400" },
    feature: { accent: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", hover: "hover:text-purple-400" },
  };

  const c = colors[entityType];

  return (
    <section className="container mx-auto px-4 py-10" aria-label={`Related topics for ${entity}`}>
      <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-1">
          <div className={`w-8 h-8 rounded-lg ${c.bg} flex items-center justify-center`}>
            <MapPin className={`w-4 h-4 ${c.accent}`} />
          </div>
          <h2 className="text-base font-bold text-foreground">
            {heading || `Related to ${entity}`}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6 ml-11">
          Explore connected trains, stations, routes, and tools
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`group flex items-center gap-3 rounded-xl border ${c.border} bg-background/50 px-4 py-3 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5`}
            >
              <div className={`w-8 h-8 rounded-lg ${c.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                <link.icon className={`w-4 h-4 ${c.accent}`} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block truncate">
                  {link.label}
                </span>
                <span className="text-[11px] text-muted-foreground truncate block">{link.relation}</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pre-built cluster configs for common pages ───

export const greenLineCluster: TopicLink[] = [
  { label: "Karachi Cantt Station", path: "/stations/karachi-cantt", icon: Landmark, relation: "Departure station" },
  { label: "Lahore Junction Station", path: "/stations/lahore-junction", icon: Landmark, relation: "Major stop on route" },
  { label: "Rawalpindi Station", path: "/stations/rawalpindi", icon: Landmark, relation: "Penultimate stop" },
  { label: "Multan Cantt Station", path: "/stations/multan-cantt", icon: Landmark, relation: "Key junction stop" },
  { label: "Ticket Prices & Fares", path: "/ticket-pricing", icon: CreditCard, relation: "Compare Green Line fares" },
  { label: "Karachi → Lahore Route", path: "/routes/karachi-to-lahore", icon: Route, relation: "Full route details" },
  { label: "Check Green Line Delays", path: "/check-delays", icon: AlertTriangle, relation: "Real-time delay status" },
  { label: "Journey Planner", path: "/planner", icon: Navigation, relation: "Plan your Green Line trip" },
  { label: "All Express Trains", path: "/express-trains", icon: Zap, relation: "Compare with other express" },
];

export const expressTrainsCluster: TopicLink[] = [
  { label: "Green Line Express", path: "/green-line-express", icon: Leaf, relation: "Pakistan's premium train" },
  { label: "Ticket Prices & Fares", path: "/ticket-pricing", icon: CreditCard, relation: "Compare all train fares" },
  { label: "Train Schedule 2026", path: "/schedule", icon: Calendar, relation: "Full timetable" },
  { label: "Karachi Cantt Station", path: "/stations/karachi-cantt", icon: Landmark, relation: "Major departure hub" },
  { label: "Lahore Junction Station", path: "/stations/lahore-junction", icon: Landmark, relation: "Busiest station" },
  { label: "Karachi → Lahore Route", path: "/routes/karachi-to-lahore", icon: Route, relation: "Most popular corridor" },
  { label: "Check Delays", path: "/check-delays", icon: AlertTriangle, relation: "Live delay monitor" },
  { label: "Journey Planner", path: "/planner", icon: Navigation, relation: "Find your train" },
  { label: "Blog & Travel Guides", path: "/blog", icon: BookOpen, relation: "Travel tips & guides" },
];

export function getTrainCluster(trainName: string, fromSlug: string, fromName: string, toSlug: string, toName: string): TopicLink[] {
  return [
    { label: `${fromName} Station`, path: `/stations/${fromSlug}`, icon: Landmark, relation: "Departure station" },
    { label: `${toName} Station`, path: `/stations/${toSlug}`, icon: Landmark, relation: "Arrival station" },
    { label: "Ticket Prices", path: "/ticket-pricing", icon: CreditCard, relation: `${trainName} fare details` },
    { label: "Check Delays", path: "/check-delays", icon: AlertTriangle, relation: "Live delay status" },
    { label: "Journey Planner", path: "/planner", icon: Navigation, relation: "Plan connecting journeys" },
    { label: "Train Schedule", path: "/schedule", icon: Calendar, relation: "Full timetable" },
  ];
}

export function getStationCluster(stationName: string, province: string): TopicLink[] {
  return [
    { label: "Live Train Tracker", path: "/train", icon: Train, relation: `Track trains at ${stationName}` },
    { label: "Journey Planner", path: "/planner", icon: Navigation, relation: `Plan trips from ${stationName}` },
    { label: "Ticket Prices", path: "/ticket-pricing", icon: CreditCard, relation: "Compare fares" },
    { label: "Check Delays", path: "/check-delays", icon: AlertTriangle, relation: "Real-time delay info" },
    { label: "All Stations Directory", path: "/stations", icon: Landmark, relation: `More ${province} stations` },
    { label: "Route Maps", path: "/routes", icon: Route, relation: "Explore railway corridors" },
    { label: "Express Trains", path: "/express-trains", icon: Zap, relation: "Fast services" },
    { label: "Green Line Express", path: "/green-line-express", icon: Leaf, relation: "Premium train service" },
  ];
}

export function getRouteCluster(fromName: string, toName: string): TopicLink[] {
  return [
    { label: "Live Train Tracker", path: "/train", icon: Train, relation: `Track ${fromName}–${toName} trains` },
    { label: "Ticket Prices", path: "/ticket-pricing", icon: CreditCard, relation: "Fare comparison" },
    { label: "Check Delays", path: "/check-delays", icon: AlertTriangle, relation: "Delay status" },
    { label: "Journey Planner", path: "/planner", icon: Navigation, relation: "Find best connections" },
    { label: "Train Schedule", path: "/schedule", icon: Calendar, relation: "Full timetable" },
    { label: "All Routes", path: "/routes", icon: Route, relation: "Explore more corridors" },
  ];
}
