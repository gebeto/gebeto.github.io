import { G } from './app';

export default class CanvasDrawer {
    currentText: string = 'JailGeek';
    ctx: CanvasRenderingContext2D;
    background: HTMLImageElement;
    canvas: HTMLCanvasElement;
    lineSpacing: number;
    fontFamily: string;
    linesCount: number;
    top: number = 280;
    fontSize: number;

    constructor(canvas, bgUrl) {
        this.background = this.loadImage(bgUrl);
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.fontSize = this.lineSpacing = 120;
        this.currentText = 'JailGeek';
        this.fontFamily = 'font';
        this.linesCount = 1;
        this.top = 280;

        this.setFillStyle();
        // this.refreshTitle();
    }

    saveImage(): void {
        console.log(this.canvas);
        var imgg = <HTMLImageElement>document.createElement('img');
        imgg.src = this.canvas.toDataURL();
        G.img.src = this.canvas.toDataURL();
        document.body.appendChild(imgg);
    }


    loadImage(iurl: string): HTMLImageElement {
        var bg = new Image();
        bg.addEventListener('load', function() {
            this.ctx.drawImage(bg, 0, 0);
        }.bind(this));
        bg.src = iurl;
        return bg;
    }

    setFillStyle(): void {
        var gradient = this.ctx.createLinearGradient(this.canvas.width/2, this.canvas.height/3, this.canvas.width/2, this.canvas.height - this.canvas.height/3);
        // gradient.addColorStop(0.0, "#FCFDFF");
        // gradient.addColorStop(1.0, "#e5c3bd");
        gradient.addColorStop(0.0, "#fff");
        // gradient.addColorStop(1.0, "#e5c3bd");
        gradient.addColorStop(1.0, "#fff");
        this.ctx.fillStyle = gradient;
        this.ctx.font = this.fontSize + 'px ' + this.fontFamily;
        this.ctx.textAlign = 'center';
    }

    refreshTitle(text: string = this.currentText): void {
        // this.currentText = (text ? text : this.currentText);
        this.ctx.drawImage(this.background, 0, 0);
        var lines = this.currentText.split('\n');
        // console.log(lines);
        lines.map(function(line, i) {
            var top = this.top + this.fontSize / 3;
            this.ctx.fillText(line, 425, top + this.lineSpacing * i);
        }.bind(this));
        G.img.src = this.canvas.toDataURL();
    }

    moveOneLineUp(): void {
        this.top -= this.fontSize / 2;
        this.refreshTitle();
    }

    moveOneLineDown(): void {
        this.top += this.fontSize / 2;
        this.refreshTitle();
    }

    moveToCenter(): void {
        this.top = this.canvas.height / 2 - this.fontSize / 2 * (this.currentText.split('\n').length - 1);
        this.refreshTitle();
    }

    changeFontSize(size): void {
        // this.fontSize = this.lineSpacing = size;
        this.fontSize = size;
        this.ctx.font = this.fontSize + 'px ' + this.fontFamily;
        this.refreshTitle();
    }

    changeLineSpacing(size): void {
        this.lineSpacing = size;
        this.refreshTitle();
    }
}