import Nav from "./Nav";
import HeroComponent from "./HeroComponent";

const Header = (props) => {

    return (
        <header className="header min-h-screen flex flex-col bg-center">
            <Nav />
            <HeroComponent />
        </header>
    )
};

export default Header;