import React from 'react'
import { useRouter } from 'next/router';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { GrServicePlay } from 'react-icons/gr';
import { AiOutlineTeam } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import Link from 'next/link';

function MobileNavBar() {
    const router = useRouter();
    return (
        <div className='flex sm:hidden justify-around p-3 fixed bottom-0 left-0 w-[100%] items-center mainBgColor shadow-md'>
            <Link href='/'>
                <span
                    className={` ${router.pathname == '/' ? 'active' : ''} nav group`}>
                    <AiOutlineHome className='text-2xl group-hover:animate-bounce' />
                    <h1 className='group-active:scale-110'>Home</h1>
                </span>
            </Link>

            <Link href='/services'>
                <span className={`${router.pathname == '/services' ? 'active' : ''} nav group`}>
                    <GrServicePlay className='text-2xl group-hover:animate-bounce text-white' />
                    <h1 className='group-active:scale-110'>Services</h1>
                </span>
            </Link>


            <Link href='/account'>
                <span className={`${router.pathname == '/account' ? 'active' : ''} nav group`}>
                    <AiOutlineUser className='text-xl group-hover:animate-bounce' />
                    <h1 className='group-active:scale-110'>Account</h1>
                </span>
            </Link>
        </div>
    )
}

export default MobileNavBar
