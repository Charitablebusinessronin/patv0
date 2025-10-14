import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Shield } from "lucide-react"

export default function RetractableAwningsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg"
            alt="Retractable Awnings Hero"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">RETRACTABLE AWNINGS</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Premium motorized and manual retractable awnings built with American craftsmanship and designed to last.
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg"
                  alt="1776 Model Retractable Awning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-blue-900">RETRACTABLE AWNING SOLUTIONS</h2>
              <div className="h-1 w-24 bg-red-700 mb-6"></div>
              <p className="text-gray-700 mb-8 text-lg">
                Our premium retractable awnings provide the perfect balance of sun protection and flexibility. Extend
                your awning for shade on hot days, or retract it when you want to enjoy the sunshine or during inclement
                weather.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                Available in both motorized and manual options, our retractable awnings are built with military-grade
                materials and American craftsmanship to ensure years of reliable performance.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Extends your outdoor living space",
                  "Protects furniture and flooring from UV damage",
                  "Reduces cooling costs by blocking solar heat",
                  "Available in hundreds of fabric patterns and colors",
                  "Custom sizes to fit your specific needs",
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

      {/* Product Models */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">OUR RETRACTABLE AWNING MODELS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Choose from our selection of premium retractable awnings, each designed with specific features to meet
              your needs.
            </p>
          </div>

          <div className="space-y-16">
            {/* 1776 Model */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
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
                <h3 className="text-3xl font-bold mb-4 text-blue-900">THE 1776 MODEL</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Our flagship motorized retractable awning combines American craftsmanship with cutting-edge
                  technology. Built to withstand the elements and engineered for decades of reliable performance.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Premium Motorized Operation",
                    "Military-Grade Sunbrella® Fabrics",
                    "Advanced Weather Detection System",
                    "Industry-Leading 10-Year Warranty",
                    "Proudly Made in the USA",
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

            {/* Liberty Model */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src="/images/liberty-model.jpg"
                    alt="Liberty Model Retractable Awning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">THE LIBERTY MODEL</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Our mid-range retractable awning offers the perfect balance of quality and affordability. Available in
                  both motorized and manual options, the Liberty Model provides excellent shade and protection.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Motorized or Manual Operation",
                    "Premium Sunbrella® Fabrics",
                    "Optional Wind Sensor",
                    "5-Year Warranty",
                    "Made in the USA",
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

            {/* Freedom Model */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src="/images/freedom-model.jpg"
                    alt="Freedom Model Retractable Awning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">THE FREEDOM MODEL</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Our entry-level retractable awning provides quality shade at an affordable price. The manual operation
                  makes it simple to use and maintain, perfect for smaller spaces.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Manual Crank Operation",
                    "Quality Acrylic Fabrics",
                    "Compact Design",
                    "3-Year Warranty",
                    "Made in the USA",
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

      {/* Fabric Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">PREMIUM FABRIC OPTIONS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Choose from hundreds of premium Sunbrella® fabric patterns and colors to perfectly match your home's
              exterior and your personal style.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Solid Red", color: "bg-red-600" },
              { name: "Navy Blue", color: "bg-blue-900" },
              { name: "Forest Green", color: "bg-green-800" },
              { name: "Beige", color: "bg-amber-100" },
              { name: "Burgundy", color: "bg-red-900" },
              { name: "Charcoal", color: "bg-gray-700" },
              { name: "Taupe", color: "bg-stone-400" },
              { name: "Black", color: "bg-black" },
            ].map((fabric, index) => (
              <div key={index} className="p-4 border border-gray-200 flex flex-col items-center">
                <div className={`w-full h-32 ${fabric.color}`}></div>
                <p className="mt-2 font-medium">{fabric.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 mb-4">
              These are just a few examples of our available colors. Contact us to see our full fabric sample book.
            </p>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-none">
              REQUEST FABRIC SAMPLES
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">READY FOR YOUR NEW RETRACTABLE AWNING?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation and estimate on premium American-made retractable awnings for your
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
