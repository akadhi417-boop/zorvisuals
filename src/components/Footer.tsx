export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-wider">
        <p className="font-serif text-gold text-base uppercase">ZOR Visuals</p>
        <p>© {new Date().getFullYear()} ZOR Visuals. All rights reserved.</p>
      </div>
    </footer>
  );
}
