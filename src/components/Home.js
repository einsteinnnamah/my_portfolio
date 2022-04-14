import React from 'react'
import circle from '../img/circle.png'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {AiOutlineDownload} from 'react-icons/ai'

const Home = () => {
  return (
    <div name='name' className='w-full h-screen'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
            
            <div className='flex justify-center items-center'>
                <div className='text-center sm:text-left'>
                    <p className='font-sans font-semibold'>Hi, my name is</p>
                    <h1 className='text-5xl sm:text-[65px] font-sans font-bold text-[#FF4040]'>Einstein Nnamah</h1>
                    <h2 className='font-sans text-4xl sm:text-4xl font-extrabold'>I'm a UI/UX designer & <br /> Front-end developer</h2>
                    <p className='font-sans pl-3 pr-3 sm:p-0 pt-1'>
                    I'm a UI/UX designer with some knowledge of front-end development with 2+ years of experience working in the IT Solutions industries.
                    Let's create something together.
                    </p>
                    <div className='mt-5 flex items-center justify-center sm:justify-start'>
                        <button className='font-sans group bg-[#FF4040] hover:bg-white hover:text-[#FF4040] hover:border-[#FF4040] duration-300 border-2 hover:border-solid p-5 flex justify-center items-center rounded-lg text-white'> VIEW WORK<span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight /></span></button>
                        <a href='https://drive.google.com/file/d/1g8ZMIc36bd6MMwtj4qOv3EYimKKQAa9B/view?usp=sharing' target='_blank'> <button className='font-sans ml-4 flex items-center justify-center hover:text-[#FF4040]'> <AiOutlineDownload className='mr-2'/>DOWNLOAD CV</button> </a>
                    </div>
                </div>
                
                <div>
                    <img src={circle} className='hidden sm:flex sm:mr-10'></img>
                </div>

            </div>

            
            
        </div>
    </div>
  )
}

export default Home