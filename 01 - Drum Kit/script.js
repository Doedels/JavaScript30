const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    const key = document.querySelector(`.key[data-key=${e.key}]`);
    if (!audio) return; // stop the function from running
    audio.currentTime = 0;// reset possible running audio
    audio.play();
    key.classList.add("playing");
}

const removeTransition = (e) => {
    if (e.propertyName !== "transform") return; // skip if its not a transform
    e.target.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(`.key`);

keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
    key.addEventListener("click", () => playSound({ key: key.getAttribute("data-key") }))
});

