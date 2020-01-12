const  electron = require('electron');
const  url = require('url');
const  path = require('path');
const nativeImage = require('electron').nativeImage;

const {app, BrowserWindow} = electron;

let mainWindow;
var image = nativeImage.createFromPath(__dirname + '/app/assets/logo.png'); 

app.on('ready', function(){
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'app' , 'index.html'),
        protocol: 'file',
        slashes: true,
        icon: path.join(__dirname, 'app' , 'build', 'icon.icns')
    }))
    // mainWindow.webContents.openDevTools()
    // mainWindow.setIcon(path.join(__dirname, 'app', 'assets', 'github-logo.png'));
    
    
    
})


