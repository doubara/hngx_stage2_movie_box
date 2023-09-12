import Nav from "./Nav";
import HeroComponent from "./HeroComponent";

const Header = (props) => {

    return (
        <header className="header min-h-screen flex flex-col">
            <Nav />
            <HeroComponent />
        </header>
    )
};

export default Header;