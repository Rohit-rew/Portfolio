import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import react from "react";


export default react.memo(function Displaypinboard(props) {

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
          src={props.images.images[0].url}
          className="pinboard pin-start  "
          width={"240px"}
        ></motion.img>

        <motion.img
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          initial={{ y: 60, opacity: 0 }}
          style={{ marginTop: 60 - (scroll || 0) }}
          src={props.images.images[1].url}
          className="pinboard tablet-start "
          width={"240px"}
        ></motion.img>

        <motion.img
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          initial={{ y: 60, opacity: 0 }}
          style={{ marginTop: 120 - ((scroll || 0) * 2) }}
          src={props.images.images[2].url}
          className="pinboard mar-60xx "
        ></motion.img>

        <motion.img
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          initial={{ y: 60, opacity: 0 }}
          style={{ marginTop: 180 - ((scroll || 0) * 3) }}
          src={props.images.images[3].url}
          className="pinboard mar-60xxx "
        ></motion.img>

        <motion.img
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          initial={{ y: 60, opacity: 0 }}
          style={{ marginTop: 120 - ((scroll || 0) * 2) }}
          src={props.images.images[4].url}
          className="pinboard mar-60xx "
        ></motion.img>

        <motion.img
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          initial={{ y: 60, opacity: 0 }}
          style={{ marginTop: 60 - (scroll || 0) }}
          src={props.images.images[5].url}
          className="pinboard  "
        ></motion.img>

        <motion.img
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          initial={{ y: 60, opacity: 0 }}
          src={props.images.images[6].url}
          className="pinboard pin-end  "
        ></motion.img>
      </div>
    </div>
  );
});


