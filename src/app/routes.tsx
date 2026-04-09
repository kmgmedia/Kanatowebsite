import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Clients } from "./pages/Clients";
import { RequestQuote } from "./pages/RequestQuote";
import { Contact } from "./pages/Contact";
import { DesignSystem } from "./pages/DesignSystem";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "projects", Component: Projects },
      { path: "clients", Component: Clients },
      { path: "request-quote", Component: RequestQuote },
      { path: "contact", Component: Contact },
      { path: "design-system", Component: DesignSystem },
      { path: "*", Component: NotFound },
    ],
  },
]);