import {useScroll} from "framer-motion"
import React from "react"

export default function Videosection() {
    const {scrollY}  = useScroll()

    React.useEffect(()=>{
        scrollY.onChange((val)=>{
            const video = document.getElementById('video')
    
            if(val >3200 ){
                video.play()
            }
        })


    })



  return (
    <div className="videosection">

        <div className="sub-container">

            <div className="videocontainer">
                <video id="video" src="/video/1.mp4" autoPlay loop muted={true} playsInline={true} />

            </div>

            <div className="textcontainer">

            <p className="minitext">WEBDESIGN</p>
            <h2>Customs websites, high performing results and easy to manage backoffice</h2>
            <p>No more same templates <br/> I can craft your graphic identity, edit a corporate brand book, create your entire webdesign and develop your website :<span> I ensure your website looks good and unique in its own way.</span></p>

            </div>

        </div>

    </div>
  )
}
