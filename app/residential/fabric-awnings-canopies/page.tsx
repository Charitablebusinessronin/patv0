import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, Home } from "lucide-react"

export default function ResidentialFabricAwningsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg"
            alt="Residential Fabric Awnings Hero"
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
              RESIDENTIAL FABRIC AWNINGS & CANOPIES
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Transform your outdoor living spaces with premium Sunbrella® fabric awnings. Beautiful, durable, and
              designed to enhance your home's style.
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg"
                  alt="Sunbrella Fabric Awning"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-brand-accent text-brand-neutral px-6 py-3">
                  <span className="font-bold text-xl">SUNBRELLA® FABRICS</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-brand-accent text-brand-neutral px-4 py-1 mb-4">
                <span className="font-bold uppercase tracking-wider">Premium Quality</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-brand-primary">SUNBRELLA® RESIDENTIAL AWNINGS</h2>
              <div className="h-1 w-24 bg-brand-accent mb-6"></div>
              <p className="text-foreground mb-8 text-lg">
                Our residential fabric awnings feature premium Sunbrella® fabrics in hundreds of colors, patterns, and
                styles. Perfect for windows, doors, decks, and patios. Each awning is custom crafted to your exact
                specifications.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Hundreds of Sunbrella® colors and patterns",
                  "Custom sizes for perfect fit",
                  "10-year fabric warranty",
                  "UV protection reduces cooling costs",
                  "Made in USA with American craftsmanship",
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
                VIEW FABRIC OPTIONS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Awning Styles */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">FABRIC AWNING STYLES</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              Choose from traditional, contemporary, and custom fabric awning styles to complement your home's
              architecture.
            </p>
          </div>

          <div className="space-y-16">
            {/* Traditional Slope */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-background p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg"
                    alt="Traditional Slope Awning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-brand-primary">TRADITIONAL SLOPE AWNINGS</h3>
                <div className="h-1 w-16 bg-brand-accent mb-6"></div>
                <p className="text-foreground mb-6">
                  Classic sloped design perfect for windows and doors. Available with decorative valances in hundreds of
                  Sunbrella® fabric options. Timeless style that complements any home architecture.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Perfect for windows and doors",
                    "Optional decorative valance",
                    "Custom projection depths",
                    "Powder coated aluminum frame",
                    "10-year fabric warranty",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-accent mr-2" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dome Style */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-background p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_a59a080a8a3c4f2e85c891a3bfe9eda0~mv2.jpg-R3P4mdGqO5R0yZUIADWc9ZJuqno5Yl.jpeg"
                    alt="Dome Awning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-brand-primary">DOME AWNINGS</h3>
                <div className="h-1 w-16 bg-brand-accent mb-6"></div>
                <p className="text-foreground mb-6">
                  Elegant curved design adds sophisticated charm to any entrance or window. Quarter-round and half-round
                  styles available. Excellent water runoff and wind resistance.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Elegant curved design",
                    "Quarter or half-round styles",
                    "Superior water runoff",
                    "Custom sizes available",
                    "Striped or solid fabrics",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-accent mr-2" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Waterfall */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-background p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg"
                    alt="Waterfall Awning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-brand-primary">WATERFALL AWNINGS</h3>
                <div className="h-1 w-16 bg-brand-accent mb-6"></div>
                <p className="text-foreground mb-6">
                  Contemporary flat-front design creates clean, modern lines. Perfect for contemporary and modern home
                  styles. Ideal for storefronts, large windows, and commercial applications.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Modern flat-front design",
                    "Clean contemporary lines",
                    "Perfect for large openings",
                    "Heavy-duty construction",
                    "Commercial grade quality",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-accent mr-2" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Portfolio */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">RESIDENTIAL FABRIC AWNING PORTFOLIO</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              See how fabric awnings enhance homes across the Carolinas with style, color, and protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "COLONIAL HOME WINDOWS",
                location: "Charlotte, NC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_a59a080a8a3c4f2e85c891a3bfe9eda0~mv2.jpg-R3P4mdGqO5R0yZUIADWc9ZJuqno5Yl.jpeg",
                category: "Traditional",
              },
              {
                title: "DECK AWNING",
                location: "Raleigh, NC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg",
                category: "Patio & Deck",
              },
              {
                title: "FRONT ENTRANCE",
                location: "Charleston, SC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg",
                category: "Entrance",
              },
              {
                title: "PATIO DOOR COVER",
                location: "Greenville, SC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg",
                category: "Patio & Deck",
              },
              {
                title: "DOME WINDOW AWNINGS",
                location: "Columbia, SC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_a59a080a8a3c4f2e85c891a3bfe9eda0~mv2.jpg-R3P4mdGqO5R0yZUIADWc9ZJuqno5Yl.jpeg",
                category: "Traditional",
              },
              {
                title: "COMPLETE HOME PACKAGE",
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

      {/* Fabric Options */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">SUNBRELLA® FABRIC OPTIONS</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              Choose from hundreds of premium Sunbrella® fabric patterns and colors to perfectly match your home's
              exterior.
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
              <div key={index} className="p-4 border border-gray-200 flex flex-col items-center bg-background">
                <div className={`w-full h-32 ${fabric.color}`}></div>
                <p className="mt-2 font-medium">{fabric.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-foreground mb-4">
              These are just a few examples. Contact us to see our full fabric sample book with stripes, patterns, and
              hundreds of colors.
            </p>
            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-brand-neutral px-6 py-3 rounded-none">
              REQUEST FABRIC SAMPLES
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-accent text-brand-neutral">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">READY TO ADD COLOR TO YOUR HOME?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation on custom residential fabric awnings for your home.
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
