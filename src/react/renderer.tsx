import React from "react";
import ReactDOM from "react-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
    const router = createHashRouter([
        {
            path: "/login",
            element: (
                <>
                    <GlobalStyle />
                    <h1>Login</h1>
                </>
            ),
        },
        {
            path: "/main",
            element: (
                <>
                    <GlobalStyle />
                    <App />
                </>
            ),
        },
        {
            path: "*",
            element: (
                <>
                    <GlobalStyle />
                    <h1>404</h1>
                </>
            ),
        },
    ]);

    ReactDOM.render(<RouterProvider router={router} />, rootElement);
} else {
    console.error("Root element not found.");
}
