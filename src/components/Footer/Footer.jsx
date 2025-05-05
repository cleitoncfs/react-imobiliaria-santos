import {
    FaExternalLinkAlt,
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div id="contato" className="footer-container">
                <div className="footer-section footer-contacts">
                    <h4 className="footer-title">Contato</h4>
                    <ul className="contact-list">
                        <li>
                            <FaMapMarkerAlt />
                            <span>
                                Av. Ayrton Senna, 3000 - Barra da Tijuca, RJ
                            </span>
                        </li>
                        <li>
                            <FaClock />
                            <span>Seg-Sex: 9h-18h | Sáb: 9h-13h</span>
                        </li>
                        <li>
                            <a href="mailto:officebarra@email.com">
                                <FaEnvelope /> Escritório Barra
                            </a>
                        </li>
                        <li>
                            <a href="mailto:officecentro@email.com">
                                <FaEnvelope /> Escritório Centro
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section footer-social">
                    <h4 className="footer-title">Redes Sociais</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a
                            href="https://wa.me/5521999999999"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">
                    © {new Date().getFullYear()} Imobiliária Santos - Todos os
                    direitos reservados
                </p>
                <p className="footer-credits">
                    Desenvolvido por{" "}
                    <a
                        href="https://portfolio-cleiton.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <span>Cleiton Santos</span>
                        <FaExternalLinkAlt className="link-icon" />
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
