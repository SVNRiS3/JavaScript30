function handleKeyEvent(key, audio) {
    key.classList.toggle('playing');
    audio.play();
    setTimeout(() => {
        key.classList.toggle('playing');
    }, 100)
}

document.addEventListener("keydown", (e) => {
    const key = document.querySelector(`.key[data-key="${e.code.charCodeAt(3)}"]`)
    const audio = document.querySelector(`audio[data-key="${e.code.charCodeAt(3)}"]`)
    handleKeyEvent(key, audio);
});