import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Star } from "../ui/FloatingDoodles";

const navLinks = [
  { path: "/", label: "Home", icon: "🏠" },
  { path: "/works", label: "Works", icon: "🎨" },
  { path: "/about", label: "About", icon: "🌸" },
  { path: "/services", label: "Services", icon: "💼" },
  { path: "/contact", label: "Contact", icon: "💌" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/80 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.span 
            className="text-2xl md:text-3xl font-heading text-brown"
            whileHover={{ scale: 1.05 }}
          >
            moschimow.arts
          </motion.span>
          <motion.div
            className="text-soft-pink"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="w-5 h-5" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        {/* <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="relative group flex items-center gap-1.5 text-foreground font-medium transition-colors hover:text-brown"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.icon}
                </span>
                <span>{link.label}</span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-soft-pink rounded-full"
                    transition={{ type: "spring", bounce: 0.3 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul> */}

        {/* Mobile Menu Button */}
        {/* <motion.button
          className="md:hidden p-2 rounded-lg bg-primary/50 text-brown"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button> */}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-lg border-t border-border"
          >
            {/* <ul className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                      location.pathname === link.path
                        ? "bg-soft-pink/30 text-brown"
                        : "hover:bg-secondary/50 text-foreground"
                    }`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
