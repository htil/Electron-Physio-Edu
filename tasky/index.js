const electron = require('electron');
// generates a path
const path = require('path');
const TimerTray = require('./app/timer_tray');
const MainWindow = require('./app/main_window');

const { app, ipcMain} = electron;
let mainWindow;
let tray;

app.on('ready', () => {
    app.dock.hide();
    // creates new browser window... !!! always include the webPreferences & node intergration 
    mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);
    
    //if you click outside the app, the app will go away, only do for status bar apps!!
    
    // checking to see if you are on windows or Mac, if you are on windows, use the windows-icon.png file, if not, use iconTemplate 
    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
    // setting iconPath equal to the path that you are taking, __dirname refering path to tasky, second arguement refering to iconName inside the tasky file 
    // path.join used to take 2 specify paths taken depending on opreating system 
    const iconPath = path.join(__dirname, `/src/assets/${iconName}`);
    tray = new TimerTray(iconPath, mainWindow); 
});

// showing time left in the status bar 
ipcMain.on('update-timer', (event, timeLeft) =>{
    tray.setTitle(timeLeft);
});