import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Shield, Star } from "lucide-react"

export default function Model1776Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg"
            alt="1776 Model Hero"
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
              <span className="text-sm font-bold uppercase tracking-wider">Flagship Model</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">THE 1776 MODEL</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Our premium motorized retractable awning, built with American pride and engineered for decades of reliable
              performance.
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
                VIEW SPECIFICATIONS
              </Button>
            </div>
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
                <div className="absolute top-0 right-0 bg-red-700 text-white px-6 py-3">
                  <span className="font-bold text-xl">BEST SELLER</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-blue-900">AMERICAN ENGINEERING AT ITS FINEST</h2>
              <div className="h-1 w-24 bg-red-700 mb-6"></div>
              <p className="text-gray-700 mb-8 text-lg">
                The 1776 Model represents the pinnacle of American awning engineering. Designed and built in the USA,
                this premium motorized retractable awning combines cutting-edge technology with traditional American
                craftsmanship.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                With its robust construction, weather-resistant materials, and advanced motorized operation, the 1776
                Model is designed to provide years of reliable service while enhancing your outdoor living space.
              </p>
              <div className="flex mb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-700 font-medium">5.0 (128 customer reviews)</span>
              </div>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white text-lg px-8 py-6 rounded-none">
                GET A FREE QUOTE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">KEY FEATURES</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              The 1776 Model is packed with premium features designed to provide the ultimate in comfort, convenience,
              and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "PREMIUM MOTORIZED OPERATION",
                description:
                  "Somfy® motor system with wireless remote control for effortless operation at the touch of a button.",
                icon: <Shield className="h-12 w-12 text-red-700" />,
              },
              {
                title: "MILITARY-GRADE MATERIALS",
                description:
                  "Constructed with powder-coated aluminum frames and stainless steel hardware for maximum durability.",
                icon: <Shield className="h-12 w-12 text-red-700" />,
              },
              {
                title: "SUNBRELLA® FABRICS",
                description:
                  "Premium Sunbrella® fabrics provide superior UV protection, fade resistance, and weather durability.",
                icon: <Shield className="h-12 w-12 text-red-700" />,
              },
              {
                title: "WEATHER DETECTION SYSTEM",
                description:
                  "Optional wind and sun sensors automatically adjust your awning based on weather conditions.",
                icon: <Shield className="h-12 w-12 text-red-700" />,
              },
              {
                title: "SMART HOME INTEGRATION",
                description:
                  "Compatible with major smart home systems for seamless integration with your connected home.",
                icon: <Shield className="h-12 w-12 text-red-700" />,
              },
              {
                title: "10-YEAR WARRANTY",
                description:
                  "Industry-leading warranty coverage provides peace of mind and protection for your investment.",
                icon: <Shield className="h-12 w-12 text-red-700" />,
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 shadow-lg">
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-blue-900 text-center">{feature.title}</h3>
                <p className="text-gray-700 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">TECHNICAL SPECIFICATIONS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              The 1776 Model is engineered to exacting standards to ensure optimal performance and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-900">DIMENSIONS & MOUNTING</h3>
              <ul className="space-y-4">
                {[
                  { label: "Width Range", value: "10' to 40' (custom sizes available)" },
                  { label: "Projection Range", value: "8' to 14' (custom sizes available)" },
                  { label: "Mounting Options", value: "Wall, Roof, or Soffit mounting" },
                  { label: "Minimum Mounting Height", value: "8' recommended" },
                  { label: "Frame Material", value: "Powder-coated extruded aluminum" },
                  { label: "Hardware", value: "Marine-grade stainless steel" },
                ].map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-900 flex items-center justify-center mr-4 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-800 font-bold">{spec.label}:</span>{" "}
                      <span className="text-gray-700">{spec.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-900">OPERATION & FEATURES</h3>
              <ul className="space-y-4">
                {[
                  { label: "Operation Type", value: "Motorized with wireless remote control" },
                  { label: "Motor", value: "Somfy® tubular motor with 5-year warranty" },
                  { label: "Power Requirements", value: "Standard 110V outlet" },
                  { label: "Fabric", value: "Sunbrella® with 10-year warranty" },
                  { label: "Wind Resistance", value: "Up to 35 mph (with proper installation)" },
                  { label: "Optional Features", value: "Wind/sun sensors, smart home integration" },
                ].map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-900 flex items-center justify-center mr-4 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-800 font-bold">{spec.label}:</span>{" "}
                      <span className="text-gray-700">{spec.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">CUSTOMER TESTIMONIALS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Hear what our satisfied customers have to say about their 1776 Model awnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Johnson",
                title: "Homeowner",
                location: "Charlotte, NC",
                quote:
                  "The 1776 Model has transformed our backyard. The quality is outstanding and the installation team was professional and efficient. We use our patio so much more now!",
                rating: 5,
              },
              {
                name: "Sarah Williams",
                title: "Homeowner",
                location: "Raleigh, NC",
                quote:
                  "We've had our 1776 Model for three years now and it still looks and functions like new. The motorized operation is so convenient, and the fabric hasn't faded at all.",
                rating: 5,
              },
              {
                name: "David Thompson",
                title: "Restaurant Owner",
                location: "Columbia, SC",
                quote:
                  "We installed multiple 1776 Models for our restaurant patio. Our customers love the shade, and the weather sensors give us peace of mind. Best investment we've made!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-8 bg-gray-50 border-t-4 border-red-700 shadow-lg">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">INSTALLATION PROCESS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Our professional installation process ensures your 1776 Model awning is properly installed for optimal
              performance and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "CONSULTATION",
                description:
                  "Our experts will visit your property to assess your needs, take measurements, and discuss options.",
                step: "1",
              },
              {
                title: "DESIGN & SELECTION",
                description: "Choose your fabric, features, and options with guidance from our design consultants.",
                step: "2",
              },
              {
                title: "PROFESSIONAL INSTALLATION",
                description:
                  "Our certified technicians will install your awning with precision and care, ensuring proper operation.",
                step: "3",
              },
              {
                title: "FINAL INSPECTION",
                description:
                  "We'll demonstrate operation, provide maintenance tips, and ensure your complete satisfaction.",
                step: "4",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 shadow-lg relative">
                <div className="absolute top-0 right-0 bg-red-700 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-900">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">READY FOR YOUR 1776 MODEL AWNING?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation and estimate on the premium 1776 Model retractable awning.
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
