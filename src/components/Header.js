import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaBehance } from 'react-icons/fa'

const Header = () => {

const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white'>
        <div className='logo text-[#FF4040] font-semibold text-[18px]'>
            <a href='home.js'>einstein_coder</a> 
        </div>

        {/*menu*/}

        <div className='hidden md:flex'>
            <span className='font-sans hover:text-[#FF4040] duration-300'>About</span>
            <span className='font-sans hover:text-[#FF4040] duration-300'>Skills</span>
            <span className='font-sans hover:text-[#FF4040] duration-300'>Work</span>
            <span className='font-sans hover:text-[#FF4040] duration-300'>Contact</span>
        </div>

        {/*hamburger*/}
        <div onClick={handleClick} className='ham-menu md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*mobile-menu*/}
        <ul className={!nav ? 'hidden' :  'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl hover:text-[#FF4040] font-sans duration-300'>About</li>
            <li className='py-6 text-4xl hover:text-[#FF4040] font-sans duration-300'>Skills</li>
            <li className='py-6 text-4xl hover:text-[#FF4040] font-sans duration-300'>Work</li>
            <li className='py-6 text-4xl hover:text-[#FF4040] font-sans duration-300'>Contact</li>
        </ul>

        {/*Social-icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2] text-white'>
                    <a href='https://www.linkedin.com/in/einsteinnnamah' target='_blank' className='flex justify-evenly items-center w-full font-sans'>
                         Linkedin <FaLinkedin size={30}  className='ml-2'/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1D9BF0] text-white'>
                    <a href='https://twitter.com/chibueze_nnamah' target='_blank' className='flex justify-evenly items-center w-full font-sans'>
                         Twitter <FaTwitter size={30} className='ml-5'/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[black] text-white'>
                    <a href='https://github.com/einsteinnnamah' target='_blank' className='flex justify-evenly items-center w-full font-sans'>
                         Github <FaGithub size={30} className='ml-5'/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0057FF] text-white'>
                    <a href='https://www.behance.net/einsteinnnamah' target='_blank' className='flex justify-evenly items-center w-full font-sans'>
                         Behance <FaBehance size={30} className='ml-5'/>
                    </a>
                </li>

            </ul>
        </div>
       

    </div>
  )
}

export default Header