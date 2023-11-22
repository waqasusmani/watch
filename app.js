var hand = document.getElementById("hand")
var rotationDegree = 0
var ticksCounter = document.getElementById("ticks")
var ticks = 0
setInterval(()=>{
    if (rotationDegree == 360) {
        rotationDegree = 0
    }
    rotationDegree += 6
    hand.style.transform = "rotate("+rotationDegree+"deg)"
    ticks+=1
    ticksCounter.innerText = "Ticks: "+ticks
    console.log("Rotation Degree: " + rotationDegree)
},1000)
