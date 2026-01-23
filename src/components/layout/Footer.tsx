import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  platform: [
    { label: "Platform", href: "#platform" },
    { label: "Marketplace", href: "#marketplace" },
    { label: "How It Works", href: "#how-it-works" },
  ],
  participants: [
    { label: "Investors", href: "#participants" },
    { label: "Issuers", href: "#participants" },
    { label: "Brokers", href: "#participants" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-dark text-xl">E</span>
              </div>
              <span className="font-display font-semibold text-xl text-light">
                EquiX<span className="text-gold">Token</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Digitising the Real Estate Value Chain — modernising how property assets are structured, owned, transacted, and managed.
            </p>
            <a
              href="mailto:hello@equixtoken.com"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm"
            >
              hello@equixtoken.com
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-display font-semibold text-light mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Participants Links */}
          <div>
            <h4 className="font-display font-semibold text-light mb-4">Participants</h4>
            <ul className="space-y-3">
              {footerLinks.participants.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-light mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} EquiXToken Capital. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm italic">
            Digitising the Real Estate Value Chain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
