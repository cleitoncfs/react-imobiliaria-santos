import { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import logo from "../../assets/img/logo.png";
import "./Header.css";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header id="topo" className="header">
            <div className="header-container">
                <a href="#topo">
                    <img src={logo} alt="Imobiliária Santos" className="logo" />
                </a>

                {isMobile ? (
                    <>
                        <button className="menu-toggle" onClick={toggleMenu}>
                            {menuOpen ? (
                                <BiX size={24} />
                            ) : (
                                <BiMenu size={24} />
                            )}
                        </button>
                        <nav className={`nav-mobile ${menuOpen ? "open" : ""}`}>
                            <a href="#topo" onClick={closeMenu}>
                                Início
                            </a>
                            <a href="#sobre" onClick={closeMenu}>
                                Sobre
                            </a>
                            <a href="#localizacao" onClick={closeMenu}>
                                Localização
                            </a>
                            <a href="#contato" onClick={closeMenu}>
                                Contato
                            </a>
                        </nav>
                    </>
                ) : (
                    <nav className="nav-desktop">
                        <a href="#topo">Início</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#localizacao">Localização</a>
                        <a href="#contato">Contato</a>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
