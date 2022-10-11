import React from "react";
import { Hamcontext } from "../context";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Hamburger() {
  const data = React.useContext(Hamcontext);
  console.log(data);

  return (
    <>
      {data.ham && (
        <motion.div
          className="menue"
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: "1", type: "tween", damping: 10 }}
          initial={{ y: "100vh", opacity: 0 }}
        >
          <div className="hamcontainer">
            <hr />
            <div className="hamitem">Home 
            <FontAwesomeIcon icon={faCircleArrowRight} style={{fontSize : '2.5rem'}} />
            </div>
            
            <hr />
            <div className="hamitem">Blogs <FontAwesomeIcon icon={faCircleArrowRight} style={{fontSize : '2.5rem'}} /></div>
            <hr />
            <div className="hamitem">Project <FontAwesomeIcon icon={faCircleArrowRight} style={{fontSize : '2.5rem'}} /></div>
            <hr />
          </div>
        </motion.div>
      )}
    </>
  );
}
