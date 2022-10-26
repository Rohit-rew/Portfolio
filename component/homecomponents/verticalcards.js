import { motion, useScroll } from "framer-motion";
import React from "react";

export default React.memo(function Verticalcards() {
  const { scrollY } = useScroll();
  const [scroll, setscroll] = React.useState();

  React.useEffect(() => {
    scrollY.onChange((val) => {
      setscroll(() => {
        return val > 3700 ? val - 3700 : 0;
      });
    });
  }, [scrollY]);

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
            style={{ transform: `translateY(-${scroll / 3}px)` }}
            className="moving-cards"
          >
            <img src="/banners/4.png" />
            <img src="/banners/5.png" />
          </div>

          <div className="fixed-cards">
            <img src="/banners/1.png" />
            <img src="/banners/2.png" />
            <img src="/banners/3.png" />
          </div>
        </div>
      </div>
    </>
  );
});
