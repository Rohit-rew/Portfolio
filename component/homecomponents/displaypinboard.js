import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import react from "react";

export default function Displaypinboard() {

    const { scrollY } = useScroll()
    const [scroll , setscroll] = react.useState()

    react.useEffect(()=>{
        return scrollY.onChange((val)=>{
            console.log(val/12)
            setscroll(val/12)
        })
    })

  return (
    <div className="displaypins">
      <div className="pinboardcontainer">
        <div className="pinboardstart red"></div>

        <motion.div 
        style={{marginTop : 60-(scroll)}}
        className="pinboard tablet-start green"></motion.div>


        <motion.div 
        style={{marginTop : 120-(scroll*2)}}
        className="pinboard mar-60xx blue"></motion.div>


        <motion.div 
        style={{marginTop : 180-(scroll*3)}}
        className="pinboard mar-60xxx yellow"></motion.div>


        <motion.div 
        style={{marginTop : 120-(scroll*2)}}
        className="pinboard mar-60xx black"></motion.div>

        <motion.div 
        style={{marginTop : 60-(scroll)}}
        className="pinboard tablet-end orange"></motion.div>

        <div className="pinboardend purple"></div>
      </div>
    </div>
  );
}
