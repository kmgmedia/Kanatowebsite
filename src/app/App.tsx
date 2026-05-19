import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { router } from "./routes";

const loadingFallback = (
  <div className="flex min-h-screen items-center justify-center bg-grey-light px-4 text-center text-secondary">
    <p className="text-sm font-medium">Loading page...</p>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} fallbackElement={loadingFallback} />
      <Analytics />
    </HelmetProvider>
  );
}
