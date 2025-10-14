import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Shield, Wrench, Clock, Award } from "lucide-react"

export default function CommercialRepairServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_8d92dd9e29ea4172b8569f9730700e1e~mv2-ILJozE4M7yr7zvBGQ39GJDbFgP98iw.webp"
            alt="Commercial Awning Repair Hero"
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
              <span className="text-sm font-bold uppercase tracking-wider">Professional Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              COMMERCIAL AWNING REPAIR & SERVICE
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Expert repair and maintenance services for all commercial awning systems. Fast response times, quality
              workmanship, minimal business disruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent/90 text-brand-neutral text-lg px-8 py-6 rounded-none"
              >
                SCHEDULE SERVICE
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-brand-neutral border-brand-neutral hover:bg-brand-neutral/10 text-lg px-8 py-6 rounded-none"
              >
                EMERGENCY SERVICE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">COMPREHENSIVE AWNING SERVICES</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              We service all brands and types of commercial awnings, keeping your business looking great and protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "FABRIC REPLACEMENT",
                description:
                  "Replace faded or damaged awning fabric with new Sunbrella® material in your choice of colors.",
                icon: <Wrench className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "FRAME REPAIR",
                description: "Repair or replace damaged frame components including arms, bars, and mounting hardware.",
                icon: <Wrench className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "MOTOR SERVICE",
                description: "Repair or replace motorized retractable awning motors and control systems.",
                icon: <Wrench className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "PREVENTIVE MAINTENANCE",
                description: "Regular maintenance programs to extend awning life and prevent costly repairs.",
                icon: <Wrench className="h-12 w-12 text-brand-accent" />,
              },
            ].map((service, index) => (
              <Card key={index} className="p-6 text-center border-none shadow-lg">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-brand-primary">{service.title}</h3>
                <p className="text-card-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-brand-primary">WHY CHOOSE PATRIOT AWNING FOR SERVICE</h2>
              <div className="h-1 w-24 bg-brand-accent mb-6"></div>
              <p className="text-foreground mb-8 text-lg">
                With decades of experience serving commercial clients across the Carolinas, we understand the importance
                of maintaining your business's appearance and protecting your investment.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Service all brands and types of awnings",
                  "Fast response times for urgent repairs",
                  "Licensed and insured technicians",
                  "Flexible scheduling to minimize disruption",
                  "Competitive pricing with no hidden fees",
                  "Written estimates provided upfront",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-brand-primary flex items-center justify-center mr-4">
                      <Check className="h-4 w-4 text-brand-neutral" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 gap-6">
                <Card className="p-8 bg-background border-2 border-brand-accent">
                  <Clock className="h-12 w-12 text-brand-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-brand-primary">FAST RESPONSE</h3>
                  <p className="text-card-foreground">Same-day service available for emergency repairs</p>
                </Card>
                <Card className="p-8 bg-background border-2 border-brand-primary">
                  <Award className="h-12 w-12 text-brand-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-brand-primary">EXPERIENCED TEAM</h3>
                  <p className="text-card-foreground">
                    Factory-trained technicians with decades of combined experience
                  </p>
                </Card>
                <Card className="p-8 bg-background border-2 border-brand-accent">
                  <Shield className="h-12 w-12 text-brand-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-brand-primary">WARRANTY WORK</h3>
                  <p className="text-card-foreground">Authorized warranty service for major manufacturers</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">SERVING THE CAROLINAS</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              We provide commercial awning repair and service throughout North and South Carolina.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Charlotte, NC",
              "Raleigh, NC",
              "Greensboro, NC",
              "Winston-Salem, NC",
              "Durham, NC",
              "Asheville, NC",
              "Columbia, SC",
              "Charleston, SC",
              "Greenville, SC",
              "Spartanburg, SC",
              "Myrtle Beach, SC",
              "Rock Hill, SC",
            ].map((city, index) => (
              <Card key={index} className="p-4 text-center border-none shadow-md">
                <p className="font-medium text-brand-primary">{city}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Programs */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">PREVENTIVE MAINTENANCE PROGRAMS</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              Protect your investment with our commercial maintenance programs designed to extend awning life and
              prevent costly repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "BASIC PROGRAM",
                features: ["Annual inspection", "Cleaning and lubrication", "Minor adjustments", "Written report"],
                price: "Starting at $299/year",
              },
              {
                title: "STANDARD PROGRAM",
                features: [
                  "Semi-annual inspections",
                  "Priority service scheduling",
                  "15% discount on repairs",
                  "Fabric deep cleaning",
                ],
                price: "Starting at $549/year",
                featured: true,
              },
              {
                title: "PREMIUM PROGRAM",
                features: [
                  "Quarterly inspections",
                  "Emergency service included",
                  "25% discount on repairs",
                  "Fabric protection treatment",
                ],
                price: "Starting at $899/year",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className={`p-8 ${program.featured ? "border-2 border-brand-accent bg-brand-primary/5" : "border-none"} shadow-lg`}
              >
                {program.featured && (
                  <div className="bg-brand-accent text-brand-neutral px-4 py-1 text-sm font-bold uppercase tracking-wider text-center mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-brand-primary text-center">{program.title}</h3>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-accent mr-3 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-center text-2xl font-bold text-brand-primary mb-6">{program.price}</p>
                <Button
                  className={`w-full ${program.featured ? "bg-brand-accent hover:bg-brand-accent/90" : "bg-brand-primary hover:bg-brand-primary/90"} text-brand-neutral rounded-none`}
                >
                  ENROLL NOW
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-accent text-brand-neutral">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">NEED AWNING REPAIR OR SERVICE?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today to schedule service or request emergency repairs. We're here to help keep your business
            looking great.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              size="lg"
              className="bg-brand-neutral text-brand-accent hover:bg-brand-neutral/90 text-lg px-8 py-6 rounded-none"
            >
              SCHEDULE SERVICE
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-neutral text-brand-neutral hover:bg-brand-neutral/10 text-lg px-8 py-6 rounded-none bg-transparent"
            >
              CALL: (800) 555-AWNING
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
