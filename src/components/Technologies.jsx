import React from 'react'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiMysql, SiNestjs, SiRedis, SiKeycloak, SiDocker } from 'react-icons/si'
import { BiLogoPostgresql } from "react-icons/bi"
import { FaGithub } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc"
import { TbBrandNextjs } from 'react-icons/tb';
import { motion } from "framer-motion";

const iconVariants = (duration) =>({
    initial : {y: -10},
    animate : {
        y : [10, -10],
        transition : {
            duration : duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
         whileInView={{opacity: 1, y : 0}}
         initial={{opacity : 0, y : -100}}
         transition={{duration : 0.5}}
         className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
         whileInView={{opacity: 1, x : 0}}
         initial={{opacity: 0, x : -100}}
         transition={{duration: 1.5}}
         
         className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-2 border-neutral-800 p-3'>
                <FaNodeJs className='text-5xl text-green-500'/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-2 border-neutral-800 p-3'>
                <SiNestjs className='text-5xl text-red-500'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-2 border-neutral-800 p-3'>
                <SiExpress className='text-5xl text-white'/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-2 border-neutral-800 p-3'>
                <BiLogoPostgresql className='text-5xl text-blue-200'/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-2 border-neutral-800 p-3'>
                <SiRedis className='text-5xl text-red-500'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(4)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-2 border-neutral-800 p-3'>
                <SiMongodb className='text-5xl text-green-500'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-2 border-neutral-800 p-3'>
                <SiMysql className='text-5xl text-zinc-100'/>
            </motion.div>
            <motion.div
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-2 border-neutral-800 p-3'>
                <SiKeycloak className='text-5xl text-blue-500'/>
            </motion.div>
            <motion.div
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-2 border-neutral-800 p-3'>
                <RiReactjsLine className='text-5xl text-cyan-400'/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-2 border-neutral-800 p-3'>
                <TbBrandNextjs className='text-5xl '/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-2 border-neutral-800 p-3'>
                <FcLinux className='text-5xl '/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-2 border-neutral-800 p-3'>
                <FaGithub className='text-5xl '/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-2 border-neutral-800 p-3'>
                <SiDocker className='text-5xl text-blue-400'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies