import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <SmoothScrollWrapper>
            <App />
        </SmoothScrollWrapper>
    </React.StrictMode>
);
