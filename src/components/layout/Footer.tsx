export function Footer() {
  return (
    <footer className="w-full py-8 text-center border-t border-border mt-16 text-muted-foreground text-sm flex flex-col items-center justify-center space-y-4">
      <div className="flex items-center space-x-6">
        <a href="mailto:hello@hurevo.cloud" className="hover:text-primary transition-colors">hello@hurevo.cloud</a>
        <a href="https://linkedin.com/company/hurevo" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
      </div>
      <div>
        <p>Made in Jakarta 🇮🇩 | Serving Clients Globally</p>
        <p className="mt-2 text-xs opacity-70">&copy; {new Date().getFullYear()} Hurevo. All rights reserved.</p>
      </div>
    </footer>
  );
}
