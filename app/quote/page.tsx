"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Send, Check } from "lucide-react"

export default function QuotePage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    projectType: "",
    projectLocation: "",
    projectDescription: "",
    timeframe: "",
    budget: "",
    hearAbout: "",
  })

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      window.scrollTo(0, 0)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_b76e9f3749ee43c0ba62f3e821f1484e~mv2.jpg-Ujn1LTBc1sNqI9ZJnSUbKwFexZ6lHx.jpeg"
            alt="Quote Request Hero"
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
              <span className="text-sm font-bold uppercase tracking-wider">Free Consultation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">REQUEST A QUOTE</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Fill out our simple form to request a free consultation and estimate for your awning project.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 p-12 text-center">
                <div className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full w-20 h-20 mb-6">
                  <Check className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Thank You!</h2>
                <p className="text-xl text-gray-700 mb-8">
                  Your quote request has been submitted successfully. A member of our team will contact you within 24
                  hours to discuss your project and provide a free estimate.
                </p>
                <p className="text-gray-700 mb-8">
                  If you have any immediate questions, please don't hesitate to call us at (800) 555-AWNING.
                </p>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-none" asChild>
                  <a href="/">RETURN TO HOME</a>
                </Button>
              </div>
            ) : (
              <>
                {/* Progress Steps */}
                <div className="mb-12">
                  <div className="flex justify-between items-center mb-4">
                    <div className={`flex flex-col items-center ${step >= 1 ? "text-blue-900" : "text-gray-400"}`}>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                          step >= 1 ? "bg-blue-900 text-white" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        1
                      </div>
                      <span className="text-sm font-medium">Contact Info</span>
                    </div>
                    <div className={`h-1 flex-1 mx-4 ${step >= 2 ? "bg-blue-900" : "bg-gray-200"}`}></div>
                    <div className={`flex flex-col items-center ${step >= 2 ? "text-blue-900" : "text-gray-400"}`}>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                          step >= 2 ? "bg-blue-900 text-white" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        2
                      </div>
                      <span className="text-sm font-medium">Project Details</span>
                    </div>
                    <div className={`h-1 flex-1 mx-4 ${step >= 3 ? "bg-blue-900" : "bg-gray-200"}`}></div>
                    <div className={`flex flex-col items-center ${step >= 3 ? "text-blue-900" : "text-gray-400"}`}>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                          step >= 3 ? "bg-blue-900 text-white" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        3
                      </div>
                      <span className="text-sm font-medium">Additional Info</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-8">
                      <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Information</h2>
                      <p className="text-gray-700 mb-8">
                        Please provide your contact information so we can reach you about your quote.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Street Address *
                          </label>
                          <Input
                            id="address"
                            name="address"
                            value={formState.address}
                            onChange={handleChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City *
                          </label>
                          <Input
                            id="city"
                            name="city"
                            value={formState.city}
                            onChange={handleChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                              State *
                            </label>
                            <Select
                              value={formState.state}
                              onValueChange={(value) => handleSelectChange("state", value)}
                              required
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="NC">North Carolina</SelectItem>
                                <SelectItem value="SC">South Carolina</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                              ZIP Code *
                            </label>
                            <Input
                              id="zip"
                              name="zip"
                              value={formState.zip}
                              onChange={handleChange}
                              required
                              className="w-full"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end mt-8">
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-none"
                        >
                          NEXT STEP
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-8">
                      <h2 className="text-3xl font-bold text-blue-900 mb-6">Project Details</h2>
                      <p className="text-gray-700 mb-8">
                        Please provide details about your project so we can prepare an accurate quote.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                            Project Type *
                          </label>
                          <Select
                            value={formState.projectType}
                            onValueChange={(value) => handleSelectChange("projectType", value)}
                            required
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a project type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="retractable-awning">Retractable Awning</SelectItem>
                              <SelectItem value="fixed-awning">Fixed Awning</SelectItem>
                              <SelectItem value="porch-enclosure">Porch Enclosure</SelectItem>
                              <SelectItem value="commercial-awning">Commercial Awning</SelectItem>
                              <SelectItem value="metal-canopy">Metal Canopy</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label htmlFor="projectLocation" className="block text-sm font-medium text-gray-700 mb-1">
                            Project Location *
                          </label>
                          <Select
                            value={formState.projectLocation}
                            onValueChange={(value) => handleSelectChange("projectLocation", value)}
                            required
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a location" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="residential">Residential</SelectItem>
                              <SelectItem value="commercial">Commercial</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
                            Project Description *
                          </label>
                          <Textarea
                            id="projectDescription"
                            name="projectDescription"
                            value={formState.projectDescription}
                            onChange={handleChange}
                            placeholder="Please describe your project, including dimensions if known."
                            rows={5}
                            required
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button
                          type="button"
                          onClick={prevStep}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-none"
                        >
                          PREVIOUS
                        </Button>
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-none"
                        >
                          NEXT STEP
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-8">
                      <h2 className="text-3xl font-bold text-blue-900 mb-6">Additional Information</h2>
                      <p className="text-gray-700 mb-8">
                        Please provide any additional information that will help us prepare your quote.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                            Project Timeframe
                          </label>
                          <Select
                            value={formState.timeframe}
                            onValueChange={(value) => handleSelectChange("timeframe", value)}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a timeframe" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">As soon as possible</SelectItem>
                              <SelectItem value="1-3months">1-3 months</SelectItem>
                              <SelectItem value="3-6months">3-6 months</SelectItem>
                              <SelectItem value="6-12months">6-12 months</SelectItem>
                              <SelectItem value="planning">Just planning</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                            Budget Range
                          </label>
                          <Select
                            value={formState.budget}
                            onValueChange={(value) => handleSelectChange("budget", value)}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under2k">Under $2,000</SelectItem>
                              <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                              <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                              <SelectItem value="over20k">Over $20,000</SelectItem>
                              <SelectItem value="unknown">Not sure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-1">
                            How did you hear about us?
                          </label>
                          <Select
                            value={formState.hearAbout}
                            onValueChange={(value) => handleSelectChange("hearAbout", value)}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="search">Internet Search</SelectItem>
                              <SelectItem value="referral">Referral</SelectItem>
                              <SelectItem value="social">Social Media</SelectItem>
                              <SelectItem value="drive-by">Saw your work</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button
                          type="button"
                          onClick={prevStep}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-none"
                        >
                          PREVIOUS
                        </Button>
                        <Button
                          type="submit"
                          className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-none flex items-center"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "SUBMITTING..."
                          ) : (
                            <>
                              SUBMIT REQUEST <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">WHY CHOOSE PATRIOT AWNING</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              When you request a quote from Patriot Awning, you're choosing a partner committed to quality,
              craftsmanship, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "FREE CONSULTATIONS",
                description:
                  "Our expert consultants will visit your property to assess your needs and provide personalized recommendations.",
                icon: <Shield className="h-12 w-12 text-red-700" />,
              },
              {
                title: "DETAILED QUOTES",
                description:
                  "We provide comprehensive quotes that outline all costs and options, so you know exactly what to expect.",
                icon: <Shield className="h-12 w-12 text-red-700" />,
              },
              {
                title: "AMERICAN CRAFTSMANSHIP",
                description:
                  "All of our products are built with pride in the USA using premium materials and expert craftsmanship.",
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

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">QUESTIONS ABOUT YOUR PROJECT?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            If you have any questions or need assistance with your quote request, our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-none">
              CALL US: (800) 555-AWNING
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-none"
            >
              EMAIL US
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
