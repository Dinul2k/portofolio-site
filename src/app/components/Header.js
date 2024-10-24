export default function Header() {
    return (
        <nav id="desktop-nav" >
            {/* Logo Section */}
            <div className="logo">
                Dinul Kithsara
            </div>

            {/* Navigation Links */}
            <div>
                <ul  className="nav-links">
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#experience">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        
    );
}
