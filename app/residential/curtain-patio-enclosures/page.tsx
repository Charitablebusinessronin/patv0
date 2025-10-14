import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, ArrowRight, Home, Sun, Cloud, Wind } from "lucide-react"

export default function ResidentialCurtainPatioEnclosuresPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp"
            alt="Curtain Patio Enclosures Hero"
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
              RESIDENTIAL CURTAIN PATIO ENCLOSURES
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Extend your outdoor living season with clear vinyl or screen curtain enclosures. Enjoy your porch or patio
              year-round in comfort.
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp"
                  alt="Clear Vinyl Curtain Enclosure"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-brand-accent text-brand-neutral px-6 py-3">
                  <span className="font-bold text-xl">YEAR-ROUND USE</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-brand-accent text-brand-neutral px-4 py-1 mb-4">
                <span className="font-bold uppercase tracking-wider">All-Weather Protection</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-brand-primary">CLEAR VINYL CURTAIN SYSTEMS</h2>
              <div className="h-1 w-24 bg-brand-accent mb-6"></div>
              <p className="text-foreground mb-8 text-lg">
                Our premium clear vinyl curtain enclosures provide superior weather protection while maintaining your
                view. Roll-up design allows for seasonal flexibility. Perfect for porches, patios, decks, and gazebos.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Crystal clear marine-grade vinyl",
                  "Roll-up design for easy operation",
                  "Custom fitted to your space",
                  "Weather and UV resistant",
                  "Easy to clean and maintain",
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

      {/* Enclosure Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">ENCLOSURE OPTIONS</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              Choose the right enclosure system for your needs and climate preferences.
            </p>
          </div>

          <div className="space-y-16">
            {/* Clear Vinyl */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-background p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp"
                    alt="Clear Vinyl Enclosure"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Cloud className="h-8 w-8 text-brand-accent" />
                  <h3 className="text-3xl font-bold text-brand-primary">CLEAR VINYL CURTAINS</h3>
                </div>
                <div className="h-1 w-16 bg-brand-accent mb-6"></div>
                <p className="text-foreground mb-6">
                  Maximum weather protection with unobstructed views. Perfect for cold weather use, rain protection, and
                  wind blocking. Creates a comfortable enclosed space while maintaining outdoor ambiance.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Crystal clear marine-grade vinyl",
                    "Blocks wind, rain, and cold",
                    "Maintains outdoor views",
                    "Roll-up for warm weather",
                    "Perfect for winter use",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-accent mr-2" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Screen Curtains */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-background p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image src="/images/screen-enclosure.jpg" alt="Screen Curtains" fill className="object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Wind className="h-8 w-8 text-brand-accent" />
                  <h3 className="text-3xl font-bold text-brand-primary">SCREEN CURTAINS</h3>
                </div>
                <div className="h-1 w-16 bg-brand-accent mb-6"></div>
                <p className="text-foreground mb-6">
                  Insect and pest protection with maximum airflow. Ideal for spring and summer use. Blocks bugs while
                  allowing natural ventilation. Available in various mesh sizes.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "High-quality fiberglass screening",
                    "Blocks insects and pests",
                    "Maximum air circulation",
                    "UV resistant materials",
                    "Perfect for warm weather",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-accent mr-2" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Combination System */}
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-background p-8 shadow-xl">
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image src="/images/combination-system.jpg" alt="Combination System" fill className="object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="h-8 w-8 text-brand-accent" />
                  <h3 className="text-3xl font-bold text-brand-primary">COMBINATION SYSTEM</h3>
                </div>
                <div className="h-1 w-16 bg-brand-accent mb-6"></div>
                <p className="text-foreground mb-6">
                  The best of both worlds with interchangeable vinyl and screen panels. Switch between winter and summer
                  configurations. Maximum versatility for year-round comfort.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Interchangeable panels",
                    "Vinyl for cold weather",
                    "Screens for warm weather",
                    "Easy to swap seasonally",
                    "Year-round versatility",
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
            <h2 className="text-4xl font-bold text-brand-primary mb-4">PATIO ENCLOSURE PORTFOLIO</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              See how curtain enclosures transform outdoor spaces into year-round living areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SCREENED PORCH",
                location: "Charlotte, NC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp",
                category: "Screen Enclosure",
              },
              {
                title: "DECK ENCLOSURE",
                location: "Raleigh, NC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg",
                category: "Clear Vinyl",
              },
              {
                title: "GAZEBO CURTAINS",
                location: "Charleston, SC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp",
                category: "Combination",
              },
              {
                title: "PATIO ENCLOSURE",
                location: "Greenville, SC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp",
                category: "Clear Vinyl",
              },
              {
                title: "PERGOLA ENCLOSURE",
                location: "Columbia, SC",
                image: "/images/commercial-enclosure.jpg",
                category: "Screen Enclosure",
              },
              {
                title: "SUNROOM ADDITION",
                location: "Asheville, NC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp",
                category: "Clear Vinyl",
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">BENEFITS OF PATIO ENCLOSURES</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              Curtain enclosures provide immediate benefits for your outdoor living spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "YEAR-ROUND USE",
                description:
                  "Extend your outdoor season into fall and winter. Use your porch or patio comfortably in any weather.",
                icon: <Shield className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "PEST PROTECTION",
                description:
                  "Keep mosquitoes, flies, and other pests out while enjoying fresh air and outdoor ambiance.",
                icon: <Shield className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "ADDS VALUE",
                description: "Increase your home's living space and value. Potential buyers love usable outdoor areas.",
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
          <h2 className="text-4xl font-bold mb-6">READY FOR YEAR-ROUND OUTDOOR LIVING?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation on custom curtain patio enclosures for your home.
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
