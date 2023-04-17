import { NavLink } from "@remix-run/react";

export default function MainNavigationComponent() {
  const navLinks = [
    {to: "/", label: "H O M E"},
    {to: "/blogs", label: "B L O G S"},
    {to: "/resume", label: "R E S U M E"},
    {to: "/more", label: "M O R E . . ."},
  ]

  return <nav class="">
    <ul class="flex flex-row justify-center">
      {
        navLinks.map(({ to, label }) => (
          <li class="nav-item text-cobalt mx-5 mt-3 mb-10">
            <NavLink to={to}>{label}</NavLink>
          </li>
        ))
      }
    </ul>
  </nav>;
}
