import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Shield, ArrowRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="mb-6 relative h-20 w-48">
                <Image
                  src="/images/patriot-awning-logo-2024.png"
                  alt="Patriot Awning Logo"
                  width={192}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="mb-6 text-blue-100">
                Premium American-made awnings and shade solutions for residential and commercial properties. Built with
                pride and engineered to last.
              </p>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-full">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://instagram.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-full">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://twitter.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-full">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 border-b border-blue-800 pb-2">QUICK LINKS</h3>
              <ul className="space-y-3">
                {[
                  { name: "ABOUT US", href: "/about" },
                  { name: "PRODUCTS & SERVICES", href: "/products" },
                  { name: "GALLERY", href: "/gallery" },
                  { name: "CONTACT US", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-blue-100 hover:text-white flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-xl font-bold mb-6 border-b border-blue-800 pb-2">SERVICE AREAS</h3>
              <ul className="space-y-3">
                {[
                  "Charlotte, NC",
                  "Raleigh, NC",
                  "Greensboro, NC",
                  "Columbia, SC",
                  "Charleston, SC",
                  "Myrtle Beach, SC",
                  "Greenville, SC",
                ].map((area) => (
                  <li key={area} className="text-blue-100 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 border-b border-blue-800 pb-2">CONTACT US</h3>
              <ul className="space-y-6">
                <li className="flex">
                  <Phone className="h-6 w-6 text-red-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-bold">CALL US</p>
                    <p className="text-blue-100">(800) 555-AWNING</p>
                  </div>
                </li>
                <li className="flex">
                  <Mail className="h-6 w-6 text-red-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-bold">EMAIL US</p>
                    <p className="text-blue-100">info@patriotawning.com</p>
                  </div>
                </li>
                <li className="flex">
                  <MapPin className="h-6 w-6 text-red-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-bold">HEADQUARTERS</p>
                    <p className="text-blue-100">1776 Freedom Drive</p>
                    <p className="text-blue-100">Charlotte, NC 28208</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-blue-950 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-5 w-5 mr-2 text-red-500" />
              <p className="text-sm text-blue-100">&copy; {currentYear} Patriot Awning. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-blue-100 hover:text-white text-sm">
                PRIVACY POLICY
              </Link>
              <Link href="/terms-of-service" className="text-blue-100 hover:text-white text-sm">
                TERMS OF SERVICE
              </Link>
              <Link href="/sitemap" className="text-blue-100 hover:text-white text-sm">
                SITEMAP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
