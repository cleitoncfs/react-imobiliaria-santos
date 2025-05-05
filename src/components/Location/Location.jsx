import "./Location.css";

const Location = () => {
    return (
        <section className="location section">
            <div className="container">
                <h3 className="section-title">ONDE ESTAMOS</h3>

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7346.254844548052!2d-43.364712467659004!3d-22.98234139602229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2ed54ec2e1%3A0x4431d262cad1d163!2sAv.%20Ayrton%20Senna%2C%203000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-904!5e0!3m2!1spt-BR!2sbr!4v1642532754862!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Localização da Imobiliária Santos"
                    ></iframe>
                </div>

                <div className="location-info">
                    <h4>Horário de Funcionamento</h4>
                    <p>Segunda a Sexta: 9h às 18h</p>
                    <p>Sábado: 9h às 13h</p>
                </div>
            </div>
        </section>
    );
};

export default Location;
