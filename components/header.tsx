"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const navigation = [
    { name: "HOME", href: "/" },
    {
      name: "COMMERCIAL PROJECTS",
      href: "/commercial",
      dropdown: [
        { name: "METAL AWNINGS & CANOPIES", href: "/commercial/metal-awnings-canopies" },
        { name: "FABRIC AWNINGS & CANOPIES", href: "/commercial/fabric-awnings-canopies" },
        { name: "RESTAURANT PATIO ENCLOSURES", href: "/commercial/restaurant-patio-enclosures" },
        { name: "AWNING REPAIR & SERVICE", href: "/commercial/repair-service" },
      ],
    },
    {
      name: "RESIDENTIAL PROJECTS",
      href: "/residential",
      dropdown: [
        { name: "METAL AWNINGS & CANOPIES", href: "/residential/metal-awnings-canopies" },
        { name: "FABRIC AWNINGS & CANOPIES", href: "/residential/fabric-awnings-canopies" },
        { name: "CURTAIN PATIO ENCLOSURES", href: "/residential/curtain-patio-enclosures" },
        { name: "AWNING REPAIR & SERVICE", href: "/residential/repair-service" },
        { name: "RETRACTABLE AWNINGS", href: "/residential/retractable-awnings" },
      ],
    },
    {
      name: "LEARN MORE",
      href: "/learn",
      dropdown: [
        { name: "ALL ABOUT AWNINGS", href: "/learn/about-awnings" },
        { name: "BLOG", href: "/learn/blog" },
      ],
    },
    { name: "BOOK ONLINE", href: "/book" },
    { name: "CONTACT", href: "/contact" },
  ]

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-brand-primary text-brand-neutral py-2 border-b-4 border-brand-accent">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/images/american-flag.jpg" alt="American Flag" width={24} height={16} className="mr-2" />
              <span className="text-sm font-medium">
                NC & SC LICENSED GENERAL CONTRACTOR - All of our products are made in the USA
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">(800) 555-AWNING</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-20 w-48">
              <Image
                src="/images/patriot-awning-logo-2024.png"
                alt="Patriot Awning Logo"
                width={192}
                height={80}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="px-4 py-2 text-brand-primary hover:text-brand-accent font-bold flex items-center transition-colors"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-brand-primary hover:text-brand-accent font-bold transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-72 bg-background shadow-lg z-10 border-t-2 border-brand-accent">
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-brand-primary hover:bg-muted hover:text-brand-accent font-medium transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-brand-accent hover:bg-brand-accent/90 text-brand-neutral font-bold rounded-none transition-colors">
              GET A FREE QUOTE
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full text-left px-4 py-3 text-brand-primary hover:bg-muted font-bold flex items-center justify-between transition-colors"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1 bg-muted">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-foreground hover:text-brand-accent font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-brand-primary hover:bg-muted font-bold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 px-4">
              <Button className="w-full bg-brand-accent hover:bg-brand-accent/90 text-brand-neutral font-bold rounded-none transition-colors">
                GET A FREE QUOTE
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
