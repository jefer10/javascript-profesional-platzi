class AutoPause{
    constructor(){
        this.threshold=0.25;
        this.hadleIntersection=this.hadleIntersection.bind(this);
    }

    run(MediaPlayer){
        this.MediaPlayer=MediaPlayer;
        const observer=new IntersectionObserver(this.hadleIntersection,{
            threshold: this.threshold
        })
        observer.observe(this.MediaPlayer.media);
    }

    hadleIntersection(entries){
        const entry= entries[0];
        const isVisible= entry.intersectionRatio >= this.threshold;

        if(isVisible){
            this.MediaPlayer.play();
        }else{
            this.MediaPlayer.pause();
        }
        
        console.log(entry);
    }
}

export default AutoPause;