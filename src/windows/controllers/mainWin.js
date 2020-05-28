'use strict';

const path = require('path');
const { BrowserWindow } = require('electron');

const AppConfig = require('../../configuration');

class MainWindow {
  constructor() {
    this.browserWindow = null;
    this.createSettingsWindow();
  }

  createSettingsWindow() {
    this.browserWindow = new BrowserWindow({
      width: 1000,
      height: 2000,
      minWidth: 1000,
      minHeight: 2000,
      resizable: true,
      fullscreenable: false,
      show: false,
      frame: true,
      alwaysOnTop: false,
      webPreferences: {
        enableRemoteModule: true,
        nodeIntegration: true
      }
    });

    this.initWindowEvents();

    this.browserWindow.loadURL(`file://${path.join(__dirname, '/../views/mainWin.html')}`);
  }

  initWindowEvents() {
    this.browserWindow.on('close', () => {
      this.browserWindow = null;
      this.isShown = false;
    });
    this.browserWindow.once('ready-to-show', () => {
      this.browserWindow.show();
      //this.browserWindow.webContents.openDevTools({mode:'undocked'});
    });
  }

  show() {
    if (!this.browserWindow) {
      this.createSettingsWindow();
    }
    this.browserWindow.show();
    this.isShown = true;
  }

  hide() {
    this.browserWindow.hide();
    this.isShown = false;
  }

}

module.exports = MainWindow;
