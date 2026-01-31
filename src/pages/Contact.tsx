import { motion } from "framer-motion";
import { Instagram, Twitter, Mail, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FloatingDoodles, Star, Heart } from "@/components/ui/FloatingDoodles";
import dhantiPortrait from "@/assets/dhanti-portrait.png";

const Contact = () => {
  const contactOptions = [
    {
      icon: Mail,
      title: "Email Me",
      info: "hello@moschimow.arts",
      note: "Best for: Detailed inquiries & commissions",
      href: "mailto:hello@moschimow.arts",
      bg: "bg-primary/50",
    },
    {
      icon: Instagram,
      title: "Instagram",
      info: "@moschimow.arts",
      note: "Best for: Quick questions & updates",
      href: "https://instagram.com/moschimow.arts",
      bg: "bg-soft-pink/30",
    },
    {
      icon: Twitter,
      title: "Twitter",
      info: "@moschimow",
      note: "Best for: Casual chats",
      href: "https://twitter.com/moschimow",
      bg: "bg-soft-blue/30",
    },
    {
      icon: ShoppingBag,
      title: "Order Now",
      info: "Ready-made prints & commissions",
      note: "Best for: Quick purchases",
      href: "#",
      bg: "bg-secondary/50",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <FloatingDoodles />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading text-brown mb-4"
          >
            Let's Create Something Cute Together ✨
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            I'd love to hear from you! Whether you have a commission idea, collaboration proposal, or just want to say hi 💛
          </motion.p>
          
          <motion.img
            src={dhantiPortrait}
            alt="Dhanti waving"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-40 h-40 rounded-full mx-auto shadow-lifted object-cover border-4 border-soft-pink/30"
          />
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`${option.bg} rounded-2xl p-6 text-center shadow-soft border border-border block`}
              >
                <option.icon className="w-12 h-12 mx-auto mb-4 text-brown" />
                <h3 className="text-xl font-heading text-brown mb-1">{option.title}</h3>
                <p className="text-sm text-foreground mb-2">{option.info}</p>
                <p className="text-xs text-muted-foreground">{option.note}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/30 relative">
        <div className="absolute top-10 right-10 text-soft-pink/20">
          <Star className="w-16 h-16 animate-float" />
        </div>
        <div className="absolute bottom-20 left-10 text-secondary/20">
          <Heart className="w-12 h-12 animate-wiggle" />
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-brown text-center mb-8">
              Or Fill This Form 📝
            </h2>
            
            <form className="bg-card rounded-2xl p-8 shadow-lifted space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  placeholder="What should I call you?"
                  className="rounded-xl border-border bg-background focus:ring-soft-pink"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-xl border-border bg-background focus:ring-soft-pink"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <Select>
                  <SelectTrigger className="rounded-xl border-border bg-background">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="personal">Personal Illustration</SelectItem>
                    <SelectItem value="commission">Commission</SelectItem>
                    <SelectItem value="commercial">Commercial Work</SelectItem>
                    <SelectItem value="collaboration">Collaboration</SelectItem>
                    <SelectItem value="hello">Just Saying Hi!</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your idea or just say hello! ✨"
                  rows={5}
                  className="rounded-xl border-border bg-background focus:ring-soft-pink resize-none"
                />
              </div>
              
              <Button variant="cta" size="lg" className="w-full">
                Send Message 💌
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Response Time Note */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center bg-primary/50 rounded-2xl p-6 shadow-soft"
          >
            <p className="text-foreground">
              💛 I usually respond within 24 hours! If you don't hear back, please check your spam folder or send a follow-up message.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-gradient-dreamy relative overflow-hidden">
        <FloatingDoodles />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading text-brown mb-8">
              You Can Also Find Me Here 🌸
            </h2>
            
            <div className="flex justify-center gap-4">
              {[
                { icon: Instagram, href: "https://instagram.com/moschimow.arts" },
                { icon: Twitter, href: "https://twitter.com/moschimow" },
                { icon: ShoppingBag, href: "#" },
                { icon: Mail, href: "mailto:hello@moschimow.arts" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-xl bg-card shadow-soft flex items-center justify-center text-brown hover:bg-soft-pink/30 transition-colors"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
