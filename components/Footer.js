import React from 'react'

function Footer() {
    return (
        <div className='min-h-[40vh] mainBgColor text-white grid grid-cols-1 sm:grid-cols-4  gap-y-5  mt-14 p-10 pb-32 sm:pb-10'>
            <div className='w-[100%] sm:p-5'>
                <h1 className='text-2xl mb-5'>About</h1>
                <p className='text-gray-300'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusamus consequatur adipisci odio, aut quia alias atque
                    repellat, deserunt molestiae ipsum, nam ut omnis vitae quo!
                    Consequuntur hic ipsam earum rem.
                </p>
            </div>
            <div className='lg:p-5'>
                <h1 className='text-2xl mb-5'>Our Services</h1>
                <p className='text-gray-300'>Social-Media Marketing</p>
                <p className='text-gray-300'>Radio Marketing</p>
                <p className='text-gray-300'>Tv Marketing</p>
                <p className='text-gray-300'>Email Marketing</p>
                <p className='text-gray-300'>News-paper Marketing</p>
            </div>
            <div className=' lg:p-5'>
                <h1 className='text-2xl mb-5'>Contact-us</h1>
                <p className='text-gray-300'>FaceBook</p>
                <p className='text-gray-300'>Instragram</p>
                <p className='text-gray-300'>Twiter</p>
                <p className='text-gray-300'>YouTube</p>
            </div>
        </div>
    )
}

export default Footer
