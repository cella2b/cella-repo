"use client"

import Link from "next/link"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AIGuidancePage() {
  return (
    <main className="min-h-screen bg-[#FDFCFA]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-purple-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/cella-logo.png"
              alt="Cella Logo"
              width={45}
              height={45}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#FDFCFA]">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            AI <span className="italic text-purple-600">Guidance</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            AI is moving fast, and most people are either overwhelmed or using it wrong. This service is for those ready
            to leap ahead—whether you have questions, want to implement specific tools, or need help setting up business
            automation.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            This isn't about replacing what makes you unique. It's about using AI to handle the repetitive work so you
            can focus on what actually requires your expertise. From answering simple questions to building complete
            automation systems, the focus is on practical implementation that saves time without sacrificing quality.
          </p>
        </div>
      </section>

      {/* What This Covers Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">What this covers</h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Answering questions about what AI can actually do for your business
                </h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tool recommendations based on your specific needs and workflow
                </h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Implementation support for AI tools and automation
                </h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Setting up business automation (client intake, scheduling, content workflows)
                </h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Training on how to use AI while maintaining your brand voice
                </h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ongoing guidance as new tools emerge and your needs evolve
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Works For Section */}
      <section className="py-20 px-6 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">How it works</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            This is flexible based on where you are. Some people just need answers to specific questions. Others want
            full implementation support for automating parts of their business. The approach adapts to your
            needs—whether that's a single consultation or ongoing guidance.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who this is for</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Business owners who know they should be using AI but don't know where to start. Content creators spending
            too much time on repetitive tasks. Anyone who wants to work smarter but is skeptical of AI hype and wants
            straight answers about what actually works.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why this matters now</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            The gap between people using AI effectively and people avoiding it is widening fast. Getting ahead now means
            understanding what's useful, implementing it correctly, and staying updated without getting distracted by
            every new tool that launches.
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">What You Get</h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Tools for Content Creation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn which AI tools can help you write captions faster, generate content ideas, create graphics, and
                  edit videos more efficiently. I show you the practical applications that save real time.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Workflow Automation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover how to automate repetitive tasks in your content workflow - from scheduling posts to
                  repurposing content across platforms. Spend less time on admin, more time creating.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Assisted Brainstorming</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn how to use AI as a creative partner for generating content ideas, refining messaging, and
                  overcoming creative blocks. Get unstuck faster and produce more consistently.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Tool Recommendations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Not all AI tools are created equal. I recommend specific tools based on your needs, budget, and
                  technical comfort level - and show you exactly how to use them.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hands-On Training & Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Step-by-step guidance on implementing AI tools into your workflow. I provide practical tutorials,
                  templates, and ongoing support as you learn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">Implementation Areas</h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tool selection based on specific workflow needs
                </h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Strategic integration and efficiency optimization
                </h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Brand voice preservation and quality maintenance
                </h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Image editing and enhancement workflows</h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Video editing acceleration techniques</h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Content ideation and planning assistance</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Ready to Work Smarter with AI?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's explore how AI can help you save time and create better content.
          </p>
          <Link href="/#contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-700 hover:to-fuchsia-700 px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              Let's Chat
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
