"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // Add transparency when scrolled
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Ideas", href: "/" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-orange-500/90 backdrop-blur-sm shadow-lg" : "bg-orange-500"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Suitmedia-logo-3Ccqmf7b9Jhk9486GvzN3qWHoxU3WR.png"
              alt="Suitmedia"
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white hover:text-orange-200 transition-colors relative ${
                  pathname === item.href ? "font-semibold" : ""
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
