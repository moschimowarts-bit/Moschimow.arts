import * as React from "react";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { type SanityDocument } from "next-sanity";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/client";
import { Button } from "@/components/ui/button";
import { FloatingDoodles, Star, Heart, Sparkle } from "@/components/ui/FloatingDoodles";
import { PostCard } from "@/components/portfolio/PostCard";
import { categories } from "@/data/portfolio";
import { ChevronDown, Instagram, Twitter, Mail, ShoppingBag } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dhantiPortrait from "@/assets/dhanti-portrait.png";

const POSTS_QUERY = `
*[_type == "contentPost"]{ _id, title,image,category }
`;

const Index = () => {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return await client.fetch<SanityDocument[]>(POSTS_QUERY);
    },
    staleTime: 30 * 1000,
  });

  const [activeCategory, setActiveCategory] = useState("All Works");

  const featuredWorks = useMemo(() => {
    if (!posts) return [];
    // If you want to filter by "featured", you need a way to know what is featured.
    // The query doesn't return a "featured" field. 
    // Assuming we just show all posts for now, filtered by category.

    if (activeCategory === "All Works") {
      return posts;
    }

    return posts.filter((item) => item.category === activeCategory);
  }, [posts, activeCategory]);

  const chunkedWorks = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < featuredWorks.length; i += 6) {
      chunks.push(featuredWorks.slice(i, i + 6));
    }
    return chunks;
  }, [featuredWorks]);

  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <FloatingDoodles />

        <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center relative z-10">
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading text-brown mb-4"
          >
            moschimow.arts
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-foreground mb-8"
          >
            ✨ capture memories with illustration ✨
          </motion.p>

          {/* Self Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="relative mb-8"
          >
            <motion.img
              src={dhantiPortrait}
              alt="Dhanti - Illustrator"
              className="w-64 md:w-80 h-auto rounded-3xl shadow-lifted"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Decorative elements around portrait */}
            <motion.div
              className="absolute -top-4 -right-4 text-soft-pink"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-8 h-8" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-4 text-secondary"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-6 h-6" />
            </motion.div>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-foreground max-w-2xl mb-10"
          >
            Hi! I'm Dhanti, an illustrator who loves turning memories into cute and meaningful illustrations 🌼
          </motion.p>

          {/* CTA Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/works">
              <Button variant="heroPrimary" size="lg">
                🎨 View My Works
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg">
                💌 Work With Me
              </Button>
            </Link>
          </motion.div> */}

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2">scroll to see more ✨</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 bg-background relative">
        <div className="absolute top-10 right-10 text-soft-pink/20">
          <Star className="w-16 h-16 animate-float" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading text-brown mb-4">
              ✨ Featured Works ✨
            </h2>
            <p className="text-lg text-muted-foreground">
              Here are some of my favorite pieces!
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full font-medium transition-all ${activeCategory === category
                    ? "bg-soft-pink/50 text-brown shadow-soft"
                    : "bg-transparent border border-border text-muted-foreground hover:border-soft-pink hover:text-brown"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {chunkedWorks.map((chunk, chunkIndex) => (
                <CarouselItem key={chunkIndex}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
                    {chunk.map((project, index) => (
                      <PostCard key={project._id} post={project} index={index} />
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {chunkedWorks.length > 1 && (
              <>
                <CarouselPrevious className="-left-4 lg:-left-12 h-12 w-12 border-2 border-brown text-brown hover:bg-soft-pink/20 hover:text-brown transition-colors" />
                <CarouselNext className="-right-4 lg:-right-12 h-12 w-12 border-2 border-brown text-brown hover:bg-soft-pink/20 hover:text-brown transition-colors" />
              </>
            )}
          </Carousel>

          {/* Indicators */}
          {chunkedWorks.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${current === index + 1
                      ? "w-8 bg-brown"
                      : "w-3 bg-brown/30 hover:bg-brown/50"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {featuredWorks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl font-heading text-muted-foreground">
                No featured works in this category yet ✨
              </p>
              <p className="text-muted-foreground mt-2">
                Check back soon for more illustrations!
              </p>
            </motion.div>
          )}

          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/works">
              <Button variant="hero" size="lg">
                See All Works →
              </Button>
            </Link>
          </motion.div> */}
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-10 text-accent/30">
          <Heart className="w-12 h-12 animate-wiggle" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={dhantiPortrait}
                alt="Dhanti creating art"
                className="w-full max-w-md mx-auto rounded-3xl shadow-lifted"
              />
              <div className="absolute -bottom-4 -right-4 bg-soft-pink/30 rounded-2xl p-4">
                <Sparkle className="w-8 h-8 text-soft-pink animate-sparkle" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading text-brown mb-6">
                Nice to Meet You! 🌸
              </h2>

              <div className="space-y-4 text-foreground mb-8">
                <p>

                  Hi🌼! I’m Dhanti, I am an illustrator who loves drawing cute, warm illustration inspired by memories, personal growth, and little life moments 🌼. I like turning feelings and experiences into drawings ✨🍡

                </p>
                <p>
                  mostly i draw about food and buildings 🥐🏡, like comfort meals, favorite places, and moment you want to keep forever 🍃.
                </p>
                <p>
                  i'm certified moccacino addict ☕🍫, and i'm a huuge fans of flowers 🌸🌼, and ofc human who's constanty learning how to be a better version of myself  (still in progress)✨👀.
                </p>
                <p>
                if you like art that feels warm, personal, cutesy, and a little nostalgic, welcome 🍡 ,you're in the right place ✨🤍
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎨</span>
                  <span className="text-sm font-medium">Style: Cute & Whimsical</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">💼</span>
                  <span className="text-sm font-medium">Available for: Commission</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌍</span>
                  <span className="text-sm font-medium">Based in: Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">💌</span>
                  <span className="text-sm font-medium">Open to: Remote Work</span>
                </div>
              </div>

              {/* <Link to="/about">
                <Button variant="hero">
                  Learn More About Me →
                </Button>
              </Link> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading text-brown mb-4">
              How I Work ✨
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "💬", title: "Brief", text: "Share your ideas & vision with me", bg: "bg-primary" },
              { icon: "✏️", title: "Sketch", text: "I make the sketch ", bg: "bg-secondary" },
              { icon: "🎨", title: "Final Art", text: "Enjoy your illustration", bg: "bg-accent" },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`${step.bg} rounded-2xl p-8 text-center shadow-soft`}
              >
                <span className="text-5xl mb-4 block">{step.icon}</span>
                <h3 className="text-2xl font-heading text-brown mb-2">{step.title}</h3>
                <p className="text-foreground">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 bg-gradient-to-b from-primary/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading text-brown mb-4">
              Let's Connect! 💫
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Instagram, label: "Instagram", handle: "@moschimow.arts", cta: "Follow Me", href: "https://instagram.com/moschimow.arts", bg: "bg-soft-pink/30" },
              // { icon: Twitter, label: "Twitter", handle: "@moschimow", cta: "Say Hi", href: "https://x.com/moschimow", bg: "bg-soft-blue/30" },
              { icon: ShoppingBag, label: "Shopee", handle: "Shop Prints", cta: "Visit Shop", href: "https://shopee.com/moschimow", bg: "bg-secondary/50" },
              { icon: Mail, label: "Email", handle: "moschimow.arts@gmail.com ", cta: "Email Me", href: "mailto:moschimow.arts@gmail.com ", bg: "bg-accent/50" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`${social.bg} rounded-2xl p-6 text-center shadow-soft block`}
              >
                <social.icon className="w-10 h-10 mx-auto mb-4 text-brown" />
                <h3 className="text-xl font-heading text-brown mb-1">{social.label}</h3>
                <p className="text-sm text-muted-foreground mb-3">{social.handle}</p>
                <span className="inline-block px-4 py-2 bg-card rounded-full text-sm font-medium text-brown">
                  {social.cta}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-dreamy relative overflow-hidden">
        <FloatingDoodles />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-heading text-brown mb-6">
              Ready to Work Together? ✨
            </h2>
            <p className="text-xl text-foreground mb-10">
              Let's create something cute and memorable!
            </p>

            {/* <Link to="/contact">
              <Button variant="cta" size="xl">
                💌 Commission Me Now
              </Button>
            </Link> */}

            {/* <p className="mt-6 text-muted-foreground">
              <Link to="/works" className="hover:text-brown transition-colors underline underline-offset-4">
                or browse my portfolio first →
              </Link>
            </p> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
