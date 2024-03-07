window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(e);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add("playing");

    if(!audio){
        return;  
    } 
    audio.currentTime = 0;

    audio.play()

});


const keys = document.querySelectorAll(".key");

keys.forEach(function(key){
    key.addEventListener('transitionend', remove);
})
function remove(e){
    if(e.propertyName !== "transform") return;

    this.classList.remove("playing");
}