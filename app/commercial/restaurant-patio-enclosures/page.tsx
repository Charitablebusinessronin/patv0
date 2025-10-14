import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, ArrowRight } from "lucide-react"

export default function CommercialRestaurantPatioEnclosuresPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp"
            alt="Restaurant Patio Enclosures Hero"
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
              <span className="text-sm font-bold uppercase tracking-wider">Restaurant Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              RESTAURANT PATIO ENCLOSURES
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Extend your dining season and maximize seating capacity with custom patio enclosures. Year-round comfort
              for your guests, increased revenue for your business.
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

      {/* Featured Solution */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp"
                  alt="Clear Vinyl Patio Enclosure"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-brand-accent text-brand-neutral px-6 py-3">
                  <span className="font-bold text-xl">CLEAR VINYL SYSTEMS</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-brand-accent text-brand-neutral px-4 py-1 mb-4">
                <span className="font-bold uppercase tracking-wider">All-Weather Dining</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-brand-primary">CLEAR VINYL PATIO ENCLOSURE SYSTEMS</h2>
              <div className="h-1 w-24 bg-brand-accent mb-6"></div>
              <p className="text-foreground mb-8 text-lg">
                Our premium clear vinyl enclosure systems allow your guests to enjoy outdoor dining in any weather.
                Roll-up or fixed panel options provide flexibility while maintaining views and ambiance.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Crystal clear marine-grade vinyl",
                  "Roll-up design for seasonal flexibility",
                  "Custom fitted to your patio space",
                  "Wind and weather resistant",
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

      {/* Restaurant Portfolio */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">RESTAURANT ENCLOSURE PORTFOLIO</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              See how our patio enclosures help restaurants maximize seating and extend their dining season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "WATERFRONT BISTRO",
                location: "Charleston, SC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp",
                category: "Fine Dining",
              },
              {
                title: "DOWNTOWN CAFE",
                location: "Raleigh, NC",
                image: "/images/restaurant-patio.jpg",
                category: "Casual Dining",
              },
              {
                title: "ROOFTOP BAR & GRILL",
                location: "Charlotte, NC",
                image: "/images/restaurant-patio.jpg",
                category: "Bar & Grill",
              },
              {
                title: "ITALIAN RESTAURANT",
                location: "Greenville, SC",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Porch-Enclosure-by-Charlotte-Awnings-Supplier-Patriot-Awning-Company-B9LVOTS4gVj6egHVMNfBfQ9MwVC2RJ.webp",
                category: "Fine Dining",
              },
              {
                title: "BREWERY PATIO",
                location: "Asheville, NC",
                image: "/images/restaurant-patio.jpg",
                category: "Brewery",
              },
              {
                title: "STEAKHOUSE TERRACE",
                location: "Columbia, SC",
                image: "/images/restaurant-patio.jpg",
                category: "Steakhouse",
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
            <h2 className="text-4xl font-bold text-brand-primary mb-4">BENEFITS FOR YOUR RESTAURANT</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              Patio enclosures provide immediate and lasting benefits for your restaurant business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "INCREASED REVENUE",
                description:
                  "Use your patio year-round, increasing seating capacity by 30-50% even in cold or rainy weather.",
                icon: <Shield className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "GUEST COMFORT",
                description:
                  "Keep guests comfortable in wind, rain, or cold while maintaining the outdoor dining experience they love.",
                icon: <Shield className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "QUICK ROI",
                description:
                  "Most restaurants see return on investment within one season through increased patio utilization.",
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
          <h2 className="text-4xl font-bold mb-6">MAXIMIZE YOUR PATIO REVENUE</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation on custom patio enclosures for your restaurant.
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
