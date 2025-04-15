var isDone = false
function addAudio() {
    console.log("boas")
    if (!isDone)
    {
        isDone = true
        document.getElementById("audio").play()
    }
}

let createRayId = () => {
    let d = document.getElementById("rayid")
    console.log(d)
    if (d !== null) {
        d.textContent = "Ray ID: " + crypto.randomUUID().split("-").filter((val,index)=>{return index < 4}).join("")
    }
}
createRayId()