import React, { FC } from 'react'
import { motion, MotionStyle, Variants } from 'framer-motion'

type Props = {
  delay?: number
  [key: string]: any
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  in: {
    opacity: 1,
    y: 0,
    position: 'relative',
  },
  out: {
    opacity: 0,
    y: 100,
  },
}

const pageStyle: MotionStyle = {
  position: 'absolute',
}

const FadeInTransition: FC<Props> = (props) => {
  const { children, delay = 0, className, onClick } = props

  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{
        ease: 'easeIn',
        duration: 0.3,
        delay,
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

export default FadeInTransition
