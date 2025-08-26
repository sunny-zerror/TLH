// components/PageTransition.js
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

export default function PageTransition({ children }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.asPath} // important to trigger re-animation
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        className="min-h-screen w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
