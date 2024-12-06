function addAudio() {
    document.getElementsByTagName("body")[0].innerHTML = `
        <audio loop autoplay>
            <source src="wetfart.mp3" type="audio/filetype">
        </audio>
        ${document.getElementsByTagName("body")[0].innerHTML}
        `
}