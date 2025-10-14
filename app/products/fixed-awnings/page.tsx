import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Shield } from "lucide-react"

export default function FixedAwningsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_a59a080a8a3c4f2e85c891a3bfe9eda0~mv2.jpg-R3P4mdGqO5R0yZUIADWc9ZJuqno5Yl.jpeg"
            alt="Fixed Awnings Hero"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">FIXED FABRIC AWNINGS</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Durable, stylish fixed awnings built with American craftsmanship for residential and commercial
              applications.
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_a59a080a8a3c4f2e85c891a3bfe9eda0~mv2.jpg-R3P4mdGqO5R0yZUIADWc9ZJuqno5Yl.jpeg"
                  alt="Fixed Fabric Awning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-blue-900">FIXED AWNING SOLUTIONS</h2>
              <div className="h-1 w-24 bg-red-700 mb-6"></div>
              <p className="text-gray-700 mb-8 text-lg">
                Our fixed fabric awnings provide reliable shade and protection while enhancing the appearance of your
                home or business. Built with premium materials and American craftsmanship, our fixed awnings are
                designed to withstand the elements and provide years of service.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                Available in a variety of styles, shapes, and sizes, our fixed awnings can be customized to complement
                your architecture and meet your specific needs. From traditional dome awnings to modern straight-edge
                designs, we have options for every aesthetic preference.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Enhances curb appeal and architectural interest",
                  "Protects windows, doors, and entryways from the elements",
                  "Reduces energy costs by blocking solar heat",
                  "Available in hundreds of fabric patterns and colors",
                  "Custom sizes and shapes to fit your specific needs",
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

      {/* Awning Styles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">FIXED AWNING STYLES</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Choose from our selection of premium fixed awning styles, each designed with specific features to meet
              your needs.
            </p>
          </div>

          <div className="space-y-16">
            {/* Dome Awnings */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_a59a080a8a3c4f2e85c891a3bfe9eda0~mv2.jpg-R3P4mdGqO5R0yZUIADWc9ZJuqno5Yl.jpeg"
                    alt="Dome Awnings"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">DOME AWNINGS</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Our elegant dome awnings add a touch of sophistication to any window or entryway. Their curved design
                  provides excellent water runoff and creates a classic, timeless look that enhances your property's
                  curb appeal.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Perfect for windows and doorways",
                    "Available in quarter-round and half-round styles",
                    "Custom sizes to fit any opening",
                    "Premium Sunbrella® fabrics",
                    "Powder-coated aluminum frames",
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

            {/* Traditional Awnings */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image src="/images/traditional-awning.jpg" alt="Traditional Awnings" fill className="object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">TRADITIONAL AWNINGS</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Our traditional fixed awnings provide excellent shade and protection with a classic sloped design.
                  Perfect for windows, doors, and patios, these awnings combine functionality with timeless style.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Versatile design for various applications",
                    "Available in multiple projection depths",
                    "Optional valance for added style",
                    "Premium Sunbrella® fabrics",
                    "Powder-coated aluminum frames",
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

            {/* Entrance Canopies */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image src="/images/entrance-canopy.jpg" alt="Entrance Canopies" fill className="object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">ENTRANCE CANOPIES</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Our entrance canopies provide a welcoming and protective covering for doorways and entrances. These
                  stylish canopies shield visitors from rain and sun while adding architectural interest to your
                  property.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Makes a strong first impression",
                    "Protects entryways from the elements",
                    "Available in various shapes and styles",
                    "Premium Sunbrella® fabrics",
                    "Heavy-duty construction for durability",
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
              Our fixed awnings are versatile and can be used in a variety of residential and commercial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "RESIDENTIAL WINDOWS",
                description: "Enhance your home's appearance while reducing energy costs with stylish window awnings.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_a59a080a8a3c4f2e85c891a3bfe9eda0~mv2.jpg-R3P4mdGqO5R0yZUIADWc9ZJuqno5Yl.jpeg",
              },
              {
                title: "STOREFRONTS",
                description: "Create an inviting entrance and increase visibility with custom storefront awnings.",
                image: "/images/storefront-awning.jpg",
              },
              {
                title: "ENTRYWAYS",
                description: "Make a strong first impression and provide weather protection with entrance canopies.",
                image: "/images/entryway-awning.jpg",
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

      {/* Fabric Options */}
      <section className="py-20 bg-gray-50">
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
              <div key={index} className="p-4 border border-gray-200 flex flex-col items-center bg-white">
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
          <h2 className="text-4xl font-bold mb-6">READY FOR YOUR NEW FIXED AWNING?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation and estimate on premium American-made fixed awnings for your home
            or business.
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
