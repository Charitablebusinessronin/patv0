"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Calendar, User, ArrowRight, Mail } from "lucide-react"

const categories = [
  "All Posts",
  "Maintenance Tips",
  "Design Ideas",
  "Product Guides",
  "Industry News",
  "Customer Stories",
]

const blogPosts = [
  {
    id: 1,
    title: "Spring Maintenance: Preparing Your Awning for the Season",
    excerpt:
      "As winter fades and spring approaches, it's time to give your awning some TLC. Learn the essential maintenance steps to ensure your awning performs beautifully all season long.",
    image: "/placeholder.svg?height=400&width=600&text=Spring+Maintenance",
    category: "Maintenance Tips",
    date: "March 15, 2024",
    author: "Mike Johnson",
    featured: true,
  },
  {
    id: 2,
    title: "5 Ways Retractable Awnings Increase Home Value",
    excerpt:
      "Discover how investing in quality retractable awnings can boost your property value and appeal to potential buyers.",
    image: "/placeholder.svg?height=300&width=400&text=Home+Value",
    category: "Design Ideas",
    date: "March 10, 2024",
    author: "Sarah Davis",
  },
  {
    id: 3,
    title: "Metal vs. Fabric Awnings: Which is Right for You?",
    excerpt:
      "A comprehensive guide comparing metal and fabric awnings to help you make the best choice for your property.",
    image: "/placeholder.svg?height=300&width=400&text=Metal+vs+Fabric",
    category: "Product Guides",
    date: "March 5, 2024",
    author: "Tom Wilson",
  },
  {
    id: 4,
    title: "Energy Savings: How Awnings Reduce Cooling Costs",
    excerpt:
      "Learn how properly installed awnings can significantly reduce your energy bills by blocking heat and UV rays.",
    image: "/placeholder.svg?height=300&width=400&text=Energy+Savings",
    category: "Industry News",
    date: "February 28, 2024",
    author: "Lisa Anderson",
  },
  {
    id: 5,
    title: "Customer Spotlight: Restaurant Patio Transformation",
    excerpt: "See how we helped a local restaurant triple their outdoor seating capacity with custom patio enclosures.",
    image: "/public/images/restaurant-patio.jpg",
    category: "Customer Stories",
    date: "February 22, 2024",
    author: "Mike Johnson",
  },
  {
    id: 6,
    title: "Top 10 Awning Design Trends for 2024",
    excerpt: "Stay ahead of the curve with the latest awning styles, colors, and features that are trending this year.",
    image: "/placeholder.svg?height=300&width=400&text=Design+Trends+2024",
    category: "Design Ideas",
    date: "February 15, 2024",
    author: "Sarah Davis",
  },
  {
    id: 7,
    title: "Winter Storage Tips for Your Retractable Awning",
    excerpt: "Protect your investment with proper winter storage techniques for retractable awnings.",
    image: "/placeholder.svg?height=300&width=400&text=Winter+Storage",
    category: "Maintenance Tips",
    date: "February 8, 2024",
    author: "Tom Wilson",
  },
  {
    id: 8,
    title: "Understanding Awning Fabric: Sunbrella vs. Alternatives",
    excerpt: "A deep dive into awning fabric options, with a focus on why Sunbrella remains the industry standard.",
    image: "/placeholder.svg?height=300&width=400&text=Awning+Fabric",
    category: "Product Guides",
    date: "February 1, 2024",
    author: "Lisa Anderson",
  },
  {
    id: 9,
    title: "Commercial Awnings: ROI and Business Benefits",
    excerpt:
      "Explore how commercial awnings provide measurable returns through branding, energy savings, and customer comfort.",
    image: "/public/images/commercial-enclosure.jpg",
    category: "Industry News",
    date: "January 25, 2024",
    author: "Mike Johnson",
  },
  {
    id: 10,
    title: "Historic Home Restoration: Matching Original Awning Styles",
    excerpt:
      "Tips for selecting and installing awnings that complement historic architecture and preservation guidelines.",
    image: "/placeholder.svg?height=300&width=400&text=Historic+Restoration",
    category: "Customer Stories",
    date: "January 18, 2024",
    author: "Sarah Davis",
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts")

  const filteredPosts =
    selectedCategory === "All Posts" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-red-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/american-flag.jpg')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-semibold">Patriot Awning Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Insights & Industry Tips</h1>
            <p className="text-xl text-blue-100">
              Stay informed with the latest awning news, maintenance guides, and design inspiration from the experts at
              Patriot Awning.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All Posts" && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Featured Article</h2>
            </div>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 hover:text-blue-900 transition-colors">
                    <Link href={`/learn/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <Link href={`/learn/blog/${featuredPost.id}`}>
                    <Button className="bg-blue-900 hover:bg-blue-800">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                    <Link href={`/learn/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Link
                    href={`/learn/blog/${post.id}`}
                    className="text-blue-900 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-1 group"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-red-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="h-12 w-12 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-blue-100 mb-8">
              Get the latest awning tips, maintenance guides, and exclusive offers delivered straight to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900" />
              <Button className="bg-red-600 hover:bg-red-700 whitespace-nowrap">Subscribe</Button>
            </div>
            <p className="text-xs text-blue-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Start Your Awning Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you design and install the perfect awning solution for your home or
            business.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/quote">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
