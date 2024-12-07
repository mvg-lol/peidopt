var isDone = false
function addAudio() {
    if (!isDone)
    {    document.getElementsByTagName("body")[0].innerHTML = `
            <audio loop autoplay>
                <source src="wetfart.mp3" type="application/ogg">
            </audio>
            ${document.getElementsByTagName("body")[0].innerHTML}
            `
            isDone = true
    }
    
}