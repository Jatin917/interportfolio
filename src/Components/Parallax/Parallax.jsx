import React, { useRef } from 'react'
import './parallax.scss'
import {motion, useInView, useScroll, useTransform} from 'framer-motion';




const Parallax = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {margin:"-100px"});
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    });
    const yText = useTransform(scrollYProgress,[0,1],["0%","500%"]);
    const yBg = useTransform(scrollYProgress,[0,1],["0%","80%"]);
  return (
    <div ref={ref} className='parallax' >
        <motion.h1 style={{y:yText}}>What I Made 🛠️🔨</motion.h1>
        <motion.div className='mountains'></motion.div>
        <motion.div style={{y:yBg}} className='planets'></motion.div>
        <motion.div style={{x:yBg}} className='stars'></motion.div>
    </div>
  )
}

export default Parallax