import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function WorkingTogether() {
  return <section className="cella-section cella-process" aria-labelledby="process-heading">
    <div className="cella-section-heading">
      <div><p className="cella-eyebrow">From first hello to final edit</p><h2 id="process-heading">A GOOD STORY.<br /><span className="cella-accent">A CLEAR PROCESS.</span></h2></div>
      <Link href="/contact" className="cella-text-link">Tell me your idea <ArrowUpRight size={18} aria-hidden="true" /></Link>
    </div>
    <ol className="cella-process-grid">
      {[
        ["The conversation", "Tell me about your business, audience and timing. We’ll decide whether you need content for your channels, a creator partnership or ongoing support."],
        ["The creative", "We agree the brief, deliverables and quote before the shoot. Usage, posting, approvals and turnaround are confirmed for your project."],
        ["The story", "I bring the idea to life through filming and editing, ready for the channels and audience we’ve agreed."],
      ].map(([title, copy], i) => <li key={title}><span className="cella-eyebrow">0{i + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}
    </ol>
  </section>
}

export function ServiceQuestions() {
  return <section className="cella-section cella-faq" aria-labelledby="questions-heading">
    <div><p className="cella-eyebrow">A few useful details</p><h2 id="questions-heading">BEFORE<br />WE BEGIN.</h2></div>
    <div>
      {[
        ["Content creation or a creator partnership?", "Content creation gives your business videos and photos to publish on its own channels. A creator partnership includes agreed posts through @cella.channel. These are quoted separately, so your brief determines the right fit."],
        ["Do you work outside Sydney?", "I’m based in Sydney and also create travel and destination content. Send through the location and dates so we can discuss availability, travel and the scope of the shoot."],
        ["Can the content be used in ads?", "Tell me where and how you want to use it. Content rights, paid boosting and usage periods are agreed in the quote, not assumed to be included."],
        ["How do I get a quote?", "Share your business, goals, location and timing through the enquiry page. If you have a budget or deliverables in mind, include those too. I’ll help you find the right approach."],
      ].map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}
    </div>
  </section>
}
