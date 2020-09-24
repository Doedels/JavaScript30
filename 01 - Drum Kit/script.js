window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    const key = document.querySelector(`.key[data-key=${e.key}]`);
    if (!audio) return; // stop the function from running
    audio.currentTime = 0 // reset possible running audio
    audio.play();
    console.log(key);
});