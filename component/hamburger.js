import React from "react";
import { Hamcontext } from "../lib/contextapi/mobile_ham_toggler";
import { motion  , AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";



import { faCircleArrowRight  } from "@fortawesome/free-solid-svg-icons";


export default function Hamburger() {

  const data = React.useContext(Hamcontext);
  const Router = useRouter()

  function gohome(){
    Router.push('/')
    data.hamOn()
  }
  
  function goBlogs(){
    Router.push('/blogs')
    data.hamOn()
  }
  
  function goProjects(){
    Router.push('/projects')
    data.hamOn()
  }
  
  return (
    <>
    <AnimatePresence >
      {data.ham && (
        <motion.div
          className="menue"
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration : "1", type: "tween", damping: 10 }}
          initial={{ y: "90vh", opacity: 0 }}
          exit={{opacity : 0 , y : "50vh" }}
        >
          <div className="hamcontainer">
            <motion.hr
            animate={{x:0 , opacity:1}}
            transition={{duration:1 , delay:.4}}
            initial={{x : -350 , opacity : .3}}
            />

            <motion.div 
            onClick={gohome}
            key={1}
            animate={{x:0 , opacity:1}}
            transition={{duration:1 , delay:.6}}
            initial={{x : "-270" , opacity : 0}}
            
            className="hamitem">Home 
            <FontAwesomeIcon icon={faCircleArrowRight} style={{fontSize : '2rem'}} />
            </motion.div>

            <motion.hr 
            animate={{x:0 , opacity:1}}
            transition={{duration:1 , delay:.6}}
            initial={{x : -350 , opacity : .3}}
            />

            <motion.div 
            onClick={goBlogs}
            key={2}
            animate={{x:0 , opacity : 1}}
            transition={{duration:1 , delay:.8}}
            initial={{x : -270, opacity : 0}}
            
            className="hamitem">Blogs <FontAwesomeIcon icon={faCircleArrowRight} style={{fontSize : '2rem'}} />
            </motion.div>

            <motion.hr 
            animate={{x:0 , opacity:1}}
            transition={{duration:1 , delay:.8}}
            initial={{x : -350 , opacity : .3}}
            />

            <motion.div 
            onClick={goProjects}
            key={3}
            animate={{x:0 , opacity:1}}
            transition={{duration:1, delay:1}}
            initial={{x : -270 , opacity:0}}
            exit={{x : "-270" , opacity : 0  }}
            
            className="hamitem">Projects <FontAwesomeIcon icon={faCircleArrowRight} style={{fontSize : '2rem'}} />
            </motion.div>

            <motion.hr 
            animate={{x:0 , opacity:1}}
            transition={{duration:1 , delay:1}}
            initial={{x : -350 , opacity : .3}}
            />



            <div 
           
            className="details">
                <p className="email2">hello@rohit.com</p>
                <p className="number">9821443242</p>
                <motion.button
                animate={{scale : [1,1.05,1,1.05,1]}}
                transition={{duration : 5 , repeat : Infinity}}
                initial={{scale : 1}}
                >Let's start a project!</motion.button>
            </div>

            <div className="iconscontainer">
                <motion.img 
                 animate={{opacity :1}}
                 transition={{duration : 1 , delay :1.4}}
                 initial={{opacity : 0}}
                className="icons" src="/GH.png" alt="social-icon"/>
                <motion.img 
                animate={{opacity :1}}
                transition={{duration : 1 , delay :1.6}}
                initial={{opacity : 0}}
                className="icons" src="/L.png" alt="social-icon"/>
                <motion.img
                animate={{opacity :1}}
                transition={{duration : 1 , delay :1.8}}
                initial={{opacity : 0}}
                className="icons" src="/I.png" alt="social-icon"/>
                <motion.img 
                animate={{opacity :1}}
                transition={{duration : 1 , delay :2}}
                initial={{opacity : 0}}
                className="icons" src="/W.png" alt="social-icon"/>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
