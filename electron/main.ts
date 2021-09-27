import { app, BrowserWindow } from 'electron';

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

    win.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
    createWindow();
});
