import React, { useState } from 'react';

const Welcome = () => {
    return (
        <>
            <div className='text-center mb-8'>
                <div className='flex items-center justify-center gap-3 mb-2'>
                    <h1 className='text-3xl font-bold bg-clip-text text-transparnet'>
                        Welcome
                    </h1>
                    <p className='text-slate-400 text-sm'>Your React app is now running!</p>
                </div>
            </div>
        </>
    )
}

export default Welcome