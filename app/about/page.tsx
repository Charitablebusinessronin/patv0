import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Award, Check, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg"
            alt="About Us Hero"
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
              <span className="text-sm font-bold uppercase tracking-wider">American Owned & Operated</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">ABOUT PATRIOT AWNING</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Proudly serving the Carolinas with premium American-made awnings and shade solutions since 1985.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image src="/images/company-history.jpg" alt="Company History" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-blue-900">OUR STORY</h2>
              <div className="h-1 w-24 bg-red-700 mb-6"></div>
              <p className="text-gray-700 mb-6 text-lg">
                Founded in 1985 by military veteran James Wilson, Patriot Awning began with a simple mission: to provide
                American-made shade solutions built with uncompromising quality and backed by exceptional service.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                What started as a small family business in Charlotte has grown into one of the Carolinas' premier awning
                companies, serving both residential and commercial clients throughout North and South Carolina.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Despite our growth, we've remained true to our founding principles: using only the highest quality
                American-made materials, employing skilled American craftsmen, and treating every customer like family.
              </p>
              <p className="text-gray-700 text-lg">
                Today, Patriot Awning is led by the second generation of the Wilson family, continuing our tradition of
                excellence and American craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">OUR MISSION & VALUES</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              At Patriot Awning, we're guided by a set of core values that define who we are and how we operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AMERICAN CRAFTSMANSHIP",
                description:
                  "We take pride in using American-made materials and employing skilled American craftsmen to create products of exceptional quality.",
                icon: <Shield className="h-12 w-12 text-red-700" />,
              },
              {
                title: "UNCOMPROMISING QUALITY",
                description:
                  "From the materials we select to the installation process, we never compromise on quality. We stand behind every product we sell.",
                icon: <Award className="h-12 w-12 text-red-700" />,
              },
              {
                title: "EXCEPTIONAL SERVICE",
                description:
                  "We treat every customer like family, providing personalized service and support from the initial consultation through installation and beyond.",
                icon: <Check className="h-12 w-12 text-red-700" />,
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 shadow-lg">
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-blue-900 text-center">{value.title}</h3>
                <p className="text-gray-700 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-blue-900">SERVICE AREAS</h2>
              <div className="h-1 w-24 bg-red-700 mb-6"></div>
              <p className="text-gray-700 mb-8 text-lg">
                Patriot Awning proudly serves residential and commercial clients throughout North and South Carolina.
                Our expert installation teams are based in key cities, allowing us to provide prompt service throughout
                the region.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">NORTH CAROLINA</h3>
                  <ul className="space-y-2">
                    {["Charlotte", "Raleigh", "Greensboro", "Winston-Salem", "Durham", "Wilmington", "Asheville"].map(
                      (city, index) => (
                        <li key={index} className="flex items-center">
                          <MapPin className="h-5 w-5 text-red-700 mr-2" />
                          <span>{city}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">SOUTH CAROLINA</h3>
                  <ul className="space-y-2">
                    {[
                      "Columbia",
                      "Charleston",
                      "Greenville",
                      "Spartanburg",
                      "Myrtle Beach",
                      "Rock Hill",
                      "Hilton Head",
                    ].map((city, index) => (
                      <li key={index} className="flex items-center">
                        <MapPin className="h-5 w-5 text-red-700 mr-2" />
                        <span>{city}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 text-lg">Not sure if we service your area? Contact us today to find out!</p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image src="/images/service-area-map.jpg" alt="Service Area Map" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">CERTIFICATIONS & MEMBERSHIPS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Patriot Awning is proud to be recognized by these industry organizations and certifications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-center">
              <div className="relative h-24 w-48 mx-auto mb-4">
                <Image
                  src="/images/certification-1.jpg"
                  alt="BBB Accredited Business"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-bold text-blue-900">BBB ACCREDITED BUSINESS</p>
            </div>
            <div className="text-center">
              <div className="relative h-24 w-48 mx-auto mb-4">
                <Image
                  src="/images/certification-2.jpg"
                  alt="Professional Awning Manufacturers Association"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-bold text-blue-900">PAMA MEMBER</p>
            </div>
            <div className="text-center">
              <div className="relative h-24 w-48 mx-auto mb-4">
                <Image
                  src="/images/certification-3.jpg"
                  alt="Industrial Fabrics Association International"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-bold text-blue-900">IFAI MEMBER</p>
            </div>
            <div className="text-center">
              <div className="relative h-24 w-48 mx-auto mb-4">
                <Image
                  src="/images/certification-4.jpg"
                  alt="Sunbrella Fabric Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-bold text-blue-900">SUNBRELLA PARTNER</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">READY TO WORK WITH US?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today to discuss your project and experience the Patriot Awning difference.
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
