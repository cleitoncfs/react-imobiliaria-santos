import "./About.css";

const About = () => {
    return (
        <section className="about section">
            <div className="container">
                <h1 id="sobre" className="about-title">
                    Encontre o imóvel dos seus sonhos
                </h1>
                <h2 className="about-subtitle">
                    A imobiliária que te ajuda no sonho do seu imóvel
                </h2>
                <p className="about-text">
                    <span className="highlight-blue">Há 10 anos</span> no ramo
                    temos conquistado a confiança de
                    <span className="highlight-blue"> inúmeros clientes</span>.
                    Isso porque procuramos sempre as melhores condições tanto
                    para quem quer comprar, como para quem quer vender ou
                    alugar. Oferecemos um
                    <span className="highlight-blue">
                        serviço de qualidade
                    </span>{" "}
                    servindo como ponte entre as partes interessadas.
                </p>
            </div>
        </section>
    );
};

export default About;
