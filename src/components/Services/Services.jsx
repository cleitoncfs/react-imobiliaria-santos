import "./Services.css";

const Services = () => {
    return (
        <section className="services section bg-blue">
            <div className="container">
                <h3 id="servicos" className="section-title">
                    SERVIÇOS
                </h3>
                <p className="services-text">
                    Contamos com diversos{" "}
                    <span className="highlight-yellow">
                        serviços imobiliários
                    </span>{" "}
                    e também prestamos suporte em cada uma das etapas
                    necessárias de cada serviço. Aqui na
                    <span className="highlight-yellow">
                        {" "}
                        Imobiliária Santos
                    </span>{" "}
                    podemos te ajudar com a seguinte gama de assuntos relativos
                    a imóveis:
                </p>
            </div>
        </section>
    );
};

export default Services;
