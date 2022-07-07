import { useEffect, useState } from "react"

const TypingEffect = ({textToType}) => {

    const [text, setText] = useState('')
    const [showPipe, setShowPipe] = useState(true)

    useEffect( () => {
        typeWriter()
    }, [])

    // useEffect(() => {

    // }, [text])
    
    const typeWriter = (i=0, typed='') => {
        if ( i < textToType.length) {
            typed = `${typed}${textToType.charAt(i)}`
            setText(typed)
            i++
            setTimeout(() => typeWriter(i, typed),120);
        } else {
            blinkingPipe()
        }
    }

    const blinkingPipe = () => {}


    return (
        <h2 className="text-white text-lg">{text}<span className={ showPipe ? '' : 'hidden'}>|</span></h2>
    )
}

export default TypingEffect