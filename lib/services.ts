// One public catalogue keeps the home page, service index and enquiry options aligned.
// Commercial rates belong in the encrypted partner-kit records, never here.
export const services = [
  {
    number: "01", title: "Content creation", enquiry: "Content Creation",
    description: "Short-form video and photography for your business to share. From a single story to a ready-to-post content library.",
    href: "/services/content-creation", cta: "Explore content",
  },
  {
    number: "02", title: "Social strategy & management", enquiry: "Social Strategy & Management",
    description: "A clear direction for your channels, with content planning and ongoing social management shaped around your business.",
    href: "/services/social-strategy", cta: "Explore social",
  },
  {
    number: "03", title: "Coaching & mentoring", enquiry: "Coaching & Mentoring",
    description: "Practical, one-to-one guidance for creators and founders. Clearer positioning, stronger pitches and a plan you can use.",
    href: "/services/coaching", cta: "Explore coaching",
  },
] as const

export const enquiryServices = [services[0].enquiry, "Brand Partnership", services[1].enquiry, services[2].enquiry]
