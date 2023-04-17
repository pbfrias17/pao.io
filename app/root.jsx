import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import FooterComponent from "./components/footer";
import HeaderComponent from "./components/header";
import tailwind from "~/styles/tailwind.css";

export default function App() {
  return (
    <html lang="en" class="font-quicksand bg-cobalt overflow-visible">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <HeaderComponent />
        </header>
        <Outlet />
        <footer>
          <FooterComponent />
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [
    {rel: "stylesheet", href: tailwind},
  ];
}
