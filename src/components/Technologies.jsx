import { RiReactjsLine} from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "framer-motion"

const iconVariants = (duration) =>({
  intial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{duration:duration,
    ease:"linear",
    repeat:Infinity,
    repeatType:"reverse"
    }
  },
  
})

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-4xl text-center">Technologies</motion.h2>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap justify-center gap-4 ietms-center">
        <motion.div variants={iconVariants(2.5)} intial="initial" animate="animate" className="p-4 border-4 rounded-2xl border-neutral-800">
          <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
        </motion.div>
        <motion.div variants={iconVariants(3)} intial="initial" animate="animate" className="p-4 border-4 rounded-2xl border-neutral-800">
          <TbBrandNextjs className="text-7xl"/>
        </motion.div>
        <motion.div variants={iconVariants(5)} intial="initial" animate="animate" className="p-4 border-4 rounded-2xl border-neutral-800">
          <SiMongodb className="text-green-500 text-7xl"/>
        </motion.div>
        <motion.div variants={iconVariants(2)} intial="initial" animate="animate" className="p-4 border-4 rounded-2xl border-neutral-800">
          <DiRedis className="text-red-700 text-7xl"/>
        </motion.div>
        <motion.div variants={iconVariants(6)} intial="initial" animate="animate" className="p-4 border-4 rounded-2xl border-neutral-800">
          <FaNodeJs className="text-green-500 text-7xl"/>
        </motion.div>
        <motion.div variants={iconVariants(4)} intial="initial" animate="animate" className="p-4 border-4 rounded-2xl border-neutral-800">
          <BiLogoPostgresql className="text-7xl text-sky-700"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
