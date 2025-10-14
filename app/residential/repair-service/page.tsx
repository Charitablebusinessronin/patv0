import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Shield, Wrench, Clock, Award, Home } from "lucide-react"

export default function ResidentialRepairServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/l.jpg-7yI2tkWGKKOs0T5ikJDci6si1egaLn.jpeg"
            alt="Residential Awning Repair Hero"
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
              <span className="text-sm font-bold uppercase tracking-wider">Expert Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              RESIDENTIAL AWNING REPAIR & SERVICE
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Professional repair and maintenance for all residential awnings. Extend the life of your investment with
              expert care from our certified technicians.
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
                CALL NOW
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
              We service all brands and types of residential awnings, keeping your home protected and looking great.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "FABRIC REPLACEMENT",
                description: "Replace worn or faded fabric with new Sunbrella® material in your choice of colors.",
                icon: <Wrench className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "FRAME REPAIR",
                description: "Repair bent or damaged frame components, replace broken hardware and mounting brackets.",
                icon: <Wrench className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "MOTOR SERVICE",
                description: "Repair or replace motors on retractable awnings, remote controls, and sensors.",
                icon: <Wrench className="h-12 w-12 text-brand-accent" />,
              },
              {
                title: "CLEANING & MAINTENANCE",
                description: "Professional cleaning, waterproofing, and preventive maintenance to extend awning life.",
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
              <h2 className="text-4xl font-bold mb-6 text-brand-primary">WHY CHOOSE PATRIOT AWNING</h2>
              <div className="h-1 w-24 bg-brand-accent mb-6"></div>
              <p className="text-foreground mb-8 text-lg">
                With decades of experience serving homeowners across the Carolinas, we provide honest, reliable service
                at fair prices. Our technicians are trained to work on all brands and types of awnings.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Service all brands and types of awnings",
                  "Factory-trained certified technicians",
                  "Same-day service available",
                  "Upfront written estimates",
                  "Quality parts and workmanship",
                  "Satisfaction guaranteed",
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
                  <h3 className="text-2xl font-bold mb-3 text-brand-primary">FAST SERVICE</h3>
                  <p className="text-card-foreground">
                    Most repairs completed same day. We arrive on time and work efficiently.
                  </p>
                </Card>
                <Card className="p-8 bg-background border-2 border-brand-primary">
                  <Award className="h-12 w-12 text-brand-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-brand-primary">EXPERT TECHNICIANS</h3>
                  <p className="text-card-foreground">Certified professionals with years of hands-on experience.</p>
                </Card>
                <Card className="p-8 bg-background border-2 border-brand-accent">
                  <Shield className="h-12 w-12 text-brand-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-brand-primary">QUALITY PARTS</h3>
                  <p className="text-card-foreground">We use only premium replacement parts with warranty coverage.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">COMMON AWNING REPAIRS</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              We handle all types of awning repairs, from simple adjustments to complete rebuilds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "FABRIC DAMAGE",
                problems: ["Tears and rips", "Fading and discoloration", "Mold and mildew", "Water damage"],
                solution: "Complete fabric replacement with new Sunbrella® material in your choice of colors.",
              },
              {
                title: "MOTOR ISSUES",
                problems: ["Motor won't run", "Remote not working", "Sensor malfunction", "Grinding noises"],
                solution: "Motor repair or replacement, remote programming, sensor adjustment and calibration.",
              },
              {
                title: "FRAME PROBLEMS",
                problems: ["Bent or broken arms", "Sagging fabric", "Loose hardware", "Rust and corrosion"],
                solution: "Frame straightening, arm replacement, hardware replacement, rust treatment.",
              },
              {
                title: "OPERATIONAL ISSUES",
                problems: ["Won't retract fully", "Uneven extension", "Binding and sticking", "Loud operation"],
                solution: "Adjustment and lubrication, spring replacement, track cleaning, full tune-up.",
              },
            ].map((repair, index) => (
              <Card key={index} className="p-8 border-none shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-primary">{repair.title}</h3>
                <div className="mb-4">
                  <p className="font-bold text-foreground mb-2">Common Problems:</p>
                  <ul className="space-y-1">
                    {repair.problems.map((problem, pIndex) => (
                      <li key={pIndex} className="flex items-center text-muted-foreground">
                        <span className="text-brand-accent mr-2">•</span>
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">Our Solution:</p>
                  <p className="text-card-foreground">{repair.solution}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">MAINTENANCE PLANS</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-foreground max-w-3xl mx-auto text-lg">
              Protect your investment with regular maintenance. Our plans keep your awnings looking great and
              functioning properly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "BASIC CARE",
                features: ["Annual inspection", "Basic cleaning", "Lubrication", "Minor adjustments"],
                price: "$149/year",
              },
              {
                title: "COMPLETE CARE",
                features: [
                  "Semi-annual service",
                  "Deep fabric cleaning",
                  "Full lubrication",
                  "Priority scheduling",
                  "10% parts discount",
                ],
                price: "$279/year",
                featured: true,
              },
              {
                title: "PREMIUM CARE",
                features: [
                  "Quarterly inspections",
                  "Professional cleaning",
                  "Waterproofing treatment",
                  "Priority emergency service",
                  "20% parts discount",
                ],
                price: "$449/year",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`p-8 ${plan.featured ? "border-2 border-brand-accent bg-brand-primary/5" : "border-none"} shadow-lg`}
              >
                {plan.featured && (
                  <div className="bg-brand-accent text-brand-neutral px-4 py-1 text-sm font-bold uppercase tracking-wider text-center mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-brand-primary text-center">{plan.title}</h3>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-accent mr-3 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-center text-2xl font-bold text-brand-primary mb-6">{plan.price}</p>
                <Button
                  className={`w-full ${plan.featured ? "bg-brand-accent hover:bg-brand-accent/90" : "bg-brand-primary hover:bg-brand-primary/90"} text-brand-neutral rounded-none`}
                >
                  ENROLL NOW
                </Button>
              </Card>
            ))}
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
              Professional residential awning repair and service throughout North and South Carolina.
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

      {/* CTA Section */}
      <section className="py-20 bg-brand-accent text-brand-neutral">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">NEED AWNING REPAIR?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today to schedule service. Fast, reliable repair by certified technicians.
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
