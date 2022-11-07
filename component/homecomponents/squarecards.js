/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import {motion , useScroll , useInView} from "framer-motion"
import React, { useState } from "react"


export default function Squarecards() {
  const [scroll , setscroll] = useState('')
  const [scrollprogress , setscrollprogress] = React.useState('')
  const ref = React.useRef(null)
  const {scrollY,scrollYProgress} = useScroll({
    target : ref,
    offset: ["start end", "end end"]
  })


  React.useEffect(()=>{
    setscrollprogress(scrollYProgress.current)
    scrollY.onChange(val=>{
      setscroll(val)
    })

  },[scroll])



  return (
    <div className="squarecards" >

        <div className="textarea">
            <p className="minitext">DEVELOPMENT</p>
            <h2>Your brand identity at the core of my approach sq</h2>
            <p>A 360 degree management of your project! <br/> I can craft your graphic identity, edit a corporate brand book, create your entire webdesign and develop your website :<span> I ensure the contunity of your brand identity and support you during each key step of your project.</span></p>
        </div>

        <div className="cardarea">

            <img  
            ref={ref}
            className="cardmainimage" src="/squarecards/1.png" />

            <motion.img 
            style={{right : `${Number(-100) + Number((scrollprogress*100))}px` }}
            className="absolute abs1" src="/squarecards/2.png" />

            <motion.img 
            style={{left : `${Number(-100) + Number((scrollprogress*100))}px` }}
            className="absolute abs2" src="/squarecards/3.png" />

            <motion.img 
            style={{right : `${Number(-100) + Number((scrollprogress*100))}px` }}
            className="absolute abs3" src="/squarecards/4.png" />

            <motion.img 
            style={{left : `${Number(-100) + Number((scrollprogress*100))}px` }}
            className="absolute abs4" src="/squarecards/5.png" />

        </div>

    </div>
  )
}
