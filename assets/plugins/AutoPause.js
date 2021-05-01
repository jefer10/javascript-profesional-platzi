class AutoPause{
    constructor(){
        this.threshold=0.25; //umbral 
        this.hadleIntersection=this.hadleIntersection.bind(this);
        this.hadleVisibilityChange=this.hadleVisibilityChange.bind(this);
    }

    run(MediaPlayer){
        this.MediaPlayer=MediaPlayer;
        const observer=new IntersectionObserver(this.hadleIntersection,{
            threshold: this.threshold
        })
        observer.observe(this.MediaPlayer.media);

        document.addEventListener("visibilitychange", this.hadleVisibilityChange);
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

    hadleVisibilityChange(){
        const isVisible=document.visibilityState === "visible";
        if( isVisible){
            this.MediaPlayer.play();
        }else{
            this.MediaPlayer.pause();
        }
    }


}

export default AutoPause;