import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, ArrowRight, Home, Zap, Star } from "lucide-react"

export default function ResidentialRetractableAwningsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg"
            alt="Retractable Awnings Hero"
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
              RESIDENTIAL RETRACTABLE AWNINGS
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Premium motorized and manual retractable awnings for decks, patios, and outdoor living spaces. Shade when
              you want it, sunshine when you don't.
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

      {/* Featured Product - 1776 Model */}
      <section className="py-20 bg-background">
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
                <div className="absolute top-0 right-0 bg-brand-accent text-brand-neutral px-6 py-3">
                  <span className="font-bold text-xl">BEST SELLER</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-brand-accent text-brand-neutral px-4 py-1 mb-4">
                <span className="font-bold uppercase tracking-wider">Flagship Model</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-brand-primary">THE 1776 MODEL</h2>
              <div className="h-1 w-24 bg-brand-accent mb-6"></div>
              <p className="text-foreground mb-8 text-lg">
                Our premium motorized retractable awning combines American craftsmanship with cutting-edge technology.
                One-touch operation, weather sensors, and industry-leading warranty. Built to last decades.
              </p>
              <div className="flex mb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-foreground font-medium">5.0 (128 customer reviews)</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Premium Somfy® motorized operation",
                  "Sunbrella® fabric with 10-year warranty",
                  "Wind and sun sensors included",
                  "Smart home integration ready",
                  "Industry-leading 10-year warranty",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-brand-primary flex items-center justify-center mr-4">
                      <Check className="h-4 w-4 text-brand-neutral" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="bg-brand-primary hover:bg-brand-primary/90 text-brand-neutral text-lg px-8 py-6 rounded-none"
              >
                <Link href="/1776-model">EXPLORE THE 1776 MODEL</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Models */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">RETRACTABLE AWNING MODELS</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              Choose from motorized or manual operation in sizes from 10 to 40 feet wide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "THE 1776 MODEL",
                description: "Premium motorized with Somfy® motor, weather sensors, and smart home integration.",
                features: ["Motorized operation", "Weather sensors", "10-year warranty"],
                price: "From $4,995",
                badge: "Best Seller",
              },
              {
                title: "THE LIBERTY MODEL",
                description: "Quality motorized or manual operation at an affordable price point.",
                features: ["Motorized or manual", "5-year warranty", "Great value"],
                price: "From $2,995",
              },
              {
                title: "THE FREEDOM MODEL",
                description: "Entry-level manual operation perfect for smaller spaces and budgets.",
                features: ["Manual crank", "3-year warranty", "Budget friendly"],
                price: "From $1,795",
              },
            ].map((model, index) => (
              <Card key={index} className="p-8 border-none shadow-xl">
                {model.badge && (
                  <div className="bg-brand-accent text-brand-neutral px-4 py-1 text-sm font-bold uppercase tracking-wider text-center mb-4">
                    {model.badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-brand-primary text-center">{model.title}</h3>
                <p className="text-card-foreground mb-6 text-center">{model.description}</p>
                <ul className="space-y-2 mb-6">
                  {model.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-accent mr-2" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-center text-2xl font-bold text-brand-primary mb-6">{model.price}</p>
                <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-brand-neutral rounded-none">
                  LEARN MORE
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Motorized vs Manual */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">MOTORIZED VS MANUAL</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              Understanding the differences between motorized and manual retractable awnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-brand-accent shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-10 w-10 text-brand-accent" />
                <h3 className="text-3xl font-bold text-brand-primary">MOTORIZED AWNINGS</h3>
              </div>
              <p className="text-card-foreground mb-6 text-lg">
                Push-button convenience with advanced features for the ultimate in outdoor comfort and control.
              </p>
              <div className="mb-6">
                <p className="font-bold text-brand-primary mb-3">Advantages:</p>
                <ul className="space-y-2">
                  {[
                    "One-touch operation with remote control",
                    "Optional wind and sun sensors",
                    "Smart home integration available",
                    "Perfect for large awnings",
                    "No physical effort required",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-accent mr-2" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-card-foreground mb-4">
                <span className="font-bold">Best for:</span> Large awnings, frequent use, convenience seekers
              </p>
            </Card>

            <Card className="p-8 border-2 border-brand-primary shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-10 w-10 text-brand-primary" />
                <h3 className="text-3xl font-bold text-brand-primary">MANUAL AWNINGS</h3>
              </div>
              <p className="text-card-foreground mb-6 text-lg">
                Simple, reliable operation with no electrical components. Budget-friendly option that works great for
                smaller spaces.
              </p>
              <div className="mb-6">
                <p className="font-bold text-brand-primary mb-3">Advantages:</p>
                <ul className="space-y-2">
                  {[
                    "Lower initial investment",
                    "No electrical work required",
                    "Simple, reliable operation",
                    "Lower maintenance costs",
                    "No power consumption",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-primary mr-2" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-card-foreground mb-4">
                <span className="font-bold">Best for:</span> Smaller awnings, occasional use, budget-conscious buyers
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Residential Portfolio */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">RETRACTABLE AWNING PORTFOLIO</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              See how retractable awnings enhance outdoor living spaces across the Carolinas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "DECK AWNING",
                location: "Charlotte, NC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg",
                category: "1776 Model",
              },
              {
                title: "PATIO COVER",
                location: "Raleigh, NC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg",
                category: "Liberty Model",
              },
              {
                title: "POOLSIDE AWNING",
                location: "Charleston, SC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg",
                category: "1776 Model",
              },
              {
                title: "BALCONY AWNING",
                location: "Greenville, SC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg",
                category: "Freedom Model",
              },
              {
                title: "TERRACE COVER",
                location: "Columbia, SC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg",
                category: "1776 Model",
              },
              {
                title: "OUTDOOR KITCHEN",
                location: "Asheville, NC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg",
                category: "Liberty Model",
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
            <h2 className="text-4xl font-bold text-brand-primary mb-4">WHY CHOOSE RETRACTABLE AWNINGS</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              Retractable awnings offer flexibility and benefits that fixed awnings cannot match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "FLEXIBLE SHADE",
                description:
                  "Extend for shade when you need it, retract for sunshine when you want it. Perfect balance of comfort and versatility.",
                icon: <Shield className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "ENERGY SAVINGS",
                description:
                  "Block solar heat before it enters your home, reducing cooling costs by up to 25% in summer months.",
                icon: <Shield className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "WEATHER PROTECTION",
                description:
                  "Retract during storms and high winds to prevent damage. Extend during light rain for covered outdoor enjoyment.",
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
          <h2 className="text-4xl font-bold mb-6">READY FOR YOUR RETRACTABLE AWNING?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation on custom retractable awnings for your home.
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
