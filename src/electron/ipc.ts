import { app, BrowserWindow, ipcMain } from "electron";

ipcMain.on("toMain", async (e, args) => {
	const command = args[0].command;
	const sender = BrowserWindow.fromWebContents(e.sender);

	switch (command) {
		case "minimize":
			sender?.isMinimized() ? null : sender?.minimize();
			break;
		case "maximize":
			sender?.isMaximized() ? sender?.unmaximize() : sender?.maximize();
			sender?.isMaximized() ? sender?.setMovable(false) : sender?.setMovable(true);
			break;
		case "close":
			app.quit();
			break;
	}
});
