
function AutoPlay(){
}

AutoPlay.prototype.run=function(MediaPlayer){
    console.log(MediaPlayer.muted);

    if(!MediaPlayer.muted){
        MediaPlayer.muted = true;
    }
    
    MediaPlayer.play();
    
};

export default AutoPlay;