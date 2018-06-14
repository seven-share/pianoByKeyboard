<template>
    <div>
        <div>
            <canvas-panel :drawParam='drawParam' :watchPress='watchPress'></canvas-panel>
        </div>
        <div class="letter-list">
            <div v-for="item in letters">
                <key-press :letter='item' :watchPress='watchPress' :pressLetter="pressLetter"></key-press>
            </div>
        </div>
    </div>

</template>

<script>
import keyPress from "@/components/keyPress";
import canvasPanel from "@/components/canvasPanel";
import makeVoice from "@/utils/makeVoice";

export default {
    data() {
        return {
            letters: [
                {
                    show: "A",
                    voice: 261
                },
                {
                    show: "S",
                    voice: 293
                },
                {
                    show: "D",
                    voice: 329
                },
                {
                    show: "F",
                    voice: 349
                },
                {
                    show: "J",
                    voice: 392
                },
                {
                    show: "K",
                    voice: 440
                },
                {
                    show: "L",
                    voice: 493
                }
            ],
            pressLetter: "",
            watchPress: false
        };
    },

    components: {
        keyPress,
        canvasPanel
    },
    created: function() {
        let that = this;
        document.onkeypress = function(event) {
            that.pressLetter = event.key.toUpperCase();
            that.letters.forEach((value)=>{
                if(that.pressLetter==value.show){
                    that.watchPress = !that.watchPress;
                }
            })
            if (that.pressLetter === " ") {
                that.watchPress = !that.watchPress;
                makeVoice(550);
            }
        };
    },
    methods: {},
    computed:{
        drawParam:function(){
            let re;
            this.letters.forEach((value)=>{
                if(this.pressLetter==value.show){
                    re = value.voice-100
                }
            })
            return re;
        }
    }
};
</script>
<style scoped>
.letter-list {
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
</style>