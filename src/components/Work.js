import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className='text-4xl  font-sans font-bold inline border-b-4 border-[#FF4040]'>Works</p>
                <p className='font-sans py-4'>Check out some of my recent works</p>
            </div>

            <div className='gird sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-[#040c15] group container rounded-md flex justify-center items-center mx-auto content_div'>
                    <div className=''>
                        <span>
                        
                        </span>
                            <div>
                                <a href='/'>
                                    <button></button>
                                </a>
                                <a href='/'>
                                    <button></button>
                                </a>
                            </div>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Work