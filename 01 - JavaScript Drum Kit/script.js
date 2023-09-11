keys = document.querySelectorAll(".key");
audios = document.querySelectorAll("audio");

function handleKeyEvent(key) {
    key.classList.toggle('playing');
    soundToPlay = key.querySelector('.sound').textContent;
    let audio = new Audio('sounds/' + soundToPlay + '.wav')
    audio.play()
    setTimeout(() => {
        key.classList.toggle('playing');
    }, 100)
}

document.addEventListener("keyup", (e) => {
    [...keys].every((key) => {
        if (+key.dataset.key === e.code.charCodeAt(3)) {
            handleKeyEvent(key);
            return false;
        }
        return true;
    });
});