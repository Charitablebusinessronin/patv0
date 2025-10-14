import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const MetalCanopiesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold text-blue-900 mb-6">Premium Metal Canopies for Commercial Buildings</h1>
              <p className="text-xl text-gray-700 mb-8">
                Enhance your building's aesthetics and functionality with our custom-designed metal canopies.
              </p>
              <Button size="lg" className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-none">
                GET A FREE QUOTE
              </Button>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden">
              <Image src="/images/metal-canopy.jpg" alt="Metal Canopy" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Canopies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">TYPES OF METAL CANOPIES</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              We offer a variety of metal canopy styles to suit your specific needs and architectural design.
            </p>
          </div>

          <div className="space-y-16">
            {/* Drive-Thru Canopies */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image src="/images/drive-thru-canopy.jpg" alt="Drive-Thru Canopy" fill className="object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">DRIVE-THRU CANOPIES</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Our drive-thru canopies provide weather protection and enhance the customer experience for banks,
                  pharmacies, and restaurants. These durable canopies are custom-designed to meet your specific
                  requirements.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Engineered for proper vehicle clearance",
                    "Weather protection for customers and employees",
                    "Custom designed to match your building",
                    "Optional integrated lighting",
                    "Low maintenance aluminum construction",
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
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image src="/images/entrance-canopy.jpg" alt="Entrance Canopy" fill className="object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">ENTRANCE CANOPIES</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Our entrance canopies provide a welcoming and protective covering for building entrances. These
                  stylish canopies shield visitors from rain and sun while adding architectural interest to your
                  property. Perfect for hotels, office buildings, schools, and other commercial properties.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Makes a strong first impression",
                    "Protects entryways from the elements",
                    "Available in various styles and finishes",
                    "Optional integrated lighting",
                    "Custom designed to complement your building",
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

            {/* Walkway Canopies */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image src="/images/walkway-canopy.jpg" alt="Walkway Canopy" fill className="object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">WALKWAY CANOPIES</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Our walkway canopies provide continuous weather protection for pedestrian pathways between buildings
                  or from parking areas to entrances. These functional canopies keep people dry during inclement weather
                  and provide shade on sunny days. Ideal for schools, hospitals, office complexes, and other
                  campus-style properties.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Continuous weather protection for pedestrians",
                    "Modular design for any length requirement",
                    "Available in various widths and heights",
                    "Optional integrated lighting",
                    "Engineered for local wind and snow loads",
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

      {/* Materials & Finishes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">MATERIALS & FINISHES</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Our metal canopies are built with premium materials and available in a variety of finishes to complement
              your building's architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ALUMINUM CONSTRUCTION",
                description:
                  "Lightweight yet durable aluminum construction provides excellent corrosion resistance and requires minimal maintenance.",
                image: "/images/aluminum-construction.jpg",
              },
              {
                title: "POWDER COAT FINISHES",
                description:
                  "Available in a wide range of powder coat colors for superior durability and color retention compared to traditional paint.",
                image: "/images/powder-coat-finishes.jpg",
              },
              {
                title: "CUSTOM PANEL OPTIONS",
                description:
                  "Choose from solid panels, perforated panels, or louvered panels to achieve the perfect balance of protection and light transmission.",
                image: "/images/panel-options.jpg",
              },
            ].map((material, index) => (
              <div key={index} className="bg-white p-6 shadow-lg">
                <div className="h-64 relative mb-6">
                  <Image
                    src={material.image || "/placeholder.svg"}
                    alt={material.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">{material.title}</h3>
                <p className="text-gray-700">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">POPULAR APPLICATIONS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Our metal canopies are versatile and can be used in a variety of commercial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "BANKS",
                description: "Drive-through canopies for ATMs and teller windows.",
                image: "/images/bank-canopy.jpg",
              },
              {
                title: "SCHOOLS",
                description: "Entrance and walkway canopies for student drop-off areas.",
                image: "/images/school-canopy.jpg",
              },
              {
                title: "RESTAURANTS",
                description: "Drive-through and curbside pickup canopies.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_bcf66d01dd444345b617d0cf7475653f~mv2.jpg-ToSVxjowccRdsllVurZgEGffb0ZdDE.jpeg",
              },
              {
                title: "HOSPITALS",
                description: "Emergency entrance and patient drop-off canopies.",
                image: "/images/hospital-canopy.jpg",
              },
            ].map((application, index) => (
              <div key={index} className="bg-white p-6 shadow-lg">
                <div className="h-48 relative mb-6">
                  <Image
                    src={application.image || "/placeholder.svg"}
                    alt={application.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">{application.title}</h3>
                <p className="text-gray-700">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">READY FOR YOUR METAL CANOPY PROJECT?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation and estimate on premium American-made metal canopies for your
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

export default MetalCanopiesPage
