import { NavLink } from "@remix-run/react";

export default function MainNavigationComponent() {
  return <nav id="main-navigation">
    <ul id="main-navigation-list">
      <li class="nav-item">
        <NavLink to="/">H O M E</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/resume">B L O G S</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/resume">R E S U M E</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/more_details">M O R E . . .</NavLink>
      </li>
    </ul>
  </nav>;
}
