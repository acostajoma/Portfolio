import NavigationBar from "../elements/NavigationBar"
import TypingEffect from "../elements/TypingEffect"

const Header = () => {
    return (
        <header className="h-screen bg-gray-800">
            <NavigationBar />
            <TypingEffect 
                textToType={`Jose Martin Acosta Rodriguez Developer`}
            />
        </header>
    )
}

export default Header