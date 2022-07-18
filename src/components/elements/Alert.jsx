const Alert = ({message, error}) => {
    
    
    return (
    <div className="flex items-center mb-4">
        {error ? 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        }
        <p className={`font-bold ${error ? 'text-red-500' : 'text-green-500'}`}>{message}</p>
    </div>
    )
}

export default Alert