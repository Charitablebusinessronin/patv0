import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Shield } from "lucide-react"

export default function CommercialAwningsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_8d92dd9e29ea4172b8569f9730700e1e~mv2-ILJozE4M7yr7zvBGQ39GJDbFgP98iw.webp"
            alt="Commercial Awnings Hero"
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
              <span className="text-sm font-bold uppercase tracking-wider">Business Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">COMMERCIAL AWNINGS</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Premium shade solutions for businesses, designed to enhance your brand and protect your customers.
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_8d92dd9e29ea4172b8569f9730700e1e~mv2-ILJozE4M7yr7zvBGQ39GJDbFgP98iw.webp"
                  alt="Commercial Awning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-blue-900">COMMERCIAL AWNING SOLUTIONS</h2>
              <div className="h-1 w-24 bg-red-700 mb-6"></div>
              <p className="text-gray-700 mb-8 text-lg">
                Our commercial awnings are designed to make your business stand out while providing functional benefits
                for your customers and property. Built with premium materials and American craftsmanship, our commercial
                awnings are engineered to withstand heavy use and harsh weather conditions.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                From storefronts and restaurants to office buildings and hotels, we offer custom commercial awning
                solutions that enhance your brand identity and improve your customer experience.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Increases visibility and brand recognition",
                  "Creates comfortable outdoor spaces for customers",
                  "Protects storefronts and inventory from sun damage",
                  "Reduces energy costs by blocking solar heat",
                  "Custom designs with your logo and brand colors",
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

      {/* Commercial Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">COMMERCIAL APPLICATIONS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Our commercial awnings are versatile and can be customized for various business applications.
            </p>
          </div>

          <div className="space-y-16">
            {/* Storefront Awnings */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_8d92dd9e29ea4172b8569f9730700e1e~mv2-ILJozE4M7yr7zvBGQ39GJDbFgP98iw.webp"
                    alt="Storefront Awnings"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">STOREFRONT AWNINGS</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Our storefront awnings enhance your business visibility and create an inviting entrance for your
                  customers. Available in various styles and colors, these awnings can be customized with your logo and
                  branding elements.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Increases street presence and visibility",
                    "Creates a sheltered entrance for customers",
                    "Custom graphics and lettering available",
                    "Illumination options for 24/7 visibility",
                    "Weather-resistant construction",
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

            {/* Restaurant Awnings */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image src="/images/restaurant-awning.jpg" alt="Restaurant Awnings" fill className="object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">RESTAURANT AWNINGS</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Expand your dining space and create a comfortable outdoor seating area with our restaurant awnings.
                  These durable awnings protect your customers from sun and light rain while enhancing your restaurant's
                  ambiance.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Increases seating capacity with outdoor dining",
                    "Creates a comfortable dining environment",
                    "Available with side panels for additional protection",
                    "Optional heating and lighting systems",
                    "Custom designs to match your restaurant's theme",
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

            {/* Office Building Awnings */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src="/images/office-building-awning.jpg"
                    alt="Office Building Awnings"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">OFFICE BUILDING AWNINGS</h3>
                <div className="h-1 w-16 bg-red-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Enhance your office building's appearance and energy efficiency with our commercial awnings. These
                  professional-looking awnings reduce glare and heat gain while adding architectural interest to your
                  property.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Reduces energy costs by blocking solar heat",
                    "Minimizes glare on computer screens",
                    "Protects interior furnishings from UV damage",
                    "Enhances building architecture",
                    "Low maintenance and long-lasting",
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

      {/* Branding Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">BRANDING OPTIONS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Make your business stand out with custom branding options for your commercial awnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "CUSTOM GRAPHICS",
                description:
                  "Add your logo, business name, or custom graphics to your awning for maximum brand visibility.",
                image: "/images/custom-graphics.jpg",
              },
              {
                title: "BRAND COLORS",
                description:
                  "Match your awning fabric and frame colors to your brand identity for consistent visual marketing.",
                image: "/images/brand-colors.jpg",
              },
              {
                title: "ILLUMINATION",
                description: "Add LED lighting to your awning for 24/7 visibility and enhanced nighttime presence.",
                image: "/images/illuminated-awning.jpg",
              },
            ].map((option, index) => (
              <div key={index} className="bg-white p-6 shadow-lg">
                <div className="h-64 relative mb-6">
                  <Image src={option.image || "/placeholder.svg"} alt={option.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">{option.title}</h3>
                <p className="text-gray-700">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">SUCCESS STORIES</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              See how our commercial awnings have helped businesses enhance their brand and improve customer
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-lg">
              <div className="h-64 relative mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_8d92dd9e29ea4172b8569f9730700e1e~mv2-ILJozE4M7yr7zvBGQ39GJDbFgP98iw.webp"
                  alt="Retail Shopping Center"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">RETAIL SHOPPING CENTER</h3>
              <p className="text-gray-700 mb-4">
                A shopping center in Charlotte, NC wanted to enhance their storefront visibility and provide weather
                protection for customers. We installed custom blue awnings across the entire facade, resulting in
                increased foot traffic and improved customer satisfaction.
              </p>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-none">
                READ CASE STUDY
              </Button>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="h-64 relative mb-6">
                <Image src="/images/restaurant-case-study.jpg" alt="Restaurant Patio" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">WATERFRONT RESTAURANT</h3>
              <p className="text-gray-700 mb-4">
                A popular restaurant in Charleston, SC wanted to expand their dining capacity with an outdoor seating
                area. We designed and installed a custom retractable awning system that allowed them to use their patio
                year-round, increasing their seating capacity by 40%.
              </p>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-none">
                READ CASE STUDY
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">READY TO ENHANCE YOUR BUSINESS?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation and estimate on premium American-made commercial awnings for your
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
