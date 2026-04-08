import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  breadcrumbs?: { name: string; url: string }[];
  faqSchema?: { q: string; a: string }[];
  howToSchema?: { name: string; steps: { name: string; text: string }[] };
  additionalSchemas?: object[];
  noindex?: boolean;
  lang?: "en";
  /** Article publish date (ISO) for blog posts */
  publishedTime?: string;
  /** Article modified date (ISO) */
  modifiedTime?: string;
  /** Primary entity/topic for entity-based SEO */
  primaryEntity?: string;
  /** Content category for search intent signals */
  contentCategory?: "informational" | "navigational" | "transactional" | "commercial";
}

export default function SEOHead({
  title,
  description,
  canonical,
  keywords,
  ogImage = "https://trackmytrain.pk/og-image.png",
  ogType = "website",
  breadcrumbs,
  faqSchema,
  howToSchema,
  additionalSchemas,
  noindex = false,
  lang = "en",
  publishedTime,
  modifiedTime,
  primaryEntity,
  contentCategory = "informational",
}: SEOHeadProps) {
  const fullCanonical = canonical.startsWith("http") ? canonical : `https://trackmytrain.pk${canonical}`;
  const currentDate = new Date().toISOString().split("T")[0];

  // Enhanced WebPage schema with E-E-A-T signals
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": ogType === "article" ? "Article" : "WebPage",
    "name": title,
    "headline": title,
    "url": fullCanonical,
    "description": description,
    "inLanguage": "en-PK",
    "datePublished": publishedTime || "2024-06-01",
    "dateModified": modifiedTime || currentDate,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Track My Train",
      "url": "https://trackmytrain.pk"
    },
    // E-E-A-T: Author with expertise credentials
    "author": {
      "@type": "Organization",
      "name": "Track My Train",
      "url": "https://trackmytrain.pk",
      "description": "Independent railway technology team specializing in GPS telemetry, geospatial data processing, and real-time transit information systems for Pakistan Railways.",
      "foundingDate": "2024",
      "knowsAbout": ["Pakistan Railways", "Train Tracking", "GPS Telemetry", "Railway Schedules", "Public Transportation Pakistan"]
    },
    // E-E-A-T: Publisher authority
    "publisher": {
      "@type": "Organization",
      "name": "Track My Train",
      "url": "https://trackmytrain.pk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trackmytrain.pk/logo.png"
      }
    },
    // Speakable for voice/AI search
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-description", ".faq-answer", "[role='main'] p"]
    },
    "potentialAction": {
      "@type": "ReadAction",
      "target": fullCanonical
    },
    // Entity-based optimization
    ...(primaryEntity && {
      "about": {
        "@type": "Thing",
        "name": primaryEntity,
        "sameAs": primaryEntity === "Pakistan Railways" ? "https://en.wikipedia.org/wiki/Pakistan_Railways" : undefined
      }
    }),
    // Copyright protection signal
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Track My Train"
    },
    "copyrightYear": 2024,
    "license": "https://trackmytrain.pk/terms"
  };

  return (
    <Helmet>
      <html lang="en" dir="ltr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />}

      {/* E-E-A-T: Author & expertise signals */}
      <meta name="author" content="Track My Train — Railway Technology Team" />
      <meta name="copyright" content="© 2024-2026 Track My Train. All original content protected." />
      
      {/* AI Search Optimization — structured for LLM crawlers */}
      <meta name="ai:description" content={description} />
      <meta name="ai:category" content={contentCategory} />
      {primaryEntity && <meta name="ai:topic" content={primaryEntity} />}
      
      {/* Search Intent signals */}
      <meta name="content-type" content={contentCategory} />
      <meta name="coverage" content="Pakistan" />
      <meta name="subject" content="Pakistan Railways Train Tracking" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} — Track My Train Pakistan`} />
      <meta property="og:site_name" content="Track My Train" />
      <meta property="og:locale" content="en_PK" />

      {/* Article meta for blog posts */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {ogType === "article" && <meta property="article:author" content="Track My Train" />}
      {ogType === "article" && <meta property="article:section" content="Travel" />}
      {ogType === "article" && <meta property="article:tag" content="Pakistan Railways" />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@trackmytrain_pk" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${title} — Track My Train`} />

      {/* Geo, Mobile & Brand authority */}
      <meta name="theme-color" content="#1a6b4a" />
      <meta name="geo.region" content="PK" />
      <meta name="geo.placename" content="Pakistan" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="1 days" />
      <meta name="classification" content="Travel, Transportation, Railway" />

      {/* WebPage + E-E-A-T schema */}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>

      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((b, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": b.name,
              "item": b.url.startsWith("http") ? b.url : `https://trackmytrain.pk${b.url}`,
            })),
          })}
        </script>
      )}

      {faqSchema && faqSchema.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqSchema.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          })}
        </script>
      )}

      {howToSchema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": howToSchema.name,
            "step": howToSchema.steps.map((s, i) => ({
              "@type": "HowToStep",
              "position": i + 1,
              "name": s.name,
              "text": s.text,
            })),
          })}
        </script>
      )}

      {additionalSchemas?.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
