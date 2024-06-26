import {HERO_CONTENT} from "../constants";
import profilepic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";
import { IoLink } from "react-icons/io5";

const container = (delay) => ({
    hidden : {x : -100, opacity : 0},
    visible : {x : 0, opacity : 1, transition : {duration: 0.5, delay: delay}},
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 px pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                     variants={container(0)}
                     animate="visible"
                     initial="hidden"
                     className='pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
                    >
                        Piyush Gupta
                    </motion.h1>
                    <motion.span 
                     variants={container(0.5)}
                     animate="visible"
                     initial="hidden"
                     className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                        Mern Stack Developer
                    </motion.span>
                    <motion.p 
                     variants={container(1)}
                     animate="visible"
                     initial="hidden"
                     className="my-2 max-w-xl py-6 font-light tracking-tighter"> {HERO_CONTENT} 
                    </motion.p>
                    <motion.a 
                     href="https://drive.google.com/file/d/12W2HCo0I16_a6V7ogzKYo6k9RrcBGQlw/view?usp=sharing"
                     target='_blank'
                     variants={container(1.1)}
                     animate="visible"
                     initial="hidden"
                     className="py-2 px-7 text-xl font-light border-2 border-neutral-800 rounded-full flex items-center gap-1">Resume <IoLink />
                     </motion.a>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                     initial={{x : 100, opacity : 0}}
                     animate={{x : 0, opacity:1}}
                     transition={{duration: 1, delay: 0.2}}
                     src={profilepic} alt="Kevin Rush" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero