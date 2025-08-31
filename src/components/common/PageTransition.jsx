// components/PageTransition.js
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
gsap.registerPlugin(ScrollTrigger);

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
        key={router.asPath}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        onAnimationComplete={() => {
          ScrollTrigger.refresh();
          if (window.lenis) {
            window.lenis.stop();
            window.scrollTo(0, 0);
            window.lenis.start();
          } else {
            window.scrollTo(0, 0);
          }
        }}

        className=" w-full"
      >
        {children}
      </motion.div>

    </AnimatePresence>
  );
}
