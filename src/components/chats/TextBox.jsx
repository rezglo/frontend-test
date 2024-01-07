import React from 'react'

export const TextBox = () => {
    return (
        <form className='flex flex-col flex-1 m-4 mb-24' >
            <textarea 
                style={{ resize: 'none' }} 
                rows={4} 
                className="textarea textarea-bordered w-full" 
                placeholder="Write a message..." 
            />
            <button className='btn btn-primary mt-4 self-end w-32'>
                <p>Send</p>
                <i >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </i>
            </button>
        </form>
    )
}
