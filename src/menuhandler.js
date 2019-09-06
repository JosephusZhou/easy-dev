'use strict';

const {app, Menu, ipcMain} = require('electron');

function getMainMenu()
{
	if (process.platform === 'darwin') {
		const template = [
			{
				label: "EasyDev",
				submenu: [
					{label: "关于", selector: "orderFrontStandardAboutPanel:"},
					{type: "separator"},
					{
						label: "退出", accelerator: "Command+Q", click: function () {
							app.quit();
						}
					}
				]
			},
			{
				label: "编辑",
				submenu: [
					{label: "撤消", accelerator: "CmdOrCtrl+Z", selector: "undo:"},
					{label: "重做", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:"},
					{type: "separator"},
					{label: "剪切", accelerator: "CmdOrCtrl+X", selector: "cut:"},
					{label: "复制", accelerator: "CmdOrCtrl+C", selector: "copy:"},
					{label: "粘贴", accelerator: "CmdOrCtrl+V", selector: "paste:"},
					{label: "全选", accelerator: "CmdOrCtrl+A", selector: "selectAll:"}
				]
			},
			{
				label: "更多功能",
				submenu: [
					{
						label: "解析二维码", click: function() {
							ipcMain.emit("menu", "qrCode");
						}
					},
				]
			}
		];
		return Menu.buildFromTemplate(template)
	} else {
		return null
	}
}

module.exports = {
	getMainMenu
};
