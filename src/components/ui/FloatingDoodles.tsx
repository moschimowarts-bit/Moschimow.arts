import { motion } from "framer-motion";

interface DoodleProps {
  className?: string;
}

export const Star = ({ className = "" }: DoodleProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8l-6.4 4.4 2.4-7.2-6-4.8h7.6L12 2z" />
  </svg>
);

export const Heart = ({ className = "" }: DoodleProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const Flower = ({ className = "" }: DoodleProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="12" cy="12" r="3" />
    <ellipse cx="12" cy="5" rx="2" ry="3" />
    <ellipse cx="12" cy="19" rx="2" ry="3" />
    <ellipse cx="5" cy="12" rx="3" ry="2" />
    <ellipse cx="19" cy="12" rx="3" ry="2" />
    <ellipse cx="7" cy="7" rx="2" ry="2.5" transform="rotate(-45 7 7)" />
    <ellipse cx="17" cy="7" rx="2" ry="2.5" transform="rotate(45 17 7)" />
    <ellipse cx="7" cy="17" rx="2" ry="2.5" transform="rotate(45 7 17)" />
    <ellipse cx="17" cy="17" rx="2" ry="2.5" transform="rotate(-45 17 17)" />
  </svg>
);

export const Sparkle = ({ className = "" }: DoodleProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
  </svg>
);

export const Cloud = ({ className = "" }: DoodleProps) => (
  <svg viewBox="0 0 64 40" fill="currentColor" className={className}>
    <ellipse cx="20" cy="28" rx="16" ry="12" />
    <ellipse cx="38" cy="24" rx="18" ry="14" />
    <ellipse cx="52" cy="28" rx="12" ry="10" />
    <ellipse cx="30" cy="18" rx="14" ry="10" />
  </svg>
);

interface FloatingDoodleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const FloatingDoodle = ({ 
  children, 
  className = "", 
  delay = 0,
  duration = 6 
}: FloatingDoodleProps) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: 1, 
      y: [0, -10, 0],
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      y: { duration, repeat: Infinity, ease: "easeInOut", delay }
    }}
  >
    {children}
  </motion.div>
);

export const FloatingDoodles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <FloatingDoodle className="top-[10%] left-[5%] text-soft-pink/40" delay={0}>
      <Star className="w-6 h-6" />
    </FloatingDoodle>
    <FloatingDoodle className="top-[20%] right-[10%] text-secondary/60" delay={0.5}>
      <Heart className="w-5 h-5" />
    </FloatingDoodle>
    <FloatingDoodle className="top-[15%] left-[20%] text-accent/50" delay={1} duration={8}>
      <Sparkle className="w-4 h-4" />
    </FloatingDoodle>
    <FloatingDoodle className="bottom-[30%] right-[5%] text-soft-pink/30" delay={1.5}>
      <Flower className="w-8 h-8" />
    </FloatingDoodle>
    <FloatingDoodle className="bottom-[20%] left-[8%] text-soft-blue/40" delay={2}>
      <Star className="w-5 h-5" />
    </FloatingDoodle>
    <FloatingDoodle className="top-[40%] right-[15%] text-secondary/40" delay={2.5} duration={7}>
      <Heart className="w-4 h-4" />
    </FloatingDoodle>
    <FloatingDoodle className="bottom-[40%] left-[15%] text-accent/40" delay={3}>
      <Sparkle className="w-3 h-3" />
    </FloatingDoodle>
    <FloatingDoodle className="top-[5%] right-[25%] text-soft-pink/25" delay={0.8} duration={10}>
      <Cloud className="w-16 h-10" />
    </FloatingDoodle>
    <FloatingDoodle className="bottom-[10%] right-[20%] text-soft-blue/25" delay={3.5} duration={12}>
      <Cloud className="w-20 h-12" />
    </FloatingDoodle>
  </div>
);

export default FloatingDoodles;
