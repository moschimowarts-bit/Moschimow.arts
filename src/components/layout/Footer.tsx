import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Twitter, Mail, ShoppingBag } from "lucide-react";
import { Star, Heart, Flower } from "../ui/FloatingDoodles";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/moschimow.arts" },
  // { icon: Twitter, label: "Twitter", href: "https://twitter.com/moschimow" },
  { icon: ShoppingBag, label: "Shopee", href: "https://shopee.com/moschimow" },
  { icon: Mail, label: "Email", href: "mailto:moschimow.arts@gmail.com" },
];

const quickLinks = [
  { label: "Works", path: "/works" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-primary/50 pt-16 pb-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 text-soft-pink/30 animate-float">
        <Star className="w-8 h-8" />
      </div>
      <div className="absolute top-12 right-12 text-secondary/40 animate-float-delayed">
        <Heart className="w-6 h-6" />
      </div>
      <div className="absolute bottom-20 left-1/4 text-accent/30 animate-wiggle">
        <Flower className="w-10 h-10" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-heading text-brown mb-3">
              moschimow.arts
            </h3>
            <p className="text-muted-foreground mb-4">
              ✨ capture memories with illustration
            </p>
            <p className="text-sm text-muted-foreground">
              Creating cute and meaningful illustrations that bring your special moments to life.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div className="text-center">
            <h4 className="text-2xl font-heading text-brown mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-foreground hover:text-brown transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      ✨
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-2xl font-heading text-brown mb-4">Connect ✨</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card shadow-soft flex items-center justify-center text-foreground hover:text-brown hover:bg-secondary/50 transition-all"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            © 2025 moschimow.arts by Dhanti
            <span className="text-soft-pink">♥</span>
            Made with love and lots of coffee ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
