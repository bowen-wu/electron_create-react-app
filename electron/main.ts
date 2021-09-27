import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
    // 打开窗口
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,// 打开 node 选项
            contextIsolation: false // v12 中关闭此选项以获得在窗口中使用 node 的能力
        }
    });


    const isDev = process.env.NODE_ENV === 'development';
    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '..')}/build/index.html`);
}

app.whenReady().then(() => {
    createWindow();
});
