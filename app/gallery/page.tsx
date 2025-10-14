import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, MapPin } from "lucide-react"

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_8d92dd9e29ea4172b8569f9730700e1e~mv2-ILJozE4M7yr7zvBGQ39GJDbFgP98iw.webp"
            alt="Gallery Hero"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent z-0"></div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-red-700 px-4 py-1 rounded-full mb-6">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-bold uppercase tracking-wider">American Craftsmanship</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">PROJECT GALLERY</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Explore our portfolio of completed residential and commercial projects throughout the Carolinas.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-none">ALL PROJECTS</Button>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 border border-blue-900 px-6 py-3 rounded-none">
              RESIDENTIAL
            </Button>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 border border-blue-900 px-6 py-3 rounded-none">
              COMMERCIAL
            </Button>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 border border-blue-900 px-6 py-3 rounded-none">
              RETRACTABLE AWNINGS
            </Button>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 border border-blue-900 px-6 py-3 rounded-none">
              FIXED AWNINGS
            </Button>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 border border-blue-900 px-6 py-3 rounded-none">
              PORCH ENCLOSURES
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Commercial Projects */}
            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
              <div className="h-80 relative">
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
                <Link
                  href="/gallery/retail-shopping-center"
                  className="text-red-700 font-bold flex items-center hover:text-red-800"
                >
                  VIEW PROJECT <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
              <div className="h-80 relative">
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
                <Link
                  href="/gallery/drive-through-canopy"
                  className="text-red-700 font-bold flex items-center hover:text-red-800"
                >
                  VIEW PROJECT <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Residential Projects */}
            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
              <div className="h-80 relative">
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
                <Link
                  href="/gallery/window-awnings"
                  className="text-red-700 font-bold flex items-center hover:text-red-800"
                >
                  VIEW PROJECT <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
              <div className="h-80 relative">
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
                <Link
                  href="/gallery/deck-awning"
                  className="text-red-700 font-bold flex items-center hover:text-red-800"
                >
                  VIEW PROJECT <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
              <div className="h-80 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp"
                  alt="Porch Enclosure"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-red-700 text-white px-4 py-2 font-bold">RESIDENTIAL</div>
              </div>
              <CardContent className="p-8 bg-white">
                <h3 className="text-xl font-bold mb-2 text-blue-900">PORCH ENCLOSURE</h3>
                <p className="text-gray-600 mb-6 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" /> Columbia, SC
                </p>
                <Link
                  href="/gallery/porch-enclosure"
                  className="text-red-700 font-bold flex items-center hover:text-red-800"
                >
                  VIEW PROJECT <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
              <div className="h-80 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg"
                  alt="Retractable Awning"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-red-700 text-white px-4 py-2 font-bold">RESIDENTIAL</div>
              </div>
              <CardContent className="p-8 bg-white">
                <h3 className="text-xl font-bold mb-2 text-blue-900">RETRACTABLE AWNING</h3>
                <p className="text-gray-600 mb-6 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" /> Charleston, SC
                </p>
                <Link
                  href="/gallery/retractable-awning"
                  className="text-red-700 font-bold flex items-center hover:text-red-800"
                >
                  VIEW PROJECT <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">INSPIRED BY OUR WORK?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today to discuss your project and get a free consultation and estimate.
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
    </div>
  )
}
