class draw {
    constructor(cansEle, drawParam) {
        this.ctx = cansEle.getContext("2d");
        this.drawParam = drawParam;
        this.height = [];
        this.smallHeight=[];
        this.timer;
        for (let i = 0; i < 43; i++) {
            let height = Math.floor(this.drawParam - Math.random() * 100)
            this.height.push(height)
            this.smallHeight.push(height)
        }
    };
    drawOne(left, height, smallHeight) {
        var grd = this.ctx.createLinearGradient(0, 0, 0, 350);
        grd.addColorStop(0, "red");
        grd.addColorStop(0.7, "yellow");
        grd.addColorStop(1, "green");
        this.ctx.fillStyle = grd;
        this.ctx.fillRect(left, 400, 15, -height);
        this.ctx.fillStyle = "#950000";
        this.ctx.fillRect(left, 400 - smallHeight - 40, 15, 10);
    };
    drawAll() {
        this.ctx.clearRect(0, 0, 800, 400)
        for (let i = 0; i < 43; i++) {
            let left = 15 + i * 18
            this.drawOne(left, this.height[i], this.smallHeight[i])
        }
    };
    heightChange() {
        this.height.forEach((value, index) => {
            this.height[index] = value - 4;
            this.smallHeight[index] = this.smallHeight[index] - 3
            if (this.smallHeight[index] < this.height[index]) {
                this.smallHeight[index] = this.height[index]
            }
            if (this.smallHeight[index] < -40) {
                this.smallHeight[index] = -50;
            }
        })
    };
    isAllHeightZero() {
        // smallHeight.forEach((value) => {
        //     if (value > -40) {
        //         bool = false
        //     }
        // })
        for(let i=0;i<this.smallHeight.length;i++){
            if(this.smallHeight[i]>-40){
                return false
            }
        }
        return true
    }
    drawFresh() {
        cancelAnimationFrame(this.timer)
        let that = this;
        this.timer=requestAnimationFrame(function fn(){
            console.log(that.isAllHeightZero())
            if(!that.isAllHeightZero()){
                // console.log(smallHeight)
                that.heightChange();
                that.drawAll();
                that.timer=requestAnimationFrame(fn)
            }else{
                // console.log(smallHeight)
                cancelAnimationFrame(that.timer)
            }
        })
    }
}

export default draw