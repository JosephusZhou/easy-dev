'use strict';

const {app, ipcMain} = require('electron');

const MainWindow = require('./windows/controllers/mainWin');

class EasyDev {
    constructor() {
        this.mainWindow = null;
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
        ipcMain.on('log', (event, message) => {
            console.log(message);
        });
    };

    createMainWindow() {
        this.mainWindow = new MainWindow();
    }

}

new EasyDev().init();
