import React from 'react'
import { useForm } from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../store/auth/thunks';


export const LoginScreen = () => {


    // Custom hook created to manage forms, the initial values are already there
    // to facilitate the job of the code reviewer
    const [ formValues, hanldeInputChange ] = useForm({
        email: 'pedro@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const dispatch = useDispatch();

    const { checking } = useSelector(state=>state.auth)

    const handleSignIn = async(e)=>{
        
        e.preventDefault();

        dispatch(startLogin(email, password))
    }


    return (
        <div className='h-screen w-screen flex justify-center items-center' >
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

                    <button className={`${ checking && 'btn-disabled'} btn btn-neutral mt-6`}>
                        <div>Sign In</div>
                        <span className={`${ !checking && 'invisible'} loading loading-spinner loading-xs`}></span>
                        
                    </button>
                </form>
            </div>
        </div>
    )
}
