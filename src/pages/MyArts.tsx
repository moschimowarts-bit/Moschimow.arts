import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { type SanityDocument } from "next-sanity";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/sanity/client";
import { PostCard } from "@/components/portfolio/PostCard";
import { FloatingDoodles, Star } from "@/components/ui/FloatingDoodles";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc){
  _id, 
  title, 
  slug, 
  publishedAt, 
  image,
  category,
  "imageUrl": image.asset->url
}`;

export default function MyArts() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return await client.fetch<SanityDocument[]>(POSTS_QUERY);
    },
    staleTime: 30 * 1000, // 30 seconds
  });

  // Extract unique categories from posts
  const categories = useMemo(() => {
    if (!posts) return ["All Works"];
    const cats = new Set<string>();
    posts.forEach((post) => {
      if (post.category) {
        cats.add(post.category);
      }
    });
    return ["All Works", ...Array.from(cats).sort()];
  }, [posts]);

  const [activeCategory, setActiveCategory] = useState("All Works");

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    if (activeCategory === "All Works") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [posts, activeCategory]);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <section className="relative py-24 bg-gradient-hero overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-heading text-brown mb-4">
              ✨ My Arts ✨
            </h1>
            <p className="text-lg text-muted-foreground">Loading...</p>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <section className="relative py-24 bg-gradient-hero overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-heading text-brown mb-4">
              ✨ My Arts ✨
            </h1>
            <p className="text-red-500">Error loading posts: {error.message}</p>
          </div>
        </section>
      </div>
    );
  }

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
            ✨ My Arts ✨
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
      {categories.length > 1 && (
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
      )}

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
            {filteredPosts.map((post, index) => (
              <PostCard key={post._id} post={post} index={index} />
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
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
}