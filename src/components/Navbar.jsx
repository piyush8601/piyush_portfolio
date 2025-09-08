import React from 'react'
import PGlogo from "../assets/pgLogo.png"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className='px-5 flex flex-shrink-0 items-center'>
        <a href="" className="group">
          <img className='mx-2 w-14 bg-none transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:brightness-110' src={PGlogo} alt="logo" />
        </a>
      </div>
      <div className="px-12 m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://linkedin.com/in/piyush-gupta-74a86323a" target='_blank' className="text-blue-600 hover:text-blue-500 transition-colors duration-300"><FaLinkedin /></a>
        <a href="https://github.com/piyush8601" target='_blank' className="text-gray-400 hover:text-gray-600 transition-colors duration-300"><FaGithub /></a>
        <a href="https://www.instagram.com/_http.piyush.01/" target='_blank' className="text-pink-500 hover:text-pink-400 transition-colors duration-300"><FaInstagram /></a>
        <a href="" className="text-gray hover:text-gray-700 transition-colors duration-300"><FaSquareXTwitter /></a>
      </div>
    </nav>
  )
}

export default Navbar