import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, Mail, MapPin, ArrowRight, Star, Shield, Award, Check } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg"
            alt="Patriot Awning Hero"
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent z-0"></div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-red-700 px-4 py-1 rounded-full mb-6">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-bold uppercase tracking-wider">American Made Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              BOLD AMERICAN <span className="text-red-500">CRAFTSMANSHIP</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Premium awnings built with American pride and uncompromising quality. Protect your home with the best in
              the business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white text-lg px-8 py-6 rounded-none">
                GET A FREE QUOTE
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-6 rounded-none"
              >
                EXPLORE PRODUCTS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* American Pride Banner */}
      <section className="bg-blue-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center">
              <Image src="/images/american-flag.jpg" alt="American Flag" width={40} height={30} className="mr-3" />
              <span className="text-white font-bold">100% AMERICAN MADE</span>
            </div>
            <div className="flex items-center">
              <Award className="h-6 w-6 text-gold-500 mr-3" />
              <span className="text-white font-bold">PREMIUM QUALITY</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-gold-500 mr-3" />
              <span className="text-white font-bold">LIFETIME WARRANTY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured 1776 Model */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg"
                  alt="1776 Model Retractable Awning"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-red-700 text-white px-6 py-3">
                  <span className="font-bold text-xl">BEST SELLER</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-red-700 text-white px-4 py-1 mb-4">
                <span className="font-bold uppercase tracking-wider">Featured Product</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-blue-900">THE 1776 MODEL</h2>
              <div className="h-1 w-24 bg-red-700 mb-6"></div>
              <p className="text-gray-700 mb-8 text-lg">
                Our flagship motorized retractable awning combines American craftsmanship with cutting-edge technology.
                Built to withstand the elements and engineered for decades of reliable performance.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Premium Motorized Operation",
                  "Military-Grade Sunbrella® Fabrics",
                  "Advanced Weather Detection System",
                  "Industry-Leading 10-Year Warranty",
                  "Proudly Made in the USA",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-blue-900 flex items-center justify-center mr-4">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white text-lg px-8 py-6 rounded-none">
                EXPLORE THE 1776 MODEL
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">PREMIUM SHADE SOLUTIONS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Discover our range of American-made awnings and shade structures, designed to enhance your outdoor living
              space with style and protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "RETRACTABLE AWNINGS",
                description: "Motorized and manual options with premium fabrics and military-grade frames.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg",
                link: "/products/retractable-awnings",
              },
              {
                title: "FIXED FABRIC AWNINGS",
                description: "Durable, weather-resistant awnings for commercial and residential properties.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_a59a080a8a3c4f2e85c891a3bfe9eda0~mv2.jpg-R3P4mdGqO5R0yZUIADWc9ZJuqno5Yl.jpeg",
                link: "/products/fixed-awnings",
              },
              {
                title: "PORCH ENCLOSURES",
                description: "Custom enclosures for year-round comfort and protection from the elements.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp",
                link: "/products/porch-enclosures",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
                <div className="h-64 relative">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardContent className="p-8 bg-white">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <Link href={service.link} className="text-red-700 font-bold flex items-center hover:text-red-800">
                    LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">COMMERCIAL PROJECTS</h2>
              <div className="h-1 w-24 bg-red-700 mb-6"></div>
            </div>
            <Link href="/gallery" className="text-red-700 font-bold flex items-center hover:text-red-800">
              VIEW ALL PROJECTS <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
              <div className="h-96 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_8d92dd9e29ea4172b8569f9730700e1e~mv2-ILJozE4M7yr7zvBGQ39GJDbFgP98iw.webp"
                  alt="Commercial Awnings"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-red-700 text-white px-4 py-2 font-bold">COMMERCIAL</div>
              </div>
              <CardContent className="p-8 bg-white">
                <h3 className="text-xl font-bold mb-2 text-blue-900">RETAIL SHOPPING CENTER</h3>
                <p className="text-gray-600 mb-6 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" /> Charlotte, NC
                </p>
                <p className="text-gray-700 mb-6">
                  Custom blue awnings for a retail shopping center, providing shade and enhancing the storefront
                  appearance.
                </p>
                <Link
                  href="/gallery/commercial"
                  className="text-red-700 font-bold flex items-center hover:text-red-800"
                >
                  VIEW PROJECT <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
              <div className="h-96 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_bcf66d01dd444345b617d0cf7475653f~mv2.jpg-ToSVxjowccRdsllVurZgEGffb0ZdDE.jpeg"
                  alt="Drive-Through Canopy"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-red-700 text-white px-4 py-2 font-bold">COMMERCIAL</div>
              </div>
              <CardContent className="p-8 bg-white">
                <h3 className="text-xl font-bold mb-2 text-blue-900">DRIVE-THROUGH CANOPY</h3>
                <p className="text-gray-600 mb-6 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" /> Raleigh, NC
                </p>
                <p className="text-gray-700 mb-6">
                  Custom metal canopy designed for a drive-through window, providing weather protection and enhancing
                  functionality.
                </p>
                <Link
                  href="/gallery/commercial"
                  className="text-red-700 font-bold flex items-center hover:text-red-800"
                >
                  VIEW PROJECT <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Residential Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">RESIDENTIAL PROJECTS</h2>
              <div className="h-1 w-24 bg-red-700 mb-6"></div>
            </div>
            <Link href="/gallery/residential" className="text-red-700 font-bold flex items-center hover:text-red-800">
              VIEW ALL PROJECTS <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
              <div className="h-96 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_a59a080a8a3c4f2e85c891a3bfe9eda0~mv2.jpg-R3P4mdGqO5R0yZUIADWc9ZJuqno5Yl.jpeg"
                  alt="Window Awnings"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-red-700 text-white px-4 py-2 font-bold">RESIDENTIAL</div>
              </div>
              <CardContent className="p-8 bg-white">
                <h3 className="text-xl font-bold mb-2 text-blue-900">WINDOW AWNINGS</h3>
                <p className="text-gray-600 mb-6 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" /> Charlotte, NC
                </p>
                <p className="text-gray-700 mb-6">
                  Elegant black and white dome awnings for residential windows, adding style and protection from the
                  elements.
                </p>
                <Link
                  href="/gallery/residential"
                  className="text-red-700 font-bold flex items-center hover:text-red-800"
                >
                  VIEW PROJECT <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
              <div className="h-96 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg"
                  alt="Deck Awning"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-red-700 text-white px-4 py-2 font-bold">RESIDENTIAL</div>
              </div>
              <CardContent className="p-8 bg-white">
                <h3 className="text-xl font-bold mb-2 text-blue-900">DECK AWNING</h3>
                <p className="text-gray-600 mb-6 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" /> Raleigh, NC
                </p>
                <p className="text-gray-700 mb-6">
                  Custom striped awning for a residential deck, providing shade and enhancing outdoor living space.
                </p>
                <Link
                  href="/gallery/residential"
                  className="text-red-700 font-bold flex items-center hover:text-red-800"
                >
                  VIEW PROJECT <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">CUSTOMER TESTIMONIALS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-blue-100">
              Hear what our satisfied customers have to say about their experience with Patriot Awning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Johnson",
                title: "Homeowner",
                location: "Charlotte, NC",
                quote:
                  "The 1776 Model awning has transformed our backyard. The quality is outstanding and the installation team was professional and efficient.",
                rating: 5,
              },
              {
                name: "Sarah Williams",
                title: "Business Owner",
                location: "Raleigh, NC",
                quote:
                  "We've received so many compliments on our new storefront awning. It's increased our visibility and provides great protection for our customers.",
                rating: 5,
              },
              {
                name: "David Thompson",
                title: "Property Manager",
                location: "Columbia, SC",
                quote:
                  "From the initial consultation to the final installation, Patriot Awning exceeded our expectations. Highly recommend their services!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white text-gray-800 border-none shadow-xl">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-14 w-14 rounded-full bg-blue-900 flex items-center justify-center mr-4 text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.title}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">READY TO TRANSFORM YOUR SPACE?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation and estimate on premium American-made awnings for your home or
            business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-none">
              GET A FREE QUOTE
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-none"
            >
              CALL US: (800) 555-AWNING
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-center">
              <PhoneCall className="h-12 w-12 text-red-700 mr-6" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">CALL US</h3>
                <p className="text-gray-700 text-lg">(800) 555-AWNING</p>
                <p className="text-gray-600">Mon-Fri: 8am-6pm</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-12 w-12 text-red-700 mr-6" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">EMAIL US</h3>
                <p className="text-gray-700 text-lg">info@patriotawning.com</p>
                <p className="text-gray-600">sales@patriotawning.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-12 w-12 text-red-700 mr-6" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">VISIT US</h3>
                <p className="text-gray-700 text-lg">1776 Freedom Drive</p>
                <p className="text-gray-600">Charlotte, NC 28208</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
