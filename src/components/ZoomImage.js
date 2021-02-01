import React,{useRef} from 'react'
import Image from "gatsby-image"
import {motion} from "framer-motion"
import {FaTimes} from "react-icons/fa"


const ZoomImage = ({fluid,closeImage}) => {

    const imageRef = useRef()

    
    if(imageRef && imageRef.current){
    }

    return (
        <motion.div onClick={closeImage} className="ImageModal">
            <nav onClick={e=>e.stopPropagation()} className="ImageModal-nav">
            <div className="ImageModal-nav-inner">
                <button onClick={closeImage} className="ImageModal-nav-btn"><FaTimes/></button>
            </div>
            </nav>
            <div onClick={e=>e.stopPropagation()} className="ImageModal-inner">
            <Image ref={imageRef}  fluid={fluid}/>
            </div>
        </motion.div>
    )
}

export default ZoomImage
