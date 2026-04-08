import { ReactNode } from "react";
import { Link } from "react-router-dom";
import heroTrainBg from "@/assets/hero-train-bg.webp";

interface Breadcrumb {
  label: string;
  to?: string;
}

interface PremiumHeroProps {
  breadcrumbs: Breadcrumb[];
  badge: string;
  badgeIcon?: ReactNode;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
}

export default function PremiumHero({
  breadcrumbs,
  badge,
  badgeIcon,
  title,
  subtitle,
  children,
  centered = false,
}: PremiumHeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground py-12 sm:py-16 md:py-20">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img
          src={heroTrainBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.08] mix-blend-luminosity"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-gradient-start)/0.3)] via-transparent to-[hsl(var(--hero-gradient-end)/0.9)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-gradient-start)/0.7)] via-transparent to-transparent" />
      </div>

      {/* Decorative orbs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[hsl(165_55%_40%/0.06)] blur-[80px]" />
      <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-[hsl(38_92%_50%/0.04)] blur-[80px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className={`relative container mx-auto px-4 ${centered ? "text-center" : ""}`}>
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm mb-4">
          {breadcrumbs.map((bc, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="opacity-40">›</span>}
              {bc.to ? (
                <Link to={bc.to} className="opacity-60 hover:opacity-100 transition-opacity">
                  {bc.label}
                </Link>
              ) : (
                <span className="opacity-80">{bc.label}</span>
              )}
            </span>
          ))}
        </div>

        <div className={centered ? "max-w-3xl mx-auto" : "max-w-3xl"}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 glass-hero rounded-full px-5 py-2.5 text-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            {badgeIcon}
            <span className="font-semibold tracking-[0.12em] text-primary text-xs uppercase">
              {badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-base sm:text-lg opacity-75 mb-2 max-w-2xl leading-relaxed font-light">
              {subtitle}
            </p>
          )}

          {/* Slotted children (links, stats, etc.) */}
          {children}
        </div>
      </div>
    </section>
  );
}
