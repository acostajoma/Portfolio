const PingButton = ({buttonText, buttonHref}) => {
    return (
        <a href={buttonHref} rel="noopener noreferrer" className="p-4 w-fit bg-gray-800 text-white rounded-xl text-center absolute bottom-2 right-10 inline-flex hover:bg-gray-700">
            {buttonText}
            <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
        </a>
    )
}

export default PingButton