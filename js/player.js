class Player {
    constructor(x,y,w,h,s,i){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.index = i;
        this.sprite = s;
    }

    display(){
        fill(this.sprite);
        rectMode(CENTER)
        rect(this.x, this.y, this.w, this.h)
    }

}