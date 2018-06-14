<template>
    <div>
        <div class="letter" :class="activeKey">{{letter.show}}</div>
    </div>
</template>

<script>
import makeVoice from "@/utils/makeVoice";
export default {
    data() {
        return {
            activeKey: ""
        };
    },
    props: {
        letter: {
            type: Object,
            default: function() {
                return {
                    show: "A",
                    voice: 65
                };
            }
        },
        pressLetter: {
            type: String,
            default: "A"
        },
        watchPress: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        watchPress: function() {
            // console.log(this.pressLetter);
            var letter = this.pressLetter;
            this.pressOnKey(letter);
        }
    },
    methods: {
        pressOnKey: function(letter) {
            if (this.pressLetter === this.letter.show) {
                // alert(this.letter);
                this.twinkelKey();
            }
        },
        twinkelKey: function() {
            this.activeKey = "active-key";
            let twinkel = setTimeout(() => {
                this.activeKey = "";
            }, 300);
            makeVoice(this.letter.voice);
        }
    }
};
</script>
<style scoped>
.letter {
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    font-size: 25px;
    line-height: 50px;
    text-align: center;
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 2px 2px 3px #888888;
}
.active-key {
    background-color: #d4d7d8;
}
</style>