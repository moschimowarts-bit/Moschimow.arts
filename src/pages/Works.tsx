import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioItems, categories } from "@/data/portfolio";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { FloatingDoodles, Star } from "@/components/ui/FloatingDoodles";

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("All Works");

  const filteredWorks = activeCategory === "All Works"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

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
            ✨ My Works ✨
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of memories brought to life through illustration
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background sticky top-16 z-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-soft-pink/50 text-brown shadow-soft"
                    : "bg-transparent border border-border text-muted-foreground hover:border-soft-pink hover:text-brown"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background relative">
        <div className="absolute top-20 right-10 text-soft-pink/20">
          <Star className="w-16 h-16 animate-float" />
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredWorks.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {filteredWorks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl font-heading text-muted-foreground">
                No works found in this category yet ✨
              </p>
              <p className="text-muted-foreground mt-2">
                Check back soon for more illustrations!
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Works;
