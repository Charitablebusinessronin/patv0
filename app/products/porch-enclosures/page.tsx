import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Shield } from "lucide-react"

export default function PorchEnclosuresPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp"
            alt="Porch Enclosures Hero"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">PORCH ENCLOSURES</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Transform your outdoor space into a comfortable, year-round living area with our premium porch enclosure
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp"
                  alt="Porch Enclosure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-blue-900">PORCH ENCLOSURE SOLUTIONS</h2>
              <div className="h-1 w-24 bg-red-700 mb-6"></div>
              <p className="text-gray-700 mb-8 text-lg">
                Our premium porch enclosure systems allow you to enjoy your outdoor spaces regardless of weather
                conditions. Using high-quality clear vinyl or screen materials, our enclosures provide protection from
                wind, rain, pollen, and insects while maintaining your view and connection to the outdoors.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                Perfect for residential porches, restaurant patios, and commercial spaces, our enclosures are custom
                designed and professionally installed to ensure a perfect fit and years of reliable performance.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Extends your outdoor living season",
                  "Protects from wind, rain, pollen, and insects",
                  "Clear vinyl or screen options available",
                  "Custom designed for your specific space",
                  "Professional installation included",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-blue-900 flex items-center justify-center mr-4">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enclosure Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">ENCLOSURE OPTIONS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Choose from our selection of premium enclosure systems, each designed with specific features to meet your
              needs.
            </p>
          </div>

          <div className="space-y-16">
            {/* Clear Vinyl Enclosures */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp"
                    alt="Clear Vinyl Enclosure"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">CLEAR VINYL ENCLOSURES</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Our clear vinyl enclosures provide maximum protection from the elements while maintaining your view.
                  Perfect for extending your outdoor season into cooler months or protecting from rain and wind.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Crystal clear marine-grade vinyl",
                    "Roll-up or fixed panel options",
                    "Custom fitted to your space",
                    "UV-resistant materials",
                    "Easy to clean and maintain",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-none">LEARN MORE</Button>
              </div>
            </div>

            {/* Screen Enclosures */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image src="/images/screen-enclosure.jpg" alt="Screen Enclosure" fill className="object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">SCREEN ENCLOSURES</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Our premium screen enclosures provide protection from insects and debris while allowing fresh air to
                  flow through. Perfect for warmer months when you want to enjoy the breeze without the bugs.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "High-quality fiberglass or aluminum screening",
                    "Multiple mesh densities available",
                    "Custom fitted to your space",
                    "UV-resistant materials",
                    "Low maintenance and durable",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-none">LEARN MORE</Button>
              </div>
            </div>

            {/* Combination Systems */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src="/images/combination-system.jpg"
                    alt="Combination Enclosure System"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">COMBINATION SYSTEMS</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Our combination systems offer the best of both worlds, with interchangeable vinyl and screen panels
                  that can be swapped seasonally. Perfect for year-round use in varying weather conditions.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Interchangeable vinyl and screen panels",
                    "Easy to switch between seasons",
                    "Custom fitted to your space",
                    "Premium materials throughout",
                    "Maximum versatility for all weather",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-red-700 mr-2" />
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-none">LEARN MORE</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">POPULAR APPLICATIONS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Our porch enclosure systems are versatile and can be used in a variety of residential and commercial
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "RESIDENTIAL PORCHES",
                description:
                  "Transform your home's porch into a comfortable living space that can be enjoyed year-round.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp",
              },
              {
                title: "RESTAURANT PATIOS",
                description:
                  "Extend your outdoor dining season and protect customers from the elements with our commercial enclosures.",
                image: "/images/restaurant-patio.jpg",
              },
              {
                title: "COMMERCIAL SPACES",
                description:
                  "Create comfortable outdoor areas for employees or customers with our custom enclosure solutions.",
                image: "/images/commercial-enclosure.jpg",
              },
            ].map((application, index) => (
              <div key={index} className="bg-white p-6 shadow-lg">
                <div className="h-64 relative mb-6">
                  <Image
                    src={application.image || "/placeholder.svg"}
                    alt={application.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">{application.title}</h3>
                <p className="text-gray-700">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">READY TO TRANSFORM YOUR OUTDOOR SPACE?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation and estimate on premium American-made porch enclosures for your
            home or business.
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
