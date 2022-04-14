import React from 'react'

const Skills = () => {
  return (
    <div name='skills' >
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
           <div className=''>
               <p className='text-4xl font-sans font-bold inline border-b-4 border-[#FF4040]'>Skills</p>
               <p className='font-sans py-4'>This are the skills i have worked with</p>
           </div>
           <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
               <div className='border border-[#FF4040] hover:scale-110 duration-500 p-5'>
                <img  className='w-20 mx-auto' src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/html.png?raw=true'></img>
                <p className='font-sans' mt-2>HTML</p>
               </div>
               <div className='border border-[#FF4040] hover:scale-110 duration-500 p-5'>
                <img  className='w-20 mx-auto' src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/css.png?raw=true'></img>
                <p className='font-sans mt-2'>CSS</p>
               </div>
               <div className='border border-[#FF4040] hover:scale-110 duration-500 p-5'>
                <img  className='w-20 mx-auto' src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/javascript.png?raw=true'></img>
                <p className='font-sans mt-2'>JAVASCIRPT</p>
               </div>
               <div className='border border-[#FF4040] hover:scale-110 duration-500 p-5'>
                <img  className='w-20 mx-auto' src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/react.png?raw=true'></img>
                <p className='font-sans mt-2'>REACT</p>
               </div>
               <div className='border border-[#FF4040] hover:scale-110 duration-500 p-5'>
                <img  className='w-20 mx-auto ' src='https://www.picng.com/upload/github/png_github_64039.png'></img>
                <p className='font-sans mt-2'>GITHUB</p>
               </div>
               <div className='border border-[#FF4040] hover:scale-110 duration-500 p-5'>
                <img  className='w-20 mx-auto' src='https://cdn-icons-png.flaticon.com/512/5968/5968705.png'></img>
                <p className='font-sans mt-2'>FIGMA</p>
               </div>
               <div className='border border-[#FF4040] hover:scale-110 duration-500 p-5'>
                <img  className='w-20 mx-auto' src='https://cdn.worldvectorlogo.com/logos/miro-2.svg'></img>
                <p className='font-sans mt-2'>MIRO</p>
               </div>
               <div className=' border border-[#FF4040] hover:scale-110 duration-500 p-5'>
                <img  className='w-20 mx-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png'></img>
                <p className='font-sans mt-2'>ADOBE XD</p>
               </div>
           </div>
       </div>
    </div>
  )
}

export default Skills