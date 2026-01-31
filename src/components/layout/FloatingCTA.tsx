import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const FloatingCTA = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", bounce: 0.5 }}
    >
      <Link to="/contact">
        <motion.button
          className="px-6 py-3 bg-gradient-cta text-brown font-semibold rounded-2xl shadow-lifted border-2 border-soft-pink/30 animate-pulse-glow"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          💌 Commission Me
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default FloatingCTA;
