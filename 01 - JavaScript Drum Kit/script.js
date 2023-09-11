const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
    addEventListener("transitionend", () => {
        key.classList.remove('playing');
    })
});

function handleKeyEvent(key, audio) {
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

}

document.addEventListener("keydown", (e) => {
    const key = document.querySelector(`.key[data-key="${e.code.charCodeAt(3)}"]`)
    const audio = document.querySelector(`audio[data-key="${e.code.charCodeAt(3)}"]`)
    if (key && audio)
        handleKeyEvent(key, audio);
});