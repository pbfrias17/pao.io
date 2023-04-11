import { NavLink } from "@remix-run/react";

export default function MainNavigationComponent() {
  return <nav id="main-navigation">
    <ul id="main-navigation-list">
      <li class="main-navigation-list-item">
        <NavLink to="/">About Me</NavLink>
      </li>
      <li class="main-navigation-list-item">
        <NavLink to="/resume">My Resume</NavLink>
      </li>
      <li class="main-navigation-list-item">
        <NavLink to="/more_details">... dive deeper</NavLink>
      </li>
    </ul>
  </nav>;
}
