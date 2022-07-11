import { useEffect, useState } from "react"

const TypingEffect = ({textToType}) => {

    const [text, setText] = useState('')

    useEffect( () => {
        typeWriter()
    }, [])


    
    const typeWriter = (i=0, typed='') => {
        if ( i < textToType.length) {
            typed = `${typed}${textToType.charAt(i)}`
            setText(typed)
            setTimeout(() => typeWriter(++i, typed),120);
        } 
    }

    return (
        // <div className="h-full flex items-center">
        <div className="h-full grid grid-rows-6">
            {/* <h1 className="text-white text-3xl whitespace-pre-line">{text}<span className="animate-ping">_</span></h1> */}
            <h1 className="text-white text-3xl whitespace-pre-line row-start-3">{text}<span className="animate-ping">_</span></h1>
        </div>
    )
}

export default TypingEffect