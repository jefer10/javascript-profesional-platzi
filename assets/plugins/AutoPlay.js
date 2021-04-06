
function AutoPlay(){
}

AutoPlay.prototype.run=function(MediaPlayer){
    //MediaPlayer.mute();
    MediaPlayer.play();
}

export default AutoPlay;