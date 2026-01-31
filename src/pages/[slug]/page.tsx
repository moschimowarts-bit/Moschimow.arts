import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder, { SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Palette, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/portfolio/PostCard";
import { FloatingDoodles, Sparkle } from "@/components/ui/FloatingDoodles";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  category,
  body,
  description
}`;

const RELATED_POSTS_QUERY = `*[
  _type == "post" 
  && defined(slug.current)
  && slug.current != $slug
]|order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  category
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      if (!slug) throw new Error("Slug is required");
      return await client.fetch<SanityDocument>(POST_QUERY, { slug });
    },
    enabled: !!slug,
    staleTime: 30 * 1000, // 30 seconds
  });

  const { data: relatedPosts } = useQuery({
    queryKey: ["relatedPosts", slug],
    queryFn: async () => {
      if (!slug) return [];
      return await client.fetch<SanityDocument[]>(RELATED_POSTS_QUERY, { slug });
    },
    enabled: !!slug && !!post,
    staleTime: 30 * 1000,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-heading text-brown mb-4">
            Oops! Post not found ✨
          </h1>
          <Link to="/my-arts">
            <Button variant="hero">← Back to Arts</Button>
          </Link>
        </div>
      </div>
    );
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(800).url()
    : null;

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link to="/my-arts">
          <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-brown">
            <ArrowLeft size={20} />
            Back to Arts
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative max-w-4xl mx-auto"
          >
            {postImageUrl && (
              <>
                <img
                  src={postImageUrl}
                  alt={post.title || "Post image"}
                  className="w-full rounded-3xl shadow-lifted"
                />
                <motion.div
                  className="absolute -top-4 -right-4 text-soft-pink"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkle className="w-8 h-8" />
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Post Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl md:text-5xl font-heading text-brown mb-6"
              >
                {post.title || "Untitled"}
              </motion.h1>
              
              {post.description && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-foreground mb-8"
                >
                  {post.description}
                </motion.p>
              )}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose max-w-none text-foreground prose-headings:text-brown prose-a:text-soft-pink"
              >
                {Array.isArray(post.body) && <PortableText value={post.body} />}
                {!post.body && (
                  <>
                    <p>
                      This illustration was created with love and attention to detail. 
                      Each piece I create tells a unique story and captures special moments 
                      that deserve to be remembered forever.
                    </p>
                    <p>
                      My process involves understanding the vision, creating initial sketches, 
                      and refining the artwork until it perfectly captures the essence of the story.
                    </p>
                  </>
                )}
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 grid sm:grid-cols-2 gap-4"
              >
                {publishedDate && (
                  <div className="flex items-center gap-3 p-4 bg-primary/50 rounded-xl">
                    <Calendar className="w-5 h-5 text-brown" />
                    <div>
                      <span className="text-sm text-muted-foreground">Published</span>
                      <p className="font-medium text-foreground">{publishedDate}</p>
                    </div>
                  </div>
                )}
                {post.category && (
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <Tag className="w-5 h-5 text-brown" />
                    <div>
                      <span className="text-sm text-muted-foreground">Category</span>
                      <p className="font-medium text-foreground">{post.category}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-xl">
                  <Palette className="w-5 h-5 text-brown" />
                  <div>
                    <span className="text-sm text-muted-foreground">Style</span>
                    <p className="font-medium text-foreground">Cute & Whimsical</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-soft-pink/30 rounded-xl">
                  <Clock className="w-5 h-5 text-brown" />
                  <div>
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <p className="font-medium text-foreground">3-5 days</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-cta rounded-2xl p-8 h-fit shadow-lifted"
            >
              <h3 className="text-2xl font-heading text-brown mb-4">
                Love This Style? ✨
              </h3>
              <p className="text-foreground mb-6">
                I can create something similar for you! Let's bring your vision to life.
              </p>
              
              <Link to="/contact" className="block mb-4">
                <Button variant="heroPrimary" size="lg" className="w-full">
                  💌 Commission Me
                </Button>
              </Link>
              
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" size="lg" className="w-full">
                  🔗 See on Instagram
                </Button>
              </a>
              
              <div className="mt-6 pt-6 border-t border-brown/20 text-sm text-foreground">
                <p className="mb-2">💰 Starting from $XX</p>
                <p>⏱️ Turnaround: 5-7 days</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-background to-primary/30 relative">
          <FloatingDoodles />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading text-brown text-center mb-12"
            >
              More Works You Might Like 🌸
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <PostCard key={relatedPost._id} post={relatedPost} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}