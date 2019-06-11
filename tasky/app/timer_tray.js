const electron = require('electron')
const{ Tray, app, Menu } = electron;
class TimerTray extends Tray{
    //want to make sure that you are calling the iconPath to go along with the subclass
    // have to pass mainWindow as arguement because mainWindow isnt defined in this class, defined in index.js 
    // using "this." refers to using any methods in the parent class, in this case "Tray"
    constructor(iconPath, mainWindow){
        super(iconPath);
        
        //when the tray method ".on", when ever a click happens, run the "onClick" method 
        this.mainWindow= mainWindow;
        // setting name that hovers over icon to give icon name 
        this.setToolTip('Timer App');
        // .bind(this) makes sure that you are still maintaining the value of this and not changing it to another class option 
        this.on('click', this.onClick.bind(this));
        this.on('right-click', this.onRightClick.bind(this));
    }
    onClick(event, bounds){

        // getting the bound lines so that they are compatible for both systems 
        const { x, y } = bounds; // for default large window
        const { height, width } = this.mainWindow.getBounds(); // for window for timer app 

        this.mainWindow.getBounds();
        // if tray window is visible, if you click it again, make it disappear 
        if(this.mainWindow.isVisible()){
            this.mainWindow.hide();
        }else{
            this.mainWindow.setBounds({
                //have to cross platform for x & y, not for height n width 
                x: x - width/2,
                y: y,
                height: height,
                width: width,
            });
        this.mainWindow.show();}
    }
    onRightClick(){
        //creating menu template
        const menuConfig = Menu.buildFromTemplate([
            {
                label: 'Quit',
                click: ()=> app.quit()
            }
        ]);

        this.popUpContextMenu(menuConfig)
    }
}

// exporting class so it can be recongnized 
module.exports = TimerTray;