var hand = document.getElementById("hand")
var rotationDegree = 0
var ticksCounter = document.getElementById("ticks")
var ticks = 0
var tickSoundElem = document.getElementById("tick-sound")
var timerInterval
var timerState = false
var startStopButton = document.getElementById("start-stop-button")
startStopButton.innerText = "Start"
var countdownNumbers = Object.values(document.getElementsByClassName("countdown-numbers"))
console.log(typeof (countdownNumbers))

function timerStartStop() {
    if (!timerState) {
        var countdownNumberIndex = 0
        var countDownInterval
        countdownNumbers[countdownNumberIndex].classList.toggle("countdown-animator-class")
        countDownInterval = setInterval(() => {
            if (countdownNumberIndex!=0) {
                countdownNumbers[countdownNumberIndex].classList.toggle("countdown-animator-class")
            }
            countdownNumberIndex += 1
            if (countdownNumberIndex == countdownNumbers.length) {
                clearInterval(countDownInterval)
            }
        }, 1000);

        setTimeout(() => {
            timerInterval = setInterval(() => {
                if (rotationDegree == 360) {
                    rotationDegree = 0
                }
                rotationDegree += 6
                hand.style.transform = "rotate(" + rotationDegree + "deg)"
                ticks += 1
                ticksCounter.innerText = "Ticks: " + ticks
                console.log("Rotation Degree: " + rotationDegree)
                tickSoundElem.play()
            }, 1000)
        }, 3000)

        startStopButton.innerText = "Stop"
        timerState = true
    }
    else {
        timerState = false
        startStopButton.innerText = "Start"
        clearInterval(timerInterval)
        rotationDegree = 0
        hand.style.transform = "rotate(" + rotationDegree + "deg)"
        ticks = 0
        ticksCounter.innerText = "Ticks: " + ticks
        console.log("Rotation Degree: " + rotationDegree)
        countdownNumbers.forEach((elem)=>{
            elem.classList.toggle("countdown-animator-class")
        })
    }
}

