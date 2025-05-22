import logoImg from "../icons/logo.svg";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="foot">


            <div className="textLeft">
                <div className="adress">
                    <p> Наш адрес:</p>
                    <p> Россия, Москва, 29 Старомонетный пер. </p>
                    <p className="number"> Наш номер:</p>
                    <p> +7 999-999-99-99 </p>
                    <img src={logoImg} alt="Логотип" className="logoFooter" />
                    <div className="footerNav">
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
            


        </footer>
    )


}




export default Footer;