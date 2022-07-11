import { useEffect, useState } from "react"
import Socials from "../elements/Socials"

const TypingEffect = ({textToType}) => {

    const [text, setText] = useState('')
    const [socialsVisible, setSocialsVisible ] = useState(false)

    useEffect( () => {
        typeWriter()
    }, [])


    
    const typeWriter = (i=0, typed='') => {
        if ( i < textToType.length) {
            typed = `${typed}${textToType.charAt(i)}`
            setText(typed)
            return setTimeout(() => typeWriter(++i, typed),110);
        } 
        setSocialsVisible(true)
    }

    return (
        <div className="h-full font-MonoJet container m-auto relative top-[45%]">
            <div className="text-white text-3xl sm:text-4xl whitespace-pre-line mx-7 flex flex-col lg:flex-row lg:justify-between">
                <h1>{text}<span className="animate-ping">_</span></h1>
                <Socials 
                    socialsVisible={socialsVisible}
                />
            </div>
        </div>
    )
}

export default TypingEffect