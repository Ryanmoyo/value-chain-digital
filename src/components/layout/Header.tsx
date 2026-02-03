import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import equixtokenLogo from "@/assets/equixtoken-logo.png";
const navLinks = [
  { label: "Platform", href: "#platform", isRoute: false },
  { label: "How It Works", href: "/how-it-works", isRoute: true },
  { label: "Marketplace", href: "#marketplace", isRoute: false },
  { label: "Participants", href: "#participants", isRoute: false },
  { label: "About", href: "#about", isRoute: false },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const NavLink = ({ link }: { link: typeof navLinks[0] }) => {
    if (link.isRoute) {
      return (
        <Link
          to={link.href}
          className={`text-sm font-medium transition-colors duration-300 ${
            location.pathname === link.href
              ? "text-gold"
              : "text-light/70 hover:text-gold"
          }`}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <a
        href={link.href}
        className="text-light/70 hover:text-gold transition-colors duration-300 text-sm font-medium"
      >
        {link.label}
      </a>
    );
  };

  const MobileNavLink = ({ link }: { link: typeof navLinks[0] }) => {
    if (link.isRoute) {
      return (
        <Link
          to={link.href}
          className={`py-2 text-lg transition-colors ${
            location.pathname === link.href
              ? "text-gold"
              : "text-light/70 hover:text-gold"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <a
        href={link.href}
        className="text-light/70 hover:text-gold transition-colors py-2 text-lg"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {link.label}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
      <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={equixtokenLogo} 
              alt="EquixToken Capital Logo" 
              className="w-16 h-16 object-contain"
            />
            <span className="font-display font-semibold text-xl text-light hidden sm:block">
              EquiX<span className="text-gold">Token</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.label} link={link} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="goldOutline" size="sm">
              Partner With Us
            </Button>
            <Button variant="gold" size="sm">
              Get Early Access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-light p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark border-t border-border"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <MobileNavLink key={link.label} link={link} />
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="goldOutline" className="w-full">
                  Partner With Us
                </Button>
                <Button variant="gold" className="w-full">
                  Get Early Access
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
