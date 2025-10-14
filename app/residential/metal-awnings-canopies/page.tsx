import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, ArrowRight, Home } from "lucide-react"

export default function ResidentialMetalAwningsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg"
            alt="Residential Metal Awnings Hero"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 to-transparent z-0"></div>
        <div className="container relative z-10 mx-auto px-4 text-brand-neutral">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-brand-accent px-4 py-1 rounded-full mb-6">
              <Home className="h-4 w-4 mr-2" />
              <span className="text-sm font-bold uppercase tracking-wider">Residential Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              RESIDENTIAL METAL AWNINGS & CANOPIES
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Enhance your home's curb appeal and protect your entry ways with custom aluminum awnings and canopies.
              Durable, low-maintenance, American-made.
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

      {/* Product Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg"
                  alt="Residential Metal Awning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-brand-accent text-brand-neutral px-4 py-1 mb-4">
                <span className="font-bold uppercase tracking-wider">Premium Quality</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-brand-primary">ALUMINUM DOOR & WINDOW CANOPIES</h2>
              <div className="h-1 w-24 bg-brand-accent mb-6"></div>
              <p className="text-foreground mb-8 text-lg">
                Our residential metal awnings provide lasting protection for your doors, windows, and entryways. Custom
                fabricated from premium aluminum with durable powder coat finishes in dozens of colors.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Custom sizes to fit any opening",
                  "Dozens of powder coat color options",
                  "Lifetime structural warranty",
                  "Low maintenance aluminum construction",
                  "Proudly made in America",
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
                EXPLORE OPTIONS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Portfolio */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">RESIDENTIAL PROJECT PORTFOLIO</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              See how our metal awnings enhance homes across the Carolinas with style and protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "FRONT DOOR CANOPY",
                location: "Charlotte, NC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg",
                category: "Entrance",
              },
              {
                title: "WINDOW AWNINGS",
                location: "Raleigh, NC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_a59a080a8a3c4f2e85c891a3bfe9eda0~mv2.jpg-R3P4mdGqO5R0yZUIADWc9ZJuqno5Yl.jpeg",
                category: "Windows",
              },
              {
                title: "BACK DOOR COVER",
                location: "Columbia, SC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg",
                category: "Entrance",
              },
              {
                title: "PATIO DOOR CANOPY",
                location: "Charleston, SC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg",
                category: "Patio",
              },
              {
                title: "SIDE ENTRANCE",
                location: "Greenville, SC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg",
                category: "Entrance",
              },
              {
                title: "FULL HOME PACKAGE",
                location: "Asheville, NC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_a59a080a8a3c4f2e85c891a3bfe9eda0~mv2.jpg-R3P4mdGqO5R0yZUIADWc9ZJuqno5Yl.jpeg",
                category: "Complete Home",
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

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">WHY CHOOSE METAL AWNINGS</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              Metal awnings offer superior durability and low maintenance compared to fabric alternatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "LIFETIME DURABILITY",
                description:
                  "Aluminum construction won't rot, rust, or deteriorate. Backed by our lifetime structural warranty.",
                icon: <Shield className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "LOW MAINTENANCE",
                description:
                  "Powder coated finish resists fading and requires only occasional cleaning with soap and water.",
                icon: <Shield className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "CURB APPEAL",
                description:
                  "Enhance your home's architectural style with custom colors and designs that complement your exterior.",
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
          <h2 className="text-4xl font-bold mb-6">READY TO ENHANCE YOUR HOME?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation on custom residential metal awnings for your home.
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
