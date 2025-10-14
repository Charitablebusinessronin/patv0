import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Check } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_8d92dd9e29ea4172b8569f9730700e1e~mv2-ILJozE4M7yr7zvBGQ39GJDbFgP98iw.webp"
            alt="Products Hero"
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
              <span className="text-sm font-bold uppercase tracking-wider">Premium Quality</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">OUR PRODUCTS & SERVICES</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Discover our complete range of American-made awnings, canopies, and shade solutions for residential and
              commercial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">PREMIUM SHADE SOLUTIONS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Browse our complete range of American-made awnings and shade structures, designed to enhance your outdoor
              living space with style and protection.
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
              {
                title: "COMMERCIAL AWNINGS",
                description: "Custom solutions for storefronts, restaurants, and commercial properties.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_8d92dd9e29ea4172b8569f9730700e1e~mv2-ILJozE4M7yr7zvBGQ39GJDbFgP98iw.webp",
                link: "/products/commercial-awnings",
              },
              {
                title: "METAL CANOPIES",
                description: "Durable aluminum canopies for entrances, walkways, and drive-throughs.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_bcf66d01dd444345b617d0cf7475653f~mv2.jpg-ToSVxjowccRdsllVurZgEGffb0ZdDE.jpeg",
                link: "/products/metal-canopies",
              },
              {
                title: "CUSTOM SOLUTIONS",
                description: "Specialized shade structures designed to meet your unique requirements.",
                image: "/images/custom-solutions.jpg",
                link: "/products/custom-solutions",
              },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
                <div className="h-64 relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                </div>
                <CardContent className="p-8 bg-white">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">{product.title}</h3>
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  <Link href={product.link} className="text-red-700 font-bold flex items-center hover:text-red-800">
                    LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 bg-gray-50">
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

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">READY TO ENHANCE YOUR PROPERTY?</h2>
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
    </div>
  )
}
