import { motion , useScroll } from "framer-motion"
import React from "react"

export default React.memo(function Textshowcase() {

  const ref = React.useRef(null)

  const {scrollY ,scrollYProgress} = useScroll({
    target : ref,
    offset: ["start end", "end center"]
  })
  const [scroll , setscroll] = React.useState()
  const [scrollprogress , setscrollprogress] = React.useState('')

  React.useEffect(()=>{
    setscrollprogress(scrollYProgress.current)

    scrollY.onChange((val)=>{
      setscroll(val)
    })

  },[scroll])


  return (
    <div className="textshowcase">

        <div className="text-container" ref={ref}>
          <motion.div 
          style={{width : `${scrollprogress*300}px` }}
          className="strike-through"></motion.div>
            <h1 className="striked">You need a developer</h1>

            <motion.h1
            style={{opacity : `${scrollprogress || 0}`}}
            >You need a high performing developer</motion.h1>


            <p className="p1">A Good developer can change the face of your company. A Good developer can change.</p>

            <p>A Good developer can change the face of your company .A Good developer can change the face of your company <span>A Good developer can change the face of your company</span>can change the face of your company can change the face of your company can change the face of your company. </p>
        </div>

    </div>
  )
})


