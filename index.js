var isDone = false
function addAudio() {
    console.log("boas")
    if (!isDone)
    {
        isDone = true
        //document.getElementById("audio").play()
        removeBodyAndAddConnections()
    }
}

function removeBodyAndAddConnections() {
    let body = document.getElementById("body")
    body.innerHTML = `
    <iframe style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0;" title="Conexões" src="https://mvg.lol/joguinhos/"></iframe>
    `
}