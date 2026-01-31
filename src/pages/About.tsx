import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FloatingDoodles, Star, Heart, Flower } from "@/components/ui/FloatingDoodles";
import dantiPortrait from "@/assets/danti-portrait.png";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <FloatingDoodles />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src={dantiPortrait}
                alt="Danti - Illustrator"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-lifted"
              />
              <motion.div 
                className="absolute -top-6 -right-6 text-soft-pink"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Star className="w-12 h-12" />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 text-secondary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-10 h-10" />
              </motion.div>
              <motion.div 
                className="absolute top-1/2 -right-8 text-accent"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Flower className="w-8 h-8" />
              </motion.div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-heading text-brown mb-4">
                Hi, I'm Danti! 🌼
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Illustrator • Dreamer • Memory Keeper
              </p>
              
              <div className="space-y-4 text-foreground">
                <p>
                  Welcome to my little corner of the internet! I'm Danti, the artist behind moschimow.arts.
                </p>
                <p>
                  I've always believed that memories are too precious to be forgotten. That's why I started creating illustrations—to capture special moments, emotions, and stories in a fun and meaningful way.
                </p>
                <p>
                  My style is all about warmth, cuteness, and a touch of whimsy. I love drawing people, their pets, their favorite places, and the little things that make life beautiful ✨
                </p>
                <p>
                  When I'm not illustrating, you'll find me sipping coffee, watching animated movies, or doodling in my sketchbook!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Love Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-brown text-center mb-12"
          >
            What I Love to Draw 💕
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "👤", title: "Portraits & People", text: "Capturing personalities and emotions" },
              { icon: "🐾", title: "Pets & Animals", text: "Bringing furry friends to life" },
              { icon: "🎁", title: "Special Moments", text: "Weddings, birthdays, milestones" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card rounded-2xl p-8 text-center shadow-soft border border-border"
              >
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h3 className="text-2xl font-heading text-brown mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Values Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-brown text-center mb-12"
          >
            What Drives Me ✨
          </motion.h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { icon: "💛", title: "Heartfelt Work", text: "Every piece is made with care and intention" },
              { icon: "🎨", title: "Creative Joy", text: "I genuinely love what I do" },
              { icon: "🤝", title: "Collaboration", text: "Your vision + my skills = magic" },
              { icon: "⭐", title: "Quality", text: "No rush, just beautiful results" },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft"
              >
                <span className="text-3xl">{value.icon}</span>
                <div>
                  <h3 className="font-semibold text-brown">{value.title}</h3>
                  <p className="text-muted-foreground">{value.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-brown text-center mb-12"
          >
            Random Things About Me 🌈
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "☕ Coffee addict",
              "🎮 Loves cozy games",
              "📚 Bookworm",
              "🎵 Always listening to lofi",
              "🌸 Flower enthusiast",
              "🍰 Sweet tooth",
              "🌙 Night owl",
              "✈️ Travel dreamer",
            ].map((fact, index) => (
              <motion.span
                key={fact}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="px-4 py-2 bg-soft-pink/30 rounded-full text-brown font-medium"
              >
                {fact}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Availability CTA */}
      <section className="py-20 bg-gradient-dreamy relative overflow-hidden">
        <FloatingDoodles />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading text-brown mb-6">
              Let's Work Together! 💼
            </h2>
            
            <div className="max-w-xl mx-auto mb-8 space-y-2 text-lg text-foreground">
              <p>✓ Full-time positions (remote or hybrid)</p>
              <p>✓ Freelance commissions</p>
              <p>✓ Collaborative projects</p>
              <p>✓ Commercial illustrations</p>
            </div>
            
            <Link to="/contact">
              <Button variant="cta" size="xl">
                💌 Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
