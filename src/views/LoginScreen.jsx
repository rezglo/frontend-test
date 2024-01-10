import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../store/auth/thunks';


export const LoginScreen = () => {


    // Custom hook created to manage forms, the initial values are already there
    // to facilitate the job of the code reviewer
    const [formValues, hanldeInputChange] = useForm({
        email: 'pedro@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth)

    const [triedToLogIn, setTriedToLogIn] = useState(false)

    const handleSignIn = async (e) => {

        e.preventDefault();

        await dispatch(startLogin(email, password))
        setTriedToLogIn(true)
        
    }


    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center' >
            {triedToLogIn && !auth.uid &&
                <div role="alert" className="alert alert-error flex justify-center rounded-none absolute top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Wrong Email or Password.</span>
                </div>
            }
            <div className='border p-8 lg:p-16 border-neutral rounded-md m-4'>
                <form className='flex flex-col' onSubmit={handleSignIn}>

                    <label className="form-control  lg:w-96 max-w-xs ">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type your email"
                            className="input input-bordered w-full max-w-xs"
                            name='email'
                            value={email}
                            onChange={hanldeInputChange}
                        />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input
                            type="password"
                            placeholder="Type your password"
                            className="input input-bordered w-full max-w-xs"
                            name='password'
                            value={password}
                            onChange={hanldeInputChange}
                        />
                    </label>

                    <button className={`${auth.checking && 'btn-disabled'} btn btn-neutral mt-6`}>
                        <div>Sign In</div>
                        <span className={`${!auth.checking && 'invisible'} loading loading-spinner loading-xs`}></span>

                    </button>
                </form>
            </div>

        </div>
    )
}
