import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/lib/theme";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import ScrollToTop from "@/components/layout/ScrollToTop";
import NotificationBanner from "@/components/NotificationBanner";
import { useSourceProtection } from "@/hooks/useSourceProtection";

// Homepage loaded eagerly (LCP route)
import Index from "./pages/Index";

// Lazy-loaded English pages
const LiveTrains = lazy(() => import("./pages/LiveTrains"));
const TrainDetail = lazy(() => import("./pages/TrainDetail"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Stations = lazy(() => import("./pages/Stations"));
const StationDetail = lazy(() => import("./pages/StationDetail"));
const JourneyPlanner = lazy(() => import("./pages/JourneyPlanner"));
const FindMyTrain = lazy(() => import("./pages/FindMyTrain"));
const ExpressTrains = lazy(() => import("./pages/ExpressTrains"));
const TicketPricing = lazy(() => import("./pages/TicketPricing"));
const FAQ = lazy(() => import("./pages/FAQ"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const RoutesPage = lazy(() => import("./pages/Routes"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const RequestFeature = lazy(() => import("./pages/RequestFeature"));
const GreenLine = lazy(() => import("./pages/GreenLine"));
const CheckDelays = lazy(() => import("./pages/CheckDelays"));
const RouteDetail = lazy(() => import("./pages/RouteDetail"));
const BuyTickets = lazy(() => import("./pages/BuyTickets"));
const ScheduleGuide = lazy(() => import("./pages/ScheduleGuide"));
const RailwayHelpline = lazy(() => import("./pages/RailwayHelpline"));
const Terms = lazy(() => import("./pages/Terms"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy-loaded Not Found

// Minimal loading fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const UrduRedirect = () => {
  const location = useLocation();
  const englishPath = location.pathname.replace(/^\/ur(?=\/|$)/, "") || "/";
  return <Navigate to={`${englishPath}${location.search}${location.hash}`} replace />;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      gcTime: 5 * 60_000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  useSourceProtection();
  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <NotificationBanner />
          <Layout>
            <PageTransition>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* English routes */}
                  <Route path="/" element={<Index />} />
                  <Route path="/live-train" element={<LiveTrains />} />
                  <Route path="/train" element={<Navigate to="/live-train" replace />} />
                  <Route path="/trains" element={<Navigate to="/live-train" replace />} />
                  <Route path="/live" element={<Navigate to="/live-train" replace />} />
                  <Route path="/trains/:category" element={<LiveTrains />} />
                  <Route path="/train/:slug" element={<TrainDetail />} />
                  <Route path="/trains/passengers" element={<LiveTrains />} />
                  <Route path="/train-schedule" element={<Schedule />} />
                  <Route path="/schedule" element={<Navigate to="/train-schedule" replace />} />
                  <Route path="/stations" element={<Stations />} />
                  <Route path="/stations/:slug" element={<StationDetail />} />
                  <Route path="/train-journey-planner" element={<JourneyPlanner />} />
                  <Route path="/planner" element={<Navigate to="/train-journey-planner" replace />} />
                  <Route path="/find-my-train" element={<FindMyTrain />} />
                  <Route path="/express-trains" element={<ExpressTrains />} />
                  <Route path="/ticket-pricing" element={<TicketPricing />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/train-routes" element={<RoutesPage />} />
                  <Route path="/routes" element={<Navigate to="/train-routes" replace />} />
                  <Route path="/routes/:slug" element={<RouteDetail />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  <Route path="/request-feature" element={<RequestFeature />} />
                  <Route path="/green-line-express" element={<GreenLine />} />
                  <Route path="/check-train-delays" element={<CheckDelays />} />
                  <Route path="/check-delays" element={<Navigate to="/check-train-delays" replace />} />
                  <Route path="/buy-train-tickets" element={<BuyTickets />} />
                  <Route path="/buy-tickets" element={<Navigate to="/buy-train-tickets" replace />} />
                  <Route path="/schedule-guide" element={<ScheduleGuide />} />
                  <Route path="/railway-helpline" element={<RailwayHelpline />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />



                  <Route path="/ur/*" element={<UrduRedirect />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </PageTransition>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
  );
};

export default App;
