import { app } from "electron";
import { createMainWindow } from "./browserWindows";

import "./ipc";

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
	mainWindow = createMainWindow();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow();
	}
});
