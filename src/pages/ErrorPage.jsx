import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='h-screen py-24 bg-gray-800 flex'>
            <div className='px-6 container m-auto text-white text-xl'>
                <h2 className='text-4xl md:text-6xl mb-4 font-MonoJet'>404: Page Not Found</h2>
                <p className='mb-4'>The page you are looking for doesn't exist</p>
                <Link to="/"><p className='inline-block bg-sky-600 rounded-xl p-2 font-bold hover:bg-sky-400'>Back to Home</p></Link>
            </div>
        </div>
    )
}

export default ErrorPage