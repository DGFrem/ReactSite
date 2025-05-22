

import { Link } from "react-router-dom";
import logoImg from "../icons/logo.svg";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="headerRow">
                    <div className="headerLogo">
                        <img src={logoImg} alt="Логотип" />
                    </div>
                    <div className="headerNav">
                        <ul>
                            <li><Link to="/" className="nav-link">Главная</Link></li>
                            <li><Link to="/gallery" className="nav-link">Галерея</Link></li>
                            <li><Link to="/projects" className="nav-link">Проекты</Link></li>
                            <li><Link to="/sert" className="nav-link">Сертификаты</Link></li>
                            <li><Link to="/contact" className="nav-link">Контакты</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
