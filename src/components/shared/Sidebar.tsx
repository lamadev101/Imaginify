"use client"

import Link from "next/link"
import Image from "next/image"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

import { navLinks } from "@/constants"
import { NavItem } from "./NavItem"
import { Button } from "@/components/ui/button"



export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map(link => (
                <NavItem key={link.route} {...link} />
              ))}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map(link => (
                <NavItem key={link.route} {...link} />
              ))}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl='/home' showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}
