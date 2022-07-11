const PrettyLink = ({text, linkref}) => {
    return (
        <a className="py-2 mx-7 w-fit relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white after:scale-x-0 after:origin-right after:transition-transform ease-linear after:duration-300 hover:after:scale-x-100 hover:after:origin-left" href={linkref}>{text}</a>
    )
}

export default PrettyLink