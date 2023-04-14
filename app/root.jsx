import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import FooterComponent from "./components/footer";
import footerStyles from "./components/footer.css";
import HeaderComponent from "./components/header";
import headerStyles from "./components/header.css";
import styles from "~/styles/main.css";

export default function App() {
  return (
    <html lang="en">
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
    {rel: "stylesheet", href: styles},
    {rel: "stylesheet", href: headerStyles},
    {rel: "stylesheet", href: footerStyles},
  ];
}
