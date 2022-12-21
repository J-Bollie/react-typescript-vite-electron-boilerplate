import { BrowserWindow } from "electron";
import { isDev } from "./utils";

export const createMainWindow = () => {
	const window = new BrowserWindow({
		width: 1300,
		minWidth: 1350,
		height: 750,
		minHeight: 800,
		show: false,
		// frame: false,
		// transparent: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	window.menuBarVisible = false;

	window
		.loadURL(isDev() ? `http://localhost:9000/#/main` : `file://${__dirname}/index.html#/main`)
		.then(() => {
			window.show();
		})
		.catch((err: string) => {
			console.log(err);
		});

	return window;
};
