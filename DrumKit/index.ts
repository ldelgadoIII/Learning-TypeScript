const keys = document.querySelectorAll(".key");

function playsound(e):void {
    const audio:any = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key:any = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing")
}

function removeTransition():void {
    this.classList.remove("playing")
}

keys.forEach( key => { key.addEventListener("transitionend", removeTransition)})

window.addEventListener("keydown", playsound)