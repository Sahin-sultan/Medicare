import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const FadeIn = ({ children, delay = 0, direction = "up" }: FadeInProps) => {
  const directionOffset = {
    up: 50,
    down: -50,
    left: 50,
    right: -50,
  };

  const offset = direction === "up" || direction === "down" ? { y: directionOffset[direction] } : { x: directionOffset[direction] };

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...offset
      }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;