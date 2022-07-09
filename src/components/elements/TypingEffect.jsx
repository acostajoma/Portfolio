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
        <h2 className="text-white text-lg">{text}<span className="animate-ping">_</span></h2>
    )
}

export default TypingEffect