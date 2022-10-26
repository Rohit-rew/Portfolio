import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import react from "react";


export default react.memo(function Displaypinboard(props) {
  console.log(props);

  const { scrollY } = useScroll();
  const [scroll, setscroll] = react.useState();

  react.useEffect(() => {
    return scrollY.onChange((val) => {
      setscroll(val / 12);
    });
  }, [scrollY]);

  return (
    <div className="displaypins">
      <div className="pinboardcontainer">
        <motion.img
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          initial={{ y: 60, opacity: 0 }}
          src="/banners/1.png"
          className="pinboard pin-start  "
          width={"240px"}
        ></motion.img>

        <motion.img
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          initial={{ y: 60, opacity: 0 }}
          style={{ marginTop: 60 - scroll }}
          src="/banners/1.png"
          className="pinboard tablet-start "
          width={"240px"}
        ></motion.img>

        <motion.img
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          initial={{ y: 60, opacity: 0 }}
          style={{ marginTop: 120 - scroll * 2 }}
          src="/banners/2.png"
          className="pinboard mar-60xx "
        ></motion.img>

        <motion.img
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          initial={{ y: 60, opacity: 0 }}
          style={{ marginTop: 180 - scroll * 3 }}
          src="/banners/3.png"
          className="pinboard mar-60xxx "
        ></motion.img>

        <motion.img
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          initial={{ y: 60, opacity: 0 }}
          style={{ marginTop: 120 - scroll * 2 }}
          src="/banners/4.png"
          className="pinboard mar-60xx "
        ></motion.img>

        <motion.img
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          initial={{ y: 60, opacity: 0 }}
          style={{ marginTop: 60 - scroll }}
          src="/banners/5.png"
          className="pinboard  "
        ></motion.img>

        <motion.img
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          initial={{ y: 60, opacity: 0 }}
          src="/banners/5.png"
          className="pinboard pin-end  "
        ></motion.img>
      </div>
    </div>
  );
});


