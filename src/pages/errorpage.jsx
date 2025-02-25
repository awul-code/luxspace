import React from 'react'

const Errorpage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen text-center flex-col align-middle gap-3'>
            <h1 className='text-9xl font-bold text-red-500 tracking-widest'>404</h1>
            <p className='text-2xl font-light text-slate-500'>Your page not found</p>
        </div>
    )
}

export default Errorpage