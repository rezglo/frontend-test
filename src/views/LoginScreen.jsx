import React from 'react'


export const LoginScreen = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center' >
            <div className='border p-16 border-neutral rounded-md'>
                <form className='flex flex-col '>

                    <label className="form-control w-96  max-w-xs">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="text" placeholder="Type your email" className="input input-bordered w-full max-w-xs" />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input type="password" placeholder="Type your password" className="input input-bordered w-full max-w-xs" />
                    </label>

                    <button className='btn btn-neutral mt-6'>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}
