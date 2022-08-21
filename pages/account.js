import { Avatar } from '@mui/material';
import React, { useMemo } from 'react'
import Header from '../components/Header';
import Cart from '../components/Cart';
import LoginForm from '../components/LoginForm';
import SingUpForm from '../components/SignUpForm';
import { useCustomHook } from '../service/Context';
import apiRequest from '../Server/ApiRequest';


function Account({ Membership, Parternship }) {
    const { cartToggle, loginToggle, signUpToggle, user, setUser, setUserIcon } = useCustomHook();

    return (
        <div className='h-fit min-h-[100vh] bg-gray-50'>
            <Header />
            <section>
                {cartToggle && <Cart />}
                {signUpToggle && <SingUpForm />}
                {loginToggle && <LoginForm />}
            </section>
            <div className='w-[90%] sm:w-[60%] flex flex-col justify-center items-center m-auto h-fit min-h-[90vh] bg-gray-50 py-10'>
                <div className='w-[70%] h-[60vh] m-auto pt-20 p-7 bg-white flex flex-col items-center justify-between rounded-lg shadow-sm'>
                    <div className='w-[250px] h-[250px] bg-slate-100 flex justify-center items-center text-3xl rounded-full'>
                        {user.companyName[0]}
                    </div>
                    <h1 className='text-3xl'>{user.companyName}</h1>
                    <p
                        onClick={() => {
                            setUser({ companyName: '', email: '', phoneNumber: 610000000 })
                            setUserIcon('')
                        }}
                        className='text-blue-500 self-end cursor-pointer'
                    >
                        log-out
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Account

