import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

export default React.memo(function Verticalcards() {

  const ref = useRef(null)
  const [scroll, setscroll] = React.useState();
  const [scroppprogress, setscroppprogress] = React.useState();
  const { scrollY , scrollYProgress } = useScroll({
    target : ref,
    offset: ["start end", "end start"]
  });
  
  React.useEffect(() => {

    setscroppprogress(scrollYProgress.current)
    scrollY.onChange((val) => {
      setscroll(() => {
        return val > 3700 ? val - 3700 : 0;
      });
    });
  }, [scroll]);

  return (
    <>
      <div className="mobile-only">
        <div className="moving-cards-mobile">
          <img src="/banners/1.png" />
          <img src="/banners/2.png" />
        </div>

        <div className="static-cards-mobile">
          <img src="/banners/3.png" />
          <img src="/banners/4.png" />
          <img src="/banners/5.png" />
        </div>
      </div>

      
      <div className="verticalcards">
        <div className="left-textcontainer">
          <p className="minitext">WEBDESIGN</p>
          <h2>Event Oriented</h2>
          <p>
            No more same templates <br /> I can craft your graphic identity,
            edit a corporate brand book, create your entire webdesign and
            develop your website :
            <span>
              {" "}
              I ensure your website looks good and unique in its own way unique
              in its own way.
            </span>
          </p>
        </div>

        <div className="right-cardcontainer">
          <div
            // style={{ transform: `translateY(-${scroll / 3}px)` }}
            style={{ transform: `translateY(-${scroppprogress*590}px)` }}
            className="moving-cards"
          >
            <img src="/banners/4.png" />
            <img src="/banners/5.png" />
          </div>

          <div ref={ref} className="fixed-cards">
            <img src="/banners/1.png" />
            <img src="/banners/2.png" />
            <img src="/banners/3.png" />
          </div>
        </div>
      </div>
    </>
  );
});
