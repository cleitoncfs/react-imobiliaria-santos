import bannerImage from "../../assets/img/banner.jpg";
import "./Banner.css";

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-container">
                <img
                    src={bannerImage}
                    alt="Anúncio de casa"
                    className="banner-image"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default Banner;
