import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-foreground text-xl font-bold tracking-wider">CELLA</span>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/cella.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:cella.foodie@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-muted-foreground text-xs tracking-widest uppercase">Sydney, Australia</p>
        </div>
      </div>
    </footer>
  )
}
