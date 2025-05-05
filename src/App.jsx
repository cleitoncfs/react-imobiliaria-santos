import { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Agents from "./components/Agents/Agents.jsx";
import Location from "./components/Location/Location.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="App">
            <div id="topo"></div>
            <Header />
            <Banner />
            <About />
            <Services />
            <Agents />
            <Location />
            <Footer />
            {showScrollButton && <ScrollToTop />}
        </div>
    );
}

export default App;
