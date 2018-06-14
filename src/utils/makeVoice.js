window.AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

export default function makeVoice(value){  
    var frequency = value;
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = 'square';
    oscillator.frequency.value = frequency;
    
    gainNode.gain.setTargetAtTime(0,audioCtx.currentTime,0.2)
    
    gainNode.gain.setTargetAtTime(1,audioCtx.currentTime+1,0.2)
    // gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    // gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
    // oscillator.start(audioCtx.currentTime);
    // gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 1);
}