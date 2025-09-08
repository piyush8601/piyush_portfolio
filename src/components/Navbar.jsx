import React from 'react'
import PGlogo from "../assets/pgLogo.png"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          <a href="">
            <img className='mx-2 w-14 bg-none' src={PGlogo} alt="logo" />
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://linkedin.com/in/piyush-gupta-74a86323a" target='_blank'><FaLinkedin /></a>
            <a href="https://github.com/piyush8601" target='_blank'><FaGithub /></a>
            <a href="https://www.instagram.com/_http.piyush.01/" target='_blank'><FaInstagram /></a>
            <a href=""><FaSquareXTwitter /></a>
        </div>
    </nav>
  )
}

export default Navbar