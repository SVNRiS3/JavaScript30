function handleKeyEvent(set) {
    const key = set[0];
    const audio = set[1];
    key.classList.toggle('playing');
    audio.play();
    setTimeout(() => {
        key.classList.toggle('playing');
    }, 100)
}

document.addEventListener("keydown", (e) => {
    const set = document.querySelectorAll(`[data-key="${e.code.charCodeAt(3)}"]`)
    handleKeyEvent(set);
});