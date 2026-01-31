import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PortfolioItem } from "@/data/portfolio";
import { Sparkle } from "../ui/FloatingDoodles";

interface ProjectCardProps {
  project: PortfolioItem;
  index?: number;
}

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      {/* <Link to={`/works/${project.id}`}> */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-card shadow-soft border border-border"
          whileHover={{ scale: 1.03, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              className="absolute top-4 right-4 text-soft-pink"
            >
              <Sparkle className="w-6 h-6 animate-sparkle" />
            </motion.div>
            
            <h3 className="text-2xl font-heading text-brown text-center mb-2">
              {project.title}
            </h3>
            <span className="px-3 py-1 bg-soft-pink/30 text-brown text-sm rounded-full">
              {project.category}
            </span>
            <p className="text-sm text-foreground/80 text-center mt-3 line-clamp-2">
              {project.description}
            </p>
          </motion.div>

          {/* Corner Decoration */}
          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-soft-pink text-xl">✨</span>
          </div>
        </motion.div>
      {/* </Link> */}
    </motion.div>
  );
};

export default ProjectCard;
