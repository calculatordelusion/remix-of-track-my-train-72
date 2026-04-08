import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Info, Shield, Train, CreditCard, Globe, ExternalLink, Copyright, Scale, FileText, Gavel, BookOpen } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const disclaimerSections = [
  { icon: Info, title: "General Disclaimer", gradient: "gradient-card-emerald", content: "The information provided on Track My Train (trackmytrain.com.pk) is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of any information, products, services, or related graphics contained on the website." },
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
        title="Disclaimer & DMCA Policy — Track My Train | Legal Notice"
        description="Track My Train legal disclaimer, DMCA policy, copyright notice, and fair use statement. All content is original and protected under Pakistan Copyright Ordinance 1962."
        canonical="/disclaimer"
        keywords="track my train disclaimer, DMCA policy, copyright notice, fair use pakistan railways data, train tracker legal"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Disclaimer & DMCA Policy", url: "/disclaimer" }]}
        primaryEntity="Copyright Law"
        contentCategory="informational"
      />

      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" /> Important Legal Notice
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Disclaimer & DMCA Policy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Last updated: April 8, 2026. This page outlines our legal position, copyright protections, DMCA policy, and fair use rights.
            </p>
          </div>

          <div className="space-y-6">
            {disclaimerSections.map((section, i) => (
              <Card key={i} className="border border-border/50 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${section.gradient} shrink-0`}>
                      <section.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-foreground mb-2">{section.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* DMCA & Copyright Protection Section — STRENGTHENED */}
            <Card className="border-2 border-primary/30 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <Copyright className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-3">Original Content & Copyright Notice</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>All textual content, editorial articles, travel guides, user interface designs, CSS styling, page layouts, source code, and software on trackmytrain.com.pk are <strong className="text-foreground">original works independently created by the Track My Train development team</strong>. These works are protected under:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li><strong className="text-foreground">Pakistan's Copyright Ordinance, 1962</strong> (as amended 2000) — Sections 3, 56, and 66</li>
                        <li><strong className="text-foreground">The Berne Convention</strong> for the Protection of Literary and Artistic Works (1886)</li>
                        <li><strong className="text-foreground">TRIPS Agreement</strong> (WTO Agreement on Trade-Related Aspects of Intellectual Property Rights)</li>
                        <li><strong className="text-foreground">U.S. Copyright Act, Title 17 U.S.C.</strong> — applicable for DMCA claims filed with U.S.-based hosting providers</li>
                      </ul>
                      <p>© 2024–2026 Track My Train. All rights reserved. Unauthorized reproduction, distribution, or derivative use of our original content is strictly prohibited and will be prosecuted to the fullest extent of applicable law.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Public Domain Data — Legal Defense */}
            <Card className="border border-border/50 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl gradient-card-blue shrink-0">
                    <Scale className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-3">Public Domain Data & Fair Use Statement</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>Track My Train processes <strong className="text-foreground">publicly broadcast GPS telemetry data</strong> and <strong className="text-foreground">officially gazetted Pakistan Railways timetable information</strong>. This data is published by Pakistan Railways — a <strong className="text-foreground">state-owned enterprise under the Ministry of Railways, Government of Pakistan</strong> — and constitutes public domain information.</p>
                      <p>Under established copyright law principles (see <em>Feist Publications, Inc. v. Rural Telephone Service Co.</em>, 499 U.S. 340 (1991)), <strong className="text-foreground">facts are not copyrightable</strong>. The following are uncopyrightable facts that any website or person is free to publish:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Train names (Tezgam, Green Line Express, Khyber Mail, etc.) — official designations by Pakistan Railways</li>
                        <li>Station names (Lahore Junction, Karachi Cantt, etc.) — geographic proper nouns</li>
                        <li>Route information (Karachi to Lahore, etc.) — geographic facts</li>
                        <li>Schedule data — officially gazetted timetables published by a government entity</li>
                        <li>Fare information — publicly posted pricing by a state-owned enterprise</li>
                        <li>GPS telemetry data — publicly broadcast radio signals</li>
                      </ul>
                      <p><strong className="text-foreground">No third-party website, individual, or entity can claim exclusive copyright over these public domain facts.</strong> Any attempt to restrict others from publishing factual information about public transportation services has no legal basis under Pakistani, U.S., or international copyright law.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* DMCA Counter-Notice & Anti-Abuse — STRONG LANGUAGE */}
            <Card className="border-2 border-destructive/20 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-destructive/10 shrink-0">
                    <Gavel className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-3">DMCA Policy, Counter-Notice & Anti-Abuse Warning</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>Track My Train respects legitimate intellectual property rights. We will promptly investigate any properly filed DMCA takedown notice that identifies <strong className="text-foreground">specific copyrighted expression</strong> (not facts, not ideas, not topics) that has been copied verbatim.</p>
                      
                      <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 my-4">
                        <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-destructive" /> Warning Against False DMCA Claims
                        </h3>
                        <p className="text-sm">Under <strong className="text-foreground">17 U.S.C. § 512(f)</strong>, any person who <strong className="text-foreground">knowingly materially misrepresents</strong> that material is infringing may be subject to liability for damages, including costs and attorneys' fees incurred by the alleged infringer. See <em>Lenz v. Universal Music Corp.</em>, 815 F.3d 1145 (9th Cir. 2016).</p>
                      </div>

                      <p><strong className="text-foreground">The following CANNOT be the basis of a valid DMCA claim:</strong></p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Publishing the same <strong>factual information</strong> about Pakistan Railways (train names, schedules, fares, routes)</li>
                        <li>Operating a website that covers the <strong>same topic</strong> (Pakistan railway tracking)</li>
                        <li>Using <strong>similar page types</strong> (train pages, station pages, route pages) — these are functional categories, not copyrightable expression</li>
                        <li>Displaying <strong>publicly available data</strong> from Pakistan Railways in a different format or layout</li>
                        <li>Writing <strong>about the same subjects</strong> — copyright protects expression, not ideas or topics</li>
                      </ul>

                      <p>If we receive a DMCA takedown notice, we will:</p>
                      <ol className="list-decimal ml-6 space-y-1">
                        <li>Evaluate whether the claim identifies specific copyrighted <strong>expression</strong> (not facts or topics)</li>
                        <li>If the claim targets public domain facts or original content, <strong>file a counter-notice under 17 U.S.C. § 512(g)</strong></li>
                        <li>If the claim is determined to be false or abusive, <strong>pursue damages under 17 U.S.C. § 512(f)</strong> and report the abuse to the relevant hosting provider</li>
                        <li>Document all false claims for potential <strong>tortious interference, defamation, and abuse of process</strong> proceedings under Pakistani law (Pakistan Penal Code, Sections 499–502)</li>
                      </ol>

                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-4">
                        <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-primary" /> Our Counter-Notice Commitment
                        </h3>
                        <p className="text-sm">We will <strong className="text-foreground">vigorously defend</strong> our right to publish original content about public transportation services. Every DMCA takedown targeting our original content will be met with a sworn counter-notice, and we reserve the right to pursue legal action against parties who file false or bad-faith claims.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legitimate DMCA Procedure */}
            <Card className="border border-border/50 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl gradient-card-purple shrink-0">
                    <FileText className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-3">Filing a Legitimate DMCA Notice</h2>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>If you believe specific <strong className="text-foreground">original creative expression</strong> (not facts) on our site infringes your copyright, you must provide:</p>
                      <ol className="list-decimal ml-6 space-y-1">
                        <li>Identification of the specific copyrighted work (with proof of ownership or registration)</li>
                        <li>The exact URL(s) on trackmytrain.com.pk containing the allegedly infringing material</li>
                        <li>A <strong>side-by-side comparison</strong> showing the specific expression that was copied (not general topics or facts)</li>
                        <li>Your full legal name, address, phone number, and email</li>
                        <li>A statement under penalty of perjury that you have a good faith belief the use is not authorized</li>
                        <li>Your physical or electronic signature</li>
                      </ol>
                      <p>Send to our <Link to="/contact" className="text-primary underline hover:no-underline">Contact page</Link>. We will respond within 10 business days. <strong className="text-foreground">Notices that do not meet all six requirements above will be rejected.</strong></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border border-primary/20 bg-primary/5 shadow-sm">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-4">
                By using Track My Train, you acknowledge that you have read and understood this disclaimer and DMCA policy. 
                For questions or concerns, please visit our{" "}
                <Link to="/contact" className="text-primary underline hover:no-underline">Contact page</Link>.
              </p>
              <p className="text-sm text-muted-foreground">
                See also: <Link to="/privacy" className="text-primary underline hover:no-underline">Privacy Policy</Link> · <Link to="/terms" className="text-primary underline hover:no-underline">Terms of Service</Link>
              </p>
              <p className="text-xs text-muted-foreground/60 mt-3">
                © 2024–2026 Track My Train. All original content protected under Pakistan Copyright Ordinance 1962, Berne Convention, and 17 U.S.C. § 101 et seq.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
