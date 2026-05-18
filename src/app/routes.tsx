import { createBrowserRouter } from "react-router";
import { Root } from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        lazy: () => import("./pages/Home").then(({ Home }) => ({ Component: Home })),
      },
      {
        path: "about",
        lazy: () => import("./pages/About").then(({ About }) => ({ Component: About })),
      },
      {
        path: "services",
        lazy: () =>
          import("./pages/Services").then(({ Services }) => ({
            Component: Services,
          })),
      },
      {
        path: "projects",
        lazy: () =>
          import("./pages/Projects").then(({ Projects }) => ({
            Component: Projects,
          })),
      },
      {
        path: "clients",
        lazy: () =>
          import("./pages/Clients").then(({ Clients }) => ({
            Component: Clients,
          })),
      },
      {
        path: "request-quote",
        lazy: () =>
          import("./pages/RequestQuote").then(({ RequestQuote }) => ({
            Component: RequestQuote,
          })),
      },
      {
        path: "contact",
        lazy: () =>
          import("./pages/Contact").then(({ Contact }) => ({
            Component: Contact,
          })),
      },
      {
        path: "design-system",
        lazy: () =>
          import("./pages/DesignSystem").then(({ DesignSystem }) => ({
            Component: DesignSystem,
          })),
      },
      {
        path: "*",
        lazy: () =>
          import("./pages/NotFound").then(({ NotFound }) => ({
            Component: NotFound,
          })),
      },
    ],
  },
]);
