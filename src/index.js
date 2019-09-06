'use strict';

const {app, ipcMain, Menu} = require('electron');

const MenuHandler = require('./menuhandler');

const MainWindow = require('./windows/controllers/mainWin');
const QrCodeWindow = require('./windows/controllers/qrCodeWin');

class EasyDev {
	constructor() {
		this.mainWindow = null;
		this.qrCodeWindow = null;
	}

	init() {
		if (this.checkInstance()) {
			this.initApp();
			this.initIPC();
		} else {
			app.quit();
		}
	}

	checkInstance() {
		return true;
	}

	initApp() {
		app.on('ready', () => {
			this.createMainWindow();
			Menu.setApplicationMenu(MenuHandler.getMainMenu())
		});

		app.on('activate', () => {
			if (this.mainWindow) {
				this.mainWindow.show();
			} else {
				this.createMainWindow();
				this.mainWindow.show();
			}
		});
	};

	initIPC() {
		ipcMain.on('menu', (event, message) => {
			if (event == 'qrCode') {
				if (this.qrCodeWindow) {
					this.qrCodeWindow.show();
				} else {
					this.createQrCodeWindow();
					this.qrCodeWindow.show();
				}
			}
		});
	};

	createMainWindow() {
		this.mainWindow = new MainWindow();
	}

	createQrCodeWindow() {
		this.qrCodeWindow = new QrCodeWindow();
	}

}

new EasyDev().init();
