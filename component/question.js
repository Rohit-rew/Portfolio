import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Question() {
  const [isopen, setisopen] = React.useState(false);

  function openAnswer() {
    setisopen((preval) => {
      return !preval;
    });
  }

  return (
    <div>
      <div className="question" onClick={openAnswer}>
        How much time will you take to develop the website ?
        <motion.p 
        >
        <FontAwesomeIcon id="arrow-icon" icon={faCircleArrowRight} />
        </motion.p>
      </div>
      <AnimatePresence>

        {isopen &&<motion.p 
        animate={{height : "auto" , opacity : 1}}
        transition={{duration : ".7" }}
        initial={{height : 0 , opacity : 0}}
        exit={{height : 0 , opacity:0}}
        className="answer">
          it depends on the scope of the project . <br />
          During our first phone meeting, we will try to define the needs and
          key points of your project: the number of pages, specific
          functionalities, the urgency or the amount of animations needed are
          determining factors that will vary the final price. <br /> For
          example, if all you need is a relevant landing page to increase your
          conversions, then it will cost you between 2500€ and 3500€. On the
          other hand, for a complete site with a dozen pages to be designed and
          integrated, management of the Webflow CMS and the implementation of
          animations to make navigation more fluid, the cost may increase
          significantly depending on the inherent complexity of its creation. My
          goal is always to find a fair price that suits both parties.
        </motion.p>}
        </AnimatePresence>
      <hr />
    </div>
  );
}
