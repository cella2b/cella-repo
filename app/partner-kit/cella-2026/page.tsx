"use client"

import Image from "next/image"
import { ArrowDown, ArrowUpRight, Instagram, LockKeyhole, Mail } from "lucide-react"
import { useEffect, useRef, useState, type FormEvent } from "react"
import { decryptMediaKitRates, type MediaKitRates, type RateItem } from "./vault"

const brandLogos = [
  { src: "/images/brands/google-logo.webp", alt: "Google" },
  { src: "/images/brands/merivale-logo.png", alt: "Merivale" },
  { src: "/images/brands/mirvac-logo.svg", alt: "Mirvac" },
  { src: "/images/brands/nsw-placemaking-logo.png", alt: "Placemaking NSW" },
  { src: "/images/brands/kitchenaid-logo.png", alt: "KitchenAid" },
  { src: "/images/brands/ninja-logo.png", alt: "Ninja" },
]

const socialStats = [
  { platform: "Instagram", metric: "Reach", value: "423K" },
  { platform: "Instagram", metric: "Engagement", value: "36K" },
  { platform: "Instagram", metric: "Followers", value: "23K" },
  { platform: "TikTok", metric: "Views", value: "2.1M" },
  { platform: "TikTok", metric: "Likes", value: "1.9M" },
  { platform: "TikTok", metric: "Followers", value: "31K" },
]

const workImages = [
  {
    src: "/images/projects/kings-cross-coca-cola.webp",
    alt: "Kings Cross precinct campaign",
    label: "Sydney",
  },
  {
    src: "/images/projects/paddys-markets.jpg",
    alt: "Paddy's Markets campaign",
    label: "Food",
  },
  {
    src: "/images/projects/barangaroo-house.jpg",
    alt: "Barangaroo House campaign",
    label: "Places",
  },
  {
    src: "/images/projects/travel-media-kit.png",
    alt: "Milford Sound travel campaign",
    label: "Travel",
  },
]


function AnimatedNumber({ value, className }: { value: string; className?: string }) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState("1")

  useEffect(() => {
    const match = value.match(/^([\d.]+)(.*)$/)
    if (!match) {
      setDisplayValue(value)
      return
    }

    const target = Number(match[1])
    const suffix = match[2]
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0
    let animationFrame = 0
    let hasAnimated = false

    const setFinalValue = () => {
      setDisplayValue(
        target.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }) + suffix,
      )
    }

    const startAnimation = () => {
      if (hasAnimated) return
      hasAnimated = true

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setFinalValue()
        return
      }

      const startTime = performance.now()
      const duration = 1600

      const tick = (time: number) => {
        const progress = Math.min((time - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = 1 + (target - 1) * eased
        setDisplayValue(
          current.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }) + suffix,
        )

        if (progress < 1) {
          animationFrame = requestAnimationFrame(tick)
        } else {
          setFinalValue()
        }
      }

      animationFrame = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation()
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    if (elementRef.current) observer.observe(elementRef.current)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [value])

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  )
}

type RateRowProps = {
  item: RateItem
}

function RateRow({ item }: RateRowProps) {
  const [label, price, badge] = item

  return (
    <li className="grid grid-cols-[1fr_auto] items-start gap-5 border-t border-black/10 py-4 first:border-t-0">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.08em] text-black sm:text-base">{label}</p>
        {badge ? (
          <span className="mt-2 inline-flex bg-[#5d16f4] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="text-right text-base font-semibold text-black sm:text-lg">{price}</p>
    </li>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#5d16f4]">
      {children}
    </p>
  )
}

type PasswordGateProps = {
  error: string
  isUnlocking: boolean
  onUnlock: (password: string) => Promise<void>
}

function PasswordGate({ error, isUnlocking, onUnlock }: PasswordGateProps) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    await onUnlock(String(formData.get("password") ?? ""))
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f4efff] px-5 py-20 text-black">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copy_609EA116-4303-4201-A986-82779EE24CCC-fSh9zYmlnaJhudebiyaAnN2AZzr5d0.mov"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/35" />
      <section className="relative z-10 w-full max-w-xl border border-black/15 bg-white/80 p-7 shadow-[0_30px_100px_rgba(93,22,244,0.2)] backdrop-blur-xl sm:p-12">
        <div className="mb-12 flex items-center justify-between">
          <p className="text-lg font-bold tracking-[0.2em]">CELLA</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/50">Private / 2026</p>
        </div>
        <LockKeyhole className="mb-6 h-9 w-9 text-[#5d16f4]" />
        <h1 className="text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl">
          Media kit access
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-black/60">
          Enter the password supplied by CELLA to view partnership information and rates.
        </p>
        <form onSubmit={handleSubmit} className="mt-9">
          <label htmlFor="media-kit-password" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
            Password
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="media-kit-password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="min-h-12 flex-1 border border-black/20 bg-white px-4 text-base outline-none transition-colors focus:border-[#5d16f4]"
            />
            <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#5d16f4] px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black">
              {isUnlocking ? "Unlocking..." : "View kit"}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          {error ? <p className="mt-3 text-sm font-medium text-red-700">{error}</p> : null}
        </form>
      </section>
    </main>
  )
}

export default function CellaMediaKitPage() {
  const [rates, setRates] = useState<MediaKitRates | null>(null)
  const [error, setError] = useState("")
  const [isUnlocking, setIsUnlocking] = useState(false)

  async function unlockKit(password: string) {
    setError("")
    setIsUnlocking(true)
    const unlockedRates = await decryptMediaKitRates(password)
    setIsUnlocking(false)

    if (!unlockedRates) {
      setError("That password is not correct. Please try again.")
      return
    }

    setRates(unlockedRates)
  }

  if (!rates) {
    return <PasswordGate error={error} isUnlocking={isUnlocking} onUnlock={unlockKit} />
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ff] text-black selection:bg-[#5d16f4] selection:text-white">
      <nav className="absolute inset-x-0 top-0 z-30 border-b border-black/10 bg-white/20 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="text-lg font-bold tracking-[0.2em] text-black" aria-label="Back to top">
            CELLA
          </a>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-black/60">Partner kit / 2026</p>
          <button type="button" onClick={() => setRates(null)} className="text-xs font-semibold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-60">
            Lock kit
          </button>
        </div>
      </nav>

      <section id="top" className="relative min-h-screen border-b border-black/10 bg-[#f4efff] pt-20">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copy_609EA116-4303-4201-A986-82779EE24CCC-fSh9zYmlnaJhudebiyaAnN2AZzr5d0.mov"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-white/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#f7f4ff]" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1500px] grid-cols-1 items-end gap-10 px-5 pb-8 pt-12 sm:px-8 sm:pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:pb-16">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.32em] text-[#5d16f4]">Marcella / Content creator</p>
            <h1 className="max-w-5xl text-[clamp(4.5rem,15vw,12rem)] font-bold uppercase leading-[0.75] tracking-[-0.07em] text-black">
              Media
              <span className="block text-[#5d16f4]">Kit.</span>
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-black/20 pt-5 text-xs font-medium uppercase tracking-[0.18em] text-black/70">
              <a href="https://www.instagram.com/cella.channel/" target="_blank" rel="noreferrer" className="hover:text-[#5d16f4]">
                @cella.channel
              </a>
              <a href="mailto:info@heycella.com" className="hover:text-[#5d16f4]">
                info@heycella.com
              </a>
              <span>Sydney, Australia</span>
            </div>
          </div>

          <div className="flex flex-col justify-end lg:items-end">
            <div className="max-w-md border-l-4 border-[#5d16f4] bg-white/65 p-6 shadow-[0_24px_80px_rgba(93,22,244,0.14)] backdrop-blur-md sm:p-8">
              <p className="text-2xl font-semibold uppercase leading-tight tracking-[-0.02em] sm:text-3xl">
                Food, travel and activities that make people want to book.
              </p>
              <p className="mt-5 text-sm leading-6 text-black/65">
                Authentic content, relatable storytelling and a strategy shaped around every business and brand.
              </p>
            </div>
            <a href="#about" className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-black">
              Explore the kit
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="relative border-b border-black/10 bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionLabel>About Cella</SectionLabel>
            <h2 className="max-w-xl text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              Local taste. Global curiosity. Content with a point of view.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <p className="text-lg leading-8 text-black/70">
              Marcella is the creator behind <strong className="text-black">@cella.channel</strong>, sharing the Sydney hotspots,
              international stays and experiences genuinely worth knowing about.
            </p>
            <p className="text-lg leading-8 text-black/70">
              She partners with brands that value <strong className="text-black">creativity and quality</strong>, building custom content
              that connects through useful recommendations, warm storytelling and a strong visual hook.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#5d16f4] px-5 py-16 text-white sm:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">The statistics</p>
              <h2 className="text-4xl font-semibold uppercase tracking-[-0.04em] sm:text-6xl"><AnimatedNumber value="55K+" /> followers</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/70">
              A cross-platform audience following fresh food experiences, Sydney discoveries and international travel stories.
            </p>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-white/25 sm:grid-cols-3 lg:grid-cols-6">
            {socialStats.map((stat) => (
              <div key={`${stat.platform}-${stat.metric}`} className="border-b border-r border-white/25 p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">{stat.platform}</p>
                <AnimatedNumber value={stat.value} className="mt-4 block text-4xl font-semibold tracking-[-0.04em] sm:text-5xl" />
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/70">{stat.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f7f4ff] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <SectionLabel>Brand partnerships</SectionLabel>
              <h2 className="text-4xl font-semibold uppercase tracking-[-0.04em] sm:text-6xl">Trusted by</h2>
            </div>
            <p className="max-w-xl self-end text-lg leading-8 text-black/65">
              Experience across hospitality, tourism, technology, precincts, food and lifestyle campaigns.
            </p>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-3 lg:grid-cols-7">
            {brandLogos.map((brand) => (
              <div key={brand.src} className="relative flex h-28 items-center justify-center border-b border-r border-black/10 bg-white/50 p-6 sm:h-32">
                <Image src={brand.src} alt={brand.alt} width={180} height={80} className="max-h-14 w-auto max-w-full object-contain grayscale transition-all duration-300 hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#9d75ff]">The work</p>
              <h2 className="text-4xl font-semibold uppercase tracking-[-0.04em] sm:text-6xl">Food to far away</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/55">Campaign content designed to make a place, plate or experience feel immediately worth the trip.</p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {workImages.map((work, index) => (
              <figure key={work.src} className={`group relative overflow-hidden ${index % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/5] md:mt-12"}`}>
                <Image src={work.src} alt={work.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className={index === 3 ? "object-cover scale-[1.62] object-[50%_52%]" : "object-cover transition-transform duration-700 group-hover:scale-105"} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 left-0 p-4 text-xs font-semibold uppercase tracking-[0.22em] text-white sm:p-6">{work.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <Image src="/images/fluid-purple-1.png" alt="" fill sizes="100vw" className="object-cover opacity-[0.12]" />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <SectionLabel>Partnership rates</SectionLabel>
              <h2 className="text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">Let&apos;s make something people remember.</h2>
            </div>
            <div className="self-end lg:justify-self-end">
              <p className="max-w-md text-base leading-7 text-black/65">Content designed for a one-off post via @cella.channel to increase brand exposure and introduce your business to a highly engaged audience.</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">Rates in AUD</p>
            </div>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-black/15 lg:grid-cols-3">
            <article className="border-b border-r border-black/15 bg-white/70 p-6 backdrop-blur-sm sm:p-8">
              <p className="mb-6 bg-black px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">Once-off posts</p>
              <ul>{rates.oneOffPosts.map((item) => <RateRow key={item[0]} item={item} />)}</ul>
            </article>
            <article className="border-b border-r border-black/15 bg-white/70 p-6 backdrop-blur-sm sm:p-8">
              <p className="mb-6 bg-[#5d16f4] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">Packages</p>
              <ul>{rates.packages.map((item) => <RateRow key={item[0]} item={item} />)}</ul>
            </article>
            <article className="border-b border-r border-black/15 bg-white/70 p-6 backdrop-blur-sm sm:p-8">
              <p className="mb-6 bg-black px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">Extras</p>
              <ul>{rates.extras.map((item) => <RateRow key={item[0]} item={item} />)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className="relative bg-[#5d16f4] px-5 py-24 text-white sm:px-8 md:py-36 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Custom partnerships welcome</p>
            <h2 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] sm:text-7xl lg:text-8xl">Can&apos;t see something that suits?</h2>
          </div>
          <a href="mailto:info@heycella.com?subject=Custom%20partnership%20enquiry" className="inline-flex shrink-0 items-center gap-3 bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-transform hover:-translate-y-1">
            Let&apos;s customise it
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <footer className="bg-black px-5 py-10 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-bold tracking-[0.2em]">CELLA</p>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/cella.channel/" target="_blank" rel="noreferrer" aria-label="CELLA on Instagram" className="text-white/60 hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="mailto:info@heycella.com" aria-label="Email CELLA" className="text-white/60 hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/40">Private share link / Sydney</p>
        </div>
      </footer>
    </main>
  )
}
