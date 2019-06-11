const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');
const _ = require('lodash');
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () =>{
    mainWindow = new BrowserWindow ({webPreferences: {nodeIntegration: true},
        height: 600,
        width: 800,
        webPreferences: {backgroundThrottling: false}
    });
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});

//listening for event being sent over from redux side of code 
//using promises let us know when the state of the conversion is complete
//creates a promise for every video that will be put inside the app
// putall all the promises into a array 

ipcMain.on('videos:added', (event, videos) => {
    const promises = _.map(videos, video => {
    return new Promise((resolve, reject) =>{
        ffmpeg.ffprobe(video.path, (err,metadata) => {
            video.duration = metadata.format.duration;
            video.format = 'avi';
            resolve(video);
        });
    });
});
// wraps all promises into One big promise
// This promise below will on execute when all promises have been forfilled
Promise.all(promises)
    .then((results) => {
        mainWindow.webContents.send('metadata:complete', results);
    });
});

ipcMain.on('conversion:start', (event, videos) => {
    const video = videos[0];
    const outputDirectroy = video.path.split(video.name)[0];
    console.log(path);
    // ffmpeg(video.path)
    //     .output()
});
