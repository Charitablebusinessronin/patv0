import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_8d92dd9e29ea4172b8569f9730700e1e~mv2-ILJozE4M7yr7zvBGQ39GJDbFgP98iw.webp"
            alt="FAQ Hero"
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
              <span className="text-sm font-bold uppercase tracking-wider">Help Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Find answers to common questions about our products, services, and the awning installation process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-none">ALL QUESTIONS</Button>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 border border-blue-900 px-6 py-3 rounded-none">
              PRODUCTS
            </Button>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 border border-blue-900 px-6 py-3 rounded-none">
              INSTALLATION
            </Button>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 border border-blue-900 px-6 py-3 rounded-none">
              MAINTENANCE
            </Button>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 border border-blue-900 px-6 py-3 rounded-none">
              WARRANTY
            </Button>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 border border-blue-900 px-6 py-3 rounded-none">
              PRICING
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">GENERAL QUESTIONS</h2>

            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-blue-900">
                  What types of awnings do you offer?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <p>Patriot Awning offers a comprehensive range of awning solutions, including:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Retractable awnings (motorized and manual)</li>
                    <li>Fixed fabric awnings</li>
                    <li>Commercial awnings</li>
                    <li>Metal canopies</li>
                    <li>Porch enclosures</li>
                    <li>Custom shade solutions</li>
                  </ul>
                  <p className="mt-2">
                    All of our products are American-made with premium materials and craftsmanship.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-blue-900">
                  What areas do you service?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <p>
                    Patriot Awning proudly serves both residential and commercial clients throughout North and South
                    Carolina. Our primary service areas include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      <strong>North Carolina:</strong> Charlotte, Raleigh, Greensboro, Winston-Salem, Durham,
                      Wilmington, Asheville, and surrounding areas
                    </li>
                    <li>
                      <strong>South Carolina:</strong> Columbia, Charleston, Greenville, Spartanburg, Myrtle Beach, Rock
                      Hill, and surrounding areas
                    </li>
                  </ul>
                  <p className="mt-2">
                    If you're unsure if we service your area, please{" "}
                    <Link href="/contact" className="text-red-700 hover:text-red-800 font-medium">
                      contact us
                    </Link>{" "}
                    to find out.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-blue-900">
                  How long does the installation process take?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <p>The installation timeline varies depending on the type and size of your awning project:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      <strong>Retractable Awnings:</strong> Typically 1 day for residential installations
                    </li>
                    <li>
                      <strong>Fixed Awnings:</strong> 1-2 days depending on size and complexity
                    </li>
                    <li>
                      <strong>Commercial Projects:</strong> 2-5 days depending on scope
                    </li>
                    <li>
                      <strong>Porch Enclosures:</strong> 2-3 days for standard installations
                    </li>
                    <li>
                      <strong>Metal Canopies:</strong> 3-7 days depending on size and complexity
                    </li>
                  </ul>
                  <p className="mt-2">
                    After your initial consultation, we'll provide you with a more specific timeline based on your
                    project requirements and our current schedule.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-blue-900">
                  Do you offer warranties on your products?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <p>Yes, all Patriot Awning products come with comprehensive warranty coverage:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      <strong>1776 Model Retractable Awnings:</strong> 10-year warranty on frame, 10-year warranty on
                      fabric, 5-year warranty on motor
                    </li>
                    <li>
                      <strong>Other Retractable Awnings:</strong> 5-year warranty on frame, 10-year warranty on fabric,
                      5-year warranty on motor (if applicable)
                    </li>
                    <li>
                      <strong>Fixed Awnings:</strong> 5-year warranty on frame, 10-year warranty on fabric
                    </li>
                    <li>
                      <strong>Metal Canopies:</strong> 10-year warranty on structure, 10-year warranty on finish
                    </li>
                    <li>
                      <strong>Porch Enclosures:</strong> 5-year warranty on materials and installation
                    </li>
                  </ul>
                  <p className="mt-2">
                    All warranties cover manufacturing defects and normal wear and tear. Damage caused by extreme
                    weather events, accidents, or improper use may not be covered. Please ask your sales representative
                    for complete warranty details.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-blue-900">
                  How do I get a quote for my project?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <p>Getting a quote from Patriot Awning is easy:</p>
                  <ol className="list-decimal pl-6 mt-2 space-y-1">
                    <li>
                      <Link href="/quote" className="text-red-700 hover:text-red-800 font-medium">
                        Fill out our online quote request form
                      </Link>
                    </li>
                    <li>Call us directly at (800) 555-AWNING</li>
                    <li>Visit our showroom at 1776 Freedom Drive, Charlotte, NC</li>
                  </ol>
                  <p className="mt-2">
                    After receiving your request, one of our awning specialists will contact you to schedule a free
                    on-site consultation. During this visit, we'll assess your needs, take measurements, discuss
                    options, and provide you with a detailed quote.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="text-3xl font-bold text-blue-900 mb-12 mt-20 text-center">PRODUCT QUESTIONS</h2>

            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="product-1" className="border border-gray-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-blue-900">
                  What is the difference between motorized and manual retractable awnings?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <p>The main differences between motorized and manual retractable awnings are:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      <strong>Operation:</strong> Motorized awnings extend and retract with the push of a button, while
                      manual awnings require a hand crank.
                    </li>
                    <li>
                      <strong>Convenience:</strong> Motorized awnings offer greater convenience, especially for larger
                      awnings or those installed in hard-to-reach locations.
                    </li>
                    <li>
                      <strong>Smart Features:</strong> Motorized awnings can be equipped with wind and sun sensors for
                      automatic operation, and can be integrated with smart home systems.
                    </li>
                    <li>
                      <strong>Power Requirements:</strong> Motorized awnings require access to electrical power, while
                      manual awnings do not.
                    </li>
                    <li>
                      <strong>Cost:</strong> Manual awnings are typically less expensive than motorized options.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Both options provide excellent shade and protection, and the choice often comes down to personal
                    preference, budget, and specific installation requirements.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="product-2" className="border border-gray-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-blue-900">
                  What fabric options are available for awnings?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <p>We offer a wide range of premium fabric options for our awnings:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      <strong>Sunbrella®:</strong> Our primary fabric offering, known for exceptional durability, color
                      retention, and weather resistance. Available in hundreds of colors and patterns.
                    </li>
                    <li>
                      <strong>Recasens:</strong> High-quality European fabrics with excellent UV protection and
                      longevity.
                    </li>
                    <li>
                      <strong>Ferrari Precontraint®:</strong> Premium vinyl fabrics ideal for commercial applications
                      requiring maximum durability.
                    </li>
                  </ul>
                  <p className="mt-2">All our fabrics are:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>100% solution-dyed acrylic or polyester for superior color retention</li>
                    <li>Water-resistant and quick-drying</li>
                    <li>Mold and mildew resistant</li>
                    <li>UV resistant to prevent fading</li>
                    <li>Available in solid colors, stripes, and patterns</li>
                  </ul>
                  <p className="mt-2">
                    During your consultation, we'll show you fabric samples to help you choose the perfect option for
                    your project.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="product-3" className="border border-gray-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-blue-900">
                  Can awnings withstand strong winds and heavy rain?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <p>
                    Our awnings are designed to withstand normal weather conditions, but there are some important
                    considerations:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      <strong>Fixed Awnings:</strong> Engineered to withstand wind loads of up to 75 mph when properly
                      installed, and can handle moderate to heavy rainfall.
                    </li>
                    <li>
                      <strong>Retractable Awnings:</strong> Can withstand winds up to 20-25 mph when extended. For
                      stronger winds, they should be retracted for protection.
                    </li>
                    <li>
                      <strong>Metal Canopies:</strong> Our most durable option, designed to withstand high winds and
                      heavy snow loads based on local building codes.
                    </li>
                  </ul>
                  <p className="mt-2">For retractable awnings, we recommend:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Adding wind sensors that automatically retract the awning in high winds</li>
                    <li>Manually retracting the awning during severe weather events</li>
                    <li>Retracting the awning when not in use for extended periods</li>
                  </ul>
                  <p className="mt-2">
                    All our products are engineered and installed to meet local building codes and wind load
                    requirements.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="text-3xl font-bold text-blue-900 mb-12 mt-20 text-center">INSTALLATION QUESTIONS</h2>

            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="install-1" className="border border-gray-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-blue-900">
                  Do I need a permit to install an awning?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <p>Permit requirements vary by location and project type:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      <strong>Residential Retractable Awnings:</strong> Generally do not require permits in most
                      jurisdictions, but there may be exceptions.
                    </li>
                    <li>
                      <strong>Fixed Awnings:</strong> Often require permits, especially for larger installations.
                    </li>
                    <li>
                      <strong>Commercial Awnings:</strong> Almost always require permits and may need to comply with
                      local signage ordinances if they include business branding.
                    </li>
                    <li>
                      <strong>HOA Approval:</strong> If your property is part of a Homeowners Association, you may need
                      HOA approval regardless of local permit requirements.
                    </li>
                  </ul>
                  <p className="mt-2">As part of our service, Patriot Awning will:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Determine if permits are required for your specific project</li>
                    <li>Handle the permit application process on your behalf</li>
                    <li>Ensure all installations meet or exceed local building codes</li>
                    <li>Provide guidance for HOA approval if needed</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="install-2" className="border border-gray-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-blue-900">
                  What is the installation process like?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <p>Our professional installation process follows these steps:</p>
                  <ol className="list-decimal pl-6 mt-2 space-y-1">
                    <li>
                      <strong>Pre-Installation Inspection:</strong> Our team will visit your property to verify
                      measurements and assess the installation area.
                    </li>
                    <li>
                      <strong>Preparation:</strong> We'll ensure the mounting surface is suitable and make any necessary
                      preparations.
                    </li>
                    <li>
                      <strong>Installation:</strong> Our certified technicians will install your awning with precision
                      and care, ensuring it's properly secured and aligned.
                    </li>
                    <li>
                      <strong>Testing:</strong> For retractable awnings, we'll test the operation multiple times to
                      ensure smooth functionality.
                    </li>
                    <li>
                      <strong>Clean-up:</strong> We'll clean the installation area and remove all packaging materials.
                    </li>
                    <li>
                      <strong>Final Inspection:</strong> We'll conduct a final inspection and walk you through the
                      operation and maintenance of your new awning.
                    </li>
                  </ol>
                  <p className="mt-2">
                    Our installation teams are factory-trained, fully insured, and committed to providing a professional
                    experience from start to finish.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="text-3xl font-bold text-blue-900 mb-12 mt-20 text-center">MAINTENANCE QUESTIONS</h2>

            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="maint-1" className="border border-gray-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-blue-900">
                  How do I clean and maintain my awning?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <p>Proper maintenance will extend the life of your awning:</p>
                  <p className="font-bold mt-2">Fabric Cleaning:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Brush off loose dirt and debris regularly</li>
                    <li>Clean with mild soap (like Woolite) and lukewarm water using a soft brush or sponge</li>
                    <li>Rinse thoroughly and allow to air dry completely before retracting</li>
                    <li>Never use harsh chemicals, bleach, or high-pressure washing</li>
                  </ul>
                  <p className="font-bold mt-2">Frame Maintenance:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Inspect for loose bolts or connections annually</li>
                    <li>Clean with mild soap and water</li>
                    <li>Lubricate moving parts annually with silicone spray (not WD-40)</li>
                  </ul>
                  <p className="font-bold mt-2">Motorized Components:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Motors are sealed and require no maintenance</li>
                    <li>Check and replace remote batteries as needed</li>
                    <li>Test wind sensors annually to ensure proper operation</li>
                  </ul>
                  <p className="mt-2">
                    We recommend a professional inspection every 2-3 years to ensure all components are functioning
                    properly. Our maintenance service plans are available for ongoing care of your investment.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="maint-2" className="border border-gray-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-left font-bold text-blue-900">
                  Do you offer repair services for awnings?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  <p>Yes, Patriot Awning offers comprehensive repair services for all types of awnings, including:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Fabric replacement</li>
                    <li>Motor repair or replacement</li>
                    <li>Frame repair</li>
                    <li>Remote control and sensor troubleshooting</li>
                    <li>Weather damage repairs</li>
                    <li>Rewinding mechanisms for manual awnings</li>
                  </ul>
                  <p className="mt-2">
                    We service all brands of awnings, not just those we've installed. If you're experiencing issues with
                    your awning, contact our service department at (704) 555-5678 to schedule a service call.
                  </p>
                  <p className="mt-2">
                    For emergency service (such as storm damage), please call our emergency line at (704) 555-9111.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">STILL HAVE QUESTIONS?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            If you couldn't find the answer you were looking for, our team is here to help. Contact us today and we'll
            be happy to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white text-lg px-8 py-6 rounded-none">
              CONTACT US
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-red-700 text-red-700 hover:bg-red-50 text-lg px-8 py-6 rounded-none"
            >
              CALL: (800) 555-AWNING
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
