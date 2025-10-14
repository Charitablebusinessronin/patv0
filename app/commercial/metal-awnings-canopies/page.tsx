import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, ArrowRight } from "lucide-react"

export default function CommercialMetalAwningsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_bcf66d01dd444345b617d0cf7475653f~mv2.jpg-ToSVxjowccRdsllVurZgEGffb0ZdDE.jpeg"
            alt="Commercial Metal Awnings Hero"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 to-transparent z-0"></div>
        <div className="container relative z-10 mx-auto px-4 text-brand-neutral">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-brand-accent px-4 py-1 rounded-full mb-6">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-bold uppercase tracking-wider">Commercial Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              COMMERCIAL METAL AWNINGS & CANOPIES
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Premium aluminum awnings and canopies designed for businesses. Engineered for durability, custom
              fabricated in-house, proudly made in the USA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent/90 text-brand-neutral text-lg px-8 py-6 rounded-none"
              >
                GET A FREE QUOTE
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-brand-neutral border-brand-neutral hover:bg-brand-neutral/10 text-lg px-8 py-6 rounded-none"
              >
                VIEW GALLERY
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product - AmeriDeck System */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_bcf66d01dd444345b617d0cf7475653f~mv2.jpg-ToSVxjowccRdsllVurZgEGffb0ZdDE.jpeg"
                  alt="AmeriDeck System"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-brand-accent text-brand-neutral px-6 py-3">
                  <span className="font-bold text-xl">AMERIDECK SYSTEM</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-brand-accent text-brand-neutral px-4 py-1 mb-4">
                <span className="font-bold uppercase tracking-wider">American Made Excellence</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-brand-primary">THE AMERIDECK ALUMINUM SYSTEM</h2>
              <div className="h-1 w-24 bg-brand-accent mb-6"></div>
              <p className="text-foreground mb-8 text-lg">
                Our signature AmeriDeck system represents the pinnacle of American metal awning engineering. Custom
                fabricated in our Charlotte facility, each system is built to exacting standards with integrated
                gutters, scuppers, and downspouts.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Custom powder coated finish options",
                  "Integrated gutter system with scuppers and downspouts",
                  "Engineered for local wind and snow loads",
                  "In-house fabrication for quality control",
                  "Made in USA with American aluminum",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-brand-primary flex items-center justify-center mr-4">
                      <Check className="h-4 w-4 text-brand-neutral" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-brand-neutral text-lg px-8 py-6 rounded-none">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Portfolio */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">COMMERCIAL PROJECT PORTFOLIO</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              Explore our completed commercial metal awning and canopy installations across the Carolinas. Creating
              local landmarks, one project at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "DRIVE-THROUGH CANOPY",
                location: "Raleigh, NC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_bcf66d01dd444345b617d0cf7475653f~mv2.jpg-ToSVxjowccRdsllVurZgEGffb0ZdDE.jpeg",
                category: "Banking",
              },
              {
                title: "RETAIL ENTRANCE CANOPY",
                location: "Charlotte, NC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_8d92dd9e29ea4172b8569f9730700e1e~mv2-ILJozE4M7yr7zvBGQ39GJDbFgP98iw.webp",
                category: "Retail",
              },
              {
                title: "HOSPITAL DROP-OFF CANOPY",
                location: "Columbia, SC",
                image: "/images/metal-canopy.png",
                category: "Healthcare",
              },
              {
                title: "SCHOOL ENTRANCE CANOPY",
                location: "Greenville, SC",
                image: "/images/metal-canopy.png",
                category: "Education",
              },
              {
                title: "RESTAURANT PATIO COVER",
                location: "Charleston, SC",
                image: "/images/metal-canopy.png",
                category: "Restaurant",
              },
              {
                title: "OFFICE BUILDING CANOPY",
                location: "Winston-Salem, NC",
                image: "/images/metal-canopy.png",
                category: "Office",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
                <div className="h-80 relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 bg-brand-accent text-brand-neutral px-4 py-2 font-bold">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-8 bg-background">
                  <h3 className="text-xl font-bold mb-2 text-brand-primary">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.location}</p>
                  <Button
                    variant="ghost"
                    className="text-brand-accent font-bold flex items-center hover:text-brand-accent/80 p-0"
                  >
                    VIEW PROJECT <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">WHY CHOOSE OUR METAL AWNINGS</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              When you choose Patriot Awning, you're choosing a partner committed to quality, craftsmanship, and
              American manufacturing excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "IN-HOUSE FABRICATION",
                description:
                  "We fabricate our own frames in our Charlotte facility, ensuring quality control and custom sizing for every project.",
                icon: <Shield className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "CUSTOM POWDER COATING",
                description:
                  "Choose from hundreds of color options with durable powder coat finishes that resist fading and weathering.",
                icon: <Shield className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "ENGINEERED SOLUTIONS",
                description:
                  "Every system is engineered to meet local building codes and withstand Carolina weather conditions.",
                icon: <Shield className="h-12 w-12 text-brand-accent" />,
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 shadow-lg">
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-brand-primary text-center">{feature.title}</h3>
                <p className="text-card-foreground text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-accent text-brand-neutral">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">READY TO CREATE A LOCAL LANDMARK?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation and estimate on premium American-made commercial metal awnings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              size="lg"
              className="bg-brand-neutral text-brand-accent hover:bg-brand-neutral/90 text-lg px-8 py-6 rounded-none"
            >
              GET A FREE QUOTE
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-neutral text-brand-neutral hover:bg-brand-neutral/10 text-lg px-8 py-6 rounded-none bg-transparent"
            >
              CALL US: (800) 555-AWNING
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
