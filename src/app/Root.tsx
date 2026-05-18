import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { useAnalytics } from "../hooks/useAnalytics";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { WhatsAppButton } from "./components/WhatsAppButton";

export function Root() {
  const { pathname } = useLocation();

  // Google Analytics 4 page view tracking
  useAnalytics();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
