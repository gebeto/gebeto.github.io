import CanvasDrawer from './CanvasDrawer';

export const G = {
    canvas: <HTMLCanvasElement>document.getElementById('main-canvas'),
    img: <HTMLImageElement>document.getElementById('main-img'),
    textInput: <HTMLInputElement>document.getElementById('text-input'),
    downloadButton: <HTMLButtonElement>document.getElementById('download-button'),
}


const drawer = new CanvasDrawer(G.canvas, 'assets/background.png');

(<any>window).WebFontConfig = {
    custom: {
        families: ['font'],
        urls: ['assets/fonts.css']
    },
    active: function() {
        drawer.refreshTitle();
        G.textInput.addEventListener('keyup', function (e) {
            drawer.moveToCenter();
            drawer.refreshTitle((<HTMLInputElement>this).value);
        });
        G.downloadButton.addEventListener('click', function(e) {
            drawer.saveImage();
        });
        document.getElementById('fontsize-input').addEventListener('input', function() {
            drawer.changeFontSize((<HTMLInputElement>this).value);
        });
        document.getElementById('linespacing-input').addEventListener('input', function() {
            drawer.changeLineSpacing((<HTMLInputElement>this).value);
        });
        document.getElementById('move-up').addEventListener('click', function() {
            drawer.moveOneLineUp();
        });
        document.getElementById('move-down').addEventListener('click', function() {
            drawer.moveOneLineDown();
        });
    }
};



