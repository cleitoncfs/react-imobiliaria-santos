import { useEffect, useState } from "react";

const SmoothScrollWrapper = ({ children }) => {
    const [hash, setHash] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setHash(window.location.hash);
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 0);
            }
        }
    }, [hash]);

    return children;
};

export default SmoothScrollWrapper;
