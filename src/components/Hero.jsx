import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";
import { IoLink } from "react-icons/io5";
import { useState, useEffect } from "react";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
})

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const titles = [
        'Mern Stack Developer',
        'Full Stack Developer',
        'Node.Js Developer',
        'Backend Developer',
        'Frontend Developer',
        'React Developer'
    ];

    useEffect(() => {
        const currentTitle = titles[currentIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentTitle.length) {
                    setDisplayText(currentTitle.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % titles.length);
                }
            }
        }, isDeleting ? 100 : 150);

        return () => clearTimeout(timeout);
    }, [displayText, currentIndex, isDeleting, titles]);

    return (
        <div className='border-b border-neutral-900 px pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0)}
                            animate="visible"
                            initial="hidden"
                            className='pb-8 text-6xl font-light tracking-tight lg:mt-16 lg:text-8xl bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500 bg-clip-text text-transparent'
                        >
                            Piyush Gupta
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            animate="visible"
                            initial="hidden"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent min-h-[3rem] flex items-center'>
                            {displayText}
                            <motion.span
                                className="text-pink-300 ml-1"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                |
                            </motion.span>
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            animate="visible"
                            initial="hidden"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"> {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            href="https://drive.google.com/file/d/13auii75aBAL9Ns7huee3D8j6B4axxQJD/view?usp=sharing"
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
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            src={profilepic} alt="Piyush Gupta" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero