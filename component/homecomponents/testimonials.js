import React from "react";
import {motion} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight , faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons"

export default function Testimonials() {

  const [image , setimage] = React.useState(1)

  function nextpic(){
    setimage(preval=>{
      
        return preval == 5 ? 1 : preval+1
      })
    }
    
    function prevpic(){
    setimage(preval=>{
      return preval == 1 ? 5 : preval-1
    })
  }


  return (
    <div className="testimonials">
      <div className="testimonial-holder">
        <div className="testimonial-slider">

        <FontAwesomeIcon onClick={prevpic} icon={faCircleArrowLeft} style={{fontSize : '30px'  , zIndex:11 }} />
          <motion.img 
          animate={{opacity:1}}
          transition={{duration : .2}}
          initial={{opacity:0}}
          src={`/squarecards/${image}.png`}/>
        <FontAwesomeIcon  onClick={nextpic} icon={faCircleArrowRight} style={{fontSize : '30px' , zIndex : 10}} />


        </div>

        <div className="testimonial-text">
          <p className="minitext">CUSTOM WEBDEVELOPMENT</p>
          <h2>Your satisfaction <br/> my priority</h2>
          <p className="center-text">
            No more same templates <br /> I can craft your graphic identity,
            edit a corporate brand book, create your entire webdesign and
            develop your website :
            <span>
              I ensure your website looks good and unique in its own way unique
              in its own way.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
