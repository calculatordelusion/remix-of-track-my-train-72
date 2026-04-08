import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Info, Shield, Train, CreditCard, Globe, ExternalLink, Copyright, Scale, FileText } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const disclaimerSections = [
  { icon: Info, title: "General Disclaimer", gradient: "gradient-card-emerald", content: "The information provided on Track My Train (trackmytrain.pk) is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of any information, products, services, or related graphics contained on the website." },
  { icon: Train, title: "Train Data Accuracy", gradient: "gradient-card-amber", content: "Train positions, schedules, delays, estimated arrival times, and fare information displayed on our platform are derived from publicly available GPS telemetry feeds and algorithmic computations. This data may not always reflect actual real-time conditions. Factors such as signal outages, unscheduled stops, route diversions, weather events, and technical issues may affect accuracy. Always confirm critical travel plans with Pakistan Railways helpline (117) or at your nearest booking office." },
  { icon: Shield, title: "No Official Affiliation", gradient: "gradient-card-blue", content: "Track My Train is a completely independent, privately-operated information service. We are NOT affiliated with, endorsed by, sponsored by, or connected to Pakistan Railways, the Ministry of Railways, or any other government entity. Our use of publicly available train names, station names, and route information is for informational purposes only and does not imply any official relationship." },
  { icon: CreditCard, title: "Fare & Ticket Information", gradient: "gradient-card-purple", content: "Ticket prices and fare information displayed on our platform are approximate estimates based on publicly available data. Actual fares may vary based on season, class availability, promotional offers, and Pakistan Railways policy changes. Track My Train does not sell tickets and cannot guarantee any fare amount. For official ticket pricing and booking, contact Pakistan Railways directly." },
  { icon: Globe, title: "Third-Party Links & Advertisements", gradient: "gradient-card-emerald", content: "Our website may contain links to external websites and display advertisements from third-party advertising networks including Google AdSense. Track My Train has no control over the content, privacy policies, or practices of any third-party sites or advertisers. We do not endorse or assume responsibility for any third-party content, products, or services. Interaction with third-party advertisements is at your own risk." },
  { icon: ExternalLink, title: "External Content", gradient: "gradient-card-amber", content: "Any views or opinions expressed in user-submitted content, blog comments, or third-party materials do not necessarily represent the views of Track My Train. We are not responsible for the accuracy or reliability of any external content referenced on our platform." },
];

export default function DisclaimerPage() {
  return (
    <div>
      <SEOHead
        title="Disclaimer — Track My Train | Important Notice"
        description="Track My Train disclaimer. Understand limitations of our tracking data, our independence from Pakistan Railways, and third-party content policies."
        canonical="/disclaimer"
        keywords="track my train disclaimer, train tracker disclaimer, pakistan railways tracker disclaimer"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Disclaimer", url: "/disclaimer" }]}
      />

      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" /> Important Notice
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Disclaimer
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Last updated: April 8, 2026. Please read this disclaimer carefully before using Track My Train.
            </p>
          </div>

          <div className="space-y-6">
            {disclaimerSections.map((section, i) => (
              <Card key={i} className="border border-border/50 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${section.gradient} shrink-0`}>
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-foreground mb-2">{section.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* DMCA & Copyright Protection Section */}
            <Card className="border-2 border-primary/30 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <Copyright className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-3">Original Content & Copyright Notice</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>All textual content, editorial articles, travel guides, user interface designs, CSS styling, page layouts, and code on trackmytrain.pk are <strong className="text-foreground">original works created independently by the Track My Train development team</strong>. This content is protected under Pakistan's Copyright Ordinance, 1962 (as amended) and international copyright conventions including the Berne Convention.</p>
                      <p>Our content covers <strong className="text-foreground">publicly available factual information</strong> about Pakistan Railways — including train names, station names, schedule data, fare ranges, route descriptions, and operational facts. These are <strong className="text-foreground">public domain facts</strong> that cannot be owned or copyrighted by any single entity. The specific expression, analysis, editorial commentary, and presentation of these facts on trackmytrain.pk is our original creative work.</p>
                      <p>Any similarities between our content and content on other railway information websites are coincidental and arise from the fact that <strong className="text-foreground">all Pakistan Railways information platforms necessarily describe the same publicly available facts</strong> — the same train names, the same station names, the same routes, and the same fare structures published by Pakistan Railways. Factual information about public transportation services is not copyrightable under any jurisdiction.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fair Use & Public Data */}
            <Card className="border border-border/50 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl gradient-card-blue shrink-0">
                    <Scale className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-3">Public Data & Fair Use Statement</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>Track My Train uses <strong className="text-foreground">publicly broadcast GPS telemetry data</strong> and <strong className="text-foreground">officially gazetted Pakistan Railways timetable information</strong> to provide its tracking and schedule services. This data is transmitted over public frequencies and published in official government gazettes, making it part of the public domain.</p>
                      <p>The use of Pakistan Railways train names (e.g., Tezgam, Green Line Express, Khyber Mail), station names (e.g., Lahore Junction, Karachi Cantt), and route information constitutes <strong className="text-foreground">fair use of factual public transportation data</strong> for informational purposes. These terms are official designations of a state-owned enterprise and are not trademarkable by third-party websites.</p>
                      <p>Our editorial content — including travel guides, comparison tables, safety tips, and booking advice — represents <strong className="text-foreground">independent journalistic and editorial work</strong> based on first-hand travel experience and publicly available information. It is not derived from, copied from, or based on the content of any other website.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* DMCA Counter-Notice */}
            <Card className="border border-border/50 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl gradient-card-purple shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-3">DMCA Policy & Counter-Notice Rights</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>Track My Train respects intellectual property rights and will respond promptly to legitimate DMCA takedown notices. However, we also <strong className="text-foreground">vigorously defend our right to publish original content about public transportation services</strong>.</p>
                      <p><strong className="text-foreground">Important:</strong> Under 17 U.S.C. § 512(f), any person who knowingly materially misrepresents that material is infringing may be liable for damages. Filing a false DMCA claim against original content or public-domain factual information may result in legal liability for the claimant.</p>
                      <p>Factual information about Pakistan Railways — including train names, station names, schedules, fares, and route data — is <strong className="text-foreground">public domain information published by a state-owned enterprise</strong>. No third-party website can claim copyright over these facts, nor can they claim exclusive right to write about them.</p>
                      <p>If you believe specific content on our site infringes your copyright, please contact us at our <Link to="/contact" className="text-primary underline hover:no-underline">Contact page</Link> with: (1) identification of the copyrighted work, (2) the specific URL on our site, (3) your contact information, and (4) a statement of good faith belief. We will respond within 10 business days.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border border-primary/20 bg-primary/5 shadow-sm">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-4">
                By using Track My Train, you acknowledge that you have read and understood this disclaimer. 
                For questions or concerns, please visit our{" "}
                <Link to="/contact" className="text-primary underline hover:no-underline">Contact page</Link>.
              </p>
              <p className="text-sm text-muted-foreground">
                See also: <Link to="/privacy" className="text-primary underline hover:no-underline">Privacy Policy</Link> · <Link to="/terms" className="text-primary underline hover:no-underline">Terms of Service</Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
