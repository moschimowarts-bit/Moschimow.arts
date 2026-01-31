import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FloatingDoodles, Star, Heart, Flower } from "@/components/ui/FloatingDoodles";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <FloatingDoodles />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="relative inline-block mb-8"
        >
          <span className="text-9xl font-heading text-brown">404</span>
          <motion.div
            className="absolute -top-4 -right-4 text-soft-pink"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-10 h-10" />
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -left-4 text-secondary"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-8 h-8" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-heading text-brown mb-4"
        >
          Oops! This page got lost ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-muted-foreground mb-8 max-w-md mx-auto"
        >
          Don't worry! Let's get you back on track. Maybe you'd like to see some cute illustrations instead?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <Button variant="hero" size="lg">
              🏠 Take Me Home
            </Button>
          </Link>
          <Link to="/works">
            <Button variant="heroOutline" size="lg">
              🎨 View Works
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Flower className="w-20 h-20 mx-auto text-accent/50 animate-wiggle" />
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
