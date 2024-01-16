'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MainNavigationComponent() {
  const navLinks = [
    {to: "/", label: "H O M E"},
    {to: "/blogs", label: "B L O G S"},
    {to: "/resume", label: "R E S U M E"},
    {to: "/more", label: "M O R E . . ."},
  ]
  const pathname = usePathname()
  return <nav className="">
    <ul className="flex flex-row justify-center">
      {
        navLinks.map(({ to, label }) => (
          <li className="nav-item text-xs md:text-sm text-cobalt mx-5 md:mt-3 mb-10" key={to}>
            <Link className={`nav-item${pathname === to ? '-active' : ''}`} href={to}>{label}</Link>
          </li>
        ))
      }
    </ul>
  </nav>;
}
