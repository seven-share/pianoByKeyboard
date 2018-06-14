class draw {
    constructor(cansEle) {
        this.ctx = cansEle.getContext("2d");
        // this.drawParam = drawParam;
        this.height = [];
        this.smallHeight=[];
        this.timer;
        for (let i = 0; i < 43; i++) {
            this.smallHeight.push(0)           
        }
    };

    // 初始化高度
    initHeight(drawParam){
        this.height=[];
        for (let i = 0; i < 43; i++) {
            let height = Math.floor(drawParam - Math.random() * 100)
            this.height.push(height)           
        }
    }
    // 画单个音频条
    drawOne(left, height, smallHeight) {
        var grd = this.ctx.createLinearGradient(0, 0, 0, 350);
        grd.addColorStop(0, "red");
        grd.addColorStop(0.7, "yellow");
        grd.addColorStop(1, "green");
        this.ctx.fillStyle = grd;
        this.ctx.fillRect(left, 400, 15, -height);
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(left, 400 - smallHeight - 40, 15, 10);
    };
    // 画所有音频条
    drawAll() {
        this.ctx.clearRect(0, 0, 800, 400)
        for (let i = 0; i < 43; i++) {
            let left = 15 + i * 18
            this.drawOne(left, this.height[i], this.smallHeight[i])
        }
    };

    改变音频条和顶部小方块的高度
    heightChange() {
        this.height.forEach((value, index) => {
            this.height[index] = value - 8;
            this.smallHeight[index] = this.smallHeight[index] - 5
            if (this.smallHeight[index] < this.height[index]) {
                this.smallHeight[index] = this.height[index]
            }
            if (this.smallHeight[index] < -50) {
                this.smallHeight[index] = -50;
            }
        })
    };
    判断小方块是否全部已经出canvas
    isAllHeightZero() {
        // smallHeight.forEach((value) => {
        //     if (value > -40) {
        //         bool = false
        //     }
        // })
        for(let i=0;i<this.smallHeight.length;i++){
            if(this.smallHeight[i]!=-50){
                return false
            }
        }
        return true
    }
    // 刷新重画
    drawFresh(drawParam) {
        cancelAnimationFrame(this.timer)
        this.initHeight(drawParam)
        console.log(this.height)
        let that = this;
        this.timer=requestAnimationFrame(function fn(){
            that.heightChange();
            // console.log(that.smallHeight)
            if(!that.isAllHeightZero()){
                // console.log(smallHeight)
                
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