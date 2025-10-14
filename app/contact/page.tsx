"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PhoneCall, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, projectType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        address: "",
        projectType: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e60d8c_8d92dd9e29ea4172b8569f9730700e1e~mv2-ILJozE4M7yr7zvBGQ39GJDbFgP98iw.webp"
            alt="Contact Hero"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent z-0"></div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">CONTACT US</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Get in touch with our team to discuss your project, request a quote, or learn more about our products and
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50">
              <PhoneCall className="h-12 w-12 text-red-700 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-blue-900">CALL US</h3>
              <p className="text-gray-700">(800) 555-AWNING</p>
              <p className="text-gray-600">Sales: (704) 555-1234</p>
              <p className="text-gray-600">Support: (704) 555-5678</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50">
              <Mail className="h-12 w-12 text-red-700 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-blue-900">EMAIL US</h3>
              <p className="text-gray-700">info@patriotawning.com</p>
              <p className="text-gray-600">sales@patriotawning.com</p>
              <p className="text-gray-600">support@patriotawning.com</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50">
              <MapPin className="h-12 w-12 text-red-700 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-blue-900">VISIT US</h3>
              <p className="text-gray-700">1776 Freedom Drive</p>
              <p className="text-gray-600">Charlotte, NC 28208</p>
              <p className="text-gray-600">United States</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50">
              <Clock className="h-12 w-12 text-red-700 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-blue-900">HOURS</h3>
              <p className="text-gray-700">Monday - Friday</p>
              <p className="text-gray-600">8:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Weekends by appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">GET A FREE QUOTE</h2>
              <div className="h-1 w-24 bg-red-700 mb-6"></div>
              <p className="text-gray-700 mb-8">
                Fill out the form below to request a free consultation and estimate for your project. Our team will
                contact you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 mb-8">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>Your message has been submitted successfully. A member of our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        Address
                      </label>
                      <Input
                        id="address"
                        name="address"
                        value={formState.address}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Type *
                    </label>
                    <Select value={formState.projectType} onValueChange={handleSelectChange} required>
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-none flex items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        SUBMIT REQUEST <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">OUR LOCATION</h2>
              <div className="h-1 w-24 bg-red-700 mb-6"></div>
              <p className="text-gray-700 mb-8">
                Visit our showroom to see our products in person and speak with our awning experts.
              </p>
              <div className="h-[400px] relative bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.6688489033136!2d-80.8776!3d35.2271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEzJzM3LjYiTiA4MMKwNTInMzkuNCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">SERVICE AREAS</h2>
            <div className="h-1 w-24 bg-red-700 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Patriot Awning proudly serves residential and commercial clients throughout North and South Carolina.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Charlotte, NC",
              "Raleigh, NC",
              "Greensboro, NC",
              "Winston-Salem, NC",
              "Durham, NC",
              "Wilmington, NC",
              "Asheville, NC",
              "Fayetteville, NC",
              "Columbia, SC",
              "Charleston, SC",
              "Greenville, SC",
              "Spartanburg, SC",
              "Myrtle Beach, SC",
              "Rock Hill, SC",
              "Hilton Head, SC",
              "Florence, SC",
            ].map((city, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 mb-2">
                <MapPin className="h-5 w-5 text-red-700 mr-2 flex-shrink-0" />
                <span className="text-gray-800">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">READY TO GET STARTED?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Call us today to speak directly with one of our awning experts.
          </p>
          <div className="inline-flex items-center justify-center bg-white text-red-700 px-8 py-4 text-2xl font-bold">
            <PhoneCall className="h-6 w-6 mr-3" />
            (800) 555-AWNING
          </div>
        </div>
      </section>
    </div>
  )
}
