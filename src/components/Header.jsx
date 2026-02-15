
import '../styles/main.css';

function Header() {

    return (
        <header id="header">
            <div className="container navbar">
                <a href="#hero" className="logo">Raghavendra Rao</a>

                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <div className="nav-container">
                    <ul className="nav-menu">
                        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
                        <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                        <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
                        <li className="nav-item"><a href="#education" className="nav-link">Education</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
