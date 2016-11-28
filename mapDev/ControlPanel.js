class ControlPanel {

    constructor(ctx, list, x, y) {
       this.ctx = ctx; 
       this.list = list || [];
       this.minimized = false;
       this.x = x || 0;
       this.y = y || 0;
       this.offsetx = 0;
       this.offsety = 0;
    }

    draw() {
        var x = this.x;
        var y = this.y;
        var list = this.list;
        var ctx = this.ctx;
        var minimized = this.minimized;
    
        ctx.strokeStyle = "black";

        ctx.beginPath();
        ctx.moveTo(x,y+10);
        ctx.arcTo(x,y,x+10,y,10);
        ctx.lineTo(x+30,y);
        ctx.arcTo(x+40,y,x+40,y+10,10);
        ctx.lineTo(x,y+10);

        ctx.fillRect(x+10,y+4,2,2);
        ctx.fillRect(x+13,y+4,2,2);
        ctx.fillRect(x+16,y+4,2,2);

        ctx.moveTo(x+26,y+5);
        ctx.lineTo(x+34,y+5);

        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(x,y+10+list.length*!minimized*40);
        ctx.lineTo(x+40,y+10+list.length*!minimized*40);
        ctx.arcTo(x+40,y+20+list.length*!minimized*40,x+30,y+20+list.length*!minimized*40,10);
        ctx.lineTo(x+10,y+20+list.length*!minimized*40);
        ctx.arcTo(x,y+20+list.length*!minimized*40,x,y+10+list.length*!minimized*40,10);

        ctx.stroke();

    }

    minimize() {

       this.minimized = !this.minimized; 

    }

    setXY(x,y) {

        console.log("settingX: " + (x-this.offsetx));
        console.log("settingY: " + (y-this.offsety));
        this.x = x - this.offsetx;
        this.y = y - this.offsety;
        console.log("setX: " + this.x);
        console.log("setY: " + this.y);

    }

    contains(x,y) {
        console.log(x);
        console.log(this.x);
        if(this.y < y && this.y+10 > y) {
            if(this.x < x && this.x+20 > x) {
                this.offsetx = x - this.x;
                this.offsety = y - this.y
                return true;
            } else {
                this.minimize();
            }
        }
        return false;
    }

    move(e) {
        
        getMouse(e);
        console.log(mx);
        console.log(my);
        cp.setXY(mx, my);
        invalidate();

    }

}
