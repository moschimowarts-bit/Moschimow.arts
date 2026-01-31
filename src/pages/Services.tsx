import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FloatingDoodles, Star } from "@/components/ui/FloatingDoodles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const services = [
    {
      icon: "🎨",
      title: "Personal Portrait",
      description: "Beautiful illustrations of you, your loved ones, or special moments",
      price: "From $50",
      examples: "Solo, couple, family, pet portraits",
      bg: "bg-primary/50",
    },
    {
      icon: "💕",
      title: "Couple & Family Art",
      description: "Celebrate your bond with custom artwork perfect for gifts or home decor",
      price: "From $75",
      examples: "Anniversary, wedding, family reunion",
      bg: "bg-secondary/50",
    },
    {
      icon: "💼",
      title: "Commercial Projects",
      description: "Professional illustrations for your brand, products, or marketing",
      price: "Custom Quote",
      examples: "Branding, packaging, social media",
      bg: "bg-accent/50",
    },
    {
      icon: "⭐",
      title: "Character Creation",
      description: "Original characters, mascots, or OC designs brought to life",
      price: "From $60",
      examples: "Mascots, avatars, game characters",
      bg: "bg-soft-pink/30",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: "💬",
      title: "Share Your Idea",
      description: "Tell me about your vision, preferences, and any reference images",
    },
    {
      number: "02",
      icon: "✏️",
      title: "Review Sketch",
      description: "I'll create initial sketches for your approval",
    },
    {
      number: "03",
      icon: "🎨",
      title: "Coloring & Details",
      description: "Watch your illustration come to life with colors and finishing touches",
    },
    {
      number: "04",
      icon: "✨",
      title: "Final Delivery",
      description: "Receive high-resolution files ready to print or share!",
    },
  ];

  const faqs = [
    {
      question: "How long does it take?",
      answer: "Usually 5-7 days depending on complexity! Rush orders are available for an additional fee.",
    },
    {
      question: "Can I request revisions?",
      answer: "Yes! You get 2-3 revisions included depending on the package you choose.",
    },
    {
      question: "What file formats do I get?",
      answer: "High-res PNG and JPG, perfect for printing and digital use! Vector formats available for commercial work.",
    },
    {
      question: "Do you offer rush orders?",
      answer: "Yes, for an additional fee I can prioritize your order! Contact me for availability.",
    },
    {
      question: "How do I pay?",
      answer: "I accept PayPal, bank transfer, and Shopee for Indonesian clients. 50% deposit required to start.",
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
            className="text-5xl md:text-7xl font-heading text-brown mb-4"
          >
            Let's Create Together! ✨
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Custom illustrations made with love, just for you
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-brown text-center mb-12"
          >
            What I Offer 🎨
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`${service.bg} rounded-2xl p-8 shadow-soft border border-border`}
              >
                <span className="text-5xl mb-4 block">{service.icon}</span>
                <h3 className="text-2xl font-heading text-brown mb-2">{service.title}</h3>
                <p className="text-foreground mb-4">{service.description}</p>
                <p className="text-xl font-bold text-brown mb-2">{service.price}</p>
                <p className="text-sm text-muted-foreground mb-6">{service.examples}</p>
                <Link to="/contact">
                  <Button variant="hero" className="w-full">
                    Order Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-brown text-center mb-12"
          >
            How It Works 🌸
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-soft-pink/30 hidden md:block" />
              
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-6 mb-8"
                >
                  <div className="relative z-10 w-16 h-16 bg-soft-pink/50 rounded-full flex items-center justify-center text-2xl shadow-soft flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1 bg-card rounded-2xl p-6 shadow-soft">
                    <span className="text-sm text-soft-pink font-bold">{step.number}</span>
                    <h3 className="text-xl font-heading text-brown mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-background relative">
        <div className="absolute top-10 right-10 text-soft-pink/20">
          <Star className="w-16 h-16 animate-float" />
        </div>
        
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-brown text-center mb-12"
          >
            Pricing Tiers 💰
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$50",
                features: ["1 character", "Simple background", "1 revision", "Digital file"],
                bg: "bg-card",
                popular: false,
              },
              {
                name: "Standard",
                price: "$75",
                features: ["2 characters", "Detailed background", "2 revisions", "Digital + print file"],
                bg: "bg-soft-pink/20",
                popular: true,
              },
              {
                name: "Premium",
                price: "$120",
                features: ["3+ characters", "Complex scene", "Unlimited revisions", "All formats + commercial"],
                bg: "bg-card",
                popular: false,
              },
            ].map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${tier.bg} rounded-2xl p-8 shadow-soft border border-border relative ${
                  tier.popular ? "ring-2 ring-soft-pink" : ""
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-soft-pink text-brown text-sm font-bold rounded-full">
                    Most Popular ✨
                  </span>
                )}
                <h3 className="text-2xl font-heading text-brown mb-2">{tier.name}</h3>
                <p className="text-4xl font-bold text-brown mb-6">{tier.price}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-foreground">
                      <span className="text-soft-pink">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button 
                    variant={tier.popular ? "hero" : "outline"} 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-brown text-center mb-12"
          >
            Common Questions 💭
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 shadow-soft border-none"
                >
                  <AccordionTrigger className="text-left font-medium text-brown hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-dreamy relative overflow-hidden">
        <FloatingDoodles />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading text-brown mb-6">
              Ready to Commission? 💌
            </h2>
            <p className="text-xl text-foreground mb-8">
              Let's turn your vision into beautiful art!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact">
                <Button variant="cta" size="xl">
                  💌 Contact Me Now
                </Button>
              </Link>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="xl">
                  🛒 Order via Shopee
                </Button>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-foreground">
              <span>✓ Fast response</span>
              <span>✓ Friendly communication</span>
              <span>✓ Satisfaction guaranteed</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
