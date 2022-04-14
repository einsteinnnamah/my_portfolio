import React from 'react'
import circle from '../img/circle.png'
import { FaGithub, FaLinkedin, FaTwitter, FaBehance } from 'react-icons/fa'
const About = () => {
  return (
    <div className='w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
             <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                 <div className='sm:text-right pb-8 pl-4'>
                     <h1 className='text-4xl font-bold inline border-b-4 border-[#FF4040] font-sans'>About me</h1>
                 </div>
             </div>
             <div className='max-w-[1000px] w-full pb-8 pl-4 sm:flex justify-center items-center'>
                 <div className=''>
                    <h1 className='text-[30px] md:text-[40px] font-bold inline font-sans text-[#FF4040]'>Hi, I'm Einstein nice to meet you</h1>
                    <p className='font-sans text-2xl'>I am passionate about building excellent software that improves the lives of those around me. 
                        I specialize in creating userful products that helps the user achieve their endpoint. </p>
                 </div>
                 <div className='hidden sm:flex'>
                    <img src={circle}></img>
                 </div>

                 <div className='sm:hidden flex items-center mt-3'>
                 <a href='https://www.linkedin.com/in/einsteinnnamah' target='_blank'>
                    <FaLinkedin size={30} className='text-[#0A66C2] hover:scale-125 duration-500'/>
                </a>
                    
                <a href='https://twitter.com/chibueze_nnamah' target='_blank'>
                    <FaTwitter size={30} className='text-[#1D9BF0] ml-5 hover:scale-125 duration-500'/>
                </a>

                <a href='https://twitter.com/chibueze_nnamah' target='_blank'>
                    <FaGithub size={30} className='text-[black] ml-5 hover:scale-125 duration-500'/>
                </a>

                <a href='https://www.behance.net/einsteinnnamah' target='_blank'>
                    <FaBehance size={30} className='text-[#0057FF] ml-5 hover:scale-125 duration-500'/>
                </a>

                 </div>
                
             </div>
        </div>
    </div>
  )
}

export default About