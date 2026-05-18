import { Link } from "react-router";
import { ArrowRight, Home } from "lucide-react";
import { SEO } from "../components/SEO";
import { PAGE_METADATA } from "../seo/pageMetadata";

export function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#F5F7FA", paddingTop: "120px" }}
    >
      <SEO
        title={PAGE_METADATA.notFound.title}
        description={PAGE_METADATA.notFound.description}
        path={PAGE_METADATA.notFound.path}
        noindex={PAGE_METADATA.notFound.noindex}
      />
      <div className="text-center max-w-md">
        <div
          className="text-8xl font-black mb-4"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#3B52A5", opacity: 0.15 }}
        >
          404
        </div>
        <h1
          className="mb-4"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "#3B52A5", fontSize: "1.8rem" }}
        >
          Page Not Found
        </h1>
        <p
          className="mb-8"
          style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
        >
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#3B52A5", color: "#fff", fontFamily: "Inter, sans-serif" }}
          >
            <Home size={16} />
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#2FA84F", color: "#fff", fontFamily: "Inter, sans-serif" }}
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}


