var isDone = false
function addAudio() {
    console.log("boas")
    if (!isDone)
    {
        document.getElementsByTagName("body")[0].innerHTML = `
            <audio loop autoplay>
                <source src="wetfart.mp3" type="application/ogg">
            </audio>
            ${document.getElementsByTagName("body")[0].innerHTML}
            `
        isDone = true
    }
    
    //document.getElementById("p").innerHTML = isDone ? "ola" : "xau"
    //isDone = !isDone
}