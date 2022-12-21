import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import App from "./App";

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

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
