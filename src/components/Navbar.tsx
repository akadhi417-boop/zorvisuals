import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl tracking-wider text-gold">
          ZOR
        </Link>
        <ul className="hidden md:flex gap-10 text-xs tracking-luxury text-muted-foreground uppercase">
          <li>
            <Link to="/" hash="about" className="hover:text-gold transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/" hash="services" className="hover:text-gold transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link to="/" hash="works" className="hover:text-gold transition-colors">
              Works
            </Link>
          </li>
          <li>
            <Link to="/" hash="contact" className="hover:text-gold transition-colors">
              Contact
            </Link>
          </li>
        </ul>
        <a
          href="https://www.instagram.com/zor.visuals"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block text-xs tracking-luxury text-foreground hover:text-gold transition-colors uppercase"
        >
          Inquire
        </a>
      </nav>
    </header>
  );
}
