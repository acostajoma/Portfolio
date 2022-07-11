import TypingEffect from "../elements/TypingEffect"

const Header = () => {
    return (
        <header className="h-screen min-h-[35rem] bg-gray-800">
            <TypingEffect 
                textToType={'Jose Martin Acosta Rodriguez\nDeveloper'}
            />
        </header>
    )
}

export default Header