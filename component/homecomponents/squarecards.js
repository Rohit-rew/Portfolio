/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import {motion , useScroll} from "framer-motion"
import React, { useState } from "react"


export default React.memo(function Squarecards() {
  const [scroll , setscroll] = useState('')
  const {scrollY} = useScroll()
  // console.log(scroll/5)

  React.useEffect(()=>{

    scrollY.onChange((val)=>{
      // console.log(val)
      setscroll(()=>{

        return val>2900 ? 2900 : val<2400 ? 2400 : val
      })
    })
    
  },[scrollY])
    


  return (
    <div className="squarecards">

        <div className="textarea">
            <p className="minitext">DEVELOPMENT</p>
            <h2>Your brand identity at the core of my approach sq</h2>
            <p>A 360 degree management of your project! <br/> I can craft your graphic identity, edit a corporate brand book, create your entire webdesign and develop your website :<span> I ensure the contunity of your brand identity and support you during each key step of your project.</span></p>
        </div>

        <div className="cardarea">

            <img className="cardmainimage" src="/squarecards/1.png" />
            <motion.img 
            style={{right : `${scroll/5 > 400 ?  50+Number((scroll/5)-600) : '50' }px`}}
            className="absolute abs1" src="/squarecards/2.png" />


            <motion.img 
            style={{right : `${scroll/5 > 400 ?  600-Number((scroll/5)-400) : '500' }px`}}
            className="absolute abs2" src="/squarecards/3.png" />

            <motion.img 
            style={{right : `${scroll/5 > 400 ?  50+Number((scroll/5)-600) : '50' }px`}}
            className="absolute abs3" src="/squarecards/4.png" />


            <motion.img 
            style={{right : `${scroll/5 > 400 ?  600-Number((scroll/5)-400) : '500' }px`}}
            className="absolute abs4" src="/squarecards/5.png" />

        </div>

    </div>
  )
})
