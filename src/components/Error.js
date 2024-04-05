import React from "react";
import "./Error.css";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div id="error-container">
            <div className="error-content">
                <h1>Error</h1>
                <p>Oops! Something went wrong.</p>
                <div className="error-details">
                    <h2>{err.status}</h2>
                    <p>{err.statusText}</p>
                </div>
                <button id="error-button" onClick={() => window.history.back()}>Go Back</button>
            </div>
        </div>
    );
};

export default Error;
