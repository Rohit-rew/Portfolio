import { motion , useScroll } from "framer-motion"
import React from "react"

export default React.memo(function Textshowcase() {

  const {scrollY} = useScroll()
  const [scroll , setscroll] = React.useState()

  React.useEffect(()=>{
    
    scrollY.onChange((val)=>{
      
      setscroll((preval)=>{
        if(preval>70)return
        return val>600? Number(val)-600 : 0
      })
    })

  },[scrollY])


  return (
    <div className="textshowcase">

        <div className="text-container">
          <motion.div 
          style={{width : `${scroll/1.5}vh` }}
          className="strike-through"></motion.div>
            <h1 className="striked">You need a developer</h1>

            <motion.h1
            >You need a high performing developer</motion.h1>
            <p className="p1">A Good developer can change the face of your company. A Good developer can change.</p>

            <p>A Good developer can change the face of your company .A Good developer can change the face of your company <span>A Good developer can change the face of your company</span>can change the face of your company can change the face of your company can change the face of your company. </p>
        </div>

    </div>
  )
})


