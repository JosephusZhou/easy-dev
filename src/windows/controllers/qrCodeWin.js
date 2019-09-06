'use strict';

const path = require('path');
const { BrowserWindow } = require('electron');

class QrCodeWindow {
  constructor() {
    this.browserWindow = null;
    this.createQrCodeWindow();
  }

  createQrCodeWindow() {
    this.browserWindow = new BrowserWindow({
      width: 1000,
      height: 800,
      resizable: true,
      fullscreenable: false,
      show: false,
      frame: true,
      alwaysOnTop: false,
      webPreferences: {
        nodeIntegration: true
      }
    });

    this.initWindowEvents();

    this.browserWindow.loadURL(`file://${path.join(__dirname, '/../views/qrCodeWin.html')}`);
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
      this.createQrCodeWindow();
    }
    this.browserWindow.show();
    this.isShown = true;
  }

  hide() {
    this.browserWindow.hide();
    this.isShown = false;
  }

}

module.exports = QrCodeWindow;
