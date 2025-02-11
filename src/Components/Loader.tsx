import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Loader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [viewPortDimension, setViewPortDimension] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (window !== undefined) {
      setViewPortDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  const curveController = 100; // use to control curve
  const texts = [
    "Preheating Oven",
    "Chopping Vegetables",
    "Cooking Ingredients",
    "Plating the Dish",
    "Ready to Serve",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex < texts.length - 1) {
      const interval = setInterval(() => {
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
      }, 700);

      return () => clearInterval(interval); // Cleanup on unmount or interval change
    } else {
      setIsLoading(false);
    }
  }, [currentTextIndex]);
  useEffect(() => {
    if (isLoading) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);
  
  const pathVariants = {
    animate: {
      d: `M0 ${0} Q${viewPortDimension.width / 2} ${0}, ${
        viewPortDimension.width
      } ${0}`,
      transition: {
        duration: 1.6,
        ease: [0.23, 1, 0.32, 1],
        delay: 3.1, // Delay the animation
      },
    },
  };
  return (
    <>
      <AnimatePresence mode={"wait"}>
        {isLoading && (
          <motion.div
            initial={{ translateY: "0%" }}
            exit={{ translateY: "-100%" }}
            transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
            className="w-screen z-[99999] h-lvh bg-black left-0 absolute"
          >
            <svg
              style={{ height: curveController * 1.4 }}
              className="absolute  top-full left-0 w-full "
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d={`M0 ${0} Q${
                  viewPortDimension.width / 2
                } ${curveController}, ${viewPortDimension.width} ${0}`}
                variants={pathVariants}
                animate="animate"
                stroke="black"
                strokeWidth="2"
                fill="black"
              />
            </svg>

            <div className="absolute w-full flex justify-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <motion.p
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-slate-100 text-xl"
                transition={{ duration: 0.5 }}
              >
                <span className="w-2 h-2 bg-slate-100 mb-[3px] inline-block rounded-full" />{" "}
                {texts[currentTextIndex]}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loader;
