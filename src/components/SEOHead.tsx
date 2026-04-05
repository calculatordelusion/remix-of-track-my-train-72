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
}: SEOHeadProps) {
  const fullCanonical = canonical.startsWith("http") ? canonical : `https://trackmytrain.pk${canonical}`;

  // Speakable schema for voice search / Google Assistant
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "url": fullCanonical,
    "description": description,
    "inLanguage": "en-PK",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Track My Train",
      "url": "https://trackmytrain.pk"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-description", ".faq-answer"]
    },
    "potentialAction": {
      "@type": "ReadAction",
      "target": fullCanonical
    }
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

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Track My Train" />
      <meta property="og:locale" content="en_PK" />

      {/* Article meta for blog posts */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {ogType === "article" && <meta property="article:author" content="Track My Train" />}
      {ogType === "article" && <meta property="article:section" content="Travel" />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@trackmytrain_pk" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO signals */}
      <meta name="theme-color" content="#1a6b4a" />
      <meta name="author" content="Track My Train" />
      <meta name="geo.region" content="PK" />
      <meta name="geo.placename" content="Pakistan" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="3 days" />

      {/* Speakable + WebPage schema */}
      <script type="application/ld+json">
        {JSON.stringify(speakableSchema)}
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
