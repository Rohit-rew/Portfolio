import { motion, useScroll } from "framer-motion";
import react from "react";

export default react.memo(function Texttilt() {
  const { scrollY } = useScroll();
  const [scroll, setscroll] = react.useState();

  react.useEffect(() => {
    scrollY.onChange((scrollp) => {
      setscroll(scrollp);
    });
  },[scrollY]);

  return (
    <div className="texttilt">
      <motion.h1
        style={{ transform: `translateX(-${scroll / 4}px)` }}
        className="lineone"
      >
        !-Show me what you've got !-Show me what you've got !-Show me what
        you've got !-Show me what you've got !-Show me what you've got{" "}
      </motion.h1>

      <motion.h1
        style={{ transform: `translateX(${scroll / 4}px)` }}
        className="linetwo"
      >
        Custom-Webdesign-Custom-Custom-Webdesign-Custom-Development-Graphics-Custom-Webdesign-Custom-Development-Graphics
      </motion.h1>
    </div>
  );
})
