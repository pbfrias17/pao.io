import { Link } from "@remix-run/react";

import styles from "~/styles/main.css";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div>
      <h1>Paortfolio (Paolo's Portfolio)</h1>
      <a href="/resume">Go to my resume (via anchor tag)</a>
      <p>This will route the browser to the page and submit a new http request to download the page contents</p>
      <br />
      <Link to="/resume">Go to my resume (via remix Link)</Link>
      <p>This will route the browser to the page without needing to download the page contents</p>
    </div>
  );
}

export function links() {
  return [
    {rel: "stylesheet", href: styles},
  ];
}
