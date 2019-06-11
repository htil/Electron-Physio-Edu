const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow{
    constructor(url){
        // paste all that stuff into super arguement because for this app, we want to hard code that stuff 
        super({webPreferences: {nodeIntegration: true},
            height: 500,
            width: 300,
            // to get ride of task bar on top of timer 
            frame: false,
            // dont allow resize to window 
            resizable: false,
            //dont show app icon in bottom
            show: false,
            // allows all resources to keep being given to app and dont slow down app

            // command below doesnt work 
            //webPreferences: {backgroundThrottling: false }
        });
        this.loadURL(url);
        this.on('blur', this.onBlur.bind(this));
    }
    onBlur(){
        this.hide();
    };
}
module.exports = MainWindow; 