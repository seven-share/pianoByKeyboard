<template>
    <div class="canvasPanel">
        <canvas ref="cas" width='800px' height='400px'></canvas>
    </div>
</template>

<script>
import drawClass from "@/utils/draw";
export default {
    data() {
        return {};
    },
    props: {
        drawParam: {
            type: Number,
            default: 500
        },
        watchPress: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        watchPress: function() {
            this.draw.drawFresh(this.drawParam)
        }
    },
    components: {},
    mounted:function(){
        this.drawCans()
    },
    methods: {
        drawCans: function() {
            let getCanvas = this.$refs.cas;
            // console.log(this.drawParam);
            this.draw = new drawClass(getCanvas);
            // console.log(getCanvas);
        }
    }
};
</script>
<style scoped>
.canvasPanel {
    box-sizing: border-box;
    width: 800px;
    height: 400px;
    margin: 30px auto;
    border-radius: 20px;
    box-shadow: 0px 0px 10px #888888;
}
</style>