/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

export default function Slider() {
  return (
    <div className="slider">
      <div className="slidercontainer">
        <p>FULL STACK CUSTOM WEBSITE DEVELOPER</p>
        <h1>
          Impactful branding and high-end <br />
          Custom websites for creatives
        </h1>
        <button>Lets start a project together</button>
      </div>

      <div className="movingbanners">

        <motion.div 
        animate={{x :-700}} 
        transition={{duration : 20 , repeat : Infinity , ease:"linear" ,delay:1.5 }}
        initial={{x : 0}}

        className="bannercontainer">
          <img src="/banner icons/1.png" alt="tech-icons" />
          <img
            className="horimage"
            src="/banner icons/4.png"
            alt="tech-icons"
          />
          <img src="/banner icons/2.png" alt="tech-icons" />
          <img src="/banner icons/3.png" alt="tech-icons" />
          <img
            className="horimage"
            src="/banner icons/6.png"
            alt="tech-icons"
          />
          <img src="/banner icons/9.png" alt="tech-icons" />
          <img src="/banner icons/11.png" alt="tech-icons" />
          <img
            className="horimage"
            src="/banner icons/7.png"
            alt="tech-icons"
          />
          <img src="/banner icons/12.png" alt="tech-icons" />
          <img
            className="horimage"
            src="/banner icons/5.png"
            alt="tech-icons"
          />
          <img src="/banner icons/13.png" alt="tech-icons" />
        </motion.div>
      </div>
    </div>
  );
}



